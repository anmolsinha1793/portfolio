'use client';

import { useState } from 'react';
import { CONTAINER, SECTION, SECTION_SUBTITLE, SECTION_TITLE } from './styles';

const SERVICES = [
  {
    title: 'Product Development',
    description:
      'Service with more than 8 years of proven experience. Providing quality work to clients, customers and companies.',
    items: [
      'I gather requirements',
      'I participate in sprint planning meetings',
      'I create UX element interactions',
      'Web page development',
      'Discuss, connect and suggest regarding UX mockups with designers',
    ],
  },
  {
    title: 'Product deployment',
    description:
      'With experience of 2+ years on deployment of product over multiple plateforms such as Github pages, vercel, azure service.',
    items: [
      'I deploy over Github pages.',
      'i deploy over Gitlab pages.',
      'I deploy over vercel.',
      'My recent addition in the list is Azure services.',
    ],
  },
  {
    title: 'Product Unit Testing',
    description:
      'With more than 5 years of proven experience on writing test cases with Jasmine and Jest. Keeping a watch on other quality control gates for front end application.',
    items: [
      'I write test cases with Jasmine and Jest',
      'I check quality control with sonarqube',
      'Keep check on the tslint and eslint issues',
      'Keep an eye on google lighthouse report as and when required',
    ],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={SECTION}>
      <span className={SECTION_SUBTITLE}>My Services</span>
      <h2 className={SECTION_TITLE}>What I Offer</h2>

      <div
        className={`grid grid-cols-2 gap-6 pt-4 [@media(max-width:320px)]:grid-cols-[145px] [@media(max-width:320px)]:justify-center sm:grid-cols-[repeat(2,160px)] sm:justify-center lg:grid-cols-[repeat(3,192px)] lg:gap-x-12 ${CONTAINER}`}
      >
        {SERVICES.map((service, index) => (
          <div
            className="rounded-2xl bg-container px-6 pt-12 pb-6 light:shadow-[0_2px_16px_hsla(var(--second-hue),48%,8%,0.1)] lg:px-8 lg:pt-20 lg:pb-6"
            key={service.title}
          >
            <h3 className="mb-10 text-h3">{service.title}</h3>

            <span
              className="group flex cursor-pointer items-center gap-x-1 text-small text-first"
              role="button"
              tabIndex={0}
              onClick={() => setOpenIndex(index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setOpenIndex(index);
                }
              }}
            >
              See more{' '}
              <i className="bx bx-right-arrow-alt text-base [transition:.4s] group-hover:translate-x-1"></i>
            </span>

            <div
              className={`fixed inset-0 z-[var(--z-modal)] grid place-items-center bg-[hsla(var(--second-hue),28%,16%,0.7)] px-4 py-8 [transition:.4s] ${
                openIndex === index
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
              }`}
              onClick={() => setOpenIndex(null)}
            >
              <div
                className="relative rounded-3xl bg-body px-6 pt-18 pb-10 sm:w-[500px] sm:px-10 sm:pt-18 sm:pb-10"
                onClick={(event) => event.stopPropagation()}
              >
                <i
                  className="bx bx-x absolute top-6 right-6 cursor-pointer text-2xl text-first"
                  role="button"
                  aria-label="Close"
                  onClick={() => setOpenIndex(null)}
                ></i>

                <h3 className="mb-4 text-center text-h3 text-first">
                  {service.title}
                </h3>
                <p className="mb-8 text-center text-small sm:px-14">
                  {service.description}
                </p>

                <ul className="grid gap-y-3">
                  {service.items.map((item) => (
                    <li className="flex items-start gap-x-2" key={item}>
                      <i className="bx bx-check text-2xl text-first"></i>
                      <p className="text-small">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
