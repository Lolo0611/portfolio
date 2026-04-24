import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-purple border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold text-white">John Doe</h3>
              <p className="text-sm text-slate-400">
                Frontend developer crafting beautiful digital experiences.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#profile"
                    className="transition-colors hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="transition-colors hover:text-white"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#tech-stack"
                    className="transition-colors hover:text-white"
                  >
                    Tech Stack
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="transition-colors hover:text-white"
                  >
                    Experience
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#contact"
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
                    href="https://linkedin.com"
                    className="transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Connect</h4>
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
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="mailto:john@example.com"
                  className="transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col items-center justify-between text-sm text-slate-400 md:flex-row">
              <p>&copy; {currentYear} John Doe. All rights reserved.</p>
              <p>Built with Next.js, React, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
