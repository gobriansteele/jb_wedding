import { createClient } from "@supabase/supabase-js"

declare global {
  interface Window {
    env: {
      SUPABASE_URL: string
      SUPABASE_ANON_KEY: string
    }
  }
}

if (!window.env.SUPABASE_URL) {
  throw new Error("supabase url is required")
}
if (!window.env.SUPABASE_ANON_KEY) {
  throw new Error("supabase url is required")
}

export const supabaseClient = createClient(
  window.env.SUPABASE_URL,
  window.env.SUPABASE_ANON_KEY
)
