import { Brush, CodeXml, Database, Infinity, Server } from "lucide-react"
import {
  NextIcon,
  ReactIcon,
  ReactQueryIcon,
  TailwindCssIcon,
  TypeScriptIcon,
} from "@/app/_components/icons"
import { Content } from "@/app/_components/content/Content"

export const STACK_TECHNIQUE_CONTENT: Record<string, React.ReactNode> = {
  Frontend: (
    <Content
      icon={
        <CodeXml
          color={"purple"}
          width={40}
          height={40}
          className={"shrink-0 rounded-md p-1 shadow-xl"}
        />
      }
      title={"Frontend"}
      description={"Développement d’interfaces modernes et performantes."}
      iconList={[
        { component: ReactIcon },
        { component: TypeScriptIcon },
        { component: ReactQueryIcon },
        { component: NextIcon, size: 50 },
        { component: TailwindCssIcon },
      ]}
    />
  ),

  Backend: (
    <Content
      icon={
        <Server
          color={"purple"}
          width={40}
          height={40}
          className={"shrink-0 rounded-md p-1 shadow-xl"}
        />
      }
      title={"Backend"}
      description={"Conception d’APIs robustes et sécurisées."}
    />
  ),

  "DevOps & Infra": (
    <Content
      icon={
        <Infinity
          color={"purple"}
          width={40}
          height={40}
          className={"shrink-0 rounded-md p-1 shadow-xl"}
        />
      }
      title={"DevOps & Infra"}
      description={"Déploiement et automatisation des environnements."}
    />
  ),

  "Data & Storage": (
    <Content
      icon={
        <Database
          color={"purple"}
          width={40}
          height={40}
          className={"shrink-0 rounded-md p-1 shadow-xl"}
        />
      }
      title={"Data & Storage"}
      description={"Gestion et optimisation des données."}
    />
  ),

  "Design & UX": (
    <Content
      icon={
        <Brush
          color={"purple"}
          width={40}
          height={40}
          className={"shrink-0 rounded-md p-1 shadow-xl"}
        />
      }
      title={"Design & UX"}
      description={"Création d’expériences utilisateur efficaces."}
    />
  ),
}
