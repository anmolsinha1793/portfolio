import { BUTTON, BUTTON_GHOST, CONTAINER, SECTION } from './styles';

const SOCIALS = [
  {
    href: 'https://www.linkedin.com/in/iamsinhaanmol/',
    icon: 'bx bxl-linkedin-square',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/anmolsinha1793/',
    icon: 'bx bxl-github',
    label: 'GitHub',
  },
  {
    href: 'https://www.facebook.com/Anmol.Sinha9/',
    icon: 'bx bxl-facebook-square',
    label: 'Facebook',
  },
];

const SOCIAL_LINK =
  'flex w-max rounded-[0.25rem] bg-container p-1 text-base text-first [transition:.4s] hover:bg-first hover:text-white lg:p-[0.4rem] lg:text-xl light:text-title light:shadow-[0_2px_8px_hsla(var(--second-hue),48%,8%,0.1)]';

export default function Home() {
  return (
    <section className={`${SECTION} px-0`} id="home">
      <div
        className={`relative grid gap-x-5 gap-y-18 pt-8 ${CONTAINER}`}
      >
        <div className="text-center">
          <span className="mb-1 block text-small font-medium text-title">
            Hello, I&apos;m
          </span>
          <h1 className="text-biggest">Anmol Aditya Sinha</h1>
          <h3 className="mb-1 text-small font-medium text-text">
            Senior Frontend Developer/Aspiring Architect
          </h3>

          <div className="flex items-center justify-center gap-6 [@media(max-width:320px)]:flex-col">
            <a
              download=""
              href="/assets/pdf/Adi-resume-pdf.pdf"
              className={BUTTON_GHOST}
            >
              Download CV
            </a>
            <a href="#about" className={BUTTON}>
              About me
            </a>
          </div>
        </div>

        <div className="flex h-[293px] w-[190px] items-end justify-center justify-self-center overflow-hidden rounded-t-[10rem] rounded-b-[1rem] bg-[linear-gradient(180deg,hsla(var(--first-hue),var(--sat),var(--lig),1),hsla(var(--first-hue),var(--sat),var(--lig),0.2))] [@media(max-width:320px)]:h-[253px] [@media(max-width:320px)]:w-[150px] lg:h-[300px] lg:w-[220px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/prof__pic2.jpeg"
            alt="Anmol Aditya Sinha"
            className="w-40 [@media(max-width:320px)]:w-[130px] lg:w-[220px]"
          />
        </div>

        <div className="home__social absolute bottom-20 left-0 grid gap-y-2">
          {SOCIALS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className={SOCIAL_LINK}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="absolute -right-4 bottom-16 grid justify-items-center gap-y-9 text-first"
        >
          <i className="bx bx-mouse text-xl lg:text-[2rem]"></i>
          <span className="-rotate-90 text-small">Scroll Down</span>
        </a>
      </div>
    </section>
  );
}
