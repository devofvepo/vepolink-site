// Vepolink brand marks — recreated from the original PNG as scalable SVG.
// The logo is two nested angular V shapes with 4 antenna lines + node terminators,
// in a violet→cyan gradient (matches the brand identity).

const _gradId = "vepo-grad";

const VepoMark = ({ size = 32, monochrome = false, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Vepolink"
  >
    <defs>
      <linearGradient id={_gradId} x1="10" y1="50" x2="90" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#7B3FE4" />
        <stop offset="0.55" stopColor="#5E70E0" />
        <stop offset="1" stopColor="#3CC8DF" />
      </linearGradient>
    </defs>
    {(() => {
      const stroke = monochrome ? color : `url(#${_gradId})`;
      const fill = monochrome ? color : `url(#${_gradId})`;
      const sw = 4;
      return (
        <g stroke={stroke} strokeWidth={sw} strokeLinejoin="miter" strokeLinecap="round" fill="none">
          {/* outer V */}
          <path d="M 15 22 L 50 92 L 85 22" />
          {/* inner W-like V (smaller) */}
          <path d="M 33 22 L 50 60 L 67 22" />
          {/* antenna lines + node terminators */}
          <line x1="15" y1="22" x2="15" y2="10" />
          <line x1="33" y1="22" x2="33" y2="12" />
          <line x1="67" y1="22" x2="67" y2="12" />
          <line x1="85" y1="22" x2="85" y2="10" />
          <circle cx="15" cy="8" r="3" fill={fill} stroke="none" />
          <circle cx="33" cy="10" r="2.5" fill={fill} stroke="none" />
          <circle cx="67" cy="10" r="2.5" fill={fill} stroke="none" />
          <circle cx="85" cy="8" r="3" fill={fill} stroke="none" />
        </g>
      );
    })()}
  </svg>
);

// Wordmark with mark — used in nav + footer
const VepoLogo = ({ height = 28, tone = "ink" }) => {
  const color = tone === "paper" ? "#FAFAF7" : "var(--ink)";
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, height }}>
      <VepoMark size={height} />
      <span style={{
        fontFamily: "Geist",
        fontWeight: 600,
        fontSize: height * 0.72,
        letterSpacing: "-0.01em",
        color,
        lineHeight: 1,
      }}>
        vepolink<span style={{ opacity: 0.45, fontWeight: 500 }}>.</span>
      </span>
    </div>
  );
};

// Small inline icons (line, monoline, 1.5px) — keep these geometric & sparse
const Icon = ({ name, size = 18, color = "currentColor" }) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    arrowUp: <path d="M7 17 17 7M9 7h8v8" />,
    check: <path d="M4 12.5 9 17.5 20 6.5" />,
    dot: <circle cx="12" cy="12" r="3" fill={color} stroke="none" />,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
    drop: <path d="M12 3s7 7.5 7 12.5a7 7 0 1 1-14 0C5 10.5 12 3 12 3z" />,
    bell: <path d="M6 8a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7zM10 19a2 2 0 0 0 4 0" />,
    shield: <path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z" />,
    cloud: <path d="M7 18a5 5 0 0 1-1-9.9 5 5 0 0 1 9.6-1.4A4.5 4.5 0 0 1 18 18H7z" />,
    chip: <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M6 6h12v12H6z M10 10h4v4h-4z" />,
    eye: <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
    chart: <path d="M3 20V4M3 20h18M7 16l4-5 3 3 5-7" />,
    grid: <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />,
    waves: <path d="M2 8c3 0 3 2 6 2s3-2 6-2 3 2 6 2M2 14c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />,
    plug: <path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8zM12 17v5" />,
    server: <path d="M3 5h18v6H3zM3 13h18v6H3z M7 8h.01 M7 16h.01" />,
    ticket: <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8zM12 7v10" />,
    user: <path d="M4 21a8 8 0 0 1 16 0 M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    play: <path d="M6 4l14 8-14 8V4z" fill={color} />,
    map: <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />,
  };
  return <svg {...props}>{paths[name]}</svg>;
};

Object.assign(window, { VepoMark, VepoLogo, Icon });
