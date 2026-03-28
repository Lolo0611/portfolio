import { Card } from "@/app/_components/Card"
import { SectionTitle } from "@/app/_components"

export const PortfolioSection = () => {
  return (
    <div className={"mx-auto text-center"}>
      <SectionTitle title="Portfolio" subTitle="Mes derniers projets" />

      <div className={"z-10 container mx-auto flex flex-col gap-4 px-6 py-6"}>
        <h2 className={"text-2xl font-semibold"}>Projets réalisés</h2>
        <p>
          Voici quelques-uns de mes travaux récents illustrant mes compétences
          en développement web, en conception et en résolution de problèmes.
        </p>

        <div
          className={
            "flex flex-col items-center gap-8 overflow-y-scroll lg:flex-row"
          }
        >
          <Card
            source={"/burgerKing.png"}
            title={"Site e-commerce"}
            subTitle={"Burger King France"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere tellus nulla, ac gravida arcu lacinia eget. Maecenas hendrerit vel nulla sit amet tempor. "
            }
            chips={["Next.js", "React", "React Native"]}
            projectUrl={"https://www.burgerking.fr/"}
          />
          <Card
            source={"/unilabs.png"}
            title={"Site grand public"}
            subTitle={"Unilabs"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere tellus nulla, ac gravida arcu lacinia eget. Maecenas hendrerit vel nulla sit amet tempor. "
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
    </div>
  )
}
