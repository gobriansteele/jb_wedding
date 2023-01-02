import React, { useEffect, useState } from "react"
import { Form } from "@remix-run/react"
import { json, redirect } from "@remix-run/node"
import type { ActionArgs, LoaderFunction } from "@remix-run/node"
import { supabaseAdmin } from "~/supabase.server"
import { authenticator, magicLinkStrategy, sessionStorage } from "~/auth.server"

interface LoaderData {
  error: { message: string } | null
}

export async function action(args: ActionArgs) {
  const form = await args.request.clone().formData()
  const email = form?.get("email")
  if (typeof email !== "string")
    return json({ error: { message: "Email must be a string" } }, 400)
  if (!email) return json({ error: { message: "Email is required" } }, 400)
  const { error } = await supabaseAdmin.auth.api.sendMagicLinkEmail(email, {
    redirectTo: `${process.env.SERVER_URL}/login/callback`,
  })

  if (error) return json({ error: { message: error.message } }, error.status)
  return redirect("/login")
}

export const loader: LoaderFunction = async ({ request }) => {
  await magicLinkStrategy.checkSession(request, {
    successRedirect: "/admin",
  })

  const session = await sessionStorage.getSession(request.headers.get("Cookie"))

  const error = session.get(
    authenticator.sessionErrorKey
  ) as LoaderData["error"]

  return json<LoaderData>({ error })
}

export default function LoginRoute() {
  const [email, setEmail] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  useEffect(() => {
    const getUser = async () => {}
    getUser()
  })

  return (
    <Form method="post">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="Enter you email"
        value={email}
        onChange={handleChange}
      />
    </Form>
  )
}
