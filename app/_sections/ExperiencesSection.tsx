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
    <section id={id.EXPERIENCE}>
      <div className="bg-purple pb-7 text-white">
        <div className={"bg-purple sticky top-20 z-10 mt-2 py-8 text-center"}>
          <SectionTitle
            title="Experiences & Formations"
            variant={SectionTitleVariants.DARK_BACKGROUND}
          />
        </div>
        <div className="container mx-auto my-12 flex flex-col items-start md:flex-row">
          <div className="sticky top-60 mt-2 flex w-full flex-col px-8 md:mt-12 lg:w-1/3">
            <p className="mb-2 text-2xl leading-normal md:text-3xl md:leading-relaxed">
              Parcours professionnel et académique
            </p>
            <p className="mb-4 text-sm text-gray-50 md:text-base">
              Découvrez les expériences et formations qui ont contribué à la
              construction de mes compétences et de mon parcours.
            </p>

            <Button
              href={"./CV.pdf"}
              download={"CV"}
              variant={ButtonVariants.SECONDARY}
            >
              Télécharger CV
            </Button>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3">
            <div className="container mx-auto h-full w-full">
              <div className="wrap relative h-full px-10 pb-2">
                <div className="border-2-2 border-yellow-555 border-#FFC100 absolute right-1/2 h-full rounded-xs border-2"></div>
                <div className="border-2-2 border-yellow-555 border-#FFC100 absolute left-1/2 h-full rounded-xs border-2"></div>

                {EXPERIENCES.map((item, index) => (
                  <Fragment key={item.h4}>
                    {index % 2 === 0 ? (
                      <TimelineSection
                        variant={VariantTimelineSection.LEFT}
                        {...item}
                      />
                    ) : (
                      <TimelineSection
                        variant={VariantTimelineSection.RIGHT}
                        {...item}
                      />
                    )}
                  </Fragment>
                ))}
              </div>
              {/*<img
                className="md:-mt-06 -mt-06 mx-auto"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
