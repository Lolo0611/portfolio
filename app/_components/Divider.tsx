type DividerProps = {
  color: string
}

export const Divider = ({ color }: DividerProps) => {
  return <hr className={`${color} h-1 w-2/3 border-t-0`} />
}
