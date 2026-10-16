import { asset } from '@/lib/asset';
import {
  BUTTON,
  CONTAINER,
  SECTION,
  SECTION_SUBTITLE,
  SECTION_TITLE,
} from './styles';

const STATS = [
  {
    icon: 'bx bx-award text-2xl text-first mb-2',
    title: 'Experience',
    subtitle: '8+ Years Work Experience',
  },
  {
    icon: 'bx bx-briefcase-alt text-2xl text-first mb-2',
    title: 'Completed',
    subtitle: '5+ Projects',
  },
  {
    icon: 'bx bx-book-open text-2xl text-first mb-2',
    title: 'Courses Completed',
    subtitle: '10+',
  },
];

export default function About() {
  return (
    <section className={SECTION} id="about">
      <span className={SECTION_SUBTITLE}>My Intro</span>
      <h2 className={SECTION_TITLE}>About Me</h2>

      <div
        className={`grid gap-x-5 gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-16 ${CONTAINER}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/img/prof__pic2.png')}
          alt=""
          className="w-[220px] justify-self-center rounded-3xl lg:w-[350px]"
        />

        <div className="text-center lg:text-start">
          <div className="mb-8 grid grid-cols-[repeat(3,1fr)] gap-2 [@media(max-width:320px)]:grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(3,140px)] sm:justify-center lg:justify-normal">
            {STATS.map((stat) => (
              <div
                className="rounded-xl bg-container px-2 py-3 light:shadow-[0_2px_8px_hsla(var(--second-hue),48%,8%,0.1)] lg:px-5 lg:py-4 lg:text-center"
                key={stat.title}
              >
                <i className={stat.icon}></i>
                <h3 className="text-small">{stat.title}</h3>
                <span className="text-tiny">{stat.subtitle}</span>
              </div>
            ))}
          </div>

          <p className="mb-8 sm:px-20 lg:mb-10 lg:pl-0 lg:pr-16">
            Frontend developer but also experienced in backend and deployment, I
            created complex web applications as per the different requirements of
            the customers, I have years of experience and many customers/clients
            are happy and appreciated me well with the projects carried out.
          </p>

          <a href="#contact" className={BUTTON}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
