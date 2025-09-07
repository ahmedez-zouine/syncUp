"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Brain, Heart, Users, Shield, Sparkles, Moon, Activity } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Cycle Tracking",
    description:
      "AI-powered predictions that adapt to your unique patterns, including irregular cycles and health conditions.",
  },
  {
    icon: Brain,
    title: "Mental Health Integration",
    description:
      "Track mood, anxiety, and cognitive patterns alongside your cycle for comprehensive wellness insights.",
  },
  {
    icon: Heart,
    title: "Condition-Specific Support",
    description: "Tailored tracking for PCOS, endometriosis, thyroid disorders, and other health conditions.",
  },
  {
    icon: Users,
    title: "Neurodivergent Friendly",
    description:
      "Designed with ADHD and autism considerations, featuring customizable interfaces and sensory-friendly options.",
  },
  {
    icon: Shield,
    title: "Cultural & Religious Respect",
    description:
      "Inclusive features that honor diverse cultural practices and religious observances around menstruation.",
  },
  {
    icon: Sparkles,
    title: "Personalized Insights",
    description: "Get actionable recommendations based on your unique health profile and tracking data.",
  },
  {
    icon: Moon,
    title: "Holistic Wellness",
    description: "Connect sleep, nutrition, exercise, and stress patterns with your menstrual health.",
  },
  {
    icon: Activity,
    title: "Healthcare Integration",
    description: "Easily share comprehensive reports with your healthcare providers for better care coordination.",
  },
]

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Card
          key={feature.title}
          className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card/60 backdrop-blur-sm"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-balance">{feature.title}</h3>
            <p className="text-sm text-muted-foreground text-balance leading-relaxed">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
