type SectionTitleProps = {
  title: string
  subTitle?: string
}

export const SectionTitle = ({ title, subTitle }: SectionTitleProps) => {
  return (
    <div className={"relative"}>
      <h2 className="font-londrina text-very-light-grey text-7xl tracking-wider">
        {title.toUpperCase()}
      </h2>
      {subTitle && (
        <span className="text-purple absolute inset-x-0 bottom-0 text-2xl font-semibold text-gray-500">
          {subTitle?.toUpperCase()}
        </span>
      )}
    </div>
  )
}
