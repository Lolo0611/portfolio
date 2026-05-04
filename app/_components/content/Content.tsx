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
    <div className="">
      <div className="flex flex-row gap-3 md:pt-5">
        {icon}

        <div>
          <h3 className="pb-2 font-bold text-gray-950 uppercase">{title}</h3>

          <hr className="h-1 w-9 rounded-md border-0 bg-linear-to-r from-purple-900 to-fuchsia-700" />

          <div className="pt-4 text-gray-950">
            <p>{description}</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        {iconList && (
          <div className="mx-10 mt-5 flex flex-wrap justify-center gap-8 md:mt-20">
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
