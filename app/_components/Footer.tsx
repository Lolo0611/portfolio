import { Github, Linkedin, Mail } from "lucide-react"
import { navItems, sections } from "@/app/_components/navigation/section"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-purple mx-auto border-t text-white">
      <div className="container mx-auto py-12">
        <div className="mb-8 grid gap-8 px-6 md:grid-cols-4 md:px-0">
          <div>
            <h3 className="mb-4 font-bold text-white">Laura Scolan</h3>
            <p className="text-sm text-white">
              Développeuse Web Front-end spécialisée en React, React Native et
              Next.js
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Liens</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={sections.CONTACT}
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  className="transition-colors hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/laura-scolan-7768801ab"
                  className="transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Réseaux</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/laura-scolan-7768801ab"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:scolan.laura@gmail.com"
                className="transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white pt-8">
          <div className="flex flex-col items-center justify-between text-sm text-white md:flex-row">
            <p>&copy; {currentYear} Laura Scolan. Tout droit réservé.</p>
            <p>Fait avec Next.js, React, et Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
