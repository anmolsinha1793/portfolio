'use client';

import { useEffect, useRef } from 'react';
import { asset } from '@/lib/asset';
import { CONTAINER, SECTION, SECTION_SUBTITLE, SECTION_TITLE } from './styles';

const PROJECTS = [
  {
    image: asset('/assets/img/work2.jpg'),
    title:
      'A small application based on angular, husky hooks, internationalization and D3.js',
    href: 'https://angular-d3-charts-vw22.vercel.app/chart',
  },
  {
    image: asset('/assets/img/work3.jpg'),
    title: 'A small application based on react and docker',
    href: 'https://spacex-mission-react.vercel.app/missions',
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mixer: { destroy: () => void } | undefined;
    let cancelled = false;

    void import('mixitup').then(({ default: mixitup }) => {
      if (cancelled) return;
      mixer = mixitup(container, {
        selectors: { target: '.work__card' },
        animation: { duration: 300 },
      });
    });

    return () => {
      cancelled = true;
      mixer?.destroy();
    };
  }, []);

  return (
    <section className={SECTION} id="work">
      <span className={SECTION_SUBTITLE}>My Portfolio</span>
      <h2 className={SECTION_TITLE}>Recent Works</h2>

      <div className={`grid work__conatiner ${CONTAINER}`} ref={containerRef}>
        {PROJECTS.map((project) => (
          <div
            className="work__card mix web rounded-2xl bg-container p-4 lg:flex lg:items-center lg:gap-8 lg:p-5"
            key={project.href}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt=""
              className="mb-3 rounded-2xl sm:w-[295px] lg:mb-4"
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
