"use client"

import { ReactNode } from "react"
import Link from "next/link"

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum ButtonSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export const buttonVariants = {
  primary: "bg-purple text-white hover:bg-medium-purple border-purple",
  secondary:
    "text-purple bg-light-purple hover:bg-medium-purple border-purple border-2",
}

export const buttonSizes = {
  small: "px-3 py-2 text-sm",
  medium: "px-4 py-3 text-base",
  large: "px-6 py-3 text-lg",
}

export type ButtonProps = {
  variant?: ButtonVariants
  size?: ButtonSizes
  className?: string
  onClick?: (e?: any) => void
  children?: ReactNode
  href?: string
  download?: string
}

export const Button = ({
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.MEDIUM,
  onClick,
  children,
  className,
  href,
  download,
}: ButtonProps) => {
  const baseStyles =
    "font-semibold rounded transition-colors flex items-center gap-1 rounded-2xl w-fit hover:cursor-pointer"
  const variantStyles = buttonVariants[variant]
  const sizeStyles = buttonSizes[size]

  return (
    <>
      {href ? (
        <Link
          className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
          href={href}
          download={download}
        >
          {children}
        </Link>
      ) : (
        <button
          className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  )
}
