"use client"

import * as React from "react"
import { CheckCircle, AlertCircle, Info, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "info"
  title?: string
  description?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  duration?: number
  position?: "top" | "bottom" | "top-right" | "top-left" | "bottom-right" | "bottom-left"
  icon?: React.ReactNode
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant = "success", title, description, open, onOpenChange, duration = 3000, position = "bottom", icon, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(open)

    React.useEffect(() => {
      setIsVisible(open)
      
      if (open) {
        const timer = setTimeout(() => {
          setIsVisible(false)
          onOpenChange?.(false)
        }, duration)
        
        return () => clearTimeout(timer)
      }
    }, [open, duration, onOpenChange])

    const variantStyles = {
      success: {
        background: "bg-gradient-to-r from-[#7e57c2] to-[#9575cd] dark:from-[#673ab7] dark:to-[#9575cd]",
        icon: <CheckCircle className="w-5 h-5 text-white" />
      },
      error: {
        background: "bg-gradient-to-r from-red-500 to-red-400 dark:from-red-600 dark:to-red-500",
        icon: <AlertCircle className="w-5 h-5 text-white" />
      },
      info: {
        background: "bg-gradient-to-r from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500", 
        icon: <Info className="w-5 h-5 text-white" />
      }
    }

    const positionStyles = {
      "top": "fixed top-4 left-1/2 -translate-x-1/2",
      "bottom": "fixed bottom-4 left-1/2 -translate-x-1/2",
      "top-right": "fixed top-4 right-4",
      "top-left": "fixed top-4 left-4",
      "bottom-right": "fixed bottom-4 right-4",
      "bottom-left": "fixed bottom-4 left-4"
    }

    return (
      <div
        ref={ref}
        className={cn(
          positionStyles[position],
          variantStyles[variant].background,
          "px-4 py-3 rounded-lg shadow-lg text-white z-50 flex items-center gap-3",
          "transform transition-all duration-500",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none",
          className
        )}
        role="alert"
        {...props}
      >
        {icon || variantStyles[variant].icon}
        <div className="flex-1">
          {title && <h5 className="font-medium">{title}</h5>}
          {description && <p className="text-sm opacity-90">{description}</p>}
        </div>
        <button
          onClick={() => {
            setIsVisible(false)
            onOpenChange?.(false)
          }}
          className="p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    )
  }
)

Toast.displayName = "Toast"

export { Toast }