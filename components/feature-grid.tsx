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
					className="group hover:shadow-sm transition-all duration-300 border-[#bcddb0]/40 hover:border-[#bcddb0] bg-white/60 dark:bg-white/5 backdrop-blur-sm"
					style={{
						animationDelay: `${index * 100}ms`,
					}}
				>
					<CardContent className="p-6 text-center">
						<div className="w-12 h-12 mx-auto mb-4 bg-[#bcddb0]/20 rounded-full flex items-center justify-center group-hover:bg-[#bcddb0]/30 transition-colors">
							<feature.icon className="w-6 h-6 text-[#5a7849]" />
						</div>
						<h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-balance">
							{feature.title}
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-300 text-balance leading-relaxed">
							{feature.description}
						</p>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
