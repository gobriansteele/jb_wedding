import { useEffect } from "react"
import type { ActionFunction } from "@remix-run/node"
import { authenticator } from "~/auth.server"
import { useSubmit } from "@remix-run/react"
import { supabaseClient } from "~/supabase.client"

export const action: ActionFunction = async ({ request }) => {
  await authenticator.authenticate("sb-magic-link", request, {
    successRedirect: "/admin",
    failureRedirect: "/login",
  })
}

export default function LoginCallback() {
  const submit = useSubmit()

  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          const formData = new FormData()
          formData.append("session", JSON.stringify(session))

          submit(formData, { method: "post" })
        }
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [submit])

  return null
}