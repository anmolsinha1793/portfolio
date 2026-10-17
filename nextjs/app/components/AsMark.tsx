/**
 * The AS monogram: the site's arch shape (top fully rounded, base barely
 * rounded — the same silhouette as the hero portrait) with the initials set
 * inside it.
 *
 * Colours come from the theme tokens rather than literals, so the mark follows
 * light/dark on its own: the arch stays the accent blue, and the initials take
 * the body colour, which is dark navy on dark and near-white on light.
 */
export default function AsMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        {/* Fixed id on purpose: every instance defines an identical gradient,
            so duplicate ids resolve to the same definition. */}
        <linearGradient id="as-mark-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: 'var(--first-color)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'var(--first-color)', stopOpacity: 0.22 }} />
        </linearGradient>
      </defs>
      <path d="M24 114 V56 A36 36 0 0 1 96 56 V114 Z" fill="url(#as-mark-gradient)" />
      <text
        x="60"
        y="97"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        fontSize="34"
        letterSpacing="-1"
        style={{ fill: 'var(--body-color)' }}
      >
        AS
      </text>
    </svg>
  );
}
