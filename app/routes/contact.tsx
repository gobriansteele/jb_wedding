import { useEffect, useRef } from "react"
import type { ActionFunction, LinksFunction } from "@remix-run/node"
import { Form, useActionData, useTransition, Link } from "@remix-run/react"
import stylesUrl from "../styles/contact.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  for (var val of formData.entries()) {
    console.log(val)
  }
  return { message: "You suck", error: "nope" }
}

export default function ContactRoute() {
  const inputRef = useRef<HTMLInputElement>(null)
  const successRef = useRef<HTMLHeadingElement>(null)
  const mounted = useRef<boolean>(false)

  const actionData = useActionData()
  console.log(actionData)
  const transition = useTransition()
  const state: "idle" | "success" | "error" | "submitting" =
    transition.submission
      ? "submitting"
      : actionData?.subscription
      ? "success"
      : actionData?.error
      ? "error"
      : "idle"

  useEffect(() => {
    if (state === "error") {
      inputRef.current?.focus()
    }

    if (state === "idle" && mounted.current) {
      inputRef.current?.select()
    }

    if (state === "success") {
      successRef.current?.focus()
    }

    mounted.current = true
  }, [state])

  return (
    <main>
      <Form replace method="post" aria-hidden={state === "success"}>
        <h2>Get in touch</h2>
        <p>Questions? Don't hesitate to reach out</p>
        <fieldset>
          <label id="name">Name:</label>
          <input
            aria-labelledby="Name"
            aria-describedby="error-message"
            ref={inputRef}
            type="input"
            name="name"
            placeholder="super wedding guest"
          />
          <label id="message">Message</label>
          <textarea
            aria-labelledby="message"
            aria-describedby="error-message"
            name="message"
            placeholder="What say you?"
          />
          <button type="submit">
            {state === "submitting" ? "Contacting..." : "Contact"}
          </button>
        </fieldset>

        <p id="error-message">
          {state === "error" ? actionData.message : <>&nbsp;</>}
        </p>
      </Form>

      <div aria-hidden={state !== "success"}>
        <h2 ref={successRef} tabIndex={-1}>
          You're subscribed!
        </h2>
        <p>Please check your email to confirm your subscription.</p>
        <Link to=".">Start over</Link>
      </div>
    </main>
  )
}
