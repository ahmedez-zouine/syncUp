"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

const healthConditions = [
  "PCOS (Polycystic Ovary Syndrome)",
  "Endometriosis",
  "Thyroid disorders",
  "ADHD",
  "Autism",
  "Anxiety/Depression",
  "Irregular cycles",
  "Other",
]

const features = [
  "Personalized cycle tracking",
  "Symptom pattern analysis",
  "Mental health integration",
  "Cultural/religious considerations",
  "Medication reminders",
  "Healthcare provider sharing",
  "Community support",
  "Educational resources",
]

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          healthConditions: selectedConditions,
          interestedFeatures: selectedFeatures,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist")
      }

      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-rose-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-rose-900 mb-2">Welcome to SyncUp!</h3>
          <p className="text-rose-700 text-balance">
            Thank you for joining our waitlist. We'll notify you as soon as SyncUp is ready to support your health
            journey.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm border-rose-200">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-rose-900 font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label htmlFor="name" className="text-rose-900 font-medium">
                Name (Optional)
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 border-rose-200 focus:border-rose-400 focus:ring-rose-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <Label className="text-rose-900 font-medium mb-3 block">Health considerations (Optional)</Label>
              <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                {healthConditions.map((condition) => (
                  <div key={condition} className="flex items-center space-x-2">
                    <Checkbox
                      id={condition}
                      checked={selectedConditions.includes(condition)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedConditions([...selectedConditions, condition])
                        } else {
                          setSelectedConditions(selectedConditions.filter((c) => c !== condition))
                        }
                      }}
                      className="border-rose-300 data-[state=checked]:bg-rose-500"
                    />
                    <Label htmlFor={condition} className="text-sm text-rose-800 cursor-pointer">
                      {condition}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-rose-900 font-medium mb-3 block">Features you're most interested in</Label>
              <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={selectedFeatures.includes(feature)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedFeatures([...selectedFeatures, feature])
                        } else {
                          setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
                        }
                      }}
                      className="border-rose-300 data-[state=checked]:bg-rose-500"
                    />
                    <Label htmlFor={feature} className="text-sm text-rose-800 cursor-pointer">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-md border border-red-200">{error}</p>}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining waitlist...
              </>
            ) : (
              "Join the Waitlist"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
