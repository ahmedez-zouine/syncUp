"use client"

import Image from "next/image";

// MascotLogo component
export function MascotLogo({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-10 h-10 sm:w-24 sm:h-24 md:w-28 md:h-28">
        {/* Enhanced outer ring with stronger animation */}
        <div className="absolute -inset-3 bg-gradient-to-br from-[#a88bda] to-[#7e57c2] rounded-full opacity-70 blur-md animate-pulse-slow"></div>
        
        {/* Logo container with shadow - removed padding */}
        <div className="relative w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg z-10">
          {/* Logo image - removed border for more space */}
          <div className="w-full h-full rounded-full overflow-hidden">
            <Image 
              src="/like.png"
              width={320}
              height={320}
              alt="Mimaura Mascot Logo"
              priority
              className="w-full h-full object-contain scale-125 transform hover:scale-130 transition-transform duration-500"
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
        </div>
      </div>
    </div>
  );
}