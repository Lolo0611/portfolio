import Image from "next/image"
import { ReactNode } from "react"
import { MoveRightIcon } from "lucide-react"

type CardProps = {
  title: string
  description: string
  source: string
  footerCard?: ReactNode
}

export const Card = ({ title, description, source, footerCard }: CardProps) => {
  return (
    <div className={"max-w-xs rounded-md border border-gray-400 bg-white"}>
      <Image
        src={source}
        alt={title}
        width={320}
        height={300}
        className={"w-full rounded-t-md"}
      />
      <div className={"flex flex-col gap-2 p-4 text-black"}>
        <h4 className={"mb-2 text-xl font-bold"}>{title}</h4>
        <p className={"text-gray-700"}>{description}</p>
        <div className="pt-6">{footerCard}</div>

        <div className={"gap flex flex-row justify-between"}>
          <a
            href="#"
            className="box-border flex w-auto flex-row items-center gap-2 rounded-md border border-transparent bg-green-600 px-2 py-2.5 text-sm font-medium text-black shadow-xs hover:bg-gray-50 focus:ring-4 focus:outline-none"
          >
            En savoir plus
            <MoveRightIcon size={16} />
          </a>
          <a
            href="#"
            className="box-border flex w-auto flex-row items-center gap-2 rounded-md border border-transparent bg-green-600 px-2 py-2.5 text-sm font-medium text-black shadow-xs hover:bg-gray-50 focus:ring-4 focus:outline-none"
          >
            Lien
            <MoveRightIcon size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
