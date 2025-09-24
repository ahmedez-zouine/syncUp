"use client";

import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/waitlist-form"
import { FeatureGrid } from "@/components/feature-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Calendar, Stethoscope, Shield, Brain, Clock, Share2, Linkedin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Enhanced countdown component with better animations
function LaunchCountdown() {
  const launchDate = new Date(new Date().setMonth(new Date().getMonth() + 3));
  
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

  if (!mounted) return null;
  
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-card/60 via-card/40 to-transparent dark:from-card/40 dark:via-card/20 dark:to-transparent backdrop-blur-sm border-y border-border/50 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-2 left-[5%] sm:top-5 sm:left-[10%] w-8 h-8 sm:w-16 sm:h-16 bg-primary/10 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute bottom-2 right-[5%] sm:bottom-5 sm:right-[10%] w-10 h-10 sm:w-20 sm:h-20 bg-secondary/10 rounded-full animate-pulse blur-sm" style={{ animationDuration: "4s" }}></div>
        <div className="absolute top-[30%] right-[15%] sm:top-[40%] sm:right-[20%] w-6 h-6 sm:w-12 sm:h-12 bg-accent/10 rounded-full animate-ping opacity-30 blur-sm" style={{ animationDuration: "6s" }}></div>
        <div className="absolute top-[60%] left-[20%] w-4 h-4 sm:w-8 sm:h-8 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-[20%] right-[30%] w-6 h-6 sm:w-12 sm:h-12 bg-accent/5 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 relative z-10">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20 animate-soft-glow">
            <Clock className="w-3 h-3 mr-1" />
            App Launch Countdown
          </Badge>
        </div>
        
        <h3 className={`text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          Get Ready for <span className="text-gradient-soft">Crescenta</span>
        </h3>
        <p className={`text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} px-4 max-w-2xl mx-auto`}>
          Experience the future of personalized cycle tracking on your favorite device
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
              className="group flex flex-col items-center bg-card/80 dark:bg-card/60 backdrop-blur-sm p-3 sm:p-6 rounded-xl shadow-lg border border-border/40 transform hover:scale-105 hover:shadow-xl transition-all duration-300 hover:border-primary/30"
              style={{ 
                animationDelay: item.delay,
                animation: isVisible ? 'scaleIn 0.6s ease-out forwards' : 'none'
              }}
            >
              <span className="text-lg sm:text-5xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                {item.value}
              </span>
              <span className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Enhanced app store buttons with better animations */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            {
              store: 'App Store',
              subtitle: 'Download on the',
              icon: (
                <svg viewBox="0 0 24 24" width="24" height="24" className="sm:w-8 sm:h-8" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.86-3.09.38-1.09-.5-2.08-.52-3.2 0-1.39.68-2.39.53-3.25-.38C3.2 15.89 3.1 9.24 7.53 8.9c1.17.06 2.96.85 3.9-.85C12.31 6.13 14.31 8 16.26 8c1.8.05 3.11 1.15 3.51 2.85-4.89 2.36-4.13 8.39.28 9.43Z" />
                  <path d="M12.77 4.7c.06-1.21 1.03-2.82 2.97-3.2.12 1.32-.37 2.8-1.14 3.69-.83.96-1.96 1.77-3.03 1.71-.15-1.22.5-2.78 1.2-3.2Z" />
                </svg>
              )
            },
            {
              store: 'Google Play',
              subtitle: 'GET IT ON',
              icon: (
                <svg viewBox="0 0 24 24" width="22" height="22" className="sm:w-7 sm:h-7" fill="white">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181-.181-.29-.435-.29-.713V2.527c0-.278.109-.532.29-.713zm10.89 10.89l2.901 2.901-9.621 5.306 6.72-8.207zm.703-.703l6.72-8.207-9.621 5.306 2.901 2.901zM3.312 1.08l9.621 5.306-2.901 2.901-6.72-8.207zm0 21.84l6.72-8.207 2.901 2.901-9.621 5.306z" />
                </svg>
              )
            }
          ].map((store, index) => (
            <a 
              key={store.store}
              href="#" 
              className="group flex flex-col items-center gap-3 transition-all duration-500 w-full sm:w-auto hover:scale-105"
              aria-label={`Download on ${store.store}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="h-14 sm:h-16 w-full sm:w-auto bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 rounded-2xl flex items-center justify-center px-5 sm:px-6 py-3 transform group-hover:shadow-2xl transition-all duration-300 max-w-[220px] border border-gray-700/50">
                <div className="mr-3 flex-shrink-0">
                  {store.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-[0.6rem] sm:text-[0.7rem] leading-none opacity-90">
                    {store.subtitle}
                  </span>
                  <span className="text-white text-sm sm:text-[1.2rem] font-semibold leading-tight">
                    {store.store}
                  </span>
                </div>
              </div>
              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary animate-pulse">
                Coming Soon
              </Badge>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main HomePage component with enhanced animations and UX
export default function HomePage() {
  const [isSharing, setIsSharing] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-background relative">
      {/* <ThemeToggle /> */}

      {/* Enhanced Hero Section with parallax effect */}
      <section className="relative px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-28 text-center overflow-hidden">
        {/* Enhanced animated background with parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-10 left-5 sm:top-20 sm:left-10 w-20 h-20 sm:w-40 sm:h-40 bg-primary/5 rounded-full animate-float blur-3xl"
            style={{ 
              animationDelay: "0s",
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          ></div>
          <div
            className="absolute top-32 right-10 sm:top-48 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-accent/10 rounded-full animate-float blur-2xl"
            style={{ 
              animationDelay: "1s",
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          ></div>
          <div
            className="absolute bottom-32 left-8 sm:bottom-48 sm:left-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-primary/8 rounded-full animate-float blur-xl"
            style={{ 
              animationDelay: "2s",
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 sm:mb-8 bg-card/80 dark:bg-card/60 text-primary border-primary/20 backdrop-blur-sm text-sm px-4 py-2 animate-soft-glow">
              <Stethoscope className="w-4 h-4 mr-2" />
              Coming Soon • Early Access Available
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 sm:mb-8 text-balance animate-slide-up leading-tight px-2">
            Track your cycle how it 
            <span className="block text-gradient-soft mt-2">actually works.</span>
            <span className="block text-lg sm:text-2xl md:text-3xl font-medium text-muted-foreground mt-4 opacity-80">
              Not how apps think it should.
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto text-balance leading-relaxed animate-fade-in px-4"
            style={{ animationDelay: "0.2s" }}
          >
            The first hormone & cycle app that reflects <strong>real life</strong> — irregular rhythms, health conditions, neurodiversity, and cultural needs included.
          </p>

          {/* Enhanced feature badges with staggered animations */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6 mb-12 sm:mb-16 animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Heart, text: "PCOS & Endometriosis Support", color: "text-rose-500" },
              { icon: Brain, text: "Neurodivergent Friendly", color: "text-purple-500" },
              { icon: Calendar, text: "Irregular Cycle Tracking", color: "text-blue-500" }
            ].map((badge, index) => (
              <div 
                key={badge.text}
                className="group flex items-center gap-3 bg-card/80 dark:bg-card/60 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-border/50 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <badge.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${badge.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm sm:text-base text-card-foreground font-medium">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          <div className="animate-scale-in max-w-md mx-auto" style={{ animationDelay: "0.8s" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 bg-gradient-to-br from-card/40 via-transparent to-card/20 dark:from-card/20 dark:via-transparent dark:to-card/10 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-4">
              Built for <span className="text-gradient-soft">real bodies</span>, real lives
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance px-4 leading-relaxed">
              Every person's cycle is unique. Crescenta adapts to your individual patterns, health conditions, and personal needs with AI-powered precision.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <FeatureGrid />
          </div>
        </div>
      </section>

      {/* Enhanced Why Crescenta Section */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
              Our Mission
            </Badge>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 sm:mb-12 text-balance animate-fade-in px-4">
            Why we're building <span className="text-gradient-soft">Crescenta</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              { 
                stat: "73%", 
                text: "of people with PCOS feel their cycle tracking apps don't meet their needs",
                color: "from-rose-500 to-pink-500"
              },
              { 
                stat: "1 in 4", 
                text: "menstruating people have irregular cycles that standard apps can't predict",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                stat: "100%", 
                text: "impact-driven design—every feature built with real user needs in mind",
                color: "from-purple-500 to-violet-500"
              }
            ].map((item, index) => (
              <div
                key={item.stat}
                className="group bg-card/80 dark:bg-card/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-xl animate-scale-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.stat}
                </div>
                <p className="text-sm sm:text-base text-card-foreground text-balance leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10 text-balance leading-relaxed animate-fade-in px-4 max-w-4xl mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            Most cycle tracking apps assume a "perfect" 28-day cycle and ignore the reality of living with health
            conditions, neurodivergence, or cultural considerations. <strong>We're changing that.</strong>
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 sm:px-10 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in w-full sm:w-auto"
            style={{ animationDelay: "0.5s" }}
          >
            <Shield className="w-5 h-5 mr-3" />
            Join Our Mission
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </section>

      {/* Launch Countdown */}
      <LaunchCountdown />

      {/* Enhanced Social Sharing Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-card/80 to-card/60 dark:from-card/60 dark:to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-6 sm:p-10 text-center max-w-5xl mx-auto shadow-2xl">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
              🚀 Referral Program
            </Badge>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Move Up the Waitlist - Share & Earn Early Access
          </h3>
          <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-2 max-w-2xl mx-auto">
            Share your unique referral link and jump ahead for every friend who joins! Help us build a community that values inclusive health tracking.
          </p>
          
          {/* Enhanced CTA Button */}
          <div className="mb-8 sm:mb-10">
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-10 py-4 text-base sm:text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Get My Referral Link
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
          
          {/* Enhanced social sharing buttons with LinkedIn */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              {
                name: 'Twitter',
                color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90',
                url: 'https://twitter.com/intent/tweet?text=I%20just%20joined%20the%20Crescenta%20waitlist%20for%20personalized%20cycle%20tracking%20that%20actually%20works!%20Join%20me%20%F0%9F%9A%80&url=',
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )
              },
              {
                name: 'LinkedIn',
                color: 'bg-[#0077B5] hover:bg-[#0077B5]/90',
                url: 'https://www.linkedin.com/company/108910212/admin/dashboard/',
                icon: <Linkedin className="w-4 h-4" />
              },
              {
                name: 'Facebook',
                color: 'bg-[#1877F2] hover:bg-[#1877F2]/90',
                url: 'https://www.facebook.com/sharer/sharer.php?u=',
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )
              },
              {
                name: 'Instagram',
                color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0',
                url: 'https://www.instagram.com/_crescenta.com_/',
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )
              },
              {
                name: 'TikTok',
                color: 'bg-[#000000] hover:bg-[#000000]/90',
                url: 'https://www.tiktok.com/@Crescenta.com',
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                )
              },
              {
                name: 'Copy Link',
                color: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
                url: '',
                icon: <Share2 className="w-4 h-4" />
              }
            ].map((social, index) => (
              <Button 
                key={social.name}
                variant="outline" 
                size="sm"
                disabled={social.name === 'Copy Link' && isSharing}
                className={`${social.color} ${social.name !== 'Copy Link' ? 'text-white border-0' : ''} text-sm h-12 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (social.name === 'Copy Link') {
                    if (isSharing) return;
                    setIsSharing(true);
                    
                    const handleCopyLink = async () => {
                      try {
                        if (navigator.share) {
                          await navigator.share({
                            title: 'Crescenta - Personalized Cycle Tracking',
                            text: 'Join me on the Crescenta waitlist!',
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
                    };
                    
                    handleCopyLink();
                  } else {
                    const currentUrl = window.location.href;
                    let shareUrl = social.url;
                    
                    if (social.name === 'Twitter') {
                      shareUrl += encodeURIComponent(currentUrl);
                    } else if (social.name === 'LinkedIn') {
                      shareUrl += encodeURIComponent(currentUrl);
                    } else if (social.name === 'Facebook') {
                      shareUrl += `${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent('I just joined the Crescenta waitlist for personalized cycle tracking that actually works! Join me 🚀')}`;
                    } else {
                      shareUrl = social.url;
                    }
                    
                    window.open(shareUrl, '_blank');
                  }
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  {social.icon}
                  <span className="hidden sm:inline font-medium">
                    {social.name === 'Copy Link' && isSharing ? 'Copying...' : social.name}
                  </span>
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-transparent animate-pulse"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full animate-float"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6 px-4">
            Ready to Transform Your Health Journey?
          </h3>
          <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 text-balance px-4 max-w-2xl mx-auto leading-relaxed">
            Born from frustration with existing apps that don't understand real bodies. We're building Crescenta together—where your signup doesn't just reserve your spot, it powers our mission to create inclusive, personalized health tracking.
          </p>
          
          {/* Final CTA */}
          <div className="mb-6 sm:mb-8">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white/95 hover:bg-white text-primary hover:text-primary/90 font-semibold px-8 sm:px-10 py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Shield className="w-5 h-5 mr-3" />
              Secure Your Early Access Now
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </div>
          
          {/* FOMO element */}
          <div className="mb-6 sm:mb-8">
            <Badge variant="secondary" className="bg-white/20 text-primary-foreground border-white/30 text-sm px-4 py-2 animate-pulse">
              ⚡ Only 158 early access spots remaining • Join 1,200+ people already in
            </Badge>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Crescenta. Empowering health journeys, one cycle at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
