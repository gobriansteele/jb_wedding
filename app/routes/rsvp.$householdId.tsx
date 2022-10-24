import type { LoaderFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { authenticator } from "~/auth.server"
import { useParams, useLoaderData } from "@remix-run/react"

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)
  console.log("im a user babay", user)
  if (!user) {
    return redirect("/login")
  }
  return user
}

export default function Rsvp() {
  const params = useParams()
  const session = useLoaderData()
  console.log(session)
  const id = params.householdId

  return <div>RSVP time for {id}</div>
}
