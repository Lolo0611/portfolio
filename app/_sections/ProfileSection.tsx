"use client"

import { Button, ButtonSizes, ButtonVariants, Divider } from "@/app/_components"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { id, sections } from "@/app/_components/navigation/section"

export const ProfileSection = () => {
  return (
    <section
      id={id.PROFILE}
      className="bg-light-purple text-grey relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 container mx-auto mt-24 flex flex-row gap-3 px-6 md:flex-row-reverse">
        <Image
          className={"mx-auto h-96 w-96 flex-shrink-0 rounded-full"}
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
            <span className={"text-4xl"}>
              Développeuse{" "}
              <span className={"text-purple text-4xl font-semibold"}>
                Web Front-end spécialisée en React et Next.js
              </span>
            </span>
          </h1>

          <Divider color="bg-medium-purple" />

          <p className="max-w-2xl text-lg leading-relaxed">
            Développeuse Front-end spécialisée en React, Next.js et React Native
            avec une expérience confirmée sur des projets grand public. Habituée
            à prendre en charge un projet de l’architecture au développement
            jusqu’à la mise en production.
          </p>
          <Button
            size={ButtonSizes.MEDIUM}
            variant={ButtonVariants.PRIMARY}
            onClick={() => {
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
