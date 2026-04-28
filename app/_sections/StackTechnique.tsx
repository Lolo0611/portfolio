import { SectionTitle } from "@/app/_components"
import { StackCard } from "@/app/_components/StackCard"
import { id } from "@/app/_components/navigation/section"

export const StackTechnique = () => {
  return (
    <section id={id.TECH_STACK} className="px-4 py-12">
      <div className="text-center">
        <SectionTitle title="Stack Technique" subTitle="Outils" />
      </div>

      {/* MOBILE */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:hidden">
        <StackCard content={<div>FRONTEND</div>} />
        <StackCard content={<div>BACKEND</div>} />
        <StackCard content={<div>DEVOPS & INFRA</div>} />
        <StackCard content={<div>DATA & STORAGE</div>} />
        <StackCard content={<div>DESIGN & UX</div>} />
      </div>

      {/* DESKTOP */}
      <div className="mt-10 mb-10 hidden justify-center gap-6 md:flex">
        <div className="flex flex-col items-end gap-6">
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

        <div className="flex flex-col gap-6">
          <StackCard width={347} height={153} content={<div>BACKEND</div>} />
          <StackCard
            width={244}
            height={228}
            content={<div>DESIGN & UX</div>}
          />
        </div>
      </div>
    </section>
  )
}
