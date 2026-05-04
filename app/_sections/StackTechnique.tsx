import { SectionTitle } from "@/app/_components"
import { StackCard } from "@/app/_components/StackCard"
import { id } from "@/app/_components/navigation/section"
import { STACK_TECHNIQUE_CONTENT } from "@/app/_components/content/StackTechniqueContent"

export const StackTechnique = () => {
  return (
    <section id={id.TECH_STACK} className="px-4 py-12">
      <div className="text-center">
        <SectionTitle title="Stack Technique" subTitle="Outils" />
      </div>

      {/* MOBILE */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:hidden">
        {Object.entries(STACK_TECHNIQUE_CONTENT).map(([title, content]) => (
          <StackCard key={title} content={content} />
        ))}
      </div>

      {/* DESKTOP */}
      <div className="mt-10 mb-10 hidden justify-center gap-6 md:flex">
        <div className="flex flex-col items-end gap-6">
          <StackCard
            width={324}
            height={153}
            content={STACK_TECHNIQUE_CONTENT["Data & Storage"]}
          />
          <StackCard
            width={234}
            height={184}
            content={STACK_TECHNIQUE_CONTENT["DevOps & Infra"]}
          />
        </div>

        <StackCard
          width={305}
          height={413}
          content={STACK_TECHNIQUE_CONTENT.Frontend}
        />

        <div className="flex flex-col gap-6">
          <StackCard
            width={347}
            height={153}
            content={STACK_TECHNIQUE_CONTENT.Backend}
          />
          <StackCard
            width={244}
            height={228}
            content={STACK_TECHNIQUE_CONTENT["Design & UX"]}
          />
        </div>
      </div>
    </section>
  )
}
