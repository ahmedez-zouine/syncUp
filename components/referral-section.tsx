"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Shield, Share2, Linkedin, CheckCircle } from "lucide-react";
import { ShareLinksComponent } from "@/components/social-sharing";

export function ReferralSection() {
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