import { ReactNode } from "react"

interface TagProps {
  children: ReactNode
  variant?: "default" | "outline"
  className?: string
}

export default function Tag({ children, variant = "default", className = "" }: TagProps) {
  const base = "font-code text-xs tracking-widest uppercase px-3 py-1.5 rounded-pill inline-flex items-center"
  const variants = {
    default: "bg-purple-light/20 text-purple-dark",
    outline: "border border-gray-muted text-gray",
  }
  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
