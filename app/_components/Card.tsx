"use client"

import Image from "next/image"
import { MoveRightIcon } from "lucide-react"
import { Badge } from "@/app/_components/Badge"
import { Button, ButtonSizes, ButtonVariants } from "@/app/_components/Button"

type CardProps = {
  title: string
  subTitle?: string
  description: string
  source: string
  chips?: string[]
  projectUrl?: string
}

export const Card = ({
  title,
  subTitle,
  description,
  source,
  chips,
  projectUrl,
}: CardProps) => {
  return (
    <div
      className={
        "group bg-very-light-purple border-medium-purple hover:border-purple hover:bg-medium-purple/50 flex h-128.5 w-97.5 flex-col overflow-hidden rounded-md text-left text-black transition-colors duration-300"
      }
    >
      <div className="h-56.25 w-full shrink-0 overflow-hidden">
        <Image
          src={source}
          alt={title}
          width={390}
          height={225}
          className={
            "h-full w-full object-cover transition-all duration-300 group-hover:brightness-110"
          }
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={"flex flex-1 flex-col justify-between gap-2 p-4"}>
        <div className={"flex flex-col gap-4"}>
          <div>
            <p className={"text-purple text-xl font-bold"}>{title}</p>
            {subTitle && (
              <span className={"text-xs font-bold"}>{subTitle}</span>
            )}
          </div>

          <div className={"mb-4 flex flex-col gap-2"}>
            <p className={"text-sm"}>{description}</p>
            {chips && (
              <div>
                {chips.map((chip) => (
                  <span key={chip}>
                    <Badge text={`#${chip}`} />
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={"gap flex flex-row items-end justify-between"}>
          <Button
            variant={ButtonVariants.PRIMARY}
            size={ButtonSizes.SMALL}
            onClick={() => console.log("test")}
          >
            En savoir plus
            <MoveRightIcon size={16} />
          </Button>

          {projectUrl && (
            <a href={projectUrl} className="text-purple text-s underline">
              Lien du projet
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
