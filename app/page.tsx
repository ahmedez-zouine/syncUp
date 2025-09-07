"use client";

import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/waitlist-form"
import { FeatureGrid } from "@/components/feature-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Calendar, Stethoscope, Shield, Brain, Clock } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Animated countdown component
function LaunchCountdown() {
  // Set launch date to 3 months from now
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
    
    // Set initial values
    calculateTimeLeft();
    
    // Set visibility after a delay for entrance animation
    const visibilityTimer = setTimeout(() => setIsVisible(true), 300);
    
    // Update the countdown every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Cleanup on unmount
    return () => {
      clearInterval(timer);
      clearTimeout(visibilityTimer);
    };
  }, []);
  
  return (
    <div className="py-12 bg-card/60 backdrop-blur-sm border-y border-border relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-5 left-[10%] w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-5 right-[10%] w-20 h-20 bg-secondary/10 rounded-full animate-pulse" style={{ animationDuration: "4s" }}></div>
        <div className="absolute top-[40%] right-[20%] w-12 h-12 bg-accent/10 rounded-full animate-ping opacity-50" style={{ animationDuration: "6s" }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h3 className={`text-2xl font-bold text-foreground mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Launching Soon
        </h3>
        <p className={`text-muted-foreground mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          Get ready to experience SyncUp on your device
        </p>
        
        <div className={`flex flex-wrap items-center justify-center gap-4 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-lg border border-border/40 min-w-20 transform hover:scale-105 transition-transform">
            <span className="text-4xl font-bold text-primary">{timeLeft.days}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Days</span>
          </div>
          <div className="text-2xl text-muted-foreground">:</div>
          <div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-lg border border-border/40 min-w-20 transform hover:scale-105 transition-transform">
            <span className="text-4xl font-bold text-primary">{timeLeft.hours}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Hours</span>
          </div>
          <div className="text-2xl text-muted-foreground">:</div>
          <div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-lg border border-border/40 min-w-20 transform hover:scale-105 transition-transform">
            <span className="text-4xl font-bold text-primary">{timeLeft.minutes}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Minutes</span>
          </div>
          <div className="text-2xl text-muted-foreground">:</div>
          <div className="flex flex-col items-center bg-card p-4 rounded-lg shadow-lg border border-border/40 min-w-20 transform hover:scale-105 transition-transform">
            <span className="text-4xl font-bold text-primary">{timeLeft.seconds}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Seconds</span>
          </div>
        </div>
        
        <div className={`flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a 
            href="#" 
            className="group flex flex-col items-center gap-2 transition-all duration-300"
            aria-label="Download on App Store"
          >
            <div className="h-14 w-auto bg-black rounded-xl flex items-center px-5 py-2.5 transform group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
              <div className="mr-2">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="white" className="group-hover:animate-pulse">
                  <path d="M17.05 20.28c-.98.95-2.05.86-3.09.38-1.09-.5-2.08-.52-3.2 0-1.39.68-2.39.53-3.25-.38C3.2 15.89 3.1 9.24 7.53 8.9c1.17.06 2.96.85 3.9-.85C12.31 6.13 14.31 8 16.26 8c1.8.05 3.11 1.15 3.51 2.85-4.89 2.36-4.13 8.39.28 9.43Z" />
                  <path d="M12.77 4.7c.06-1.21 1.03-2.82 2.97-3.2.12 1.32-.37 2.8-1.14 3.69-.83.96-1.96 1.77-3.03 1.71-.15-1.22.5-2.78 1.2-3.2Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[0.65rem] leading-none">Download on the</span>
                <span className="text-white text-[1.1rem] font-semibold leading-tight">App Store</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground opacity-80">Coming Soon</span>
          </a>
          
          <a 
            href="#" 
            className="group flex flex-col items-center gap-2 transition-all duration-300"
            aria-label="Get it on Google Play"
          >
            <div className="h-14 w-auto bg-black rounded-xl flex items-center px-5 py-2.5 transform group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
              <div className="mr-2">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className="group-hover:animate-pulse">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181-.181-.29-.435-.29-.713V2.527c0-.278.109-.532.29-.713zm10.89 10.89l2.901 2.901-9.621 5.306 6.72-8.207zm.703-.703l6.72-8.207-9.621 5.306 2.901 2.901zM3.312 1.08l9.621 5.306-2.901 2.901-6.72-8.207zm0 21.84l6.72-8.207 2.901 2.901-9.621 5.306z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-[0.65rem] leading-none">GET IT ON</span>
                <span className="text-white text-[1.1rem] font-semibold leading-tight">Google Play</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground opacity-80">Coming Soon</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-20 h-20 bg-primary/8 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Badge variant="secondary" className="mb-6 bg-card text-primary border-primary/20 animate-fade-in">
            <Stethoscope className="w-3 h-3 mr-1" />
            Coming Soon • Early Access
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance animate-slide-up">
            Your cycle, your way.
            <span className="block text-primary">Inclusive. Personal. Empowering.</span>
          </h1>

          <p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            SyncUp is the first menstrual health app designed for everyone—supporting irregular cycles, health
            conditions, neurodivergent needs, and cultural considerations.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 bg-card backdrop-blur-sm px-4 py-2 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm text-card-foreground font-medium">PCOS & Endometriosis Support</span>
            </div>
            <div className="flex items-center gap-2 bg-card backdrop-blur-sm px-4 py-2 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm text-card-foreground font-medium">Neurodivergent Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-card backdrop-blur-sm px-4 py-2 rounded-full border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-card-foreground font-medium">Irregular Cycle Tracking</span>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="px-6 py-24 bg-card/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Built for real bodies, real lives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Every person's cycle is unique. SyncUp adapts to your individual patterns, health conditions, and personal
              needs.
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <FeatureGrid />
          </div>
        </div>
      </section>

      {/* Why SyncUp Section */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance animate-fade-in">
            Why we're building SyncUp
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div
              className="bg-card backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-2xl font-bold text-primary mb-2">73%</div>
              <p className="text-card-foreground text-balance">
                of people with PCOS feel their cycle tracking apps don't meet their needs
              </p>
            </div>
            <div
              className="bg-card backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-2xl font-bold text-primary mb-2">1 in 4</div>
              <p className="text-card-foreground text-balance">
                menstruating people have irregular cycles that standard apps can't predict
              </p>
            </div>
            <div
              className="bg-card backdrop-blur-sm p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-2xl font-bold text-primary mb-2">0</div>
              <p className="text-card-foreground text-balance">
                existing apps designed specifically for neurodivergent users' needs
              </p>
            </div>
          </div>

          <p
            className="text-lg text-muted-foreground mb-8 text-balance leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Most cycle tracking apps assume a "perfect" 28-day cycle and ignore the reality of living with health
            conditions, neurodivergence, or cultural considerations. We're changing that.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 transition-all duration-300 hover:scale-105 animate-scale-in"
            style={{ animationDelay: "0.5s" }}
          >
            <Shield className="w-4 h-4 mr-2" />
            Join Our Mission
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Add the countdown section here */}
      <LaunchCountdown />
      {/* Footer */}
      <footer className="px-6 py-12 bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">SyncUp</h3>
          <p className="text-primary-foreground/80 mb-6 text-balance">
          Hello world, here at team SyncUp because I was tired of juggling 6 apps and still not finding answers. We’re building this together  and your signup shapes the future
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © 2025 SyncUp. Empowering health journeys, one cycle at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
