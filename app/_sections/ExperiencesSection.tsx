"use client"

import {
  Button,
  ButtonVariants,
  SectionTitle,
  SectionTitleVariants,
} from "@/app/_components"
import { id } from "@/app/_components/navigation/section"
import {
  TimelineSection,
  VariantTimelineSection,
} from "@/app/_components/TimelineSection"
import { Fragment } from "react"

const EXPERIENCES = [
  {
    date: "2015 - 2018",
    h4: "Classe préparatoire aux grandes écoles",
    h5: "Lycée Michel Montaigne",
    descriptions: [
      "Rigueur et logique",
      "Résolution de problèmes",
      "Base scientifique solide",
    ],
  },
  {
    date: "2019 - 2022",
    h4: "Ingénieur en cognitique",
    h5: "ENSC",
    descriptions: [
      "Cognitique, Ergonomie, UI/UX Design",
      "Fondamentaux de l'informatique et des langages de programmation",
      "Méthode pour l’ingénieur: gestion de projets, méthodologie agile",
    ],
  },
  {
    date: "2022",
    h4: "Maîtrise en informatique (ERASMUS)",
    h5: "Université de Sherbrooke",
    descriptions: [
      "Application Internet & Accessibilité du web: React.JS, Node.Js, Express",
      "Notions de cryptographie",
    ],
  },
  {
    date: "2022 - 2023",
    h4: "Unilabs",
    h5: "Enéance",
    descriptions: [
      "Développement de 2 sites internets Grand Public. (prise de rdv + site vitrine)",
      "Développement d'un système de paiement en ligne",
      "Développement from scratch d'une application web sur une borne digitale tactile",
    ],
  },
  {
    date: "2023",
    h4: "Itsu",
    h5: "Enéance",
    descriptions: ["Site vitrine pour les restaurants Itsu en France"],
  },
  {
    date: "2023 - Aujourd'hui",
    h4: "Burger King France",
    h5: "Enéance",
    descriptions: [
      "Développement des applications Web & Mobile de Burger King France au sein d'une équipe de 12 personnes.",
      "Développement d'une application sur tablette à destination des équipiers en restaurant",
    ],
  },
  {
    h4: "Et maintenant?",
    h5: "L'aventure continue...",
  },
]

export const ExperiencesSection = () => {
  return (
    <section id={id.EXPERIENCE} className="overflow-x-hidden">
      <div className="bg-purple pb-7 text-white">
        {/* Header sticky */}
        <div className="bg-purple top-20 z-10 py-2 text-center md:sticky md:mt-2 md:py-8">
          <SectionTitle
            title="Experiences & Formations"
            variant={SectionTitleVariants.DARK_BACKGROUND}
          />
        </div>

        <div className="container mx-auto flex flex-col md:my-12 md:flex-row">
          {/* LEFT PANEL */}
          <div className="w-full px-4 md:sticky md:top-60 md:w-1/3 md:px-8">
            <p className="mb-2 text-2xl leading-normal md:text-3xl md:leading-relaxed">
              Parcours professionnel et académique
            </p>

            <p className="mb-4 text-sm text-gray-50 md:text-base">
              Découvrez les expériences et formations qui ont contribué à la
              construction de mes compétences et de mon parcours.
            </p>

            <Button
              href="./CV.pdf"
              download="CV"
              variant={ButtonVariants.SECONDARY}
            >
              Télécharger CV
            </Button>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="mt-10 w-full md:mt-0 md:w-2/3">
            {/* wrapper timeline */}
            <div className="relative px-4 md:px-10">
              {/* center line (SAFE) */}
              <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-yellow-400" />

              {/* items */}
              <div className="flex flex-col gap-10">
                {EXPERIENCES.map((item, index) => (
                  <div
                    key={item.h4}
                    className={`relative flex w-full ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* CARD */}
                    <div className="w-full md:w-[90%]">
                      <TimelineSection
                        variant={
                          index % 2 === 0
                            ? VariantTimelineSection.LEFT
                            : VariantTimelineSection.RIGHT
                        }
                        {...item}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
