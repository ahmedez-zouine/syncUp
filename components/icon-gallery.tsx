"use client"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Define the app icons data with their emotions/actions
const appIcons = [
	{
		src: "like.png",
		alt: "Mimaura Mascot with Arms Crossed",
		emotion: "Confident",
		description: "Your supportive companion showing confidence throughout your health journey",
		color: "from-[#9575cd]/80 to-[#7e57c2]/80",
		darkColor: "dark:from-[#b39ddb]/40 dark:to-[#9575cd]/40",
	},
	{
		src: "map.png",
		alt: "Mimaura Mascot with Magnifier",
		emotion: "Curious",
		description: "Helping you discover patterns and insights in your unique cycle data",
		color: "from-[#7e57c2]/80 to-[#673ab7]/80", 
		darkColor: "dark:from-[#9575cd]/40 dark:to-[#673ab7]/40",
	},
	{
		src: "what.png",
		alt: "Mimaura Mascot with Thumbs Up",
		emotion: "Supportive",
		description: "Always there to provide encouragement and positive reinforcement",
		color: "from-[#673ab7]/80 to-[#9575cd]/80",
		darkColor: "dark:from-[#b39ddb]/40 dark:to-[#7e57c2]/40",
	},
];

export function IconGallery() {
	const [selectedIcon, setSelectedIcon] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [mounted, setMounted] = useState(false);

	// Auto-cycle through mascots
	useEffect(() => {
		setMounted(true);
		
		let interval: NodeJS.Timeout;
		if (isAutoPlaying) {
			interval = setInterval(() => {
				setSelectedIcon((prev) => (prev + 1) % appIcons.length);
			}, 4000);
		}
		
		return () => clearInterval(interval);
	}, [isAutoPlaying]);

	// Stop auto-play when user interacts
	const handleIconSelect = (index: number) => {
		setSelectedIcon(index);
		setIsAutoPlaying(false);
	};

	if (!mounted) return null;

	return (
		<section className="py-12 sm:py-16 bg-gradient-to-br from-[#f5f0fc]/60 to-white/90 dark:from-[#1a1230]/80 dark:to-[#0f0a1e]/90 backdrop-blur-sm border-y border-[#a88bda]/20 dark:border-[#4a3968]/30 relative overflow-hidden">
			{/* Enhanced animated background elements */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-[10%] left-[8%] w-16 h-16 sm:w-24 sm:h-24 bg-[#a88bda]/10 dark:bg-[#a88bda]/20 rounded-full blur-xl animate-float"></div>
				<div className="absolute bottom-[15%] right-[10%] w-20 h-20 sm:w-32 sm:h-32 bg-[#7e57c2]/10 dark:bg-[#7e57c2]/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
				<div className="absolute top-[40%] right-[20%] w-12 h-12 sm:w-16 sm:h-16 bg-[#e0d3f5]/20 dark:bg-[#b39ddb]/10 rounded-full blur-lg animate-float" style={{ animationDuration: "6s", animationDelay: "1s" }}></div>
				
				{/* Subtle circular patterns */}
				<div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]" 
					 style={{
					   backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(168, 139, 218, 0.3) 0%, transparent 50px), radial-gradient(circle at 75% 75%, rgba(126, 87, 194, 0.3) 0%, transparent 50px)'
					 }}></div>
				
				{/* Subtle grid pattern - fake implementation since bg-grid-pattern may not exist */}
				<div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
					style={{
						backgroundImage: 'linear-gradient(to right, rgba(126, 87, 194, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(126, 87, 194, 0.1) 1px, transparent 1px)',
						backgroundSize: '20px 20px'
					}}>
				</div>
			</div>

			<div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
				{/* Section header with improved scaling */}
				<div className="text-center mb-8 sm:mb-12">
					<div className="inline-block">
						<Badge 
							variant="secondary" 
							className="mb-3 bg-gradient-to-r from-[#a88bda]/20 to-[#9575cd]/20 dark:from-[#7e57c2]/30 dark:to-[#9575cd]/30 text-[#4a3968] dark:text-[#e1d8f1] border-[#a88bda]/30 dark:border-[#a88bda]/40 shadow-sm"
						>
							Meet Your Companion
						</Badge>
					</div>
					
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 tracking-tight">
						Your Personal <span className="bg-gradient-to-r from-[#7e57c2] to-[#a88bda] dark:from-[#9575cd] dark:to-[#b39ddb] bg-clip-text text-transparent inline-block relative">
							Cycle Guide
							<span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#7e57c2]/30 to-[#a88bda]/30 dark:from-[#9575cd]/30 dark:to-[#b39ddb]/30 rounded-full"></span>
						</span>
					</h2>

					<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Our friendly mascot adapts to your needs, providing a personalized experience through every phase of your cycle
					</p>
				</div>

				{/* Main mascot showcase - redesigned for better responsiveness */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
					{/* Left side - Featured mascot with dynamic content */}
					<div className="md:col-span-5 order-2 md:order-1">
						<div
							key={selectedIcon}
							className="text-center md:text-left p-4 transition-all duration-300"
						>
							<div className="inline-flex items-center justify-center md:justify-start mb-3">
								<Badge 
									className={`bg-gradient-to-r ${appIcons[selectedIcon].color} ${appIcons[selectedIcon].darkColor} text-white px-3 py-1`}
								>
									{appIcons[selectedIcon].emotion}
								</Badge>
								
								{/* Auto-play indicator */}
								<div 
									className={`ml-3 flex items-center gap-1 text-xs text-[#4a3968]/70 dark:text-[#b39ddb]/70 transition-opacity ${isAutoPlaying ? 'opacity-100' : 'opacity-0'}`}
									onClick={() => setIsAutoPlaying(!isAutoPlaying)}
								>
									<div className="w-1.5 h-1.5 rounded-full bg-[#7e57c2] dark:bg-[#9575cd] animate-pulse"></div>
									<span>Auto</span>
								</div>
							</div>
							
							<h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-100 mb-3">
								{appIcons[selectedIcon].alt}
							</h3>
							
							<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
								{appIcons[selectedIcon].description}
							</p>
							
							{/* Progress bar */}
							<div className="w-full h-1 bg-[#e0d3f5]/30 dark:bg-[#2d1b4e]/50 rounded-full overflow-hidden mt-4 mb-6">
								<div 
									className="h-full bg-gradient-to-r from-[#9575cd] to-[#7e57c2] dark:from-[#b39ddb] dark:to-[#9575cd]"
									style={{ 
										width: `${((selectedIcon + 1) / appIcons.length) * 100}%`,
										transition: 'width 0.3s ease-out'
									}}
								></div>
							</div>
							
							{/* Select indicators */}
							<div className="flex items-center justify-center md:justify-start gap-2">
								{appIcons.map((_, index) => (
									<button
										key={index}
										className={cn(
											"w-2 h-2 rounded-full transition-all",
											selectedIcon === index 
												? "bg-[#7e57c2] dark:bg-[#9575cd] scale-125" 
												: "bg-[#a88bda]/30 dark:bg-[#4a3968]/50 hover:bg-[#a88bda]/60 dark:hover:bg-[#4a3968]/80"
										)}
										onClick={() => handleIconSelect(index)}
										aria-label={`Select mascot ${index + 1}`}
									/>
								))}
							</div>
						</div>
					</div>
					
					{/* Right side - Mascot image with enhanced styling */}
					<div className="md:col-span-7 order-1 md:order-2 flex justify-center">
						<div className="relative">
							{/* Decorative elements */}
							<div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-[#a88bda]/10 to-[#7e57c2]/10 dark:from-[#9575cd]/10 dark:to-[#673ab7]/10 blur-xl animate-pulse-slow opacity-70"></div>
							
							{/* Main mascot image container */}
							<div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
								<div
									key={selectedIcon}
									className="w-full h-full transition-all duration-300"
								>
									{/* Image with glass effect container */}
									<div className="w-full h-full bg-white/70 dark:bg-[#1a1230]/50 rounded-full backdrop-blur-sm border border-white/30 dark:border-[#4a3968]/30 shadow-lg overflow-hidden p-4">
										<div className="w-full h-full rounded-full relative overflow-hidden">
											<div 
												className={`absolute inset-0 bg-gradient-to-br ${appIcons[selectedIcon].color} ${appIcons[selectedIcon].darkColor} opacity-10 dark:opacity-20`}
											></div>
											
											<Image
												src={appIcons[selectedIcon].src}
												alt={appIcons[selectedIcon].alt}
												width={500}
												height={500}
												className="object-contain w-full h-full transition-transform duration-700 ease-out hover:scale-110"
												priority
												onError={(e) => {
													console.error(`Error loading image: ${appIcons[selectedIcon].src}`);
													e.currentTarget.src = "/mascot-fallback.png"; // Fallback image
												}}
											/>
										</div>
									</div>
								</div>
								
								{/* Decorative shine effect */}
								<div className="absolute top-0 left-[5%] w-[90%] h-[40%] bg-gradient-to-b from-white/30 to-transparent dark:from-white/10 dark:to-transparent rounded-full transform -rotate-6"></div>
								
								{/* Bottom reflection */}
								<div className="absolute -bottom-6 left-[10%] w-[80%] h-4 bg-black/10 dark:bg-white/5 blur-md rounded-full"></div>
							</div>
							
							{/* Small decorative icons around the main mascot */}
							<div className="absolute top-[5%] right-[5%] w-10 h-10 sm:w-14 sm:h-14 bg-white/70 dark:bg-[#2d1b4e]/60 rounded-full p-2 shadow-md backdrop-blur-sm border border-white/30 dark:border-[#4a3968]/40 animate-float" style={{ animationDelay: '0.5s' }}>
								<div className="w-full h-full rounded-full bg-[#f5f0fc]/50 dark:bg-[#1a1230]/50 flex items-center justify-center">
									<span className="text-lg sm:text-xl text-[#7e57c2] dark:text-[#9575cd]">✨</span>
								</div>
							</div>
							
							<div className="absolute bottom-[10%] left-[5%] w-8 h-8 sm:w-12 sm:h-12 bg-white/70 dark:bg-[#2d1b4e]/60 rounded-full p-1.5 shadow-md backdrop-blur-sm border border-white/30 dark:border-[#4a3968]/40 animate-float" style={{ animationDelay: '1.5s' }}>
								<div className="w-full h-full rounded-full bg-[#f5f0fc]/50 dark:bg-[#1a1230]/50 flex items-center justify-center">
									<span className="text-base sm:text-lg text-[#7e57c2] dark:text-[#9575cd]">💜</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				{/* Mascot selection gallery - redesigned as a horizontal strip */}
				<div className="hidden md:flex justify-center gap-4 sm:gap-6 mt-2 mb-4">
					{appIcons.map((icon, index) => (
						<button
							key={index}
							onClick={() => handleIconSelect(index)}
							className={cn(
								"group p-1 focus:outline-none",
								selectedIcon === index ? "opacity-100" : "opacity-50 hover:opacity-80"
							)}
						>
							<div className={cn(
								"w-16 h-16 rounded-full overflow-hidden p-0.5 transition-all duration-300",
								selectedIcon === index 
									? `bg-gradient-to-br ${icon.color} ${icon.darkColor} scale-110 shadow-md` 
									: "bg-white/70 dark:bg-[#1a1230]/50 border border-[#a88bda]/20 dark:border-[#4a3968]/40 group-hover:scale-105"
							)}>
								<div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#1a1230] p-1">
									<Image
										src={icon.src}
										alt={icon.alt}
										width={100}
										height={100}
										className="object-contain w-full h-full"
										onError={(e) => {
											e.currentTarget.src = "/mascot-fallback.png";
										}}
									/>
								</div>
							</div>
						</button>
					))}
				</div>
				
				{/* Mobile-only compact gallery */}
				<div className="flex md:hidden justify-center items-center gap-5 mt-6">
					{appIcons.map((icon, index) => (
						<button
							key={index}
							onClick={() => handleIconSelect(index)}
							className={cn(
								"relative w-16 h-16 rounded-full overflow-hidden",
								selectedIcon === index 
									? "ring-2 ring-[#7e57c2] dark:ring-[#9575cd] scale-110" 
									: "ring-1 ring-[#a88bda]/30 dark:ring-[#4a3968]/50 opacity-70"
							)}
							aria-label={icon.alt}
						>
							<Image
								src={icon.src}
								alt={icon.alt}
								fill
								sizes="64px"
								className="object-contain p-1"
								onError={(e) => {
									e.currentTarget.src = "/mascot-fallback.png";
								}}
							/>
						</button>
					))}
				</div>
			</div>
		</section>
	);
}