"use client";

import { useEffect, useState } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
  appTitle?: string;
}

export function VideoModal({ videoId, isOpen, onClose, appTitle = "App Demo" }: VideoModalProps) {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setAnimateIn(true), 10);
    } else {
      document.body.style.overflow = "";
      setAnimateIn(false);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop with blur effect */}
      <div 
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          animateIn ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal container */}
      <div 
        className={`relative bg-background rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl transform transition-all duration-500 ${
          animateIn ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background/90 transition-all"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        {/* YouTube embed with responsive container */}
        <div className="aspect-video w-full bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Optional title/description area */}
        <div className="border-t border-border bg-gradient-to-r from-background via-background/95 to-background">
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground flex items-center animate-fade-in">
                <span className="text-primary mr-2">▶</span> 
                {appTitle}
                <span className="ml-2 text-sm font-normal text-primary/80 animate-pulse-slow">(Preview)</span>
              </h3>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 text-muted-foreground animate-fade-in"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                Open in YouTube
              </Button>
            </div>
            
            <div className="mt-4 overflow-hidden grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed animate-slide-up">
                  Watch a quick demo of the app in action. This video showcases the 
                  <span className="text-primary font-medium mx-1 animate-highlight">key features</span> 
                  and 
                  <span className="text-secondary font-medium mx-1 animate-highlight" style={{ animationDelay: "0.5s" }}>user experience</span>.
                </p>
                
                <div className="flex flex-wrap items-center mt-4 text-xs text-muted-foreground/80 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-center mr-4 mb-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-ping-slow"></span>
                    <span>HD Quality</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mr-1.5 animate-ping-slow" style={{ animationDelay: "1s" }}></span>
                    <span>Demo Version</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block border-l border-border pl-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h4 className="text-sm font-medium text-foreground mb-2">Keyboard Shortcuts</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-muted rounded text-muted-foreground mr-2">Space</kbd>
                    <span className="text-muted-foreground">Play/Pause</span>
                  </div>
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-muted rounded text-muted-foreground mr-2">F</kbd>
                    <span className="text-muted-foreground">Fullscreen</span>
                  </div>
                  <div className="flex items-center">
                    <kbd className="px-2 py-1 bg-muted rounded text-muted-foreground mr-2">Esc</kbd>
                    <span className="text-muted-foreground">Close</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}