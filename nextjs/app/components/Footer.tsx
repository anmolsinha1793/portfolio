import { CONTAINER } from './styles';

const FOOTER_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Projects' },
  { href: '#testimonial', label: 'Testimonial' },
];

const FOOTER_SOCIALS = [
  {
    href: 'https://www.facebook.com/Anmol.Sinha9',
    icon: 'bx bxl-facebook',
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com',
    icon: 'bx bxl-instagram',
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/iamsinhaanmol/',
    icon: 'bx bxl-linkedin-square',
    label: 'LinkedIn',
  },
];

export default function Footer() {
  return (
    <footer className="bg-first">
      <div className={`py-8 pb-24 ${CONTAINER}`}>
        <h1 className="mb-8 text-center text-body light:text-title">Anmol</h1>

        <ul className="mb-8 flex justify-center gap-x-6">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-body light:text-title">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex justify-center gap-x-5">
          {FOOTER_SOCIALS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded bg-body p-1 text-base text-first max-sm:rounded-lg max-sm:p-3 max-sm:text-xl lg:rounded-lg lg:p-[0.4rem] lg:text-xl light:bg-title"
              aria-label={social.label}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </ul>

        <span className="mt-18 block text-center text-small text-container light:text-title">&#169; All rights reserved</span>
      </div>
    </footer>
  );
}
