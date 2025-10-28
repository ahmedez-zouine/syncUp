"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Brain, Heart, Users, Shield, Sparkles, Moon, Activity } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Custom mascot icon component with enhanced styling
function MascotIcon() {
  return (
    <div className="relative w-6 h-6 transform transition-all duration-300 group-hover:scale-110">
      <div className="absolute -inset-1 bg-gradient-to-br from-[#a88bda] to-[#7e57c2] rounded-full opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
      <div className="relative">
        <Image 
          src="/like.png" 
          alt="Mimaura Mascot" 
          width={38} 
          height={38} 
          className="object-contain drop-shadow-sm"
        />
      </div>
    </div>
  );
}

const features = [
	{
		icon: Calendar,
		title: "Friendly Companion",
		description:
			"Our purple mascot guides you through your health journey with personalised support and gentle reminders.",
		gradient: "from-[#b39ddb]/80 to-[#9575cd]/80",
		darkGradient: "dark:from-[#9575cd]/40 dark:to-[#673ab7]/40",
		hoverEffect: "group-hover:scale-110 group-hover:rotate-3",
	},
	{
		icon: Brain,
		title: "Mental Health Integration",
		description:
			"Track mood, anxiety, and cognitive patterns alongside your cycle for comprehensive wellness insights.",
		gradient: "from-[#7e57c2]/80 to-[#673ab7]/80",
		darkGradient: "dark:from-[#b39ddb]/40 dark:to-[#9575cd]/40",
		hoverEffect: "group-hover:scale-110 group-hover:rotate-[-3deg]",
	},
	{
		icon: Heart,
		title: "Condition-Specific Support",
		description: "Tailored tracking for PCOS, endometriosis, thyroid disorders, and other health conditions.",
		gradient: "from-[#9575cd]/80 to-[#7e57c2]/80",
		darkGradient: "dark:from-[#b39ddb]/40 dark:to-[#9575cd]/40",
		hoverEffect: "group-hover:scale-110 group-hover:rotate-3",
	},
	{
		icon: Users,
		title: "Neurodivergent Friendly",
		description:
			"Designed with ADHD and autism considerations, featuring customisable interfaces and sensory-friendly options.",
		gradient: "from-[#673ab7]/80 to-[#9575cd]/80",
		darkGradient: "dark:from-[#9575cd]/40 dark:to-[#673ab7]/40",
		hoverEffect: "group-hover:scale-110 group-hover:rotate-[-3deg]",
	},
	{
		icon: Shield,
		title: "Cultural & Religious Respect",
		description:
			"Inclusive features that honor diverse cultural practices and religious observances around menstruation.",
		gradient: "from-[#9575cd]/80 to-[#673ab7]/80",
		darkGradient: "dark:from-[#b39ddb]/40 dark:to-[#9575cd]/40",
		hoverEffect: "group-hover:scale-110 group-hover:rotate-[-3deg]",
	},
	{
		icon: Sparkles,
		title: "personalised Insights",
		description: "Get actionable recommendations based on your unique health profile and tracking data.",
		gradient: "from-[#673ab7]/80 to-[#7e57c2]/80",
		darkGradient: "dark:from-[#9575cd]/40 dark:to-[#673ab7]/40",
		hoverEffect: "group-hover:scale-110 group-hover:rotate-3",
	},
	{
		icon: Moon,
		title: "Holistic Wellness",
		description: "Connect sleep, nutrition, exercise, and stress patterns with your menstrual health.",
		gradient: "from-[#7e57c2]/80 to-[#9575cd]/80",
		darkGradient: "dark:from-[#b39ddb]/40 dark:to-[#9575cd]/40",
		hoverEffect: "group-hover:scale-110 group-hover:rotate-[-3deg]",
	},
	{
		icon: Activity,
		title: "Healthcare Integration",
		description: "Easily share comprehensive reports with your healthcare providers for better care coordination.",
		gradient: "from-[#9575cd]/80 to-[#673ab7]/80",
		darkGradient: "dark:from-[#9575cd]/40 dark:to-[#673ab7]/40",
		hoverEffect: "group-hover:scale-110 group-hover:rotate-3",
	},
]

export function FeatureGrid() {
	const [activeFeature, setActiveFeature] = useState<number | null>(null);
	
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
			{features.map((feature, index) => (
				<Card
					key={feature.title}
					className={cn(
						"group overflow-hidden transition-all duration-500 border-0 shadow-sm",
						"hover:shadow-md hover:-translate-y-1",
						"bg-gradient-to-br from-white/80 to-white/60",
						"dark:from-[#1a1230]/80 dark:to-[#0f0a1e]/60",
						"backdrop-blur-md relative cursor-pointer",
						activeFeature === index ? "ring-2 ring-[#9575cd] dark:ring-[#b39ddb]" : ""
					)}
					style={{
						animationDelay: `${index * 100}ms`,
					}}
					onClick={() => setActiveFeature(index === activeFeature ? null : index)}
				>
					{/* Gradient border top */}
					<div className={cn(
						"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r",
						feature.gradient, 
						feature.darkGradient
					)}></div>
					
					{/* Animated background decoration */}
					<div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
						<div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#a88bda]/10 to-transparent dark:from-[#9575cd]/10 rounded-full blur-xl"></div>
						<div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#7e57c2]/10 to-transparent dark:from-[#673ab7]/10 rounded-full blur-xl"></div>
					</div>
					
					<CardContent className="p-6 text-center relative z-10">
						{/* Icon container with hover effects */}
						<div className={cn(
							"w-16 h-16 mx-auto mb-4 relative",
							"transition-all duration-500",
							activeFeature === index ? "scale-110" : ""
						)}>
							{/* Glowing background effect */}
							<div className={cn(
								"absolute inset-0 rounded-full blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-70",
								"bg-gradient-to-br",
								feature.gradient,
								feature.darkGradient
							)}></div>
							
							{/* Solid circle background */}
							<div className={cn(
								"absolute inset-0 bg-white dark:bg-[#2d1b4e] rounded-full transform transition-all duration-500",
								feature.hoverEffect
							)}></div>
							
							{/* Icon centered in circle */}
							<div className="absolute inset-0 flex items-center justify-center transform transition-all duration-500">
								<feature.icon className="w-7 h-7 text-[#7e57c2] dark:text-[#b39ddb] drop-shadow-sm" />
							</div>
						</div>
						
						{/* Text content with animations */}
						<div className={cn(
							"transform transition-all duration-500",
							activeFeature === index ? "scale-105" : ""
						)}>
							<h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2 text-balance group-hover:text-[#7e57c2] dark:group-hover:text-[#b39ddb] transition-colors">
								{feature.title}
							</h3>
							
							<p className="text-sm text-gray-600 dark:text-gray-300 text-balance leading-relaxed">
								{feature.description}
							</p>
						</div>
						
						{/* Learn more indicator - only shows on active */}
						<div className={cn(
							"mt-4 text-xs font-medium text-[#7e57c2] dark:text-[#b39ddb] items-center gap-1 opacity-0 transition-all duration-300",
							activeFeature === index ? "flex justify-center opacity-100" : "hidden"
						)}>
							<span>Learn more</span>
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-300 group-hover:translate-x-1">
								<path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
