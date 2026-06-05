import { ReactNode } from "react"
import Link from "next/link"

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary" | "ghost"
  className?: string
  onClick?: () => void
  external?: boolean
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  external = false,
}: ButtonProps) {
  const base =
    "font-ui font-medium text-sm inline-flex items-center gap-2 transition-all duration-200 rounded-pill px-6 py-3"

  const variants = {
    primary: "bg-purple-dark text-white hover:bg-purple",
    secondary: "bg-white text-purple-dark border border-purple-dark/20 hover:bg-lavender",
    ghost: "text-gray hover:text-purple-dark",
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
