import { WaitlistForm } from "@/components/waitlist-form"
import { FeatureGrid } from "@/components/feature-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Calendar, Stethoscope, Shield, Brain, Menu as MenuIcon, Moon, Smartphone, Tablet, Laptop, Monitor, Phone, Link } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MultiPhoneShowcase } from "@/components/multi-phone-showcase"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
           <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 ">
        <div className="container flex h-16 items-center justify-between">
          {
          /* <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-md">
              <Moon className="h-4 w-4 text-white transform -rotate-12" />
            </div>
            <span className="font-bold text-xl text-foreground">SyncUp</span>
          </div> */
          }
          {
          /* Desktop Navigation */
          }
          {
          /* <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav> */
          }
          
          <div className="flex items-center gap-2">
            {
            /* Theme Toggle Button */
            }
            <ThemeToggle />
            
            {
            /* CTA Button - Desktop */
            }
            <Button className="hidden md:flex bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg shadow-primary/20 group">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
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

  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full animate-float dark:animate-dark-float opacity-60" style={{ animationDelay: "0s" }}></div>
    <div className="absolute bottom-20 -left-10 w-32 h-32 bg-accent/10 rounded-full animate-float dark:animate-dark-float opacity-40" style={{ animationDelay: "2s" }}></div>
    <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/8 rounded-full animate-float dark:animate-dark-float opacity-50" style={{ animationDelay: "1s" }}></div>
  </div>
  
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-8 md:mb-16">
      <div className="inline-block bg-primary/10 dark:bg-primary/20 px-4 py-1.5 rounded-full mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <span className="text-sm font-medium text-primary dark:text-primary-foreground/90">Inclusive Design</span>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 text-balance animate-slide-up" style={{ animationDelay: "0.2s" }}>
        Built for real bodies, real lives
      </h2>
      
      <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance animate-slide-up" style={{ animationDelay: "0.3s" }}>
        Every person's cycle is unique. SyncUp adapts to your individual patterns, health conditions, and personal
        needs.
      </p>
    </div>

    {/* MultiPhoneShowcase with theme-aware modifications */}
      <MultiPhoneShowcase
        subtitle="Experience SyncUp on any device"
        centerApp={{
          title: "SyncUp",
          subtitle: "Your personalized cycle tracking companion",
          image: "/mobile-presentation-app-demo.png",
          tech: "Main App",
          color: "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground",
          videoId: "di6MS85eSP8" // YouTube video ID
        }}
        leftApp={{
          title: "Track & Log",
          subtitle: "Monitor symptoms and patterns seamlessly",
          image: "/mobile-presentation-app-demo.png",
          tech: "Core Feature",
          color: "bg-rose-500 text-white dark:bg-rose-600",
          videoId: "di6MS85eSP8" // YouTube video ID
        }}
        rightApp={{
          title: "Health Insights",
          subtitle: "Get personalized recommendations",
          image: "/mobile-presentation-app-demo.png",
          tech: "Analytics",
          color: "bg-pink-500 text-white dark:bg-pink-600",
          videoId: "di6MS85eSP8" // YouTube video ID
        }}
      />
      
      {/* Mobile indicator dots */}
      <div className="flex justify-center gap-1.5 mt-4 sm:hidden animate-fade-in" style={{ animationDelay: "0.9s" }}>
        <div className="w-2 h-2 rounded-full bg-primary/70 dark:bg-primary/60 animate-pulse-subtle"></div>
        <div className="w-2 h-2 rounded-full bg-primary/40 dark:bg-primary/30 animate-pulse-subtle" style={{ animationDelay: "0.3s" }}></div>
        <div className="w-2 h-2 rounded-full bg-primary/40 dark:bg-primary/30 animate-pulse-subtle" style={{ animationDelay: "0.6s" }}></div>
        <div className="w-2 h-2 rounded-full bg-primary/40 dark:bg-primary/30 animate-pulse-subtle" style={{ animationDelay: "0.9s" }}></div>
      </div>

      {/* Mobile experience note - Made more compact */}
      <div className="mt-6 sm:mt-8 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <p className="inline-flex items-center gap-2 px-3 py-1.5 bg-card/60 dark:bg-card/40 rounded-full text-xs sm:text-sm text-muted-foreground border border-border dark:border-slate-800 hover:border-primary/30 dark:hover:border-primary/20 transition-all duration-300">
          <Smartphone className="w-3 h-3 text-primary dark:text-primary/80" />
          <span>Optimized for all devices</span>
        </p>
      </div>
    
    {/* Mobile experience note */}
    <div className="mt-10 text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
      <p className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 dark:bg-card/40 rounded-full text-sm text-muted-foreground border border-border hover:border-primary/30 transition-all duration-300">
        <span>Perfectly optimized for all devices</span>
      </p>
    </div>
  </div>

      {/* Why SyncUp Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-24">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-6 text-balance animate-fade-in">
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

      {/* Footer */}
      <footer className="px-6 py-12 bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">SyncUp</h3>
          <p className="text-primary-foreground/80 mb-6 text-balance">
            Inclusive menstrual health tracking for everyone. Built with care, designed for diversity.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            © 2024 SyncUp. Empowering health journeys, one cycle at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}

//                            [ Server 15 ]  [ Server 13 ] [ Server 14 ]
//                                  /                \         /
//                                 /                  \       /
//         [ Server 11 ] ------ [ Server 1 ]       [ Server 12 ]
//                               /        \          /
//                              /          \        /
//                   [ Server 2 ]          [ Server 3 ]
//                     /       \                      \
//                    /         \                      \
//            [ Server 4 ]    [ Server 5 ]         [ Server 6 ]
//             /    |    \                           /
//            /     |     \                         /
//           /      |      \____                   /
//          /       |           \                 /
//  [ Server 7 ] [ Server 8 ] [ Server 9 ]   [ Server 10 ]

//                                   :
//                                [ etc. ]
//                                   :

