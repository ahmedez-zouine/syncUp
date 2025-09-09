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
  "IBS (Irritable Bowel Syndrome)",
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
  const [customCondition, setCustomCondition] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Prepare final conditions list
      let finalConditions = [...selectedConditions]
      
      // If "Other" is selected and custom condition is provided, replace "Other" with the custom condition
      if (selectedConditions.includes("Other") && customCondition.trim()) {
        finalConditions = finalConditions.filter(c => c !== "Other")
        finalConditions.push(customCondition.trim())
      } else if (selectedConditions.includes("Other") && !customCondition.trim()) {
        // Remove "Other" if no custom condition is provided
        finalConditions = finalConditions.filter(c => c !== "Other")
      }

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          healthConditions: finalConditions,
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
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Welcome to SyncUp!</h3>
          <p className="text-muted-foreground text-balance">
            Thank you for joining our waitlist. We'll notify you as soon as SyncUp is ready to support your health
            journey.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-card/80 backdrop-blur-sm border-border">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 border-border focus:border-primary focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label htmlFor="name" className="text-foreground font-medium">
                Name (Optional)
              </Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 border-border focus:border-primary focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <Label className="text-foreground font-medium mb-3 block">Health considerations (Optional)</Label>
              <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
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
                          // Clear custom condition if "Other" is unchecked
                          if (condition === "Other") {
                            setCustomCondition("")
                          }
                        }
                      }}
                      className="border-border data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor={condition} className="text-sm text-muted-foreground cursor-pointer">
                      {condition}
                    </Label>
                  </div>
                ))}
              </div>
              
              {/* Custom condition input - shows when "Other" is selected */}
              {selectedConditions.includes("Other") && (
                <div className="mt-3">
                  <Label htmlFor="customCondition" className="text-sm text-muted-foreground">
                    Please specify your health condition:
                  </Label>
                  <Input
                    id="customCondition"
                    type="text"
                    value={customCondition}
                    onChange={(e) => setCustomCondition(e.target.value)}
                    className="mt-1 border-border focus:border-primary focus:ring-primary"
                    placeholder="e.g., Fibromyalgia, Diabetes, etc."
                    maxLength={100}
                  />
                </div>
              )}
            </div>

            <div>
              <Label className="text-foreground font-medium mb-3 block">Features you're most interested in</Label>
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
                      className="border-border data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor={feature} className="text-sm text-muted-foreground cursor-pointer">
                      {feature}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {error && (
            <p className="text-destructive text-sm bg-destructive/10 p-3 rounded-md border border-destructive/20">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-colors"
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
