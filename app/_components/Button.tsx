"use client"

import { ReactNode } from "react"

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
    "text-purple bg-light-purple hover:bg-light-purple border-purple border-2",
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
  onClick: () => void
  children?: ReactNode
}

export const Button = ({
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.MEDIUM,
  onClick,
  children,
  className,
}: ButtonProps) => {
  const baseStyles =
    "font-semibold rounded transition-colors flex items-center gap-1 rounded-2xl w-fit hover:cursor-pointer"
  const variantStyles = buttonVariants[variant]
  const sizeStyles = buttonSizes[size]

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
