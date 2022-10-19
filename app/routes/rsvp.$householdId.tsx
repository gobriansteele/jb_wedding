import { useParams } from "@remix-run/react"

export default function Rsvp() {
  const params = useParams()
  const id = params.householdId

  return <div>RSVP time for {id}</div>
}
