import { useInView } from "@/app/_components/hooks/useInView"

export enum VariantTimelineSection {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

type TimelineSectionProps = {
  date?: string
  h4?: string
  h5?: string
  descriptions?: string[]
  variant?: VariantTimelineSection
}

export const TimelineSection = ({
  date,
  h4,
  h5,
  descriptions,
  variant = VariantTimelineSection.RIGHT,
}: TimelineSectionProps) => {
  const { isVisible, ref } = useInView({ threshold: 0.2, rootMargin: "-50px" })

  const base =
    "mb-5 flex w-full transform-gpu will-change-transform items-center justify-between transition-all duration-700 ease-out"

  const hidden =
    variant === VariantTimelineSection.RIGHT
      ? "translate-x-20 opacity-0 flex-row"
      : "-translate-x-20 opacity-0 flex-row"

  const visible = "translate-x-0 opacity-100"

  return (
    <div ref={ref} className={`${base} ${isVisible ? visible : hidden}`}>
      {/* LEFT SIDE */}
      <div className="flex w-1/2 justify-end pr-5">
        {variant === VariantTimelineSection.LEFT && (
          <div className="text-right">
            {date && (
              <p className="mb-2 text-base font-bold text-yellow-300">{date}</p>
            )}
            {h4 && <h4 className="text-lg font-bold md:text-2xl">{h4}</h4>}
            {h5 && <h5 className="mb-2 text-sm font-bold">{h5}</h5>}
            {descriptions && descriptions?.length > 0 && (
              <ul className="text-sm leading-snug text-gray-50 opacity-70 md:text-base">
                {descriptions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* CENTER LINE (optionnel) */}
      <div className="h-full w-px bg-white" />

      {/* RIGHT SIDE */}
      <div className="flex w-1/2 justify-start pl-5">
        {variant === VariantTimelineSection.RIGHT && (
          <div className="text-left">
            {date && (
              <p className="mb-2 text-base font-bold text-yellow-300">{date}</p>
            )}
            {h4 && <h4 className="text-lg font-bold md:text-2xl">{h4}</h4>}
            {h5 && <h5 className="mb-2 text-sm font-bold">{h5}</h5>}
            {descriptions && descriptions?.length > 0 && (
              <ul className="text-sm leading-snug text-gray-50 opacity-70 md:text-base">
                {descriptions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
