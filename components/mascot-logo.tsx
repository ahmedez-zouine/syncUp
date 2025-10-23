"use client"

import Image from "next/image";

// MascotLogo component - Improved for better responsiveness and appearance
export function MascotLogo({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
        {/* Improved background glow with softer animation */}
        <div 
          className="absolute inset-0 -m-2 rounded-full opacity-0 animate-soft-glow"
          style={{
            background: 'radial-gradient(circle at center, rgba(168,139,218,0.6) 0%, rgba(126,87,194,0.4) 50%, transparent 70%)',
            filter: 'blur(8px)'
          }}
        ></div>
        
        {/* Logo container with improved shadow */}
        <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center z-10 overflow-hidden"
          style={{
            boxShadow: '0 4px 20px rgba(126,87,194,0.25), 0 2px 8px rgba(126,87,194,0.15), inset 0 0 0 1px rgba(255,255,255,0.1)'
          }}
        >
          {/* Logo image with better responsive sizing */}
          <div className="w-[90%] h-[90%] m-auto rounded-full overflow-hidden flex items-center justify-center">
            <Image 
              src="/like.png"
              width={240}
              height={240}
              alt="Mimaura Mascot Logo"
              priority
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                // Fallback if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = "flex items-center justify-center w-full h-full bg-gradient-to-br from-[#a88bda]/20 to-[#7e57c2]/20";
                  fallback.innerHTML = `<svg viewBox="0 0 24 24" width="48" height="48" fill="#4a3968"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z"/></svg>`;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
          
          {/* Subtle inner highlight effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-50 pointer-events-none"></div>
        </div>
        
        {/* Subtle outer ring */}
        <div className="absolute -inset-1 rounded-full border border-[#a88bda]/30 dark:border-[#a88bda]/20 opacity-70"></div>
      </div>
    </div>
  );
}

// Add keyframe animation for the soft glow effect
const styleSheet = typeof document !== 'undefined' ? document.styleSheets[0] : null;
if (styleSheet) {
  try {
    styleSheet.insertRule(`
      @keyframes soft-glow {
        0% { opacity: 0.3; transform: scale(0.95); }
        50% { opacity: 0.6; transform: scale(1.05); }
        100% { opacity: 0.3; transform: scale(0.95); }
      }
    `, styleSheet.cssRules.length);
    
    styleSheet.insertRule(`
      .animate-soft-glow {
        animation: soft-glow 3s ease-in-out infinite;
      }
    `, styleSheet.cssRules.length);
  } catch (e) {
    console.error('Failed to add animation styles', e);
  }
}