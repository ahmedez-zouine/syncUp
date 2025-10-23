"use client";
import { Analytics } from "@vercel/analytics/next"
import { useState, useEffect, SetStateAction } from "react";
import { WaitlistForm } from "@/components/waitlist-form"
import { FeatureGrid } from "@/components/feature-grid"
import { IconGallery } from "@/components/icon-gallery"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Calendar, Stethoscope, Shield, Brain, Clock, Share2, Linkedin, CheckCircle, Copy, Check } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MascotLogo } from "@/components/mascot-logo"
import { Toast } from "@/components/ui/toast"
import { ReferralSection } from "@/components/referral-section"
import { ShareLinksComponent } from "@/components/social-sharing"
import Image from "next/image";

// Enhanced countdown component with better animations and UI
function LaunchCountdown() {
  // Set a fixed launch date instead of calculating it dynamically on each render
  // This ensures the countdown is consistent and doesn't reset
  const launchDate = new Date("2025-12-11T12:00:00"); // Example: October 15, 2024
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const difference = + launchDate - + new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Handle countdown completion
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    
    calculateTimeLeft();
    const visibilityTimer = setTimeout(() => setIsVisible(true), 300);
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(visibilityTimer);
    };
  }, []);

  if (!mounted) return null;
  
  // Format the launch date for display
  const formattedLaunchDate = launchDate.toLocaleDateString('en-US', { 
    month: 'long',
    day: 'numeric', 
    year: 'numeric' 
  });
  
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-[#a88bda]/30 via-[#7e57c2]/20 to-transparent dark:from-[#4a3968]/40 dark:via-[#2d1b4e]/30 dark:to-transparent backdrop-blur-sm border-y border-[#a88bda]/40 dark:border-[#a88bda]/20 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-2 left-[5%] sm:top-5 sm:left-[10%] w-8 h-8 sm:w-16 sm:h-16 bg-[#a88bda]/20 dark:bg-[#a88bda]/30 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-2 right-[5%] sm:bottom-5 sm:right-[10%] w-10 h-10 sm:w-20 sm:h-20 bg-[#7e57c2]/20 dark:bg-[#7e57c2]/30 rounded-full animate-pulse blur-sm" style={{ animationDuration: "4s" }}></div>
        <div className="absolute top-[30%] right-[15%] sm:top-[40%] sm:right-[20%] w-6 h-6 sm:w-12 sm:h-12 bg-[#e0d3f5]/30 dark:bg-[#b39ddb]/20 rounded-full animate-ping opacity-30 blur-sm" style={{ animationDuration: "6s" }}></div>
        <div className="absolute top-[60%] left-[20%] w-4 h-4 sm:w-8 sm:h-8 bg-[#a88bda]/20 dark:bg-[#9575cd]/30 rounded-full animate-float"></div>
        <div className="absolute bottom-[20%] right-[30%] w-6 h-6 sm:w-12 sm:h-12 bg-[#7e57c2]/20 dark:bg-[#7e57c2]/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Added animated rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#a88bda]/10 dark:border-[#a88bda]/20 rounded-full animate-pulse-slow opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#a88bda]/5 dark:border-[#a88bda]/15 rounded-full animate-pulse-slow opacity-20" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="secondary" className="mb-4 bg-[#a88bda]/20 dark:bg-[#a88bda]/30 text-[#4a3968] dark:text-[#e1d8f1] border-[#a88bda]/30 dark:border-[#b39ddb]/50 animate-soft-glow">
            <Clock className="w-3 h-3 mr-1" />
            App Launch Countdown
          </Badge>
        </div>
        
        <h3 className={`text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          Get Ready for <span className="bg-gradient-to-r from-[#7e57c2] to-[#a88bda] dark:from-[#9575cd] dark:to-[#b39ddb] bg-clip-text text-transparent">Mimaura</span>
        </h3>
        <p className={`text-sm sm:text-lg text-muted-foreground mb-8 sm:mb-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} px-4 max-w-2xl mx-auto`}>
          Experience the future of personalized cycle tracking on your favourite device <span className="font-medium text-[#4a3968] dark:text-[#b39ddb]">launching {formattedLaunchDate}</span>
        </p>
          
        {/* Enhanced countdown grid with staggered animations */}
        <div className={`grid grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-10 max-w-lg sm:max-w-2xl mx-auto transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          {[
            { label: 'Days', value: timeLeft.days, delay: '0s' },
            { label: 'Hours', value: timeLeft.hours, delay: '0.1s' },
            { label: 'Minutes', value: timeLeft.minutes, delay: '0.2s' },
            { label: 'Seconds', value: timeLeft.seconds, delay: '0.3s' }
          ].map((item, index) => (
            <div 
              key={item.label}
              className="group flex flex-col items-center bg-gradient-to-b from-white/90 to-white/70 dark:from-white/10 dark:to-[#2d1b4e]/40 backdrop-blur-sm p-3 sm:p-6 rounded-xl shadow-sm border border-[#a88bda]/40 dark:border-[#a88bda]/20 transform hover:scale-105 hover:shadow-md transition-all duration-300 hover:border-[#a88bda] dark:hover:border-[#b39ddb]"
              style={{ 
                animationDelay: item.delay,
                animation: isVisible ? 'scaleIn 0.6s ease-out forwards' : 'none'
              }}
            >
              <span className="text-lg sm:text-5xl font-bold bg-gradient-to-r from-[#4a3968] to-[#7e57c2] dark:from-[#9575cd] dark:to-[#b39ddb] bg-clip-text text-transparent group-hover:from-[#7e57c2] group-hover:to-[#a88bda] dark:group-hover:from-[#b39ddb] dark:group-hover:to-[#673ab7] transition-all duration-300">
                {item.value.toString().padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider font-medium mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Enhanced waitlist section */}
        <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white/60 dark:bg-[#1a1230]/60 backdrop-blur-sm rounded-xl border border-[#a88bda]/40 dark:border-[#a88bda]/30 p-4 sm:p-6 max-w-md mx-auto shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#a88bda] dark:hover:border-[#b39ddb]">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold text-[#4a3968] dark:text-[#b39ddb]">Be the first to know</span> when Mimaura launches. Join our priority access list today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="w-full sm:flex-1 bg-gradient-to-r from-[#9575cd] to-[#7e57c2] hover:from-[#b39ddb] hover:to-[#673ab7] text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }}
                variant="outline"
                className="w-full sm:flex-1 border-[#a88bda]/40 dark:border-[#a88bda]/60 hover:bg-[#a88bda]/10 dark:hover:bg-[#a88bda]/20 text-[#4a3968] dark:text-[#b39ddb]"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Modern Social Sharing Section with improved dark mode
function SocialSharing({ isSharing, setIsSharing }: { isSharing: boolean; setIsSharing: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-[#f5f0fc] to-white dark:from-[#1a1230]/40 dark:to-transparent">
      <div className="bg-gradient-to-br from-white/90 to-white/80 dark:from-[#2d1b4e]/40 dark:to-[#1a1230]/60 backdrop-blur-sm border border-[#a88bda]/30 dark:border-[#a88bda]/20 rounded-3xl p-6 sm:p-8 text-center max-w-5xl mx-auto shadow-sm">
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="bg-[#a88bda]/20 dark:bg-[#a88bda]/30 text-[#4a3968] dark:text-[#e1d8f1] border-[#a88bda]/30 dark:border-[#a88bda]/50 animate-pulse">
            🚀 Referral Program
          </Badge>
        </div>
        
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4">
          Move Up the <span className="bg-gradient-to-r from-[#7e57c2] to-[#a88bda] dark:from-[#9575cd] dark:to-[#b39ddb] bg-clip-text text-transparent">Waitlist</span>
        </h3>
        
        <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 px-2 max-w-2xl mx-auto">
          Share your unique referral link and jump ahead for every friend who joins! Help us build a community that values inclusive health tracking.
        </p>
        
        {/* Modern sharing component */}
        <div className="max-w-2xl mx-auto">
          <ShareLinksComponent />
        </div>
      </div>
      
      {/* Referral benefits */}
      <div className="mt-8 pt-8 border-t border-[#a88bda]/20 dark:border-[#a88bda]/30">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            {
              title: "Skip the line",
              description: "Get early access before public launch",
              icon: <ArrowRight className="w-5 h-5" />
            },
            {
              title: "Premium features",
              description: "3 months free premium for every referral",
              icon: <Shield className="w-5 h-5" />
            },
            {
              title: "Shape the product",
              description: "Provide feedback that guides development",
              icon: <Heart className="w-5 h-5" />
            }
          ].map((benefit, index) => (
            <div key={index} className="flex flex-col items-center bg-white/50 dark:bg-[#2d1b4e]/40 p-4 rounded-lg border border-[#a88bda]/20 dark:border-[#a88bda]/30 hover:border-[#a88bda]/50 dark:hover:border-[#a88bda]/60 hover:shadow-sm transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-[#a88bda]/20 dark:bg-[#a88bda]/40 flex items-center justify-center mb-3">
                <div className="text-[#4a3968] dark:text-[#e1d8f1]">{benefit.icon}</div>
              </div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">{benefit.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Enhanced Footer Component with better dark mode support
function EnhancedFooter() {
  return (
    <footer className="pt-16 pb-12 bg-gradient-to-br from-[#7e57c2] via-[#9575cd] to-[#a88bda] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#a88bda]/20 to-transparent animate-pulse"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Added wave pattern */}
        <svg className="absolute bottom-0 left-0 w-full" 
             viewBox="0 0 1440 120" 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L48 8.3C96 17.2 192 33.8 288 47.8C384 61.7 480 72 576 64.2C672 56.3 768 30.5 864 22.7C960 14.8 1056 25.2 1152 33.8C1248 42.5 1344 50.2 1392 53.7L1440 58.3V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" 
                fill="white" fillOpacity="0.08"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Upper footer with logo, CTA and FOMO */}
        
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-white/20">
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-4">About Mimaura</h4>
            <p className="text-white/80 text-sm leading-relaxed">
              Mimaura is on a mission to revolutionize cycle tracking through personalized, inclusive technology. 
              We're building an app that reflects real bodies with irregular rhythms, health conditions, and diverse needs.
            </p>
            
            <div className="mt-6 flex gap-4">
              <a href="https://www.tiktok.com/@mimaura_app?_t=ZN-90hswU3Ooju&_r=1" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 hover:transform hover:scale-110">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 hover:transform hover:scale-110">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mimaura_app?igsh=bW84d2lwaHcxOGdi
" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 hover:transform hover:scale-110">
                <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-white transition-colors duration-200"><a href="mailto:hello@Mimaura.com">hello@Mimaura.com</a></li>
              <li>London, UK</li>
              <li className="hover:text-white transition-colors duration-200"><a href="#">Privacy Policy</a></li>
              <li className="hover:text-white transition-colors duration-200"><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Mimaura. Empowering health journeys, one cycle at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main HomePage component with enhanced animations and UX
export default function Home() {
  const [isSharing, setIsSharing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Detect scroll direction for enhanced animations
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0a1e] relative">
      <ThemeToggle />

      {/* Enhanced Hero Section with parallax effect */}
      <section className="relative px-4 sm:px-6 pt-14 sm:pt-16 pb-16 sm:pb-20 text-center overflow-hidden">
        {/* Enhanced animated background with parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-10 left-5 sm:top-20 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 bg-[#a88bda]/15 dark:bg-[#a88bda]/20 rounded-full animate-float blur-3xl"
            style={{ 
              animationDelay: "0s",
              transform: `translateY(${scrollY * 0.1}px) scale(${scrollDirection === "down" ? 1.05 : 1})`
            }}
          ></div>
          <div
            className="absolute top-32 right-10 sm:top-48 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-[#e0d3f5]/20 dark:bg-[#b39ddb]/10 rounded-full animate-float blur-2xl"
            style={{ 
              animationDelay: "1s",
              transform: `translateY(${scrollY * 0.15}px) scale(${scrollDirection === "up" ? 1.05 : 1})`
            }}
          ></div>
          <div
            className="absolute bottom-32 left-8 sm:bottom-48 sm:left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-[#7e57c2]/15 dark:bg-[#7e57c2]/20 rounded-full animate-float blur-xl"
            style={{ 
              animationDelay: "2s",
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#a88bda]/15 to-[#e0d3f5]/15 dark:from-[#7e57c2]/20 dark:to-[#4a3968]/20 rounded-full blur-3xl animate-pulse opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="animate-float-logo">
              <MascotLogo className="animate-fade-in shadow-sm" />
            </div>
          </div>

          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 sm:mb-8 bg-white/80 dark:bg-[#2d1b4e]/60 text-[#4a3968] dark:text-[#e1d8f1] border-[#a88bda]/30 dark:border-[#a88bda]/50 backdrop-blur-sm text-sm px-4 py-2 animate-soft-glow">
              <Stethoscope className="w-4 h-4 mr-2" />
              Coming Soon • Early Access Available
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-balance animate-slide-up leading-tight px-2">
            Track your cycle how it 
            <span className="block bg-gradient-to-r from-[#7e57c2] to-[#a88bda] dark:from-[#9575cd] dark:to-[#b39ddb] bg-clip-text text-transparent mt-2">actually works.</span>
            <span className="block text-lg sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mt-4 opacity-80">
              Not how apps think it should.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-balance leading-relaxed animate-fade-in px-4"
            style={{ animationDelay: "0.2s" }}
          >
            The first hormone & cycle app that reflects <strong>real life</strong> irregular rhythms, health conditions, neurodiversity, and cultural needs included.
          </p>

          {/* Enhanced feature badges with staggered animations */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6 mb-10 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Heart, text: "PCOS & Endometriosis Support", color: "text-[#9575cd]" },
              { icon: Brain, text: "Neurodivergent Friendly", color: "text-[#b39ddb]" },
              { icon: Calendar, text: "Irregular Cycle Tracking", color: "text-[#7e57c2]" }
            ].map((badge, index) => (
              <div 
                key={badge.text}
                className="group flex items-center gap-3 bg-white/80 dark:bg-[#2d1b4e]/60 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-[#a88bda]/40 dark:border-[#a88bda]/30 hover:border-[#a88bda] dark:hover:border-[#b39ddb] transition-all duration-500 hover:scale-105 hover:shadow-sm"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <badge.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${badge.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          <div id="about" className="animate-scale-in max-w-md mx-auto" style={{ animationDelay: "0.8s" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-[#a88bda]/20 via-transparent to-[#e0d3f5]/20 dark:from-[#4a3968]/30 dark:via-transparent dark:to-[#2d1b4e]/20 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-[#a88bda]/20 dark:bg-[#a88bda]/30 text-[#4a3968] dark:text-[#e1d8f1] border-[#a88bda]/30 dark:border-[#a88bda]/50">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6 text-balance px-4">
              Built for <span className="bg-gradient-to-r from-[#7e57c2] to-[#a88bda] dark:from-[#9575cd] dark:to-[#b39ddb] bg-clip-text text-transparent">real bodies</span>, real lives
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-balance px-4 leading-relaxed">
              Every person's cycle is unique. Mimaura adapts to your individual patterns, health conditions, and personal needs with AI-powered precision.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <FeatureGrid />
          </div>
        </div>
      </section>

      {/* Enhanced Why Mimaura Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 relative dark:bg-[#0f0a1e]/60">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-[#a88bda]/20 dark:bg-[#a88bda]/30 text-[#4a3968] dark:text-[#e1d8f1] border-[#a88bda]/30 dark:border-[#a88bda]/50">
              Our Mission
            </Badge>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-balance animate-fade-in px-4">
            Why we're building <span className="bg-gradient-to-r from-[#7e57c2] to-[#a88bda] dark:from-[#9575cd] dark:to-[#b39ddb] bg-clip-text text-transparent">Mimaura</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
            {[
              { 
                stat: "73%", 
                text: "of people with PCOS feel their cycle tracking apps don't meet their needs",
                color: "from-[#9575cd] to-[#7e57c2] dark:from-[#b39ddb] dark:to-[#9575cd]"
              },
              { 
                stat: "1 in 4", 
                text: "menstruating people have irregular cycles that standard apps can't predict",
                color: "from-[#7e57c2] to-[#9575cd] dark:from-[#9575cd] dark:to-[#673ab7]"
              },
              { 
                stat: "100%", 
                text: "impact-driven design—every feature built with real user needs in mind",
                color: "from-[#9575cd] to-[#b39ddb] dark:from-[#b39ddb] dark:to-[#9575cd]"
              }
            ].map((item, index) => (
              <div
                key={item.stat}
                className="group bg-white/80 dark:bg-[#2d1b4e]/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#a88bda]/40 dark:border-[#a88bda]/30 hover:border-[#a88bda] dark:hover:border-[#b39ddb] transition-all duration-500 hover:scale-105 hover:shadow-sm animate-scale-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.stat}
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 text-balance leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 text-balance leading-relaxed animate-fade-in px-4 max-w-4xl mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            Most cycle tracking apps assume a "perfect" 28-day cycle and ignore the reality of living with health
            conditions, neurodivergence, or cultural considerations. <strong>We're changing that.</strong>
          </p>

          <a
            href="https://www.linkedin.com/company/Mimaura/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#9575cd] to-[#7e57c2] hover:from-[#b39ddb] hover:to-[#673ab7] text-white font-semibold px-8 sm:px-10 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-sm animate-scale-in w-full sm:w-auto"
              style={{ animationDelay: "0.5s" }}
            >
              <Shield className="w-5 h-5 mr-3" />
              Join Our Mission
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </a>
        </div>
      </section>

      {/* Enhanced Launch Countdown */}
      <LaunchCountdown />
      
      {/* App Icons Gallery Section */}
      <IconGallery />

      {/* Enhanced Social Sharing Section */}
      <SocialSharing isSharing={isSharing} setIsSharing={setIsSharing} />

      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  );
}