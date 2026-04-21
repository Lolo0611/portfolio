export enum SectionTitleVariants {
  LIGHT_BACKGROUND = "light_background",
  DARK_BACKGROUND = "dark_background",
}

export const sectionTitleVariants = {
  light_background: {
    h2: "text-medium-purple",
    subTitle: "text-purple",
  },
  dark_background: {
    h2: "text-very-light-grey",
    subTitle: "text-white",
  },
}

type SectionTitleProps = {
  title: string
  subTitle?: string
  variant?: SectionTitleVariants
}

export const SectionTitle = ({
  title,
  subTitle,
  variant = SectionTitleVariants.LIGHT_BACKGROUND,
}: SectionTitleProps) => {
  return (
    <div className={"relative"}>
      <h2
        className={`${sectionTitleVariants[variant].h2} font-londrina text-7xl tracking-wider`}
      >
        {title.toUpperCase()}
      </h2>
      {subTitle && (
        <span
          className={`${sectionTitleVariants[variant].subTitle} absolute inset-x-0 bottom-0 text-2xl font-semibold`}
        >
          {subTitle?.toUpperCase()}
        </span>
      )}
    </div>
  )
}
