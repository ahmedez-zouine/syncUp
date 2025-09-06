import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() 
{
  const cookieStore = await cookies()

  console.log(
    "==> All env vars:",
    Object.keys(process.env).filter((key) => key.includes("SUPABASE")),
  )
  console.log("==> NEXT_PUBLIC_SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ Found" : "✗ Missing")
  console.log(
    "==> NEXT_PUBLIC_SUPABASE_ANON_KEY:",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✓ Found" : "✗ Missing",
  )
  console.log("==> SUPABASE_URL:", process.env.SUPABASE_URL ? "✓ Found" : "✗ Missing")
  console.log("==> SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY ? "✓ Found" : "✗ Missing")

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

  console.log("==> Final URL:", supabaseUrl ? "✓ Found" : "✗ Missing")
  console.log("==> Final Key:", supabaseAnonKey ? "✓ Found" : "✗ Missing")

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(`Missing Supabase credentials: URL=${!!supabaseUrl}, Key=${!!supabaseAnonKey}`)
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, 
  {
    cookies: 
    {
      getAll() 
      {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) 
      {
        try 
        {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } 
        catch 
        {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}