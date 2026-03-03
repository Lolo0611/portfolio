type DividerProps = {
  color: string
  width?: number
}

export const Divider = ({ color, width = 1 }: DividerProps) => {
  return <hr className={`${color} h-1 w-2/3 border-t-0`} />
}
