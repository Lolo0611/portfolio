import { SectionTitle } from "@/app/_components"
import { StackCard } from "@/app/_components/StackCard"

export const StackTechnique = () => {
  return (
    <section>
      <div className={"mt-2 text-center"}>
        <SectionTitle title="Stack Technique" subTitle="Outils" />
      </div>

      <div className={"mt-10 mb-10 flex justify-center gap-6"}>
        <div className={"flex flex-col items-end gap-6"}>
          <StackCard
            width={324}
            height={133}
            content={<div>DATA & STORAGE</div>}
          />
          <StackCard
            width={234}
            height={184}
            content={<div>DEVOPS & INFRA</div>}
          />
        </div>

        <StackCard width={305} height={413} content={<div>FRONTEND</div>} />

        <div className={"align-items-end flex flex-col gap-6"}>
          <StackCard width={347} height={153} content={<div>BACKEND</div>} />
          <StackCard
            width={244}
            height={228}
            content={<div>DESIGN & UX </div>}
          />
        </div>
      </div>
    </section>
  )
}
