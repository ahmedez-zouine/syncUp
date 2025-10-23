"use client"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// Define the app icons data with their emotions/actions
const appIcons = [
	{
		src: "like.png", // Updated path with  subfolder
		alt: "Mimaura Mascot with Arms Crossed",
		emotion: "Confident",
		description: "Our friendly mascot showing confidence with crossed arms",
	},
	{
		src: "map.png", // Updated path with  subfolder
		alt: "Mimaura Mascot with Magnifier",
		emotion: "Curious",
		description: "Our friendly mascot exploring data with a magnifying glass",
	},
	{
		src: "what.png", // Updated path with  subfolder
		alt: "Mimaura Mascot with Thumbs Up",
		emotion: "Positive",
		description: "Our friendly mascot giving an encouraging thumbs up",
	},
];

export function IconGallery() {
	const [selectedIcon, setSelectedIcon] = useState(0);

	return (
		<section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#a88bda]/30 via-[#7e57c2]/20 to-transparent backdrop-blur-sm border-y border-[#a88bda]/40 relative overflow-hidden">
			{/* Enhanced animated background elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-2 left-[5%] sm:top-5 sm:left-[10%] w-12 h-12 sm:w-24 sm:h-24 bg-[#a88bda]/20 rounded-full animate-pulse blur-sm"></div>
				<div className="absolute bottom-2 right-[5%] sm:bottom-5 sm:right-[10%] w-16 h-16 sm:w-32 sm:h-32 bg-[#7e57c2]/20 rounded-full animate-pulse blur-sm" style={{ animationDuration: "4s" }}></div>
				<div className="absolute top-[30%] right-[15%] sm:top-[40%] sm:right-[20%] w-10 h-10 sm:w-20 sm:h-20 bg-[#e0d3f5]/30 rounded-full animate-ping opacity-30 blur-sm" style={{ animationDuration: "6s" }}></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
				<div className="text-center mb-8 sm:mb-16">
					<Badge variant="secondary" className="mb-4 sm:mb-6 bg-[#a88bda]/20 text-[#4a3968] dark:text-[#e1d8f1] border-[#a88bda]/30 animate-soft-glow text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-1.5">
						Meet Our Mascot
					</Badge>

					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
						Say Hello to <span className="bg-gradient-to-r from-[#7e57c2] to-[#a88bda] bg-clip-text text-transparent">Your Companion</span>
					</h2>

					<p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
						Our friendly purple mascot is here to guide you through your health journey with warmth and understanding.
					</p>
				</div>

				{/* Featured icon display - responsive central icon */}
				<div className="flex justify-center mb-8 sm:mb-16">
					<div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 transform transition-all duration-500 hover:scale-105">
						{/* Enhanced glowing effect behind icon */}
						<div className="absolute -inset-4 bg-gradient-to-br from-[#a88bda] to-[#7e57c2] rounded-full opacity-30 blur-md animate-pulse-slow"></div>

						<div className="relative w-full h-full bg-white/90 dark:bg-black/40 rounded-full overflow-hidden border-4 sm:border-8 border-[#a88bda]/10 shadow-sm">
							<Image
								src={appIcons[selectedIcon].src}
								alt={appIcons[selectedIcon].alt}
								width={500}
								height={500}
								className="object-contain w-full h-full p-2"
								priority
								onError={(e) => {
									console.error(`Error loading image: ${appIcons[selectedIcon].src}`);
									e.currentTarget.src = "/mascot-fallback.png"; // Fallback image
								}}
							/>
						</div>
					</div>
				</div>

				{/* Icon emotion and description - improved responsive sizing */}
				<div className="text-center mb-8 sm:mb-12">
					<h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4a3968] dark:text-[#b39ddb] mb-2">
						{appIcons[selectedIcon].emotion}
					</h3>
					<p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
						{appIcons[selectedIcon].description}
					</p>
				</div>

				{/* Icon selection gallery - improved responsive layout */}
				<div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
					{appIcons.map((icon, index) => (
						<Card
							key={index}
							className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
								selectedIcon === index
									? 'ring-2 sm:ring-3 ring-[#7e57c2] border-[#a88bda]'
									: 'border-[#a88bda]/30 hover:border-[#a88bda]/60'
							}`}
							onClick={() => setSelectedIcon(index)}
						>
							<CardContent className="p-1 sm:p-2 flex items-center justify-center">
								<div className="relative aspect-square w-full max-h-24 sm:max-h-32 md:max-h-40">
									<Image
										src={icon.src}
										alt={icon.alt}
										width={300}
										height={300}
										className="object-contain w-full h-full"
										onError={(e) => {
											console.error(`Error loading image: ${icon.src}`);
											e.currentTarget.src = "/mascot-fallback.png"; // Fallback image
										}}
									/>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}