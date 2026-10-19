'use client';

import {
  siAngular,
  siApollographql,
  siAxios,
  siCloudinary,
  siD3,
  siDocker,
  siExpress,
  siGraphql,
  siJsonwebtokens,
  siMapbox,
  siMaterialdesign,
  siMongodb,
  siMongoose,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siSemanticuireact,
  siStripe,
} from 'simple-icons';

/**
 * The work-card artwork: a white tile carrying the project's brand marks in
 * their own colours, nothing else.
 *
 * Only techs with a logo in simple-icons are drawn — Husky has no mark there,
 * and "i18n" is a concept rather than a brand, so both are omitted rather than
 * faked with a generic glyph. That is why the Angular card shows two marks for
 * four technologies.
 *
 * Colour comes from each icon's own `hex`, so the tile reads as the real
 * brands rather than monochrome shapes.
 */
const VB_W = 600;
const VB_H = 400;
const MAX_ICON = 120;
const MAX_SHOWN = 6;

/** Icons shrink as the stack grows so a wide list still fits the tile. */
function layout(count: number) {
  const gap =
    count <= 2 ? 84 : count === 3 ? 60 : count === 4 ? 44 : count === 5 ? 32 : 24;
  const icon = Math.min(
    MAX_ICON,
    Math.floor((VB_W - 48 - (count - 1) * gap) / count)
  );
  return { icon, gap };
}

const LOGOS = [
  // simple-icons carries Angular's current near-black brand colour; override it
  // with the Angular red people actually recognise.
  { label: 'Angular', icon: siAngular, color: 'DD0031' },
  { label: 'D3.js', icon: siD3 },
  { label: 'React', icon: siReact },
  { label: 'Docker', icon: siDocker },
  { label: 'Next.js', icon: siNextdotjs },
  { label: 'MongoDB', icon: siMongodb },
  { label: 'Mongoose', icon: siMongoose },
  { label: 'Stripe', icon: siStripe },
  { label: 'JSON Web Tokens', icon: siJsonwebtokens },
  { label: 'Cloudinary', icon: siCloudinary },
  { label: 'Semantic UI React', icon: siSemanticuireact },
  { label: 'Axios', icon: siAxios },
  { label: 'GraphQL', icon: siGraphql },
  { label: 'Apollo', icon: siApollographql },
  { label: 'Express', icon: siExpress },
  { label: 'Material-UI', icon: siMaterialdesign },
  { label: 'Mapbox', icon: siMapbox },
  { label: 'Node.js', icon: siNodedotjs },
];

const channel = (c: number) =>
  c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

const luminance = (r: number, g: number, b: number) =>
  0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);

/**
 * Some brand colours are built for dark backgrounds — React's #61DAFB is a pale
 * cyan at roughly 1.6:1 on white, which all but disappears. Logotypes are exempt
 * from WCAG contrast rules, so the bar here is only "does this read on white",
 * not AA: keep the official colour at 2:1 or better, and darken the same hue
 * only when it falls below that.
 */
function forWhiteTile(hex: string) {
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const contrast = (l: number) => 1.05 / (l + 0.05);
  if (contrast(luminance(r, g, b)) >= 2) return `#${hex}`;

  for (let factor = 0.75; factor >= 0.2; factor -= 0.05) {
    const nr = r * factor;
    const ng = g * factor;
    const nb = b * factor;
    if (contrast(luminance(nr, ng, nb)) >= 2) {
      const toHex = (v: number) =>
        Math.round(v * 255)
          .toString(16)
          .padStart(2, '0');
      return `#${toHex(nr)}${toHex(ng)}${toHex(nb)}`;
    }
  }
  return `#${hex}`;
}

export default function StackArt({
  techs,
  className,
}: {
  techs: string[];
  className?: string;
}) {
  // Follow the order the caller listed, so the headline techs lead.
  const shown = techs
    .map((tech) => LOGOS.find((logo) => logo.label === tech))
    .filter((logo): logo is (typeof LOGOS)[number] => Boolean(logo))
    .slice(0, MAX_SHOWN);
  if (!shown.length) return null;

  const { icon, gap } = layout(shown.length);
  const totalW = shown.length * icon + (shown.length - 1) * gap;
  const startX = (VB_W - totalW) / 2;
  const top = (VB_H - icon) / 2;

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className={className}
      role="img"
      aria-label={shown.map((logo) => logo.label).join(', ')}
    >
      {/* One rect carries both the fill and the hairline. A separate frame
          rect gave an uneven stroke, because an inset rounded rect does not
          follow the same arc centres as the panel. Inset by half the stroke so
          it is not clipped, and radius reduced by the same amount. */}
      <rect
        x="1"
        y="1"
        width={VB_W - 2}
        height={VB_H - 2}
        rx="19"
        fill="#ffffff"
        strokeWidth="2"
        className="stack-art-frame"
      />

      {shown.map((logo, index) => (
        // Nesting matters: CSS transform overrides an SVG transform *attribute*
        // on the same element, so the positioning attribute sits on its own
        // element and the two animated transforms compose beneath it.
        <g
          key={logo.label}
          transform={`translate(${startX + index * (icon + gap)}, ${top})`}
        >
          <g className="stack-float" style={{ animationDelay: `${index * 700}ms` }}>
            <g className="stack-logo" style={{ animationDelay: `${index * 110}ms` }}>
              <g
                transform={`scale(${icon / 24})`}
                fill={forWhiteTile(logo.color ?? logo.icon.hex)}
              >
                <path d={logo.icon.path} />
              </g>
            </g>
          </g>
        </g>
      ))}
    </svg>
  );
}
