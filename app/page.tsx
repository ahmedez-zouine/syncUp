import { WaitlistForm } from "@/components/waitlist-form"
import { FeatureGrid } from "@/components/feature-grid"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Heart, Calendar, Stethoscope, Shield, Brain } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
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
