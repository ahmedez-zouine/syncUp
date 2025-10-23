"use client";

import { useState } from "react";
import { Copy, Check, CheckCircle, Share2, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toast } from "@/components/ui/toast";

export function ShareLinksComponent() {
  const [isSharing, setIsSharing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const copyToClipboard = async () => {
    if (isSharing) return;
    setIsSharing(true);
    
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setShowToast(true);
      
      // Reset copied state after a delay
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      
      // Hide toast after duration
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error('Failed to copy:', error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <>
      {/* Referral link display */}
      <div className="bg-gray-50/80 dark:bg-[#1a1230]/60 border border-[#a88bda]/20 dark:border-[#a88bda]/30 rounded-lg p-3 flex items-center justify-between mb-8 max-w-2xl mx-auto relative group/link">
        <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left text-sm sm:text-base text-gray-500 dark:text-gray-400 pl-2 group-hover/link:text-[#673ab7] dark:group-hover/link:text-[#b39ddb] transition-colors">
          {typeof window !== 'undefined' ? window.location.href : 'https://www.mimaura.com/'}
        </div>
        <Button 
          variant="outline" 
          size="sm"
          disabled={isSharing}
          className="relative overflow-hidden border-[#a88bda] dark:border-[#a88bda]/70 text-[#4a3968] dark:text-[#b39ddb] hover:bg-[#a88bda]/20 dark:hover:bg-[#a88bda]/30 transition-all duration-300 shadow-sm hover:shadow-md group"
          onClick={copyToClipboard}
        >
          {/* Improved ripple effect */}
          <span className="absolute inset-0 bg-[#a88bda]/30 dark:bg-[#a88bda]/40 rounded-md scale-0 opacity-0 group-active:scale-100 group-active:opacity-100 transition-all duration-300 origin-center"></span>
          
          <span className="flex items-center relative z-10">
            <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[#9575cd] to-[#7e57c2] dark:from-[#b39ddb] dark:to-[#673ab7] flex items-center justify-center mr-2 shadow-sm">
              {isSharing ? 
                <span className="animate-spin w-3 h-3 border-2 border-white border-t-transparent rounded-full"></span> :
                isCopied ? 
                  <Check className="w-3 h-3 text-white animate-in fade-in-50 zoom-in-75 duration-300" /> :
                  <Copy className="w-3 h-3 text-white" />
              }
            </span>
            <span className="font-medium">
              {isSharing ? 'Copying...' : isCopied ? 'Copied!' : 'Copy Link'}
            </span>
          </span>
        </Button>
      </div>
      
      {/* Toast notification using our new component */}
      <Toast
        variant="success"
        icon={
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        }
        title="Link copied!"
        description="Share Mimaura"
        open={showToast}
        onOpenChange={setShowToast}
        position="bottom"
      />
      
      {/* Enhanced Social sharing buttons with proper platform integration */}
      <div className="space-y-5 mb-12">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
          Share on social media
        </h4>
        
        {/* Social media platform buttons - small circular design */}
        <div className="flex flex-wrap items-center justify-center gap-4 mx-auto">
          {[
            {
              name: "Facebook",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              ),
              shareUrl: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent("Join me on SyncUp - The first cycle app that reflects real life!")}`,
              color: "bg-[#1877F2]",
              label: "Facebook"
            },
            {
              name: "Twitter",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              ),
              shareUrl: () => `https://twitter.com/intent/tweet?text=${encodeURIComponent("I just joined SyncUp - The first hormone & cycle app that reflects real life irregular rhythms! Join me 🚀")}&url=${encodeURIComponent(window.location.href)}`,
              color: "bg-black",
              label: "Twitter"
            },
            {
              name: "Instagram",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              ),
              shareUrl: () => "https://www.instagram.com/mimaura_app?igsh=bW84d2lwaHcxOGdi",
              color: "bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#fd1d1d]",
              label: "Instagram"
            },
            {
              name: "TikTok",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              ),
              shareUrl: () => "https://www.tiktok.com/@mimaura_app?_t=ZN-90hswU3Ooju&_r=1",
              color: "bg-black",
              label: "TikTok" 
            },
            {
              name: "LinkedIn",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              ),
              shareUrl: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
              color: "bg-[#0077B5]",
              label: "LinkedIn"
            }
          ].map((platform) => (
            <button
              key={platform.name}
              className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${platform.color} transition-all duration-300 hover:shadow-lg transform hover:scale-110`}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const url = platform.shareUrl();
                  window.open(url, '_blank', 'noopener,noreferrer');
                }
              }}
              aria-label={`Share on ${platform.name}`}
            >
              <span className="flex-shrink-0">{platform.icon}</span>
            </button>
          ))}
        </div>
        
        {/* Share link helper text */}
        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
          The more you share, the higher you move up the waitlist!
        </p>
      </div>
    </>
  );
}