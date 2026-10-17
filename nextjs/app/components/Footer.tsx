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

/**
 * Resolved once when the module loads rather than during render: `cacheComponents`
 * rejects `new Date()` in the render path as an unstable value and fails the build.
 * It is still a build-time snapshot, so the year updates on the next deploy.
 */
const COPYRIGHT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-first">
      <div className={`py-8 pb-24 ${CONTAINER}`}>
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

        <div className="mt-18 text-center text-small text-container light:text-title">
          <span className="block font-medium">Anmol Aditya Sinha</span>
          <span className="mt-1 block text-smaller">
            AI/Gen AI Certified Engineer · Bengaluru, India
          </span>
          <span className="mt-1 block text-smaller">
            © {COPYRIGHT_YEAR} · All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
