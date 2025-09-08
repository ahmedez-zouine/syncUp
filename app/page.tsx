"use client";

import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/waitlist-form"
import { FeatureGrid } from "@/components/feature-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Calendar, Stethoscope, Shield, Brain, Clock, Share2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Mobile-optimized countdown component
function LaunchCountdown() {
  const launchDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +launchDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
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
  
  return (
    <section className="py-8 sm:py-12 bg-card/60 dark:bg-card/40 backdrop-blur-sm border-y border-border relative overflow-hidden">
      {/* Mobile-optimized background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-2 left-[5%] sm:top-5 sm:left-[10%] w-8 h-8 sm:w-16 sm:h-16 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-[5%] sm:bottom-5 sm:right-[10%] w-10 h-10 sm:w-20 sm:h-20 bg-secondary/10 rounded-full animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute top-[30%] right-[15%] sm:top-[40%] sm:right-[20%] w-6 h-6 sm:w-12 sm:h-12 bg-accent/10 rounded-full animate-ping opacity-50" style={{ animationDuration: "6s" }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
        <h3 className={`text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Launching Soon
        </h3>
        <p className={`text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} px-4`}>
          Get ready to experience SyncUp on your device
        </p>
        
        {/* Mobile-first countdown grid */}
        <div className={`grid grid-cols-4 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-sm sm:max-w-lg mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col items-center bg-card dark:bg-card/80 p-2 sm:p-4 rounded-lg shadow-lg border border-border/40 transform hover:scale-105 transition-transform">
            <span className="text-lg sm:text-4xl font-bold text-primary">{timeLeft.days}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Days</span>
          </div>
          <div className="flex flex-col items-center bg-card dark:bg-card/80 p-2 sm:p-4 rounded-lg shadow-lg border border-border/40 transform hover:scale-105 transition-transform">
            <span className="text-lg sm:text-4xl font-bold text-primary">{timeLeft.hours}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Hours</span>
          </div>
          <div className="flex flex-col items-center bg-card dark:bg-card/80 p-2 sm:p-4 rounded-lg shadow-lg border border-border/40 transform hover:scale-105 transition-transform">
            <span className="text-lg sm:text-4xl font-bold text-primary">{timeLeft.minutes}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Mins</span>
          </div>
          <div className="flex flex-col items-center bg-card dark:bg-card/80 p-2 sm:p-4 rounded-lg shadow-lg border border-border/40 transform hover:scale-105 transition-transform">
            <span className="text-lg sm:text-4xl font-bold text-primary">{timeLeft.seconds}</span>
            <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">Secs</span>
          </div>
        </div>
        
        {/* Mobile-optimized app store buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a 
            href="#" 
            className="group flex flex-col items-center gap-2 transition-all duration-300 w-full sm:w-auto"
            aria-label="Download on App Store"
          >
            <div className="h-12 sm:h-14 w-full sm:w-auto bg-black dark:bg-black rounded-xl flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 transform group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 max-w-[200px]">
              <div className="mr-2 flex-shrink-0">
                <svg viewBox="0 0 24 24" width="20" height="20" className="sm:w-7 sm:h-7" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.86-3.09.38-1.09-.5-2.08-.52-3.2 0-1.39.68-2.39.53-3.25-.38C3.2 15.89 3.1 9.24 7.53 8.9c1.17.06 2.96.85 3.9-.85C12.31 6.13 14.31 8 16.26 8c1.8.05 3.11 1.15 3.51 2.85-4.89 2.36-4.13 8.39.28 9.43Z" />
                  <path d="M12.77 4.7c.06-1.21 1.03-2.82 2.97-3.2.12 1.32-.37 2.8-1.14 3.69-.83.96-1.96 1.77-3.03 1.71-.15-1.22.5-2.78 1.2-3.2Z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white text-[0.6rem] sm:text-[0.65rem] leading-none">Download on the</span>
                <span className="text-white text-sm sm:text-[1.1rem] font-semibold leading-tight">App Store</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground opacity-80">Coming Soon</span>
          </a>
          
          <a 
            href="#" 
            className="group flex flex-col items-center gap-2 transition-all duration-300 w-full sm:w-auto"
            aria-label="Get it on Google Play"
          >
            <div className="h-12 sm:h-14 w-full sm:w-auto bg-black dark:bg-black rounded-xl flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 transform group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 max-w-[200px]">
              <div className="mr-2 flex-shrink-0">
                <svg viewBox="0 0 24 24" width="18" height="18" className="sm:w-6 sm:h-6" fill="white">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181-.181-.29-.435-.29-.713V2.527c0-.278.109-.532.29-.713zm10.89 10.89l2.901 2.901-9.621 5.306 6.72-8.207zm.703-.703l6.72-8.207-9.621 5.306 2.901 2.901zM3.312 1.08l9.621 5.306-2.901 2.901-6.72-8.207zm0 21.84l6.72-8.207 2.901 2.901-9.621 5.306z" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white text-[0.6rem] sm:text-[0.65rem] leading-none">GET IT ON</span>
                <span className="text-white text-sm sm:text-[1.1rem] font-semibold leading-tight">Google Play</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground opacity-80">Coming Soon</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Main HomePage component with mobile optimization
export default function HomePage() {
  const [isSharing, setIsSharing] = useState(false);

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      {/* <ThemeToggle /> */}

      {/* Mobile-optimized Hero Section */}
      <section className="relative px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24 text-center overflow-hidden">
        {/* Mobile-friendly background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-10 left-5 sm:top-20 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-primary/5 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-20 right-10 sm:top-40 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-accent/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-8 sm:bottom-40 sm:left-1/4 w-10 h-10 sm:w-20 sm:h-20 bg-primary/8 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Badge variant="secondary" className="mb-4 sm:mb-6 bg-card dark:bg-card/80 text-primary border-primary/20 animate-fade-in text-xs sm:text-sm px-3 py-1">
            <Stethoscope className="w-3 h-3 mr-1" />
            Coming Soon • Early Access
          </Badge>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance animate-slide-up leading-tight px-2">
            Track your cycle how it actually works.
            <span className="block text-primary mt-1 sm:mt-2">Not how apps think it should.</span>
          </h1>

          <p
            className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in px-4"
            style={{ animationDelay: "0.2s" }}
          >
            SyncUp is the first menstrual health app designed for everyone—supporting irregular cycles, health
            conditions, neurodivergent needs, and cultural considerations.
          </p>

          {/* Mobile-optimized feature badges */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 bg-card dark:bg-card/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-card-foreground font-medium">PCOS & Endometriosis Support</span>
            </div>
            <div className="flex items-center gap-2 bg-card dark:bg-card/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-card-foreground font-medium">Neurodivergent Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-card dark:bg-card/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-card-foreground font-medium">Irregular Cycle Tracking</span>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Mobile-optimized Features Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-card/40 dark:bg-card/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance px-4">
              Built for real bodies, real lives
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-4">
              Every person's cycle is unique. SyncUp adapts to your individual patterns, health conditions, and personal
              needs.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <FeatureGrid />
          </div>
        </div>
      </section>

      {/* Mobile-optimized Why SyncUp Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-balance animate-fade-in px-4">
            Why we're building SyncUp
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div
              className="bg-card dark:bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-xl sm:text-2xl font-bold text-primary mb-2">73%</div>
              <p className="text-sm sm:text-base text-card-foreground text-balance">
                of people with PCOS feel their cycle tracking apps don't meet their needs
              </p>
            </div>
            <div
              className="bg-card dark:bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-xl sm:text-2xl font-bold text-primary mb-2">1 in 4</div>
              <p className="text-sm sm:text-base text-card-foreground text-balance">
                menstruating people have irregular cycles that standard apps can't predict
              </p>
            </div>
            <div
              className="bg-card dark:bg-card/80 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-xl sm:text-2xl font-bold text-primary mb-2">0</div>
              <p className="text-sm sm:text-base text-card-foreground text-balance">
                existing apps designed specifically for neurodivergent users' needs
              </p>
            </div>
          </div>

          <p
            className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-balance leading-relaxed animate-fade-in px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Most cycle tracking apps assume a "perfect" 28-day cycle and ignore the reality of living with health
            conditions, neurodivergence, or cultural considerations. We're changing that.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 sm:px-8 py-3 transition-all duration-300 hover:scale-105 animate-scale-in w-full sm:w-auto"
            style={{ animationDelay: "0.5s" }}
          >
            <Shield className="w-4 h-4 mr-2" />
            Join Our Mission
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Launch Countdown */}
      <LaunchCountdown />

      {/* Mobile-optimized Social Sharing Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-12">
      <div className="bg-card dark:bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 text-center max-w-4xl mx-auto">
  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-4">
    🚀 Move Up the Waitlist - Share & Earn Early Access
  </h3>
  <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 px-2">
    Share your unique referral link and jump ahead for every friend who joins!
  </p>
  
  {/* Centered social sharing buttons */}
  <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
    {/* Twitter */}
    <Button 
      variant="outline" 
      size="sm" 
      className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white border-[#1DA1F2] text-xs h-10 min-w-[80px] sm:min-w-[100px]"
      onClick={() => window.open('https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20SyncUp%20waitlist%20for%20personalized%20cycle%20tracking%20that%20actually%20works!%20Join%20me%20%F0%9F%9A%80&url=your-referral-link', '_blank')}
    >
      <svg className="w-3 h-3 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
      <span className="hidden sm:inline">Tweet</span>
    </Button>
    
    {/* Facebook */}
    <Button 
      variant="outline" 
      size="sm"
      className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white border-[#1877F2] text-xs h-10 min-w-[80px] sm:min-w-[100px]"
      onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent('I just joined the SyncUp waitlist for personalized cycle tracking that actually works! Join me 🚀')}`, '_blank')}
    >
      <svg className="w-3 h-3 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      <span className="hidden sm:inline">Facebook</span>
    </Button>
    
    {/* Instagram */}
    <Button 
      variant="outline" 
      size="sm"
      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-xs h-10 min-w-[80px] sm:min-w-[100px]"
      onClick={() => window.open('https://www.instagram.com/', '_blank')}
    >
      <svg className="w-3 h-3 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
      <span className="hidden sm:inline">Instagram</span>
    </Button>
    
    {/* TikTok */}
    <Button 
      variant="outline" 
      size="sm"
      className="bg-[#000000] hover:bg-[#000000]/90 text-white border-[#000000] text-xs h-10 min-w-[80px] sm:min-w-[100px]"
      onClick={() => window.open(`https://www.tiktok.com/share?url=${encodeURIComponent(window.location.href)}`, '_blank')}
    >
      <svg className="w-3 h-3 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
      <span className="hidden sm:inline">TikTok</span>
    </Button>
    
    {/* Copy Link */}
    <Button 
      variant="outline" 
      size="sm"
      disabled={isSharing}
      className="text-xs h-10 min-w-[100px] sm:min-w-[120px]"
      onClick={async () => {
        if (isSharing) return;
        
        setIsSharing(true);
        
        try {
          if (navigator.share) {
            await navigator.share({
              title: 'SyncUp - Personalized Cycle Tracking',
              text: 'Join me on the SyncUp waitlist!',
              url: window.location.href
            });
          } else {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
          }
        } catch (error) {
          if ((error as Error).name !== 'AbortError') {
            try {
              await navigator.clipboard.writeText(window.location.href);
              alert('Link copied to clipboard!');
            } catch (clipboardError) {
              console.error('Share and clipboard both failed:', clipboardError);
            }
          }
        } finally {
          setIsSharing(false);
        }
      }}
    >
      <Share2 className="w-3 h-3 mr-1 sm:mr-2" />
      {isSharing ? 'Sharing...' : 'Copy Link'}
    </Button>
  </div>
</div>
      </section>

      {/* Mobile-optimized Footer */}
      <footer className="px-4 sm:px-6 py-8 sm:py-12 bg-primary dark:bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-3 sm:mb-4 px-4">Ready to Transform Your Health Journey?</h3>
          <p className="text-sm sm:text-base text-primary-foreground/80 mb-4 sm:mb-6 text-balance px-4">
            Born from frustration with existing apps that don't understand real bodies. We're building SyncUp together—where your signup doesn't just reserve your spot, it powers our mission to create inclusive, personalized health tracking.
          </p>
          
          {/* Final CTA */}
          <div className="mb-4 sm:mb-6">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              <Shield className="w-4 h-4 mr-2" />
              Secure Your Early Access Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          {/* Limited spots FOMO */}
          <p className="text-primary-foreground/70 text-xs sm:text-sm mb-4 sm:mb-6 px-4">
            ⚡ Only 158 early access spots remaining • Join 1,200+ people already in
          </p>
          
          <p className="text-primary-foreground/60 text-xs px-4">
            © 2025 SyncUp. Empowering health journeys, one cycle at a time.
          </p>
        </div>
      </footer>
    </div>
    
  )
  
}
