type StackItem = {
  content: React.ReactNode
}

export const STACK_TECHNIQUE_CONTENT: Record<string, StackItem> = {
  Frontend: (
    <div>
      <h3>Frontend</h3>
      <p>Développement d’interfaces modernes et performantes.</p>
      <ul>
        <li>React, Next.js, TypeScript</li>
        <li>Redux, Zustand (state management)</li>
        <li>Tailwind CSS, Sass, CSS Modules</li>
        <li>React Query, SWR (data fetching)</li>
        <li>Optimisation : lazy loading, code splitting</li>
        <li>Tests : Jest, React Testing Library</li>
      </ul>
    </div>
  ),

  Backend: (
    <div>
      <h3>Backend</h3>
      <p>Conception d’APIs robustes et sécurisées.</p>
      <ul>
        <li>Node.js, Express, NestJS</li>
        <li>REST, GraphQL</li>
        <li>Authentification : JWT, OAuth 2.0</li>
        <li>Validation : Zod, Joi</li>
        <li>Architecture : MVC, Clean Architecture</li>
        <li>Tests : Jest, Supertest</li>
      </ul>
    </div>
  ),

  "DevOps & Infra": (
    <div>
      <h3>DevOps & Infra</h3>
      <p>Déploiement et automatisation des environnements.</p>
      <ul>
        <li>Docker, Docker Compose</li>
        <li>CI/CD : GitHub Actions, GitLab CI</li>
        <li>Cloud : AWS, Vercel, DigitalOcean</li>
        <li>Nginx (reverse proxy)</li>
        <li>Monitoring : Grafana, Prometheus</li>
      </ul>
    </div>
  ),

  "Data & Storage": (
    <div>
      <h3>Data & Storage</h3>
      <p>Gestion et optimisation des données.</p>
      <ul>
        <li>PostgreSQL, MySQL</li>
        <li>MongoDB, Firebase</li>
        <li>ORM : Prisma, TypeORM</li>
        <li>Cache : Redis</li>
        <li>Modélisation & optimisation des requêtes</li>
      </ul>
    </div>
  ),

  "Design & UX": (
    <div>
      <h3>Design & UX</h3>
      <p>Création d’expériences utilisateur efficaces.</p>
      <ul>
        <li>Figma, Adobe XD</li>
        <li>Design systems</li>
        <li>Responsive & mobile-first</li>
        <li>Animations : Framer Motion</li>
        <li>Accessibilité (a11y)</li>
      </ul>
    </div>
  ),
}
