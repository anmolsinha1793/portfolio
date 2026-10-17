'use client';

import { useCallback, useEffect, useState } from 'react';
import { asset } from '@/lib/asset';
import { CONTAINER, SECTION, SECTION_SUBTITLE, SECTION_TITLE } from './styles';

/**
 * Card previews are the `-sm` files and the enlarged view is `-lg`, both
 * generated from the PDFs in `public/assets/certificates/` with qlmanage.
 * Titles are derived from the PDF filenames — correct any that are wrong.
 *
 * `ai: true` marks an AI-related certificate. Ordering is derived from that
 * flag rather than hand-maintained, so AI certificates stay on top no matter
 * where an entry is added to the list below.
 */
type Certificate = { slug: string; title: string; ai?: boolean };

const CERTIFICATES: Certificate[] = [
  { slug: 'claudecertifiedcertificate-adi', title: 'Claude Certified Architect', ai: true },
  { slug: 'claude-with-anthropic-api', title: 'Claude with the Anthropic API', ai: true },
  { slug: 'model-context-protocol', title: 'Model Context Protocol', ai: true },
  { slug: 'intro-to-subagents', title: 'Introduction to Subagents', ai: true },
  { slug: 'azure-ai', title: 'Azure AI', ai: true },
  { slug: 'azure-devops-cert', title: 'Azure DevOps' },
  { slug: 'devops-practitioner', title: 'DevOps Practitioner' },
  { slug: 'kubernets-certification', title: 'Kubernetes' },
  { slug: 'version-control-git', title: 'Version Control (Git)' },
  { slug: 'csm-adi', title: 'Customer Success Manager' },
  { slug: 'java-fs-with-angular', title: 'Java Full Stack with Angular' },
  { slug: 'core-java-certification', title: 'Core Java' },
  { slug: 'nodejs-certification', title: 'Node.js' },
  { slug: 'react-native', title: 'React Native' },
  { slug: 'ionic-cordova', title: 'Ionic & Cordova' },
  { slug: 'sql-certificate', title: 'SQL' },
  { slug: 'introduction-to-ui-design-certification', title: 'Introduction to UI Design' },
  { slug: 'leadership-adi', title: 'Leadership' },
];

/** `sort` is stable, so the authored order within each group is preserved. */
const ORDERED_CERTIFICATES = [...CERTIFICATES].sort(
  (a, b) => Number(b.ai ?? false) - Number(a.ai ?? false)
);

export default function Certificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active =
    openIndex === null ? null : ORDERED_CERTIFICATES[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);

    // Stop the page behind the popup from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close]);

  return (
    <section className={SECTION} id="certificates">
      <span className={SECTION_SUBTITLE}>My achievements</span>
      <h2 className={SECTION_TITLE}>Certificates</h2>

      <div
        className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 ${CONTAINER}`}
      >
        {ORDERED_CERTIFICATES.map((certificate, index) => (
          <button
            key={certificate.slug}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`View the ${certificate.title} certificate`}
            className="flex cursor-pointer flex-col rounded-xl bg-container p-2 text-left light:shadow-[0_2px_16px_hsla(var(--second-hue),48%,8%,0.1)] [transition:.3s] hover:ring-2 hover:ring-first focus-visible:ring-2 focus-visible:ring-first focus-visible:outline-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`/assets/certificates/thumbs/${certificate.slug}-sm.jpg`) }
              alt=""
              loading="lazy"
              className="w-full rounded-lg"
            />
            <span className="mt-2 block text-small font-medium text-title">
              {certificate.title}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} certificate`}
          onClick={close}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 sm:p-8"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close certificate"
              className="absolute -top-3 -right-3 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-container text-xl text-title [transition:.3s] hover:bg-first hover:text-body"
            >
              <i className="bx bx-x"></i>
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(`/assets/certificates/thumbs/${active.slug}-lg.jpg`) }
              alt={`${active.title} certificate`}
              className="max-h-[80vh] w-full rounded-xl bg-white object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
