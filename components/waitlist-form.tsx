"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2, Sparkles, ClipboardList } from "lucide-react"

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
	"Personalised cycle tracking",
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
	const [mounted, setMounted] = useState(false)
	const [activePage, setActivePage] = useState(0)

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		setError("")

		try {
			// Prepare final conditions list
			let finalConditions = [...selectedConditions]

			// If "Other" is selected and custom condition is provided, replace "Other" with the custom condition
			if (selectedConditions.includes("Other") && customCondition.trim()) {
				finalConditions = finalConditions.filter((c) => c !== "Other")
				finalConditions.push(customCondition.trim())
			} else if (selectedConditions.includes("Other") && !customCondition.trim()) {
				// Remove "Other" if no custom condition is provided
				finalConditions = finalConditions.filter((c) => c !== "Other")
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

	if (!mounted) {
		return null
	}

	if (isSuccess) {
		return (
			<Card className="w-full max-w-md mx-auto overflow-hidden bg-gradient-to-br from-[#f1f7ee] to-[#e8f3e2] dark:from-[#1a2618]/80 dark:to-[#162211]/90 backdrop-blur-md border border-[#bcddb0]/40 dark:border-[#a9d190]/30 shadow-md transform transition-all hover:shadow-lg">
				<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8bb176] via-[#a9d190] to-[#bcddb0] rounded-t-lg"></div>
				<CardContent className="p-8 text-center relative">
					{/* Background decoration */}
					<div className="absolute inset-0 pointer-events-none overflow-hidden">
						<div className="absolute -top-10 -right-10 w-40 h-40 bg-[#a9d190]/10 dark:bg-[#a9d190]/5 rounded-full"></div>
						<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#bcddb0]/10 dark:bg-[#bcddb0]/5 rounded-full"></div>
					</div>
					
					<div className="relative z-10 animate-fade-in">
						<div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#e8f3e2] dark:bg-[#2a3a25] flex items-center justify-center">
							<CheckCircle className="w-10 h-10 text-[#5a7849] dark:text-[#a9d190]" />
						</div>
						<h3 className="text-2xl font-semibold text-[#3a523a] dark:text-[#e2f0d9] mb-4">
							Welcome to the Waitlist!
						</h3>
						<div className="max-w-xs mx-auto mb-6 h-1 bg-gradient-to-r from-transparent via-[#bcddb0]/50 dark:via-[#a9d190]/50 to-transparent"></div>
						<p className="text-[#5a7849] dark:text-[#bcddb0] mb-6 text-balance leading-relaxed">
							Thank you for joining our waitlist. We'll notify you as soon as Mimaura is ready to support your health journey.
						</p>
						
						<div className="pt-4">
							<Button
								className="bg-gradient-to-r from-[#8bb176] to-[#a9d190] hover:from-[#7aa065] hover:to-[#98c080] text-white dark:text-[#1a1a1a] font-medium transition-all duration-300 px-8 shadow-sm hover:shadow animate-fade-in"
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							>
								<Sparkles className="w-4 h-4 mr-2" /> 
								Explore Features
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		)
	}

	const pages = [
		// Page 1: Basic Info
		<div key="basic-info" className="space-y-5 animate-fade-in">
			<div className="space-y-1.5">
				<Label
					htmlFor="email"
					className="text-[#3a523a] dark:text-[#e2f0d9] font-medium inline-flex items-center"
				>
					Email Address <span className="text-[#e05252] ml-1">*</span>
				</Label>
				<Input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					className="mt-1.5 border-[#bcddb0]/40 focus:border-[#a9d190] focus:ring-[#a9d190]/30 bg-white/80 dark:bg-[#1a1a1a]/60 dark:border-[#5a7849]/40 dark:focus:border-[#a9d190] dark:text-[#e2f0d9] dark:placeholder:text-[#a0aec0]/70 shadow-inner dark:shadow-none rounded-lg"
					placeholder="your@email.com"
				/>
			</div>

			<div className="space-y-1.5">
				<Label
					htmlFor="name"
					className="text-[#3a523a] dark:text-[#e2f0d9] font-medium"
				>
					Name (Optional)
				</Label>
				<Input
					id="name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="mt-1.5 border-[#bcddb0]/40 focus:border-[#a9d190] focus:ring-[#a9d190]/30 bg-white/80 dark:bg-[#1a1a1a]/60 dark:border-[#5a7849]/40 dark:focus:border-[#a9d190] dark:text-[#e2f0d9] dark:placeholder:text-[#a0aec0]/70 shadow-inner dark:shadow-none rounded-lg"
					placeholder="Your name"
				/>
			</div>
			
			<div className="pt-4">
				<Button
					type="button"
					className="w-full bg-gradient-to-r from-[#8bb176] to-[#a9d190] hover:from-[#7aa065] hover:to-[#98c080] text-white dark:text-[#1a1a1a] font-medium py-3 transition-all duration-300 rounded-lg shadow-sm hover:shadow"
					onClick={() => setActivePage(1)}
					disabled={!email}
				>
					Continue
				</Button>
			</div>
		</div>,
		
		// Page 2: Health considerations
		<div key="health-considerations" className="space-y-5 animate-fade-in">
			<div>
				<Label className="text-[#3a523a] dark:text-[#e2f0d9] font-medium mb-3 block">
					Health considerations (Optional)
				</Label>
				<div className="grid grid-cols-1 gap-1 max-h-40 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#bcddb0]/40 scrollbar-track-transparent dark:scrollbar-thumb-[#5a7849]/60">
					{healthConditions.map((condition) => (
						<div key={condition} className="flex items-center space-x-2 py-1.5 px-2 rounded-md hover:bg-[#f1f7ee] dark:hover:bg-[#1a1a1a]/40 transition-colors">
							<Checkbox
								id={condition}
								checked={selectedConditions.includes(condition)}
								onCheckedChange={(checked) => {
									if (checked) {
										setSelectedConditions([
											...selectedConditions,
											condition,
										])
									} else {
										setSelectedConditions(
											selectedConditions.filter(
												(c) => c !== condition
											)
										)
										// Clear custom condition if "Other" is unchecked
										if (condition === "Other") {
											setCustomCondition("")
										}
									}
								}}
								className="border-[#8bb176]/50 data-[state=checked]:bg-[#8bb176] data-[state=checked]:border-[#8bb176] dark:border-[#5a7849]/70 dark:data-[state=checked]:bg-[#8bb176] dark:data-[state=checked]:border-[#8bb176]"
							/>
							<Label
								htmlFor={condition}
								className="text-sm text-[#5a7849] dark:text-[#bcddb0]/90 cursor-pointer hover:text-[#3a523a] dark:hover:text-[#e2f0d9] transition-colors"
							>
								{condition}
							</Label>
						</div>
					))}
				</div>

				{/* Custom condition input - shows when "Other" is selected */}
				{selectedConditions.includes("Other") && (
					<div className="mt-3 animate-fade-in">
						<Label
							htmlFor="customCondition"
							className="text-sm text-[#5a7849] dark:text-[#bcddb0]/80"
						>
							Please specify your health condition:
						</Label>
						<Input
							id="customCondition"
							type="text"
							value={customCondition}
							onChange={(e) => setCustomCondition(e.target.value)}
							className="mt-1.5 border-[#bcddb0]/40 focus:border-[#a9d190] focus:ring-[#a9d190]/30 bg-white/80 dark:bg-[#1a1a1a]/60 dark:border-[#5a7849]/40 dark:focus:border-[#a9d190] dark:text-[#e2f0d9] dark:placeholder:text-[#a0aec0]/70 shadow-inner dark:shadow-none rounded-lg"
							placeholder="e.g., Fibromyalgia, Diabetes, etc."
							maxLength={100}
						/>
					</div>
				)}
			</div>
			
			<div className="flex space-x-3 pt-4">
				<Button
					type="button"
					variant="outline"
					className="flex-1 border-[#bcddb0]/40 hover:bg-[#f1f7ee] text-[#5a7849] dark:border-[#5a7849]/60 dark:text-[#bcddb0] dark:hover:bg-[#1a1a1a]/60 rounded-lg"
					onClick={() => setActivePage(0)}
				>
					Back
				</Button>
				<Button
					type="button"
					className="flex-1 bg-gradient-to-r from-[#8bb176] to-[#a9d190] hover:from-[#7aa065] hover:to-[#98c080] text-white dark:text-[#1a1a1a] font-medium transition-all duration-300 rounded-lg shadow-sm hover:shadow"
					onClick={() => setActivePage(2)}
				>
					Continue
				</Button>
			</div>
		</div>,
		
		// Page 3: Features
		<div key="features" className="space-y-5 animate-fade-in">
			<div>
				<Label className="text-[#3a523a] dark:text-[#e2f0d9] font-medium mb-3 block">
					Features you're most interested in
				</Label>
				<div className="grid grid-cols-1 gap-1 max-h-40 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#bcddb0]/40 scrollbar-track-transparent dark:scrollbar-thumb-[#5a7849]/60">
					{features.map((feature) => (
						<div key={feature} className="flex items-center space-x-2 py-1.5 px-2 rounded-md hover:bg-[#f1f7ee] dark:hover:bg-[#1a1a1a]/40 transition-colors">
							<Checkbox
								id={feature}
								checked={selectedFeatures.includes(feature)}
								onCheckedChange={(checked) => {
									if (checked) {
										setSelectedFeatures([...selectedFeatures, feature])
									} else {
										setSelectedFeatures(
											selectedFeatures.filter((f) => f !== feature)
										)
									}
								}}
								className="border-[#8bb176]/50 data-[state=checked]:bg-[#8bb176] data-[state=checked]:border-[#8bb176] dark:border-[#5a7849]/70 dark:data-[state=checked]:bg-[#8bb176] dark:data-[state=checked]:border-[#8bb176]"
							/>
							<Label
								htmlFor={feature}
								className="text-sm text-[#5a7849] dark:text-[#bcddb0]/90 cursor-pointer hover:text-[#3a523a] dark:hover:text-[#e2f0d9] transition-colors"
							>
								{feature}
							</Label>
						</div>
					))}
				</div>
			</div>
			
			<div className="flex space-x-3 pt-4">
				<Button
					type="button"
					variant="outline"
					className="flex-1 border-[#bcddb0]/40 hover:bg-[#f1f7ee] text-[#5a7849] dark:border-[#5a7849]/60 dark:text-[#bcddb0] dark:hover:bg-[#1a1a1a]/60 rounded-lg"
					onClick={() => setActivePage(1)}
				>
					Back
				</Button>
				<Button
					type="submit"
					disabled={isLoading}
					className="flex-1 bg-gradient-to-r from-[#8bb176] to-[#a9d190] hover:from-[#7aa065] hover:to-[#98c080] text-white dark:text-[#1a1a1a] font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm hover:shadow"
				>
					{isLoading ? (
						<>
							<Loader2 className="w-4 h-4 mr-2 animate-spin" />
							Joining...
						</>
					) : (
						"Join Waitlist"
					)}
				</Button>
			</div>
		</div>
	]
	
	return (
		<Card className="w-full max-w-md mx-auto overflow-hidden bg-white/90 dark:bg-[#1a1a1a]/80 backdrop-blur-md border border-[#bcddb0]/40 dark:border-[#5a7849]/40 shadow-md transform transition-all hover:shadow-lg">
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8bb176] via-[#a9d190] to-[#bcddb0] rounded-t-lg"></div>
			<CardContent className="p-6 sm:p-8 relative">
				{/* Background decoration */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					<div className="absolute -top-10 -right-10 w-40 h-40 bg-[#a9d190]/10 dark:bg-[#a9d190]/5 rounded-full"></div>
					<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#bcddb0]/10 dark:bg-[#bcddb0]/5 rounded-full"></div>
				</div>
				
				{/* Form header */}
				<div className="relative z-10 mb-6">
					<div className="flex items-center justify-between mb-4">
						<h3 className="text-lg font-semibold text-[#3a523a] dark:text-[#e2f0d9] flex items-center">
							<ClipboardList className="w-5 h-5 mr-2 text-[#8bb176] dark:text-[#a9d190]" />
							Join our waitlist
						</h3>
						<div className="flex items-center space-x-1">
							{[0, 1, 2].map((step) => (
								<div 
									key={step}
									className={`w-2 h-2 rounded-full ${
										activePage === step
											? "bg-[#8bb176] dark:bg-[#a9d190]"
											: "bg-[#e8f3e2] dark:bg-[#2a3a25]"
									}`}
									onClick={() => step < activePage && setActivePage(step)}
								></div>
							))}
						</div>
					</div>
					<p className="text-sm text-[#5a7849] dark:text-[#bcddb0]/80">
						{activePage === 0 && "Get early access to Mimaura"}
						{activePage === 1 && "Help us personalize your experience"}
						{activePage === 2 && "Tell us what matters most to you"}
					</p>
				</div>
				
				{/* Form with progress */}
				<form onSubmit={handleSubmit} className="relative z-10">
					{pages[activePage]}
					
					{error && (
						<div className="mt-4 text-destructive text-sm bg-destructive/10 dark:bg-destructive/20 p-3 rounded-md border border-destructive/20 dark:border-destructive/30 animate-fade-in">
							{error}
						</div>
					)}
				</form>
			</CardContent>
		</Card>
	)
}
