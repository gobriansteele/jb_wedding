import { createClient } from "@supabase/supabase-js"
import type { ApiError, Session } from "@supabase/supabase-js"

if (!process.env.SUPABASE_URL) {
  throw new Error("supabase url is required")
}
if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error("supabase url is required")
}

export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export { ApiError, Session }
