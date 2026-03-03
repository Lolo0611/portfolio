type BadgeProps = {
  text: string
}

export const Badge = ({ text }: BadgeProps) => {
  return (
    <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
      {text}
    </span>
  )
}
