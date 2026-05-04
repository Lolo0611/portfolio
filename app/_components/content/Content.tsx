type IconItem = {
  component: React.ElementType
  size?: number
  color?: string
}

type ContentProps = {
  icon: React.ReactNode
  title: string
  description: string
  iconList?: IconItem[]
}

export const Content = ({
  icon,
  iconList,
  description,
  title,
}: ContentProps) => {
  return (
    <div>
      <div className="flex flex-row gap-3 bg-blue-500 pt-5">
        {icon}

        <div>
          <h3 className="pb-2 font-bold text-gray-950 uppercase">{title}</h3>

          <hr className="h-1 w-9 rounded-md border-0 bg-linear-to-r from-purple-900 to-fuchsia-700" />

          <div className="pt-4 text-gray-950">
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-red-500">
        {iconList && (
          <div className="mt-10 grid grid-cols-3 gap-6">
            {iconList.map(
              ({ component: Icon, size = 35, color = "purple" }, i) => (
                <Icon key={i} size={size} color={color} />
              ),
            )}
          </div>
        )}
      </div>
    </div>
  )
}
