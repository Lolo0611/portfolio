import { Card } from "@/app/_components/Card"
import { Badge } from "@/app/_components"

export const PortfolioSection = () => {
  return (
    <div className={"bg-red-400"}>
      <div className={"z-10 container mx-auto flex flex-col gap-4 px-6 py-6"}>
        <h2 className={"text-2xl font-semibold"}>Projets réalisés</h2>
        <p>
          Voici quelques-uns de mes travaux récents illustrant mes compétences
          en développement web, en conception et en résolution de problèmes.
        </p>

        <div
          className={
            "flex flex-col items-center gap-8 overflow-y-scroll md:flex-row"
          }
        >
          <Card
            source={"/unilabs.png"}
            title={"Site grand public - Unilabs"}
            description={"Réalisation d'un site web pour l'entreprise Unilabs."}
          />
          <Card
            source={"/unilabs.png"}
            title={"Site grand public - Unilabs"}
            description={"Réalisation d'un site web pour l'entreprise Unilabs."}
            footerCard={
              <>
                <Badge text={"React"} />
                <Badge text={"Next.js"} />
                <Badge text={"Nest.js"} />
              </>
            }
          />
        </div>
      </div>
    </div>
  )
}
