'use client';

import StackArt from '@/app/components/StackArt';
import { CONTAINER, SECTION, SECTION_SUBTITLE, SECTION_TITLE } from './styles';

const PROJECTS = [
  {
    techs: [
      'React',
      'MongoDB',
      'GraphQL',
      'Apollo',
      'Express',
      'Mongoose',
      'Material-UI',
      'Mapbox',
      'Node.js',
      'Axios',
    ],
    title:
      'A full-stack geolocation app with React, GraphQL subscriptions, Apollo Server, MongoDB and Mapbox integration',
    href: 'https://react-graphql-geolocation.vercel.app',
  },
  {
    // The artwork shows the first six that have a simple-icons mark; the rest
    // are listed here so the stack is recorded even where no logo exists.
    techs: [
      'Next.js',
      'React',
      'MongoDB',
      'Stripe',
      'JSON Web Tokens',
      'Cloudinary',
      'Mongoose',
      'Semantic UI React',
      'Axios',
    ],
    title:
      'A full-stack shopping cart with Next.js API routes, MongoDB, JWT authentication and Stripe checkout',
    href: 'https://react-shopping-cart-nextjs-anmol-sinhas-projects.vercel.app',
  },
  {
    techs: ['Angular', 'D3.js', 'Husky', 'i18n'],
    title:
      'A small application based on angular, husky hooks, internationalization and D3.js',
    href: 'https://angular-d3-charts-vw22.vercel.app/chart',
  },
  {
    techs: ['React', 'Docker'],
    title: 'A small application based on react and docker',
    href: 'https://spacex-mission-react.vercel.app/missions',
  },
];

export default function Work() {
  return (
    <section className={SECTION} id="work">
      <span className={SECTION_SUBTITLE}>My Portfolio</span>
      <h2 className={SECTION_TITLE}>Recent Works</h2>

      <div className={`grid gap-5 work__conatiner ${CONTAINER}`}>
        {PROJECTS.map((project) => (
          <div
            className="work__card mix web rounded-2xl bg-container p-4 light:shadow-[0_2px_16px_hsla(var(--second-hue),48%,8%,0.1)] lg:flex lg:items-center lg:gap-8 lg:p-5"
            key={project.href}
          >
            <StackArt
              techs={project.techs}
              className="mb-3 h-auto w-full shrink-0 sm:w-[295px] lg:mb-4"
            />
            <span>
              <h3 className="mb-1 text-normal font-medium lg:mb-2">
                {project.title}
              </h3>

              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group flex w-max items-center gap-x-1 text-small text-first"
              >
                Demo{' '}
                <i className="bx bx-right-arrow-alt text-base [transition:.4s] group-hover:translate-x-1"></i>
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
