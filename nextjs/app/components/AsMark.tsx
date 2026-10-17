/**
 * The AS monogram: a squircle (rounded square) with the initials knocked out.
 *
 * The two themes invert the mark rather than just recolouring it, so it stays
 * the strongest thing on the nav in both:
 *   dark  — accent-blue gradient tile, navy initials
 *   light — navy tile, accent-blue initials
 *
 * Colours live in `globals.css` as `--mark-*` tokens so the swap follows the
 * `.light__theme` class automatically. SVG presentation attributes do not
 * accept `var()` reliably, hence the classes rather than inline fills.
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
        <linearGradient id="as-squircle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className="as-mark-stop-a" />
          <stop offset="100%" className="as-mark-stop-b" />
        </linearGradient>
      </defs>
      <rect
        x="14"
        y="14"
        width="92"
        height="92"
        rx="27"
        fill="url(#as-squircle)"
      />
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        fontSize="42"
        letterSpacing="-2"
        className="as-mark-initials"
      >
        AS
      </text>
    </svg>
  );
}
