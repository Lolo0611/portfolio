"use client"

import {
  Button,
  ButtonSizes,
  ButtonVariants,
  Divider,
  sections,
} from "@/app/_components"
import {
  ArrowRight,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react"
import Image from "next/image"

export const ProfileSection = () => {
  return (
    <section
      id="profile"
      className="bg-light-purple text-grey relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto mt-24 flex flex-row gap-3 px-6 md:flex-row-reverse">
        <Image
          className={"mx-auto h-48 w-48 rounded-full"}
          src="/laura.jpeg"
          width={256}
          height={256}
          alt="profile"
          style={{ objectFit: "cover" }}
        />
        <div className="flex flex-col gap-8">
          <h1 className="font-regular text-4xl">
            Bonjour, Je suis{" "}
            <span className={"text-purple font-bold"}>Laura SCOLAN</span>
            <br />
            <span className={"text-2xl"}>
              Développeuse{" "}
              <span className={"text-purple font-semibold"}>
                Web Front-end spécialisée en React et Next.js
              </span>
            </span>
          </h1>

          <Divider color="bg-medium-purple" />

          <p className="mx-auto max-w-2xl text-lg leading-relaxed">
            Praesent lobortis eleifend rhoncus. Nunc sit amet enim vel lacus
            hendrerit imperdiet. Proin ipsum mi, posuere at mauris in, lacinia
            consectetur eros.Praesent lobortis eleifend rhoncus.
          </p>
          <Button
            size={ButtonSizes.MEDIUM}
            variant={ButtonVariants.PRIMARY}
            onClick={() => {
              console.log("todo")
              const element = document.querySelector(sections.PORTFOLIO)
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Voir mon travail
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
