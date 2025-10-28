"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Zap, Heart, Brain, Shield, Sparkles, Lock, Play, Pause } from "lucide-react";

// Enhanced mascot data with modern context
const appIcons = [
    {
        src: "/mascots/wave.png",
        alt: "Friendly Wave",
        emotion: "Welcoming",
        context: "Say hello to your personal cycle companion",
        description: "Your supportive friend ready to guide you through every phase",
        color: "from-[#9575cd] to-[#7e57c2]",
        features: ["Real-time support", "Gentle reminders"],
        icon: Heart,
    },
    {
        src: "/mascots/lightbulb.png",
        alt: "Curious Explorer",
        emotion: "Insightful",
        context: "Discover patterns unique to your body",
        description: "AI-powered insights that reveal your personalised cycle patterns",
        color: "from-[#7e57c2] to-[#673ab7]",
        features: ["Smart predictions", "Pattern analysis"],
        icon: Zap,
    },
    {
        src: "/mascots/heart.png",
        alt: "Compassionate Friend",
        emotion: "Supportive",
        context: "Emotional wellness is core to your health",
        description: "Mental health tracking integrated with your cycle insights",
        color: "from-[#673ab7] to-[#9575cd]",
        features: ["Mood tracking", "Wellness tips"],
        icon: Heart,
    },
    {
        src: "/mascots/hug.png",
        alt: "Embracing Support",
        emotion: "Caring",
        context: "Your health journey deserves compassion",
        description: "Holistic support that cares about your complete wellbeing",
        color: "from-[#9575cd] to-[#673ab7]",
        features: ["Comprehensive care", "24/7 support"],
        icon: Heart,
    },
    {
        src: "/mascots/thumbsup.png",
        alt: "Confident You",
        emotion: "Empowering",
        context: "Feel confident about your health choices",
        description: "Affirmations and encouragement every step of the way",
        color: "from-[#7e57c2] to-[#9575cd]",
        features: ["Affirmations", "Progress tracking"],
        icon: Sparkles,
    },
    {
        src: "/mascots/smart.png",
        alt: "Smart Learning",
        emotion: "Intelligent",
        context: "Technology that understands you",
        description: "Machine learning that adapts to your unique cycle signature",
        color: "from-[#673ab7] to-[#7e57c2]",
        features: ["AI adaptation", "Personal AI"],
        icon: Brain,
    },
    {
        src: "/mascots/privacy.png",
        alt: "Private Guardian",
        emotion: "Trustworthy",
        context: "Your data privacy is sacred",
        description: "Bank-level encryption keeping your health data safe",
        color: "from-[#9575cd] to-[#673ab7]",
        features: ["End-to-end encryption", "Privacy first"],
        icon: Lock,
    },
    {
        src: "/mascots/shield.png",
        alt: "Protective Guard",
        emotion: "Secure",
        context: "Protection that never takes a break",
        description: "Your health information is protected with enterprise security",
        color: "from-[#7e57c2] to-[#673ab7]",
        features: ["Secure storage", "HIPAA compliant"],
        icon: Shield,
    },
];

