import { Card } from "@/app/_components/Card"
import { SectionTitle } from "@/app/_components"
import { id } from "@/app/_components/navigation/section"

export const PortfolioSection = () => {
  return (
    <section id={id.PORTFOLIO} className={"mx-auto my-10 text-center"}>
      <div className={"my-5"}>
        <SectionTitle title="Portfolio" subTitle="Mes derniers projets" />
      </div>

      <div className={"z-10 container mx-auto flex flex-col gap-4 px-6 py-6"}>
        <div
          className={
            "flex flex-col items-center justify-center gap-8 overflow-y-scroll lg:flex-row"
          }
        >
          <Card
            source={"/burgerKing.png"}
            title={"Site e-commerce"}
            subTitle={"Burger King France"}
            description={
              "Développement des applications Web & Mobile de Burger King France."
            }
            chips={["Next.js", "React", "React Native"]}
            projectUrl={"https://www.burgerking.fr/"}
          />
          <Card
            source={"/unilabs.png"}
            title={"Site grand public"}
            subTitle={"Unilabs"}
            description={
              "Développement d'un site internet Grand Public répertoriant l’ensemble des informations sur les laboratoires appartenant au groupe Unilabs. Ajout d'un module de paiement en ligne."
            }
            chips={["Next.js", "Nest.js"]}
            projectUrl="https://my-unilabs.fr/"
          />
          <Card
            source={"/itsuFrance.png"}
            title={"Site vitrine"}
            subTitle={"Itsu France"}
            description={
              "Réalisation d'un site vitrine statique pour Itsu France. Site vitrine statique avec possibilité de consulter les menus"
            }
            chips={["React", "Next.js"]}
          />
        </div>
      </div>
    </section>
  )
}
