import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, name, healthConditions, interestedFeatures } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const supabase = await createClient()

    console.log("[v0] Attempting to insert into waitlist table")

    const { data, error } = await supabase
      .from("waitlist")
      .insert({
        email,
        name: name || null,
        health_conditions: healthConditions || [],
        interested_features: interestedFeatures || [],
      })
      .select()
      .single()

    if (error) {
      console.log("[v0] Database error:", error)

      if (error.code === "23505") {
        // Unique constraint violation
        return NextResponse.json({ error: "Email already registered" }, { status: 409 })
      }

      if (error.message?.includes("table") && error.message?.includes("does not exist")) {
        console.error("[v0] Waitlist table does not exist. Please run the database migration script.")
        return NextResponse.json(
          {
            error: "Database not properly configured. Please contact support.",
          },
          { status: 500 },
        )
      }

      throw error
    }

    console.log("[v0] Successfully inserted waitlist entry:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json(
      {
        error: "Failed to join waitlist. Please try again later.",
      },
      { status: 500 },
    )
  }
}
