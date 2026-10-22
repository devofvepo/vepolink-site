const _gradId = "vepo-grad";
const VepoMark = ({
  size = 32,
  monochrome = false,
  color = "currentColor"
}) => React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 100 100",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-label": "Vepolink"
}, React.createElement("defs", null, React.createElement("linearGradient", {
  id: _gradId,
  x1: "10",
  y1: "50",
  x2: "90",
  y2: "50",
  gradientUnits: "userSpaceOnUse"
}, React.createElement("stop", {
  offset: "0",
  stopColor: "#7B3FE4"
}), React.createElement("stop", {
  offset: "0.55",
  stopColor: "#5E70E0"
}), React.createElement("stop", {
  offset: "1",
  stopColor: "#3CC8DF"
}))), (() => {
  const stroke = monochrome ? color : `url(#${_gradId})`;
  const fill = monochrome ? color : `url(#${_gradId})`;
  const sw = 4;
  return React.createElement("g", {
    stroke: stroke,
    strokeWidth: sw,
    strokeLinejoin: "miter",
    strokeLinecap: "round",
    fill: "none"
  }, React.createElement("path", {
    d: "M 15 22 L 50 92 L 85 22"
  }), React.createElement("path", {
    d: "M 33 22 L 50 60 L 67 22"
  }), React.createElement("line", {
    x1: "15",
    y1: "22",
    x2: "15",
    y2: "10"
  }), React.createElement("line", {
    x1: "33",
    y1: "22",
    x2: "33",
    y2: "12"
  }), React.createElement("line", {
    x1: "67",
    y1: "22",
    x2: "67",
    y2: "12"
  }), React.createElement("line", {
    x1: "85",
    y1: "22",
    x2: "85",
    y2: "10"
  }), React.createElement("circle", {
    cx: "15",
    cy: "8",
    r: "3",
    fill: fill,
    stroke: "none"
  }), React.createElement("circle", {
    cx: "33",
    cy: "10",
    r: "2.5",
    fill: fill,
    stroke: "none"
  }), React.createElement("circle", {
    cx: "67",
    cy: "10",
    r: "2.5",
    fill: fill,
    stroke: "none"
  }), React.createElement("circle", {
    cx: "85",
    cy: "8",
    r: "3",
    fill: fill,
    stroke: "none"
  }));
})());
const VepoLogo = ({
  height = 28,
  tone = "ink"
}) => {
  const color = tone === "paper" ? "#FAFAF7" : "var(--ink)";
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      height
    }
  }, React.createElement(VepoMark, {
    size: height
  }), React.createElement("span", {
    style: {
      fontFamily: "Geist",
      fontWeight: 600,
      fontSize: height * 0.72,
      letterSpacing: "-0.01em",
      color,
      lineHeight: 1
    }
  }, "vepolink", React.createElement("span", {
    style: {
      opacity: 0.45,
      fontWeight: 500
    }
  }, ".")));
};
const Icon = ({
  name,
  size = 18,
  color = "currentColor"
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const paths = {
    arrow: React.createElement("path", {
      d: "M5 12h14M13 5l7 7-7 7"
    }),
    arrowUp: React.createElement("path", {
      d: "M7 17 17 7M9 7h8v8"
    }),
    check: React.createElement("path", {
      d: "M4 12.5 9 17.5 20 6.5"
    }),
    dot: React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3",
      fill: color,
      stroke: "none"
    }),
    bolt: React.createElement("path", {
      d: "M13 2 4 14h7l-1 8 9-12h-7l1-8z"
    }),
    drop: React.createElement("path", {
      d: "M12 3s7 7.5 7 12.5a7 7 0 1 1-14 0C5 10.5 12 3 12 3z"
    }),
    bell: React.createElement("path", {
      d: "M6 8a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7zM10 19a2 2 0 0 0 4 0"
    }),
    shield: React.createElement("path", {
      d: "M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-4z"
    }),
    cloud: React.createElement("path", {
      d: "M7 18a5 5 0 0 1-1-9.9 5 5 0 0 1 9.6-1.4A4.5 4.5 0 0 1 18 18H7z"
    }),
    chip: React.createElement("path", {
      d: "M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M6 6h12v12H6z M10 10h4v4h-4z"
    }),
    eye: React.createElement("path", {
      d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
    }),
    chart: React.createElement("path", {
      d: "M3 20V4M3 20h18M7 16l4-5 3 3 5-7"
    }),
    grid: React.createElement("path", {
      d: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"
    }),
    waves: React.createElement("path", {
      d: "M2 8c3 0 3 2 6 2s3-2 6-2 3 2 6 2M2 14c3 0 3 2 6 2s3-2 6-2 3 2 6 2"
    }),
    plug: React.createElement("path", {
      d: "M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8zM12 17v5"
    }),
    server: React.createElement("path", {
      d: "M3 5h18v6H3zM3 13h18v6H3z M7 8h.01 M7 16h.01"
    }),
    ticket: React.createElement("path", {
      d: "M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8zM12 7v10"
    }),
    user: React.createElement("path", {
      d: "M4 21a8 8 0 0 1 16 0 M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    }),
    play: React.createElement("path", {
      d: "M6 4l14 8-14 8V4z",
      fill: color
    }),
    map: React.createElement("path", {
      d: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"
    })
  };
  return React.createElement("svg", props, paths[name]);
};
Object.assign(window, {
  VepoMark,
  VepoLogo,
  Icon
});
const useTicker = (initial, jitter = 0.05, ms = 1800) => {
  const [v, setV] = React.useState(initial);
  React.useEffect(() => {
    const id = setInterval(() => {
      setV(prev => {
        const delta = (Math.random() - 0.5) * 2 * jitter;
        return Math.max(0, prev + delta);
      });
    }, ms);
    return () => clearInterval(id);
  }, [jitter, ms]);
  return v;
};
const Sparkline = ({
  data,
  color = "var(--ink)",
  height = 32,
  width = 120,
  fill = false
}) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((d, i) => {
    const x = i / (data.length - 1) * width;
    const y = height - (d - min) / range * (height - 4) - 2;
    return [x, y];
  });
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `${path} L ${width} ${height} L 0 ${height} Z`;
  return React.createElement("svg", {
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "none",
    style: {
      display: "block",
      width: "100%",
      height: height
    }
  }, fill && React.createElement("path", {
    d: area,
    fill: color,
    opacity: "0.08"
  }), React.createElement("path", {
    d: path,
    stroke: color,
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
const genSeries = (base, jitter, n = 24, seed = 1) => {
  let v = base;
  const out = [];
  const rand = s => {
    let x = Math.sin(s * 9999) * 10000;
    return x - Math.floor(x);
  };
  for (let i = 0; i < n; i++) {
    v += (rand(seed + i) - 0.5) * jitter;
    out.push(v);
  }
  return out;
};
const ParamTile = ({
  label,
  unit,
  value,
  decimals = 2,
  range,
  status = "ok",
  series,
  accent
}) => {
  const statusColor = {
    ok: "var(--signal-ok)",
    warn: "var(--signal-warn)",
    alert: "var(--signal-alert)"
  }[status];
  return React.createElement("div", {
    style: {
      padding: "18px 18px 14px",
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      position: "relative"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.08em",
      color: "var(--mute)",
      textTransform: "uppercase"
    }
  }, label), React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontSize: 10.5
    },
    className: "mono"
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: statusColor,
      boxShadow: `0 0 0 3px ${statusColor}22`
    }
  }), React.createElement("span", {
    style: {
      color: "var(--mute)",
      textTransform: "uppercase",
      letterSpacing: "0.08em"
    }
  }, status === "ok" ? "in range" : status === "warn" ? "watch" : "alert"))), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 30,
      fontWeight: 500,
      color: "var(--ink)",
      letterSpacing: "-0.02em"
    }
  }, value.toFixed(decimals)), React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 13,
      color: "var(--mute)"
    }
  }, unit)), React.createElement(Sparkline, {
    data: series,
    color: accent || "var(--ink-2)",
    height: 28,
    width: 220,
    fill: true
  }), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10.5,
      color: "var(--mute-2)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, React.createElement("span", null, "range ", range[0], "\u2013", range[1], " ", unit), React.createElement("span", null, "5s")));
};
const Dashboard = () => {
  const ph = useTicker(7.18, 0.04, 2200);
  const turb = useTicker(2.8, 0.2, 2400);
  const dox = useTicker(6.4, 0.08, 2000);
  const temp = useTicker(24.6, 0.06, 2600);
  const cond = useTicker(412, 4, 2100);
  const tds = useTicker(248, 3, 2300);
  const series = React.useMemo(() => ({
    ph: genSeries(7.2, 0.08, 28, 11),
    turb: genSeries(2.9, 0.4, 28, 22),
    dox: genSeries(6.3, 0.15, 28, 33),
    temp: genSeries(24.5, 0.1, 28, 44),
    cond: genSeries(410, 7, 28, 55),
    tds: genSeries(245, 6, 28, 66)
  }), []);
  return React.createElement("div", {
    style: {
      width: "100%",
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 6,
      overflow: "hidden",
      boxShadow: "0 24px 60px -30px rgba(10,18,32,0.18), 0 2px 6px -2px rgba(10,18,32,0.04)"
    }
  }, React.createElement("div", {
    style: {
      padding: "12px 18px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "var(--paper-2)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [0, 1, 2].map(i => React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: "var(--line)"
    }
  }))), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11.5,
      color: "var(--mute)"
    }
  }, "vepolink", React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, ".io"), " / stations / chembarambakkam-stp / live")), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    },
    className: "mono"
  }, React.createElement(LivePulse, null), React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, "Live")), React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--mute)"
    }
  }, "\u21BB 5s"))), React.createElement("div", {
    style: {
      padding: "18px 22px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--mute)",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      marginBottom: 6
    }
  }, "Station \xB7 CPCB ID 5572-TN-08"), React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.015em"
    }
  }, "Chembarambakkam STP \u2014 Outfall A"), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 12,
      color: "var(--mute)",
      marginTop: 4
    }
  }, "12.99\xB0N \xB7 80.07\xB0E \xA0\xB7\xA0 Last calibration 14 days ago")), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["1H", "24H", "7D", "30D"].map((t, i) => React.createElement("button", {
    key: t,
    style: {
      padding: "6px 12px",
      fontSize: 12,
      fontFamily: "Geist Mono",
      background: i === 1 ? "var(--ink)" : "var(--card)",
      color: i === 1 ? "var(--paper-2)" : "var(--ink)",
      border: "1px solid var(--line)",
      borderRadius: 4,
      cursor: "pointer"
    }
  }, t)))), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 1,
      background: "var(--line-2)"
    }
  }, React.createElement(ParamTile, {
    label: "pH",
    unit: "",
    value: ph,
    decimals: 2,
    range: [6.5, 8.5],
    status: "ok",
    series: series.ph,
    accent: "oklch(58% 0.18 285)"
  }), React.createElement(ParamTile, {
    label: "Turbidity",
    unit: "NTU",
    value: turb,
    decimals: 1,
    range: [0, 5],
    status: "ok",
    series: series.turb,
    accent: "oklch(70% 0.13 200)"
  }), React.createElement(ParamTile, {
    label: "Dissolved O\u2082",
    unit: "mg/L",
    value: dox,
    decimals: 2,
    range: [5, 9],
    status: "ok",
    series: series.dox,
    accent: "oklch(65% 0.14 160)"
  }), React.createElement(ParamTile, {
    label: "Temperature",
    unit: "\xB0C",
    value: temp,
    decimals: 1,
    range: [15, 30],
    status: "ok",
    series: series.temp,
    accent: "oklch(70% 0.13 60)"
  }), React.createElement(ParamTile, {
    label: "Conductivity",
    unit: "\xB5S/cm",
    value: cond,
    decimals: 0,
    range: [200, 800],
    status: "ok",
    series: series.cond,
    accent: "oklch(65% 0.14 215)"
  }), React.createElement(ParamTile, {
    label: "TDS",
    unit: "ppm",
    value: tds,
    decimals: 0,
    range: [150, 500],
    status: "ok",
    series: series.tds,
    accent: "oklch(60% 0.16 305)"
  })), React.createElement("div", {
    style: {
      padding: "14px 22px",
      borderTop: "1px solid var(--line)",
      background: "var(--paper-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: "var(--signal-warn)",
      boxShadow: "0 0 0 4px oklch(72% 0.16 75 / 0.18)"
    }
  }), React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11.5,
      letterSpacing: "0.06em",
      color: "var(--mute)",
      textTransform: "uppercase"
    }
  }, "Watch \xB7 14:32:08 IST"), React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 500,
      marginTop: 2
    }
  }, "Turbidity trending toward upper bound \u2014 3.8 NTU at Station 5572-TN-08"))), React.createElement("button", {
    style: {
      padding: "8px 14px",
      fontSize: 12,
      fontFamily: "Geist Mono",
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 4,
      color: "var(--ink)",
      cursor: "pointer"
    }
  }, "Acknowledge \u2192")));
};
const LivePulse = () => React.createElement("span", {
  style: {
    position: "relative",
    width: 8,
    height: 8,
    display: "inline-block"
  }
}, React.createElement("span", {
  style: {
    position: "absolute",
    inset: 0,
    borderRadius: 99,
    background: "var(--signal-ok)",
    animation: "vepoPulse 1.6s ease-out infinite"
  }
}), React.createElement("span", {
  style: {
    position: "absolute",
    inset: 0,
    borderRadius: 99,
    background: "var(--signal-ok)"
  }
}), React.createElement("style", null, `@keyframes vepoPulse { 0% { transform: scale(1); opacity: .6 } 100% { transform: scale(2.6); opacity: 0 } }`));
Object.assign(window, {
  Dashboard,
  Sparkline,
  ParamTile,
  LivePulse,
  genSeries,
  useTicker
});
const useReveal = (delay = 0) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setShown(true), delay);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);
  return [ref, shown];
};
const Reveal = ({
  children,
  delay = 0,
  y = 18,
  as: As = "div",
  style,
  className = ""
}) => {
  const [ref, shown] = useReveal(delay);
  return React.createElement(As, {
    ref: ref,
    className: className,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      transition: "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
      ...(style || {})
    }
  }, children);
};
const sectionClass = "product-page-section md:px-4 px-0 sm:px-6 lg:px-12 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24 relative block overflow-hidden";
const sectionHeadingGrid = "grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16 mb-10 lg:mb-14";
const sectionHeadingStyle = {
  fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.025em",
  margin: 0,
  fontWeight: 500
};
const sectionIntroStyle = {
  fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
  lineHeight: 1.6,
  color: "var(--mute)",
  margin: 0,
  maxWidth: 620,
  alignSelf: "end",
  textWrap: "pretty"
};
const pagerButtonClass = "px-3 md:px-4 py-2 rounded border border-(--line) text-sm disabled:opacity-50 disabled:cursor-not-allowed";
const pageDotClass = isActive => `w-8 h-8 md:w-9 md:h-9 rounded text-sm border ${isActive ? "bg-slate-900 text-white border-slate-900" : "border-(--line) text-slate-700"}`;
const handleMissingProductImage = event => {
  const image = event.currentTarget;
  const parent = image.parentElement;
  image.style.display = "none";
  if (parent && parent.classList.contains("product-thumb")) {
    parent.classList.add("product-thumb-missing");
    return;
  }
  parent && parent.classList.add("product-image-missing");
};
const ProductHero = () => {
  const thumb = [{
    id: 1,
    img: "/assets/images/p1-Photoroom.png"
  }, {
    id: 2,
    img: "/assets/images/p1-Photoroom.png"
  }];
  const [active, setActive] = React.useState(0);
  const activeThumb = thumb[active];
  return React.createElement("section", {
    className: "product-page-section product-hero min-h-[auto] md:min-h-[var(--heroheight)] px-4 sm:px-6 lg:px-12 pt-5 md:pt-10 relative overflow-hidden flex flex-col items-center justify-center"
  }, React.createElement("div", {
    className: "@container py-0 md:py-8 relative z-10 w-full"
  }, React.createElement("div", {
    className: "flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-12 items-center"
  }, React.createElement("div", {
    className: "w-full md:w-[55%] flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12"
  }, React.createElement("div", {
    className: "product-thumb-rail order-2 md:order-1 w-full md:w-[72px] lg:w-[84px] flex md:flex-col justify-center md:justify-start gap-2 overflow-x-auto md:overflow-visible pb-1"
  }, thumb.map((t, index) => React.createElement(Reveal, {
    key: t.id,
    delay: 120 * index
  }, React.createElement("button", {
    key: t.id,
    onClick: () => setActive(index),
    className: `product-thumb w-[52px] h-[52px] md:w-[48px] md:h-[48px] shrink-0 border rounded p-1 transition ${index === active ? "border-(--ink)" : "border-[#dedede]"}`,
    "aria-label": `Show product image ${index + 1}`,
    "aria-pressed": index === active
  }, React.createElement("img", {
    src: t.img,
    alt: "Vepolink Command Center",
    onError: handleMissingProductImage,
    className: "w-full h-full object-contain"
  }))))), React.createElement("div", {
    className: "order-1 md:order-2 w-full max-w-[520px] mx-auto"
  }, React.createElement(Reveal, {
    delay: 120 * 2
  }, React.createElement("img", {
    src: activeThumb?.img,
    alt: "Vepolink Command Center",
    onError: handleMissingProductImage,
    className: "w-full h-auto relative z-10 object-contain  max-w-[320px] md:max-w-none mx-auto",
    "data-tilt": activeThumb?.id
  })))), React.createElement("div", {
    className: "w-full md:w-[45%]"
  }, React.createElement("div", {
    className: "w-full md:px-3"
  }, React.createElement(Reveal, {
    delay: 120 * 0
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20,
      flexWrap: "wrap"
    }
  }, React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 12px 6px 8px",
      border: "1px solid var(--line)",
      borderRadius: 99,
      background: "var(--card)",
      fontSize: 12,
      fontFamily: "Geist Mono",
      color: "var(--ink-2)",
      lineHeight: 1.4
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: "var(--signal-ok)",
      flexShrink: 0
    }
  }), "Real Time Water Quality Monitoring System / Technology"))), React.createElement(Reveal, {
    delay: 120 * 1
  }, React.createElement("h1", {
    style: {
      fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
      lineHeight: 1.04,
      letterSpacing: "-0.03em",
      margin: 0,
      textWrap: "balance"
    }
  }, "Online Water Analyser")), React.createElement(Reveal, {
    delay: 120 * 2
  }, React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end md:mt-[28px] mt-[15px]"
  }, React.createElement("p", {
    style: {
      fontSize: "clamp(1rem, 1.4vw, 1.1875rem)",
      lineHeight: 1.55,
      color: "var(--mute)",
      margin: 0,
      maxWidth: 620,
      textWrap: "pretty"
    }
  }, "Complete range of analyzers with sampling for Biological and Chemical Parameters"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }))), React.createElement(Reveal, {
    delay: 120 * 3
  }, React.createElement(Partners, null)), React.createElement("div", {
    className: "flex flex-col sm:flex-row sm:flex-wrap",
    style: {
      gap: 12,
      marginTop: 24
    }
  }, React.createElement(Reveal, {
    delay: 120 * 4
  }, React.createElement("a", {
    href: "mailto:sales@vepolink.com?subject=Book%20a%20walkthrough%20-%20Online%20Water%20Analyser",
    style: {
      minHeight: 44,
      padding: "12px 22px",
      fontSize: 14.5,
      fontWeight: 500,
      background: "var(--ink)",
      color: "var(--paper-2)",
      border: "none",
      borderRadius: 99,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      textDecoration: "none"
    }
  }, "Book a Walkthrough ", React.createElement(Icon, {
    name: "arrow",
    size: 15
  }))), React.createElement(Reveal, {
    delay: 120 * 5
  }, React.createElement("a", {
    href: "mailto:sales@vepolink.com?subject=Online%20Water%20Analyser%20brochure%20request",
    style: {
      minHeight: 44,
      padding: "12px 22px",
      fontSize: 14.5,
      fontWeight: 500,
      background: "transparent",
      color: "var(--ink)",
      border: "1px solid var(--ink-3)",
      borderRadius: 99,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none"
    }
  }, "Download Brochure"))))))), React.createElement(ShadeBg, null));
};
const ProductOverView = () => {
  return React.createElement("section", {
    className: `${sectionClass} product-overview`
  }, React.createElement("div", {
    className: "shell pl-auto mr-auto"
  }, React.createElement(Reveal, {
    delay: 120 * 0
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "var(--mute)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "\u25C6 Overview")), React.createElement("div", null, React.createElement(Reveal, {
    delay: 120 * 1
  }, React.createElement("h2", {
    style: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      lineHeight: 1.02,
      letterSpacing: "-0.03em",
      margin: "0 0 24px",
      fontWeight: 500,
      textWrap: "balance",
      maxWidth: 680
    }
  }, "Online Water analyzer")), React.createElement("div", {
    className: "bg-(--card) border border-(--line) rounded p-4 md:p-6"
  }, React.createElement(Reveal, {
    delay: 120 * 2
  }, React.createElement("h3", {
    style: {
      fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.03em",
      margin: "0 0 14px",
      fontWeight: 500,
      maxWidth: 680,
      textWrap: "balance"
    }
  }, "Aqualog series are on-line water analyser based on a", " ", React.createElement("span", {
    className: "serif-i grad-text",
    style: {
      fontWeight: 400
    }
  }, "high resolution UV-visible"), " ", "spectrograph.")), React.createElement(Reveal, {
    delay: 120 * 3
  }, React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--mute)",
      margin: "0 0 14px",
      textWrap: "pretty"
    }
  }, "Our range of analyzers monitor simultaneously many different parameters for waste water treatment plants or river monitoring stations with an excellent stability and low operating cost. The spectrograph can measure organic matter, nitrate, colour, turbidity, phosphate and other metallic and non-metallic parameters. The UV \u2013 Vis analyser, is advantageous over conventional analyzers as it comes with parameter and its respective technology addition. A complementary UV-visible fluorescence module allows the measurement of aromatics hydrocarbons (PAH). Nephelometric turbidity by visible or infra-red laser diode is also available.")), React.createElement(Reveal, {
    delay: 120 * 4
  }, React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--mute)",
      margin: 0,
      textWrap: "pretty"
    }
  }, "The full UV-visible spectrum can also be used to monitor specific chemical process making the it an ideal instrument for chemical plants. External probes can be added for physicochemical parameters like pH, ORP, dissolved oxygen, conductivity and turbidity. Thanks to its automatic cleaning system and its extremely long life time lamp, the maintenance is roughly limited to the periodic refill of the inexpensive cleaning solution and eventually reagents depending on the parameters."))))));
};
const TechPanel = () => React.createElement(Reveal, {
  delay: 120 * 0
}, React.createElement("div", {
  style: {
    background: "var(--card)",
    border: "1px solid var(--line)",
    borderRadius: 6,
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    boxShadow: "0 24px 60px -34px rgba(10,18,32,0.18)"
  }
}, React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap"
  }
}, React.createElement(Reveal, {
  delay: 120 * 1
}, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10.5,
    color: "var(--mute)",
    letterSpacing: "0.1em",
    textTransform: "uppercase"
  }
}, "UV-Visible Spectroscopy")), React.createElement(Reveal, {
  delay: 120 * 2
}, React.createElement("span", {
  className: "mono",
  style: {
    fontSize: 10.5,
    color: "var(--ink)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  }
}, React.createElement(LivePulse, null), " Streaming"))), React.createElement(Reveal, {
  delay: 120 * 3
}, React.createElement("div", {
  style: {
    fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
    fontWeight: 500,
    letterSpacing: "-0.02em",
    marginTop: 4
  }
}, "Typical UV-Vis", " ", React.createElement("span", {
  className: "serif-i",
  style: {
    color: "var(--mute)"
  }
}, "Absorption Spectrum"))), React.createElement("div", {
  className: "w-full overflow-hidden"
}, React.createElement(Reveal, {
  delay: 120 * 5
}, React.createElement(Sparkline, {
  data: genSeries(2.8, 0.45, 60, 17),
  color: "var(--ink-2)",
  height: 84,
  width: 600,
  className: "w-full",
  fill: true
})))));
const TechRow = ({
  i,
  t,
  d
}) => React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    padding: "16px",
    background: "var(--card)",
    border: "1px solid var(--line)",
    borderRadius: 6,
    height: "100%",
    alignItems: "flex-start"
  }
}, React.createElement("span", {
  style: {
    width: 38,
    height: 38,
    borderRadius: 6,
    flexShrink: 0,
    background: "var(--paper-2)",
    border: "1px solid var(--line)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--ink-2)"
  }
}, React.createElement(Icon, {
  name: i,
  size: 17
})), React.createElement("div", null, React.createElement("div", {
  style: {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "-0.01em"
  }
}, t), React.createElement("div", {
  style: {
    fontSize: 13.5,
    color: "var(--mute)",
    marginTop: 3,
    lineHeight: 1.5
  }
}, d)));
const ProductSpectroscopy = () => {
  const dataA = [{
    id: 1,
    name: "UV Absorbance Spectroscopy",
    data: ["Xenon Lamp", "Flow Cell", "Beam splitter", "Peak Filter", "Peak detector", "Reference filter", "Reference detector"]
  }, {
    id: 2,
    name: "UV Fluorescence",
    data: ["Xenon Lamp", "Excitation Filter", "Flow Cell", "Emission Filter", "Photomultiplier", "Reference photo detector"]
  }, {
    id: 3,
    name: "Colorimetric method",
    data: ["LED", "Flow Cell", "Photo Detector", "Reagent Pump", "Reagent Tank"]
  }, {
    id: 4,
    name: "90 Degree light Scattering Nephelometry (Turbidity)",
    data: ["Laser Diode", "Flow Cell", "Photo Detector"]
  }, {
    id: 5,
    name: "UV Absorbance – Gas Stripping",
    data: ["Spectrograph", "Beam Splitter", "Liquid Flow Cell", "Xenon Lamp (Liquid phase)", "Xenon Lamp (Gas phase)", "Gas flow cell", "Gas pump", "Stripping Pot", "Temperature Probe"]
  }];
  const techData = [{
    i: "drop",
    t: "Direct Absorbance",
    d: "Direct absorbance measurement for UVA, COD, BOD, TOC, NO3, Colour, PO4 and Cr VI brings fast, stable measurements with a simple hydraulic circuit. The analyzers are factory calibrated, and local multi-point calibration supports COD, BOD and TOC readings where UV alternative methods are compatible."
  }, {
    i: "shield",
    t: "Aqualog series",
    d: "Aqualog series of analyzers are designed for a non-clog operation, as the Analyzer comes equipped with a flow cell of different apertures of 1mm, 3 mm and 10 mm. This makes these analyzers advantageous for all levels of suspended solids."
  }, {
    i: "chart",
    t: "Analyzer",
    d: "The Analyzer allows to add additional modules for Gaseous parameters mainly Ammonia, Hydrogen Sulphide. A revolutionary method of Gas stripping allows to monitor total gas concentration and not in ionic form. This method allows to measure Ammonia and Hydrogen Sulphide separately and Ammonical Nitrogen in liquid phase."
  }, {
    i: "waves",
    t: "High Resolution",
    d: "A high resolution spectrograph scanning wavelengths from 180 nm to 750 nm, with wavelength resolution and on-screen display of values at each wavelength is the master part."
  }, {
    i: "chart",
    t: "Light Source",
    d: "The light source, being a pulsed Xenon Lamp, allows for 10 years of life as 10^9 flashes."
  }];
  return React.createElement("section", {
    className: `${sectionClass} product-spectroscopy bg-(--paper) border border-t-(--line) border-b-(--line) pt-16 md:pt-20 lg:pt-24`
  }, React.createElement("div", {
    className: "shell pl-auto mr-auto"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: sectionHeadingGrid
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "var(--mute)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "\u25C6 Innovation"), React.createElement("h2", {
    style: sectionHeadingStyle
  }, "Innovation to UV -", React.createElement("br", null), React.createElement("span", {
    className: "serif-i"
  }, "Vis Spectroscopy"))), React.createElement("p", {
    style: sectionIntroStyle
  }, "A complementary UV-visible fluorescence module allows the measurement of aromatics hydrocarbons (PAH). Nephelometric turbidity by visible or infra-red laser diode is also available."))), React.createElement("div", {
    className: "pb-4 mb-4"
  }, React.createElement(Reveal, {
    delay: 160
  }, React.createElement("div", {
    className: "my-10 md:my-14 grid grid-cols-1 md:grid-cols-2 gap-3"
  }, React.createElement(Reveal, {
    delay: 80
  }, React.createElement(TechPanel, null)), techData.map((p, idx) => React.createElement(Reveal, {
    key: p.t,
    delay: 100 * (idx + 1)
  }, React.createElement(TechRow, p)))))), React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
  }, dataA.map((item, i) => React.createElement("div", {
    className: "pt-3 border-t border-(--line)",
    key: item.id
  }, React.createElement("div", {
    className: "font-semibold text-black text-base"
  }, React.createElement(Reveal, {
    delay: 120 * i
  }, item.name)), React.createElement("div", {
    className: "flex flex-wrap gap-2 mt-4"
  }, item.data.map((component, index) => React.createElement(Reveal, {
    delay: 120 * index
  }, React.createElement("span", {
    key: index,
    className: "inline px-2 py-1 bg-[#fafaf7] border border-(--line) rounded-full text-[12px] text-[#1a2333] whitespace-nowrap"
  }, component)))))))));
};
const FeaturedProducts = () => {
  const data = [{
    id: 1,
    name: "User Friendly Interface",
    desc: "The colour touch screen and user friendly interface available in different languages makes it easy to test or configure the analyser."
  }, {
    id: 2,
    name: "Multiplexing System",
    desc: "Aqualog analyzers offer analysis of different streams in a single instrument with electronically controlled valves and software support."
  }, {
    id: 3,
    name: "Automatic Cleaning",
    desc: "A built-in automatic cleaning system injects solution periodically and performs auto-zero to avoid drift of the measurement."
  }, {
    id: 4,
    name: "Up to 6 different streams",
    desc: "Channels can be duplicated or measured sequentially to support multiple streams with MODBUS reporting."
  }];
  return React.createElement("section", {
    className: `${sectionClass} product-feature bg-(--ink)`
  }, React.createElement("div", {
    className: "shell pl-auto mr-auto"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-16 mb-10 lg:mb-14"
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "var(--mute-2)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "\u25C6 Features"), React.createElement("h2", {
    style: {
      ...sectionHeadingStyle,
      color: "var(--paper-2)"
    }
  }, "Features of Aqualog series", React.createElement("br", null), React.createElement("span", {
    className: "serif-i",
    style: {
      color: "var(--cyan)"
    }
  }, "UV-Vis Analyzers."))), React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--mute-2)",
      margin: 0,
      alignSelf: "end",
      maxWidth: 540
    }
  }, "The 4D model adheres to all Government norms, features and design standards. The main standard features incorporated are:"))), React.createElement("div", {
    className: "grid grid-cols-1 gap-4 md:grid-cols-2"
  }, data.map(item => {
    return React.createElement("div", {
      key: item.id,
      className: "flex flex-col gap-4 relative z-11 border-t border-(--ink-3)"
    }, React.createElement("div", {
      className: "pt-[18px] flex flex-col gap-3"
    }, React.createElement("span", {
      className: "w-[36px] h-[36px] bg-(--ink) border border-(--ink-3) rounded-full mono flex flex-col items-center justify-center relative"
    }, React.createElement("span", {
      className: "text-[12px] text-(--cyan)"
    }, "0", item.id)), React.createElement("div", {
      className: "mono text-base tracking-[0.1em] text-white"
    }, item.name), React.createElement("p", {
      className: "text-[13px] text-(--mute) leading-relaxed"
    }, item.desc)));
  }))));
};
const SpecificationSection = () => {
  const [tab, setTab] = React.useState("Analyzer Specifications");
  return React.createElement("section", {
    className: `${sectionClass} product-specification bg-(--paper) pt-16 md:pt-20 lg:pt-24`
  }, React.createElement("div", {
    className: "shell pl-auto mr-auto"
  }, React.createElement("div", {
    className: "flex flex-col items-center justify-center"
  }, React.createElement("div", {
    className: "w-full md:w-auto overflow-x-auto pb-2"
  }, React.createElement("div", {
    className: "mx-auto inline-flex min-w-max gap-2 md:gap-4 items-center mb-10 md:mb-14 bg-(--card) border border-(--line) rounded-full px-2 md:px-4 py-2"
  }, ["Analyzer Specifications", "Parameter Specifications", "Parts"].map(item => React.createElement("button", {
    className: `py-2 px-3 md:px-4 text-[13px] md:text-[14px] rounded-full whitespace-nowrap transition ${item === tab ? "bg-(--ink) text-white" : "bg-(--card)"}`,
    key: item,
    onClick: () => setTab(item)
  }, item))))), tab === "Analyzer Specifications" ? React.createElement(SpecificationTab, null) : null, tab === "Parameter Specifications" ? React.createElement(ParameterTab, null) : null, tab === "Parts" ? React.createElement(PartsTab, null) : null));
};
const SpecificationTab = () => {
  const data = [{
    id: 1,
    heading: "Sample flow Recommended",
    desc: "Recommended: 0 - 5 l/min"
  }, {
    id: 2,
    heading: "Sample pressure",
    desc: "0 - 4 Bar (0 - 1 Bar with sampling peristaltic pump)"
  }, {
    id: 3,
    heading: "Sample temperature",
    desc: "0 - 80 °C"
  }, {
    id: 4,
    heading: "Wet parts materials",
    desc: "Quartz, Polypropylene, Polyethylene, FPM (Viton), PMMA"
  }, {
    id: 5,
    heading: "Measuring time",
    desc: "5 sec (except PO4, NO2, Fe, Cr(VI): 3 min / Cl2, Al: 2 min / SiO2: 6 min)"
  }, {
    id: 6,
    heading: "Measurement interval",
    desc: "1 min to 720 min (if measuring time compatible). Physicochemical parameters may be continuous."
  }, {
    id: 7,
    heading: "Memory",
    desc: "5000 lines of measurements (up to 16 channels) with date and time."
  }, {
    id: 8,
    heading: "Consumption Cleaning solution",
    desc: "Cleaning solution (5% sulfuric acid): 220 ml/day. Reagent per measurement: Al 0.5 ml, Cl2/PO4/Fe/NO2/Cr(VI) 0.6 ml, SiO2 1.2 ml."
  }, {
    id: 9,
    heading: "Maintenance interval",
    desc: "Recommended: 6 months to 1 year (except for refilling)."
  }, {
    id: 10,
    heading: "Power supply",
    desc: "90 - 264 VAC, 50/60 Hz, 40 VA. 12V DC, 3A max."
  }, {
    id: 11,
    heading: "Screen",
    desc: "Colour TFT LCD 320×240 pixels with LED backlight. Depending on model and configuration."
  }, {
    id: 12,
    heading: "Communication",
    desc: "RS232, Modbus, HTTP/Web interface, RS485 for external probes (DO, TSS), USB Wi-Fi (IEEE 802.11b), optional Ethernet (IEEE 802.3)."
  }, {
    id: 13,
    heading: "Certifications",
    desc: "TUV Rheinland, CE, EN 61010-1, EN 61326."
  }, {
    id: 14,
    heading: "Enclosure",
    desc: "Stainless steel with epoxy coating, IP65, wall mounting brackets."
  }, {
    id: 15,
    heading: "Dimensions",
    desc: "230 × 340 × 190 mm (H × W × D). Standard for BOD, COD, TSS. Changes as per parameter specifications."
  }, {
    id: 16,
    heading: "Weight",
    desc: "15 to 20 kg depending on the configuration."
  }];
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const currentItems = React.useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);
  return React.createElement(React.Fragment, null, React.createElement(Reveal, null, React.createElement("div", {
    className: sectionHeadingGrid
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "var(--mute)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "\u25C6 Online Water analyzer \xB7 UV300"), React.createElement("h2", {
    style: sectionHeadingStyle
  }, "Analyzer", React.createElement("br", null), React.createElement("span", {
    className: "serif-i"
  }, "Specifications"))), React.createElement("p", {
    style: sectionIntroStyle
  }, "Would you like a robust data base to help you better understand your process over time and under specific conditions? Do you want to review your plant\u2019s processes, identify opportunities for improvement and make fact-based operational decisions? Vepolink is your tool."))), React.createElement(Reveal, null, React.createElement("div", {
    className: "bg-(--card) border p-4 md:p-5 border-(--line) rounded overflow-hidden"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "mono text-[10.5px] text-(--mute) uppercase mb-[20px]"
  }, "Specification \xB7 ", React.createElement("b", null, "UV300"), " \xB7 Analyzer")), currentItems.map((item, l) => {
    return React.createElement(Reveal, {
      delay: 140 * l,
      key: item.id
    }, React.createElement("div", {
      className: "bg-(--paper-2) border border-(--line-2) rounded-[6px] mt-2 p-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
    }, React.createElement("div", {
      className: "font-semibold text-slate-900 md:border-r md:border-(--line) md:pr-4"
    }, item.heading), React.createElement("div", {
      className: "text-slate-600 text-sm md:col-span-2"
    }, item.desc)));
  }), React.createElement("div", {
    className: "flex flex-col md:flex-row items-center justify-between gap-4 mt-5 pt-4 border-t border-(--line)"
  }, React.createElement("button", {
    onClick: () => setCurrentPage(prev => Math.max(prev - 1, 1)),
    disabled: currentPage === 1,
    className: pagerButtonClass
  }, "Previous"), React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap justify-center"
  }, Array.from({
    length: totalPages
  }, (_, index) => {
    const page = index + 1;
    return React.createElement("button", {
      key: page,
      onClick: () => setCurrentPage(page),
      className: pageDotClass(page === currentPage)
    }, page);
  })), React.createElement("button", {
    onClick: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
    disabled: currentPage === totalPages,
    className: pagerButtonClass
  }, "Next")))));
};
const ParameterTab = () => {
  const parameterSpecifications = [{
    id: 1,
    parameter: "UVA",
    technology: "UV – Vis Spectroscopy",
    range: "0-200 Abs/m, 0-600 Abs/m",
    accuracy: "± 2%"
  }, {
    id: 2,
    parameter: "COD",
    technology: "UV – Vis Spectroscopy",
    range: "0-100 mg/l COD, 0-2000 mg/l COD, 0-20000 mg/l COD",
    accuracy: "± 2%"
  }, {
    id: 3,
    parameter: "BOD",
    technology: "UV – Vis Spectroscopy",
    range: "0-100 mg/l BOD, 0-1000 mg/l BOD, 0-10000 mg/l BOD",
    accuracy: "± 2%"
  }, {
    id: 4,
    parameter: "TOC",
    technology: "UV – Vis Spectroscopy",
    range: "0-100 mg/l TOC, 0-1000 mg/l TOC, 0-10000 mg/l TOC",
    accuracy: "± 2%"
  }, {
    id: 5,
    parameter: "TSS",
    technology: "UV – Vis Spectroscopy",
    range: "0-1000 mg/l TSS, 0-10000 mg/l TSS",
    accuracy: "± 2%"
  }, {
    id: 6,
    parameter: "Nitrate",
    technology: "UV – Vis Spectroscopy",
    range: "0-100 mg/l NO3",
    accuracy: "± 2%"
  }, {
    id: 7,
    parameter: "Colour",
    technology: "UV – Vis Spectroscopy",
    range: "0-100 pt/Co, 0-1000 pt/Co",
    accuracy: "± 2%"
  }, {
    id: 8,
    parameter: "PAH (aromatics)",
    technology: "UV Fluorescence",
    range: "0-10 mg/l C6H6",
    accuracy: "± 2%"
  }, {
    id: 9,
    parameter: "Oil in Water",
    technology: "UV Fluorescence",
    range: "0-100 ppm OIW, 0-1000 ppm OIW",
    accuracy: "± 2%"
  }, {
    id: 10,
    parameter: "Chlorophyll A",
    technology: "",
    range: "0-100 µg/l ChlA",
    accuracy: "± 2%"
  }, {
    id: 11,
    parameter: "Phosphate",
    technology: "Colorimetry",
    range: "0-2 mg/l P-PO4, 0-20 mg/l P-PO4",
    accuracy: "± 2%"
  }, {
    id: 12,
    parameter: "Chlorine",
    technology: "Electrochemistry / UV – Vis Spectroscopy",
    range: "0-5 mg/l Cl2",
    accuracy: "± 2%"
  }, {
    id: 13,
    parameter: "Nitrite",
    technology: "UV – Vis Spectroscopy",
    range: "0-5 mg/l NO2",
    accuracy: "± 2%"
  }, {
    id: 14,
    parameter: "Aluminium",
    technology: "Colorimetry",
    range: "0-500 ppb Al",
    accuracy: "± 2%"
  }, {
    id: 15,
    parameter: "Iron",
    technology: "Colorimetry",
    range: "0-2 mg/l Fe",
    accuracy: "± 2%"
  }, {
    id: 16,
    parameter: "Silica",
    technology: "Colorimetry",
    range: "0-20 mg/l SiO2",
    accuracy: "± 2%"
  }, {
    id: 17,
    parameter: "Cr VI",
    technology: "Colorimetry",
    range: "0-2 mg/l Cr VI",
    accuracy: "± 2%"
  }, {
    id: 18,
    parameter: "Turbidity",
    technology: "UV – Vis Spectrophotometry",
    range: "0-10 NTU, 0-100 NTU, 0-1000 NTU",
    accuracy: "± 2%"
  }, {
    id: 19,
    parameter: "pH",
    technology: "Electrochemistry",
    range: "0-14",
    accuracy: "± 2%"
  }, {
    id: 20,
    parameter: "ORP",
    technology: "Electrochemistry",
    range: "+/- 2000 mV",
    accuracy: "± 2%"
  }, {
    id: 21,
    parameter: "Dissolved Oxygen",
    technology: "Optical Fluorescence",
    range: "0-25 mg/l O2",
    accuracy: "± 2%"
  }, {
    id: 22,
    parameter: "External TSS",
    technology: "90 degree light scattering",
    range: "0-1500 mg/l TSS, 0-30000 mg/l TSS",
    accuracy: "± 2%"
  }, {
    id: 23,
    parameter: "External Turbidity",
    technology: "90 degree light scattering",
    range: "0-4 NTU, 0-40 NTU",
    accuracy: "± 2%"
  }, {
    id: 24,
    parameter: "Conductivity",
    technology: "Electrochemistry",
    range: "0-2000 uS",
    accuracy: "± 2%"
  }];
  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(parameterSpecifications.length / ITEMS_PER_PAGE);
  const currentItems = React.useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return parameterSpecifications.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);
  return React.createElement(React.Fragment, null, React.createElement(Reveal, null, React.createElement("div", {
    className: sectionHeadingGrid
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "var(--mute)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "\u25C6 Online Water analyzer \xB7 UV300"), React.createElement("h2", {
    style: sectionHeadingStyle
  }, "Parameter", React.createElement("br", null), React.createElement("span", {
    className: "serif-i"
  }, "Specifications"))), React.createElement("p", {
    style: sectionIntroStyle
  }, "Would you like a robust data base to help you better understand your process over time and under specific conditions? Do you want to review your plant\u2019s processes, identify opportunities for improvement and make fact-based operational decisions? Vepolink is your tool."))), React.createElement("div", {
    className: "bg-(--card) border p-4 md:p-5 border-(--line) rounded overflow-hidden"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "mono text-[10.5px] text-(--mute) uppercase mb-[20px]"
  }, "Parameter \xB7 ", React.createElement("b", null, "UV300"), " \xB7 Analyzer")), currentItems.map((item, k) => {
    return React.createElement(Reveal, {
      delay: 140 * k,
      key: item.id
    }, React.createElement("div", {
      className: "bg-(--paper-2) border border-(--line-2) rounded-[6px] mt-2 p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3"
    }, React.createElement("div", {
      className: "font-semibold text-slate-900 xl:border-r xl:border-(--line) xl:pr-3"
    }, item.parameter), React.createElement("div", {
      className: "text-slate-600 text-sm xl:border-r xl:border-(--line) xl:pr-3"
    }, item.technology || "-"), React.createElement("div", {
      className: "text-slate-600 text-sm xl:border-r xl:border-(--line) xl:pr-3"
    }, item.range), React.createElement("div", {
      className: "text-slate-600 text-sm"
    }, item.accuracy)));
  }), React.createElement("div", {
    className: "flex flex-col md:flex-row items-center justify-between gap-4 mt-5 pt-4 border-t border-(--line)"
  }, React.createElement("button", {
    onClick: () => setCurrentPage(prev => Math.max(prev - 1, 1)),
    disabled: currentPage === 1,
    className: pagerButtonClass
  }, "Previous"), React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap justify-center"
  }, Array.from({
    length: totalPages
  }, (_, index) => {
    const page = index + 1;
    return React.createElement("button", {
      key: page,
      onClick: () => setCurrentPage(page),
      className: pageDotClass(page === currentPage)
    }, page);
  })), React.createElement("button", {
    onClick: () => setCurrentPage(prev => Math.min(prev + 1, totalPages)),
    disabled: currentPage === totalPages,
    className: pagerButtonClass
  }, "Next"))));
};
const PartsTab = () => {
  const data = [{
    id: 1,
    heading: "Aqualog 4000 UVS",
    desc: ["Full spectrum UV-Vis absorbance Analyzer", "Optical path: 1,3,10 mm", "(4 multiplexing option)"]
  }, {
    id: 2,
    heading: "Aqualog 4000 UVS/1",
    desc: ["Full spectrum UV-Vis absorbance Analyzer", "Optical path: 1 mm", "Standard for inlet and outlet of waste water"]
  }, {
    id: 3,
    heading: "Aqualog 4000 UVS/3",
    desc: ["Full spectrum UV-Vis absorbance Analyzer", "Optical path: 10 mm", "For Drinking water"]
  }, {
    id: 4,
    heading: "Aqualog 5000 UVS",
    desc: ["Full spectrum UV-Vis absorbance Analyzer", "Optical path: 1,3,10 mm", "(6 multiplexing option)"]
  }];
  return React.createElement(React.Fragment, null, React.createElement(Reveal, null, React.createElement("div", {
    className: sectionHeadingGrid
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "var(--mute)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "\u25C6 Online Water analyzer \xB7 UV300"), React.createElement("h2", {
    style: sectionHeadingStyle
  }, "Parts", React.createElement("br", null), React.createElement("span", {
    className: "serif-i"
  }, "Specifications"))), React.createElement("p", {
    style: sectionIntroStyle
  }, "Would you like a robust data base to help you better understand your process over time and under specific conditions? Do you want to review your plant\u2019s processes, identify opportunities for improvement and make fact-based operational decisions? Vepolink is your tool."))), React.createElement("div", {
    className: "bg-(--card) border p-4 md:p-5 border-(--line) rounded overflow-hidden"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: "mono text-[10.5px] text-(--mute) uppercase mb-[20px]"
  }, "Parts \xB7 ", React.createElement("b", null, "UV300"), " \xB7 Analyzer")), data.map((item, k) => {
    return React.createElement(Reveal, {
      delay: 140 * k,
      key: item.id
    }, React.createElement("div", {
      className: "bg-(--paper-2) border border-(--line-2) rounded-[6px] mt-2 p-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
    }, React.createElement("div", {
      className: "font-semibold text-slate-900 md:border-r md:border-(--line) md:pr-4 flex flex-col justify-center"
    }, item.heading), React.createElement("div", {
      className: "text-slate-600 text-sm flex flex-col gap-1"
    }, item.desc.map((l, i) => {
      return React.createElement("p", {
        key: i,
        className: "flex gap-1 flex-row items-center"
      }, React.createElement("span", {
        className: "w-[6px] h-[6px] rounded mr-[3px] bg-[#cbcbcb]"
      }), React.createElement("span", null, l));
    }))));
  })));
};
const AccessoriesSection = () => {
  const data = [{
    id: 1,
    title: "SAMPLING PUMP",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "30px",
      viewBox: "0 -960 960 960",
      width: "30px",
      fill: "#ffffff"
    }, React.createElement("path", {
      d: "M140-280h210.15q-28.53-17.77-51.5-43.15-22.96-25.39-37.03-56.85H140v100Zm481.5-58.5Q680-397 680-480t-58.5-141.5Q563-680 480-680t-141.5 58.5Q280-563 280-480t58.5 141.5Q397-280 480-280t141.5-58.5Z"
    })),
    img: "gan1.jpg",
    prod_code: "AGMS-P-EXT",
    feat: "External Peristaltic sampling pump for Peltier Probe",
    desc: ["Heavy duty brushless motor", "Connected to analyzer electronics with timer for sampling"]
  }, {
    id: 2,
    title: "SOLENOID VALVES",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "30px",
      viewBox: "0 -960 960 960",
      width: "30px",
      fill: "#ffffff"
    }, React.createElement("path", {
      d: "M460-655.38v-120H300v-40h360v40H500v120h-40ZM180-144.62v-280h40v40h160v-160h-40v-40h280v40h-40v160h160v-40h40v280h-40v-40H220v40h-40Z"
    })),
    img: "gan2.jpg",
    prod_code: "AGMS-SV-EXT",
    feat: "External Valves for Multiplexing & Remote Calibration",
    desc: ["Normally Open configuration", "Connected to analyzer electronics for sampling, increasing life of pump and tubing."]
  }, {
    id: 3,
    title: "INPUT MODULES",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "30px",
      viewBox: "0 -960 960 960",
      width: "30px",
      fill: "#ffffff"
    }, React.createElement("path", {
      d: "M260-380h40v-200h-40v200Zm200 0h40v-200h-40v200Zm200 0h40v-200h-40v200Z"
    })),
    img: "output.jpg",
    prod_code: "AN/IN-4-20-AQUVS",
    feat: "Normally Open configuration",
    desc: ["Connected to analyzer electronics for sampling, increasing life of pump and tubing."]
  }, {
    id: 4,
    title: "SOLENOID VALVES",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "30px",
      viewBox: "0 -960 960 960",
      width: "30px",
      fill: "#ffffff"
    }, React.createElement("path", {
      d: "M260-380h40v-200h-40v200Zm200 0h40v-200h-40v200Zm200 0h40v-200h-40v200Z"
    })),
    img: "input.jpg",
    prod_code: "AN/OUT-4-20-AQUVS",
    feat: "External Valves for Multiplexing & Remote Calibration",
    desc: ["Normally Open configuration", "Connected to analyzer electronics for sampling, increasing life of pump and tubing."]
  }, {
    id: 5,
    title: "COMMUNICATION",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "30px",
      viewBox: "0 -960 960 960",
      width: "30px",
      fill: "#ffffff"
    }, React.createElement("path", {
      d: "M292.31-200.77 120-373.08l172.31-172.3 28.31 28.53-123.77 123.77h295.46v40H196.85l123.77 123.77-28.31 28.54Z"
    })),
    img: "gan5.jpg",
    prod_code: "AN-COMM-AQUVS",
    feat: "WiFi Interface for future norms",
    desc: ["Connection to wireless network", "Secured tamper proof data transfer"]
  }, {
    id: 6,
    title: "COMMUNICATION",
    icon: React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "30px",
      viewBox: "0 -960 960 960",
      width: "30px",
      fill: "#ffffff"
    }, React.createElement("path", {
      d: "M292.31-200.77 120-373.08l172.31-172.3 28.31 28.53-123.77 123.77h295.46v40H196.85l123.77 123.77-28.31 28.54Z"
    })),
    img: "ax5.png",
    prod_code: "AN-COMM",
    feat: "Cloud Data Logger Interface",
    desc: ["Connection via SIM, LAN", "Secured tamper proof data transfer"]
  }];
  return React.createElement("section", {
    className: `${sectionClass} product-Accessories bg-(--paper-2)`
  }, React.createElement("div", {
    className: "shell pl-auto mr-auto"
  }, React.createElement(Reveal, null, React.createElement("div", {
    className: sectionHeadingGrid,
    style: {
      marginBottom: 80
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "var(--mute)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "\u25C6 Online Water analyzer \xB7 UV300"), React.createElement("h2", {
    style: sectionHeadingStyle
  }, "Accessories", React.createElement("br", null), React.createElement("span", {
    className: "serif-i"
  }, "Water analyzer."))), React.createElement("p", {
    style: sectionIntroStyle
  }, "Would you like a robust data base to help you better understand your process over time and under specific conditions? Do you want to review your plant\u2019s processes, identify opportunities for improvement and make fact-based operational decisions? Vepolink is your tool."))), React.createElement("div", {
    className: "overflow-x-auto md:overflow-hidden"
  }, React.createElement("div", {
    className: "inline-flex flex-row gap-4 md:gap-5 w-max pr-4",
    style: {
      animation: "vepoScroll 30s linear infinite"
    }
  }, [...data, ...data].map((item, idx) => {
    return React.createElement("div", {
      key: `${item.id}-${idx}`,
      className: "w-[260px] sm:w-[280px] md:max-w-[300px] border border-(--line) rounded overflow-hidden shrink-0 bg-white"
    }, React.createElement("div", {
      className: "aspect-[4/3] overflow-hidden"
    }, React.createElement("img", {
      src: `/assets/images/${item.img}`,
      alt: item.title,
      onError: handleMissingProductImage,
      className: "w-full h-full object-cover"
    })), React.createElement("div", {
      className: "flex flex-row items-center gap-2 bg-[#203254] text-[15px] md:text-[16px] font-medium py-2 px-2 text-white rounded-t-[5px]"
    }, React.createElement("span", {
      className: "w-[30px] h-[30px] shrink-0"
    }, item.icon), React.createElement("span", null, item.title)), React.createElement("div", {
      className: "px-3"
    }, React.createElement("div", {
      className: "flex flex-row gap-2 items-center my-3 border-b border-(--line-2) pb-3"
    }, React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "rotate-[100deg]"
    }, React.createElement("path", {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
    }), React.createElement("circle", {
      cx: "7.5",
      cy: "7.5",
      r: ".5",
      fill: "currentColor"
    })), React.createElement("span", {
      className: "text-[12px]"
    }, React.createElement("span", {
      className: "text-gray-400"
    }, "Product Code: "), React.createElement("span", null, item.prod_code))), React.createElement("div", {
      className: "text-sm text-(--muted) mb-3"
    }, item.feat), React.createElement("div", {
      className: "p-2 bg-[#f1f1f1] rounded h-full flex flex-col gap-2 mb-3"
    }, item.desc.map((t, i) => {
      return React.createElement("div", {
        key: i,
        className: "text-sm text-(--muted) flex flex-row gap-2 items-baseline"
      }, React.createElement("div", {
        className: "w-[7px] h-[7px] rounded-full bg-[#203254]"
      }), React.createElement("div", {
        className: "flex-1"
      }, t));
    }))));
  }))), React.createElement("style", null, `@keyframes vepoScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`), React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-10 md:mt-12 max-w-[1170px] ml-auto mr-auto"
  }, React.createElement("div", {
    className: "flex flex-row gap-2 px-3"
  }, React.createElement("div", null, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "50",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#203254",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4"
  }), React.createElement("circle", {
    cx: "17.695",
    cy: "17.695",
    r: "3"
  }))), React.createElement("div", null, React.createElement("div", {
    className: "text-[16px] text-(--ink) font-bold"
  }, "Reliable Performance"), React.createElement("p", {
    className: "text-sm text-(--muted)"
  }, "Built for continuous operation"))), React.createElement("div", {
    className: "flex flex-row gap-2 px-3 lg:border-r lg:border-l lg:border-(--line)"
  }, React.createElement("div", null, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "50",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#203254",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }))), React.createElement("div", null, React.createElement("div", {
    className: "text-[16px] text-(--ink) font-bold"
  }, "Smart Integration"), React.createElement("p", {
    className: "text-sm text-(--muted)"
  }, "Work seamlessly with analyzer electronics"))), React.createElement("div", {
    className: "flex flex-row gap-2 px-3"
  }, React.createElement("div", null, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "50",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#203254",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M16 14v2.2l1.6 1"
  }), React.createElement("path", {
    d: "M16 2v4"
  }), React.createElement("path", {
    d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
  }), React.createElement("path", {
    d: "M3 10h5"
  }), React.createElement("path", {
    d: "M8 2v4"
  }), React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "6"
  }))), React.createElement("div", null, React.createElement("div", {
    className: "text-[16px] text-(--ink) font-bold"
  }, "Extended Component Life"), React.createElement("p", {
    className: "text-sm text-(--muted)"
  }, "Protects pump and tubing for longer use"))), React.createElement("div", {
    className: "flex flex-row gap-2 px-3 lg:border-l lg:border-(--line)"
  }, React.createElement("div", null, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "50",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#203254",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, React.createElement("path", {
    d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
  }), React.createElement("path", {
    d: "m9 12 2 2 4-4"
  }))), React.createElement("div", null, React.createElement("div", {
    className: "text-[16px] text-(--ink) font-bold"
  }, "Easy Installation"), React.createElement("p", {
    className: "text-sm text-(--muted)"
  }, "Plug-and-play design for quick setup"))))));
};
const ShadeBg = () => React.createElement("div", {
  className: "absolute top-0 right-0 w-full h-full pointer-events-none opacity-50"
}, React.createElement("svg", {
  className: "absolute -z-10 -mt-20 right-0 max-w-full h-auto",
  width: "890",
  height: "764",
  viewBox: "0 0 890 764",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, React.createElement("rect", {
  width: "890",
  height: "764",
  fill: "url(#a)"
}), React.createElement("defs", null, React.createElement("radialGradient", {
  id: "a",
  cx: "0",
  cy: "0",
  r: "1",
  gradientUnits: "userSpaceOnUse",
  gradientTransform: "matrix(0 381.525 -445 0 445 381.525)"
}, React.createElement("stop", {
  offset: ".293",
  stopColor: "#fafaf7",
  stopOpacity: "0"
}), React.createElement("stop", {
  offset: "1",
  stopColor: "#fafaf7"
})))));
const Partners = () => {
  const partners = ["User Friendly Interface", "Multiplexing System", "Automatic Cleaning", "Up to 6 different streams"];
  return React.createElement("section", {
    className: "product-proof-strip",
    style: {
      padding: window.screen.width < 767 ? "0px" : "15px 0",
      marginTop: window.screen.width < 767 ? "0px" : "25px"
    }
  }, React.createElement("div", {
    style: {
      overflow: "hidden",
      borderTop: "1px solid var(--mute)",
      borderBottom: "1px solid var(--mute)",
      maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      animation: "vepoScroll 30s linear infinite",
      width: "max-content",
      padding: "12px 24px"
    }
  }, [...partners, ...partners].map((p, i) => React.createElement("span", {
    key: i,
    style: {
      fontFamily: "Geist",
      fontSize: "clamp(14px, 2vw, 18px)",
      fontWeight: 600,
      color: "var(--ink-3)",
      whiteSpace: "nowrap"
    }
  }, React.createElement("span", {
    className: "w-[6px] h-[6px] bg-[var(--ink-3)] mr-2.5 inline-block",
    style: {
      verticalAlign: "middle"
    }
  }), p))), React.createElement("style", null, `@keyframes vepoScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`)));
};
const CTA = () => React.createElement("section", {
  className: "md:py-[120px] md:px-[48px] py-[100px] px-[16px]"
}, React.createElement("div", {
  className: "max-w-[1320px] m-auto bg-(--ink) text-(--paper-2) rounded-[8px] md:py-[72px] md:px-[64px] p-8 relative overflow-hidden"
}, React.createElement("div", {
  style: {
    position: "absolute",
    left: -120,
    top: 0,
    width: 420,
    height: 420,
    borderRadius: 999,
    background: "radial-gradient(circle, oklch(72% 0.13 210 / 0.35), transparent 60%)",
    pointerEvents: "none"
  }
}), React.createElement("div", {
  className: "relative grid md:grid-cols-2 grid-cols-1 md:gap-[64px] gap-[35px]  align-start"
}, React.createElement("div", {
  className: "col-span-1"
}, React.createElement("div", {
  className: "mono text-[11px] leading-[0.12em] text-(--mute-2) uppercase mb-[18px]"
}, "\u25C6 Request for Information"), React.createElement("div", {
  style: {
    color: "var(--paper-2)"
  },
  className: "md:text-4xl text-2xl leading-[1.26] tracking-[-0.03em] m-0 font-[500] text-(--paper-2)"
}, "Have a question or need assistance with our products? Complete the form below, and one of our specialists will contact you shortly")), React.createElement("div", {
  className: "col-span-1"
}, React.createElement("form", {
  className: "prod-form flex flex-wrap p-2",
  action: "mailto:techsupport@vepolink.com",
  method: "post",
  encType: "text/plain"
}, React.createElement("div", {
  className: " mb-2 md:w-1/2 w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("input", {
  className: "w-full",
  placeholder: "Enter your first name",
  required: true
}), React.createElement("label", null, "First name"))), React.createElement("div", {
  className: " mb-2 md:w-1/2 w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("input", {
  className: "w-full",
  placeholder: "Enter your last name",
  required: true
}), React.createElement("label", null, "Last name"))), React.createElement("div", {
  className: " mb-2 md:w-1/2 w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("input", {
  className: "w-full",
  placeholder: "Enter your Company Name",
  required: true
}), React.createElement("label", null, "Company Name"))), React.createElement("div", {
  className: " mb-2 md:w-1/2 w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("input", {
  className: "w-full",
  placeholder: "Enter your Post code",
  required: true
}), React.createElement("label", null, "Post code"))), React.createElement("div", {
  className: " mb-2 md:w-1/2 w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("input", {
  className: "w-full",
  placeholder: "Enter your City",
  required: true
}), React.createElement("label", null, "City"))), React.createElement("div", {
  className: " mb-2 md:w-1/2 w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("input", {
  className: "w-full",
  placeholder: "Enter your Country/Region",
  required: true
}), React.createElement("label", null, "Country/Region"))), React.createElement("div", {
  className: " mb-2 md:w-1/2 w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("input", {
  type: "email",
  className: "w-full",
  placeholder: "Enter your Email Address",
  required: true
}), React.createElement("label", null, "Email Address"))), React.createElement("div", {
  className: " mb-2 md:w-1/2 w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("input", {
  type: "tel",
  className: "w-full",
  placeholder: "Enter your Phone",
  required: true
}), React.createElement("label", null, "Phone"))), React.createElement("div", {
  className: " mb-2 md:w-full px-1"
}, React.createElement("div", {
  className: "relative"
}, React.createElement("textarea", {
  className: "w-full",
  placeholder: "Enter Your message",
  required: true
}))), React.createElement("div", {
  className: "w-full flex flex-col items-end"
}, " ", React.createElement("button", {
  type: "submit",
  style: {
    padding: "14px 24px",
    fontSize: 14,
    fontWeight: 500,
    background: "var(--ink)",
    color: "var(--paper-2)",
    border: "1px solid var(--ink-3)",
    borderRadius: 99,
    cursor: "pointer"
  }
}, "Talk to engineering")))))));
Object.assign(window, {
  ProductHero,
  ProductOverView,
  ProductSpectroscopy,
  FeaturedProducts,
  SpecificationSection,
  AccessoriesSection,
  CTA,
  Reveal
});
const ProductApp = () => React.createElement(React.Fragment, null, React.createElement("a", {
  className: "skip-link",
  href: "#product-main"
}, "Skip to content"), React.createElement("site-header", null), React.createElement("main", {
  id: "product-main"
}, React.createElement(ProductHero, null), React.createElement(ProductOverView, null), React.createElement(ProductSpectroscopy, null), React.createElement(FeaturedProducts, null), React.createElement(SpecificationSection, null), React.createElement(AccessoriesSection, null), React.createElement(CTA, null)), React.createElement("site-footer", null));
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(ProductApp, null));
