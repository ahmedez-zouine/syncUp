"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoModal } from "@/components/video-modal";

interface ShowcaseApp {
  title: string;
  subtitle: string;
  image: string;
  tech: string;
  color: string;
  videoId?: string; // Add YouTube video ID
}

interface MultiPhoneShowcaseProps {
  subtitle: string;
  centerApp: ShowcaseApp;
  leftApp: ShowcaseApp;
  rightApp: ShowcaseApp;
}

export function MultiPhoneShowcase({
  subtitle,
  centerApp,
  leftApp,
  rightApp,
}: MultiPhoneShowcaseProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");

  const openVideoModal = (videoId: string) => {
    setActiveVideoId(videoId);
    setIsVideoModalOpen(true);
  };

  return (
    <section className="py-6 px-6 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Three Phone Layout */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center justify-items-center">
            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-64 h-[520px] rounded-[3rem] p-2 shadow-2xl transform lg:rotate-12 hover:rotate-6 transition-all duration-500 hover:scale-105">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="h-full">
                    <img
                      src={leftApp.image || "/placeholder.svg"}
                      alt={leftApp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">{leftApp.title}</h3>
                <p className="text-sm text-muted-foreground">{leftApp.tech}</p>
                
                {/* Added Play Button for left app */}
                {leftApp.videoId && (
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="mt-2 border-2 border-blue-300 border-dashed rounded-md active:border-blue-800"
                    onClick={() => openVideoModal(leftApp.videoId!)}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Watch Demo
                  </Button>
                )}
              </div>
            </div>

            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="w-72 h-[580px] rounded-[3rem] p-2 shadow-2xl hover:scale-105 transition-all duration-500 z-10 relative">
                <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative">
                  <div className="relative h-full">
                    <img
                      src={centerApp.image || "/placeholder.svg"}
                      alt={centerApp.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-center items-center text-white p-6">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">
                          {centerApp.title}
                        </h3>
                        <p className="text-sm opacity-90">
                          {centerApp.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${centerApp.color}`}
                >
                  {centerApp.tech}
                </div>
                <div className="flex gap-3 justify-center">
                  <Button 
                    size="sm" 
                    className="px-6 group relative overflow-hidden"
                    onClick={() => centerApp.videoId && openVideoModal(centerApp.videoId)}
                    disabled={!centerApp.videoId}
                  >
                    {/* Animated background hover effect */}
                    <div className="absolute inset-0 w-full bg-gradient-to-r from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Play icon with animation */}
                    <div className="relative z-10 flex items-center">
                      <span className="relative">
                        <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        <span className="absolute -inset-1 rounded-full bg-primary/20 animate-ping-slow opacity-0 group-hover:opacity-100"></span>
                      </span>
                      Demo
                    </div>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="px-6 bg-transparent hover:bg-primary/10 transition-colors"
                    onClick={() =>
                      window.open(
                        `/projects/${centerApp.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`,
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover:rotate-12" />
                    Details
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="relative animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-64 h-[520px] rounded-[3rem] p-2 shadow-2xl lg:-rotate-12 hover:-rotate-6 transition-all duration-500 hover:scale-105">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  <div className="h-full">
                    <img
                      src={rightApp.image || "/placeholder.svg"}
                      alt={rightApp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg">{rightApp.title}</h3>
                <p className="text-sm text-muted-foreground">{rightApp.tech}</p>
                
                {/* Added Play Button for right app */}
                {rightApp.videoId && (
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="mt-2 border-2 border-blue-300 border-dashed rounded-md active:border-blue-800"
                    onClick={() => openVideoModal(rightApp.videoId!)}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Watch Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoId={activeVideoId}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
}