export function IconGallery() {
    const [selectedIcon, setSelectedIcon] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                handleNext();
            }, 4500);
        }

        return () => clearInterval(interval);
    }, [isAutoPlaying, selectedIcon]);

    const handlePrevious = () => {
        if (isTransitioning) return;
        setDirection('left');
        setIsTransitioning(true);
        setSelectedIcon((prev) => (prev - 1 + appIcons.length) % appIcons.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setDirection('right');
        setIsTransitioning(true);
        setSelectedIcon((prev) => (prev + 1) % appIcons.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const handleIconSelect = (index: number) => {
        if (isTransitioning || index === selectedIcon) return;
        setDirection(index > selectedIcon ? 'right' : 'left');
        setIsTransitioning(true);
        setSelectedIcon(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    if (!mounted) return null;

    const currentIcon = appIcons[selectedIcon];
    const CurrentFeatureIcon = currentIcon.icon;

    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white via-[#faf8fc] to-white dark:from-[#0f0a1e] dark:via-[#1a1230] dark:to-[#0f0a1e]">
            {/* Modern Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated gradient orbs */}
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-gradient-to-br from-[#a88bda]/30 to-[#7e57c2]/20 dark:from-[#a88bda]/20 dark:to-[#7e57c2]/10 rounded-full blur-3xl animate-float opacity-40" />
                <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-gradient-to-tl from-[#9575cd]/25 to-[#673ab7]/15 dark:from-[#9575cd]/15 dark:to-[#673ab7]/10 rounded-full blur-3xl animate-float opacity-30" style={{ animationDelay: '2s' }} />
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(168,139,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,139,218,0.03)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(168,139,218,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,139,218,0.05)_1px,transparent_1px)]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-gradient-to-r from-[#a88bda]/20 to-[#9575cd]/20 dark:from-[#7e57c2]/30 dark:to-[#9575cd]/30 border border-[#a88bda]/40 dark:border-[#a88bda]/50 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-[#7e57c2] dark:text-[#b39ddb] animate-pulse" />
                        <span className="text-sm font-semibold text-[#4a3968] dark:text-[#e1d8f1]">
                            Meet Your Companions
                        </span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-6 leading-tight">
                        Your Personal{" "}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-[#7e57c2] via-[#9575cd] to-[#a88bda] dark:from-[#9575cd] dark:via-[#b39ddb] dark:to-[#a88bda] bg-clip-text text-transparent animate-gradient">
                                Health Guardian
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#7e57c2] via-[#9575cd] to-[#a88bda] dark:from-[#9575cd] dark:via-[#b39ddb] dark:to-[#a88bda] rounded-full opacity-60" />
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Each mascot represents a unique aspect of your wellbeing journey
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                    {/* Left: Mascot Display */}
                    <div className="relative order-2 lg:order-1">
                        {/* Main mascot container */}
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Dynamic glow effect */}
                            <div 
                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentIcon.color} opacity-20 dark:opacity-30 blur-3xl transition-all duration-700 animate-pulse`}
                                style={{ animationDuration: '3s' }}
                            />

                            {/* Mascot image with transition */}
                            <div className="relative h-full">
                                {appIcons.map((icon, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "absolute inset-0 transition-all duration-700 ease-out",
                                            selectedIcon === idx
                                                ? "opacity-100 scale-100 rotate-0 z-10"
                                                : direction === 'right'
                                                ? "opacity-0 scale-90 -rotate-12 z-0"
                                                : "opacity-0 scale-90 rotate-12 z-0"
                                        )}
                                    >
                                        <div className="relative w-full h-full bg-white/60 dark:bg-[#1a1230]/40 backdrop-blur-xl rounded-3xl border border-[#a88bda]/30 dark:border-[#a88bda]/20 shadow-2xl overflow-hidden">
                                            {/* Gradient overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${icon.color} opacity-5 dark:opacity-10`} />
                                            
                                            {/* Image */}
                                            <div className="absolute inset-0 p-8 flex items-center justify-center">
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={icon.src}
                                                        alt={icon.alt}
                                                        fill
                                                        className="object-contain drop-shadow-2xl"
                                                        priority={idx === 0}
                                                        sizes="(max-width: 768px) 90vw, 500px"
                                                    />
                                                </div>
                                            </div>

                                            {/* Decorative elements */}
                                            <div className={`absolute top-6 right-6 w-20 h-20 bg-gradient-to-br ${icon.color} opacity-20 rounded-full blur-2xl`} />
                                            <div className={`absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-tl ${icon.color} opacity-15 rounded-full blur-xl`} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Floating particles */}
                            <div className="absolute -top-4 -left-4 w-3 h-3 bg-[#a88bda] dark:bg-[#b39ddb] rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }} />
                            <div className="absolute top-1/4 -right-6 w-2 h-2 bg-[#7e57c2] dark:bg-[#9575cd] rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
                            <div className="absolute -bottom-6 left-1/3 w-4 h-4 bg-[#9575cd] dark:bg-[#b39ddb] rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className={cn(
                        "space-y-8 order-1 lg:order-2 transition-all duration-700",
                        isTransitioning 
                            ? direction === 'right' 
                                ? "opacity-50 translate-x-8" 
                                : "opacity-50 -translate-x-8"
                            : "opacity-100 translate-x-0"
                    )}>
                        {/* Emotion badge */}
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r ${currentIcon.color} text-white shadow-lg shadow-[#9575cd]/30 dark:shadow-[#673ab7]/40 transition-all duration-500`}>
                                <CurrentFeatureIcon className="w-5 h-5" />
                                <span className="font-semibold">{currentIcon.emotion}</span>
                            </div>
                            
                            {/* Auto-play indicator */}
                            <div className="flex items-center gap-2">
                                <span className={cn(
                                    "w-2 h-2 rounded-full transition-all",
                                    isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"
                                )} />
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                    {isAutoPlaying ? "Auto-playing" : "Paused"}
                                </span>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="space-y-4">
                            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 leading-tight">
                                {currentIcon.context}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                {currentIcon.description}
                            </p>
                        </div>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-3">
                            {currentIcon.features.map((feature, idx) => (
                                <div
                                    key={feature}
                                    className="group px-4 py-2 rounded-full bg-gradient-to-r from-[#f5f0fc] to-white dark:from-[#2d1b4e]/40 dark:to-[#1a1230]/60 border border-[#a88bda]/20 dark:border-[#a88bda]/30 backdrop-blur-sm hover:border-[#a88bda] dark:hover:border-[#b39ddb] hover:scale-105 transition-all duration-300 cursor-default"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <span className="flex items-center gap-2 text-sm font-medium text-[#4a3968] dark:text-[#e1d8f1]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7e57c2] to-[#9575cd] dark:from-[#9575cd] dark:to-[#b39ddb]" />
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Progress indicator */}
                        <div className="space-y-3 pt-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-medium text-gray-700 dark:text-gray-300">
                                    Exploring Companions
                                </span>
                                <span className="font-bold text-[#7e57c2] dark:text-[#9575cd]">
                                    {selectedIcon + 1} / {appIcons.length}
                                </span>
                            </div>
                            <div className="relative h-2 bg-gray-200 dark:bg-[#2d1b4e]/60 rounded-full overflow-hidden">
                                <div
                                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${currentIcon.color} rounded-full transition-all duration-700 ease-out`}
                                    style={{ width: `${((selectedIcon + 1) / appIcons.length) * 100}%` }}
                                >
                                    <div className="absolute inset-0 bg-white/30 animate-pulse" />
                                </div>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handlePrevious}
                                disabled={isTransitioning}
                                className="group p-4 rounded-full bg-white dark:bg-[#1a1230] border-2 border-[#a88bda]/30 dark:border-[#a88bda]/40 hover:border-[#a88bda] dark:hover:border-[#b39ddb] hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                                aria-label="Previous mascot"
                            >
                                <ChevronLeft className="w-6 h-6 text-[#7e57c2] dark:text-[#9575cd] group-hover:text-[#673ab7] dark:group-hover:text-[#b39ddb] transition-colors" />
                            </button>

                            <button
                                onClick={handleNext}
                                className={`group p-4 rounded-full bg-gradient-to-r ${currentIcon.color} hover:scale-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-white`}
                                disabled={isTransitioning}
                                aria-label="Next mascot"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            <button
                                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                className="group flex items-center gap-2 px-6 py-4 rounded-full bg-white dark:bg-[#1a1230] border-2 border-[#a88bda]/30 dark:border-[#a88bda]/40 hover:border-[#a88bda] dark:hover:border-[#b39ddb] hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl"
                                aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
                            >
                                {isAutoPlaying ? (
                                    <Pause className="w-5 h-5 text-[#7e57c2] dark:text-[#9575cd]" />
                                ) : (
                                    <Play className="w-5 h-5 text-[#7e57c2] dark:text-[#9575cd]" />
                                )}
                                <span className="text-sm font-medium text-[#4a3968] dark:text-[#e1d8f1]">
                                    {isAutoPlaying ? "Pause" : "Play"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mascot Selector */}
                <div className="flex justify-center items-center gap-3 flex-wrap mb-12">
                    {appIcons.map((icon, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleIconSelect(idx)}
                            disabled={isTransitioning}
                            className={cn(
                                "group relative transition-all duration-300",
                                selectedIcon === idx
                                    ? "scale-110"
                                    : "scale-100 opacity-60 hover:opacity-100 hover:scale-105"
                            )}
                            aria-label={`View ${icon.emotion} mascot`}
                        >
                            {/* Glow effect for active */}
                            {selectedIcon === idx && (
                                <div className={`absolute -inset-2 bg-gradient-to-br ${icon.color} opacity-30 blur-xl rounded-2xl`} />
                            )}
                            
                            <div className={cn(
                                "relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden transition-all duration-300 border-2",
                                selectedIcon === idx
                                    ? "border-transparent shadow-xl"
                                    : "border-[#a88bda]/20 dark:border-[#a88bda]/30 hover:border-[#a88bda]/60 dark:hover:border-[#a88bda]/60 shadow-md"
                            )}>
                                {/* Background */}
                                <div className={cn(
                                    "absolute inset-0 transition-all duration-300",
                                    selectedIcon === idx
                                        ? `bg-gradient-to-br ${icon.color}`
                                        : "bg-white/80 dark:bg-[#1a1230]/60 backdrop-blur-sm"
                                )} />

                                {/* Image */}
                                <div className="relative w-full h-full p-2">
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        fill
                                        className="object-contain"
                                        sizes="96px"
                                    />
                                </div>

                                {/* Icon indicator */}
                                {selectedIcon === idx && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-transparent to-black/10">
                                        <icon.icon className="w-6 h-6 text-white drop-shadow-lg animate-pulse" />
                                    </div>
                                )}
                            </div>

                            {/* Label */}
                            {selectedIcon === idx && (
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                    <span className="text-xs font-semibold text-[#7e57c2] dark:text-[#9575cd]">
                                        {icon.emotion}
                                    </span>
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                        Each companion offers unique support. Together, they create your complete wellbeing ecosystem.
                    </p>
                    <button
                        onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#9575cd] via-[#7e57c2] to-[#673ab7] hover:from-[#b39ddb] hover:via-[#9575cd] hover:to-[#7e57c2] text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        <span>Start Your Journey</span>
                        <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}