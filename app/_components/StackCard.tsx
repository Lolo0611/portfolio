type StackCardProps = {
  width?: number
  height?: number
  content: React.ReactNode
}

export const StackCard = ({ width, height, content }: StackCardProps) => {
  return (
    <div className="group relative">
      <div
        style={{ width, height }}
        className="absolute inset-0 scale-102 rounded-lg bg-linear-to-r from-purple-900 to-fuchsia-700 opacity-0 blur-sm transition-all duration-300 ease-out group-hover:opacity-75"
      ></div>
      <div
        style={{ width, height }}
        className="bg-light-purple relative flex rounded-lg p-2 text-slate-300"
      >
        {content}
      </div>
    </div>
  )
}
