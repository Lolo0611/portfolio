type BadgeProps = {
  text: string
}

export const Badge = ({ text }: BadgeProps) => {
  return (
    <span className="mr-2 mb-2 inline-block text-sm text-gray-700">{text}</span>
  )
}
