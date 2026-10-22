function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    style: {
      display: "block"
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
  style
}) => {
  const [ref, shown] = useReveal(delay);
  return React.createElement(As, {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      transition: "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
      ...(style || {})
    }
  }, children);
};
const AboutHero = () => React.createElement("section", {
  className: "about-page-section about-hero",
  style: {
    padding: "32px 48px 0",
    position: "relative",
    overflow: "hidden"
  }
}, React.createElement(SensorBackdrop, null), React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto",
    position: "relative",
    zIndex: 1
  }
}, React.createElement(Reveal, null, React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 28
  }
}, React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "5px 12px 5px 8px",
    border: "1px solid var(--line)",
    borderRadius: 99,
    background: "var(--card)",
    fontSize: 12,
    fontFamily: "Geist Mono",
    color: "var(--ink-2)"
  }
}, React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 99,
    background: "var(--signal-ok)"
  }
}), "About Vepolink \xB7 Est. 2021 \xB7 Delhi, India"))), React.createElement(Reveal, {
  delay: 80
}, React.createElement("h1", {
  style: {
    fontSize: "clamp(48px, 6.4vw, 92px)",
    fontWeight: 500,
    lineHeight: 0.98,
    letterSpacing: "-0.035em",
    margin: 0,
    maxWidth: 1180,
    color: "var(--ink)"
  }
}, "Intelligence for a", React.createElement("br", null), React.createElement("span", {
  className: "serif-i",
  style: {
    fontWeight: 400
  }
}, "more sustainable planet."))), React.createElement(Reveal, {
  delay: 160
}, React.createElement("div", {
  className: "about-stats-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 48,
    marginTop: 36,
    alignItems: "end"
  }
}, React.createElement("p", {
  style: {
    fontSize: 19,
    lineHeight: 1.45,
    color: "var(--mute)",
    margin: 0,
    maxWidth: 620,
    textWrap: "pretty"
  }
}, "Vepolink equips enterprises, municipalities and researchers with real-time environmental intelligence \u2014 powered by IoT-enabled instruments, machine learning, and a serverless data fabric built for the regulatory reality of the places we serve."), React.createElement("div", {
  style: {
    display: "flex",
    gap: 10,
    justifyContent: "flex-end",
    flexWrap: "wrap"
  }
}, React.createElement("a", {
  href: "mailto:sales@vepolink.com?subject=Talk%20to%20Vepolink",
  style: {
    padding: "13px 22px",
    fontSize: 14.5,
    fontWeight: 500,
    background: "var(--ink)",
    color: "var(--paper-2)",
    border: "none",
    borderRadius: 99,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none"
  }
}, "Talk to our team ", React.createElement(Icon, {
  name: "arrow",
  size: 15
})), React.createElement("a", {
  href: "mailto:techsupport@vepolink.com?subject=Careers%20at%20Vepolink",
  style: {
    padding: "13px 22px",
    fontSize: 14.5,
    fontWeight: 500,
    background: "transparent",
    color: "var(--ink)",
    border: "1px solid var(--ink-3)",
    borderRadius: 99,
    cursor: "pointer",
    textDecoration: "none"
  }
}, "View open roles")))), React.createElement(Reveal, {
  delay: 260
}, React.createElement("div", {
  style: {
    marginTop: 64,
    padding: "28px 0",
    borderTop: "1px solid var(--line)",
    borderBottom: "1px solid var(--line)",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 32
  }
}, [["2021", "founded in Delhi"], ["240+", "live stations across India"], ["38M+", "telemetry events / day"], ["14", "OEM analyser partners"], ["6 yrs", "average customer tenure"]].map(([k, v]) => React.createElement("div", {
  key: v
}, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 32,
    fontWeight: 500,
    letterSpacing: "-0.02em",
    color: "var(--ink)"
  }
}, k), React.createElement("div", {
  style: {
    fontSize: 12.5,
    color: "var(--mute)",
    marginTop: 4,
    maxWidth: 180
  }
}, v)))))));
const SensorBackdrop = () => {
  const dots = React.useMemo(() => {
    const arr = [];
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 20; x++) {
        arr.push({
          x: x * 80 + 40,
          y: y * 70 + 40,
          k: `${x}-${y}`
        });
      }
    }
    return arr;
  }, []);
  const pings = [{
    cx: 240,
    cy: 180,
    d: 0
  }, {
    cx: 900,
    cy: 320,
    d: 1.3
  }, {
    cx: 1340,
    cy: 140,
    d: 2.6
  }, {
    cx: 560,
    cy: 460,
    d: 1.9
  }, {
    cx: 1180,
    cy: 520,
    d: 0.7
  }];
  return React.createElement("svg", {
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 0,
      maskImage: "linear-gradient(180deg, black 0%, black 55%, transparent 100%)"
    },
    viewBox: "0 0 1600 640",
    preserveAspectRatio: "xMidYMid slice"
  }, dots.map(d => React.createElement("circle", {
    key: d.k,
    cx: d.x,
    cy: d.y,
    r: "1",
    fill: "var(--ink-3)",
    opacity: "0.18"
  })), pings.map((p, i) => React.createElement("g", {
    key: i
  }, React.createElement("circle", {
    cx: p.cx,
    cy: p.cy,
    r: "2.5",
    fill: "var(--cyan)",
    opacity: "0.9"
  }), React.createElement("circle", {
    cx: p.cx,
    cy: p.cy,
    r: "2.5",
    fill: "none",
    stroke: "var(--cyan)",
    strokeWidth: "1"
  }, React.createElement("animate", {
    attributeName: "r",
    from: "2.5",
    to: "42",
    dur: "3.6s",
    begin: `${p.d}s`,
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "opacity",
    from: "0.5",
    to: "0",
    dur: "3.6s",
    begin: `${p.d}s`,
    repeatCount: "indefinite"
  })))));
};
const Vision = () => React.createElement("section", {
  className: "about-page-section",
  style: {
    padding: "140px 48px 100px"
  }
}, React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: 96,
    alignItems: "start"
  }
}, React.createElement(Reveal, null, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    letterSpacing: "0.12em",
    color: "var(--mute)",
    textTransform: "uppercase",
    marginBottom: 14
  }
}, "\u25C6 Our vision"), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 12.5,
    color: "var(--ink)",
    letterSpacing: "0.04em"
  }
}, "01 / 06")), React.createElement(Reveal, {
  delay: 120
}, React.createElement("h2", {
  style: {
    fontSize: 56,
    lineHeight: 1.02,
    letterSpacing: "-0.03em",
    margin: "0 0 28px",
    fontWeight: 500,
    textWrap: "balance"
  }
}, "A future where every plant manager can ", React.createElement("span", {
  className: "serif-i"
}, "see what their water is doing"), " the moment it changes."), React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--mute)",
    margin: "0 0 14px",
    maxWidth: 720,
    textWrap: "pretty"
  }
}, "Environmental data has historically lived in clipboards, monthly PDFs, and the gap between an event and its report. Compliance came late; intervention came later. We're closing that gap to under five seconds \u2014 because the difference between a breach and a near-miss is usually one alert sent in time."), React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "var(--mute)",
    margin: 0,
    maxWidth: 720,
    textWrap: "pretty"
  }
}, "Vepolink exists to turn the dark, fragmented telemetry of industrial water into clear, actionable intelligence \u2014 and to make it the unremarkable default for the operators and regulators we serve."))));
const Technology = () => React.createElement("section", {
  className: "about-page-section",
  style: {
    padding: "100px 48px",
    background: "var(--paper)",
    borderTop: "1px solid var(--line)",
    borderBottom: "1px solid var(--line)"
  }
}, React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto"
  }
}, React.createElement(Reveal, null, React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: 64,
    marginBottom: 56
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
}, "\u25C6 The technology \xB7 02"), React.createElement("h2", {
  style: {
    fontSize: 44,
    lineHeight: 1.02,
    letterSpacing: "-0.025em",
    margin: 0,
    fontWeight: 500
  }
}, "An IoT + AI", React.createElement("br", null), React.createElement("span", {
  className: "serif-i"
}, "stack for the field."))), React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.5,
    color: "var(--mute)",
    margin: 0,
    maxWidth: 620,
    alignSelf: "end",
    textWrap: "pretty"
  }
}, "Edge data acquisition units talk to a serverless cloud, which feeds an analytics layer trained on six years of Indian environmental telemetry. Built for sites with patchy networks and uncompromising regulators."))), React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: 24
  }
}, React.createElement(Reveal, {
  delay: 80
}, React.createElement(TechPanel, null)), React.createElement(Reveal, {
  delay: 160,
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  }
}, [{
  i: "waves",
  t: "Real-time monitoring",
  d: "Sub-5s ingest from analog 4–20 mA, Modbus, MQTT, OPC-UA sensors."
}, {
  i: "drop",
  t: "Air, water, climate data",
  d: "Same fabric — pH, turbidity, DO, AQI, PM, SO₂, NOₓ, ambient."
}, {
  i: "chart",
  t: "Machine learning insights",
  d: "Forecasting, wind/pollution roses, anomaly detection on streaming data."
}, {
  i: "shield",
  t: "ESG & compliance reporting",
  d: "EN 14181 treatment, CPCB/SPCB templates, third-party API push."
}].map(p => React.createElement(TechRow, _extends({
  key: p.t
}, p)))))));
const TechPanel = () => React.createElement("div", {
  style: {
    background: "var(--card)",
    border: "1px solid var(--line)",
    borderRadius: 6,
    padding: 22,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    boxShadow: "0 24px 60px -34px rgba(10,18,32,0.18)"
  }
}, React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }
}, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10.5,
    color: "var(--mute)",
    letterSpacing: "0.1em",
    textTransform: "uppercase"
  }
}, "ML insight \xB7 Outfall A \xB7 last 24h"), React.createElement("span", {
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
}, React.createElement(LivePulse, null), " Streaming")), React.createElement("div", null, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    color: "var(--mute)"
  }
}, "Predicted breach window"), React.createElement("div", {
  style: {
    fontSize: 26,
    fontWeight: 500,
    letterSpacing: "-0.02em",
    marginTop: 4
  }
}, "Turbidity \u2191 4.7 NTU ", React.createElement("span", {
  className: "serif-i",
  style: {
    color: "var(--mute)"
  }
}, "in ~28 min"))), React.createElement(Sparkline, {
  data: genSeries(2.8, 0.45, 60, 17),
  color: "var(--ink-2)",
  height: 84,
  width: 620,
  fill: true
}), React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 1,
    background: "var(--line-2)",
    marginTop: 6
  }
}, [["Model", "vepo-forecast v3"], ["MAE", "0.21 NTU"], ["Horizon", "60 min"], ["Confidence", "92.4%"]].map(([k, v]) => React.createElement("div", {
  key: k,
  style: {
    background: "var(--card)",
    padding: "10px 12px"
  }
}, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10,
    color: "var(--mute)",
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  }
}, k), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 12.5,
    color: "var(--ink)",
    marginTop: 3
  }
}, v)))));
const TechRow = ({
  i,
  t,
  d
}) => React.createElement("div", {
  style: {
    display: "flex",
    gap: 16,
    padding: "18px 20px",
    background: "var(--card)",
    border: "1px solid var(--line)",
    borderRadius: 6
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
const Commitment = () => React.createElement("section", {
  className: "about-page-section",
  style: {
    padding: "140px 48px"
  }
}, React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto",
    textAlign: "left"
  }
}, React.createElement(Reveal, null, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    letterSpacing: "0.12em",
    color: "var(--mute)",
    textTransform: "uppercase",
    marginBottom: 18
  }
}, "\u25C6 Our commitment \xB7 03")), React.createElement(Reveal, {
  delay: 100
}, React.createElement("p", {
  style: {
    fontSize: "clamp(28px, 3.4vw, 44px)",
    fontWeight: 500,
    lineHeight: 1.18,
    letterSpacing: "-0.02em",
    margin: 0,
    color: "var(--ink)",
    textWrap: "balance"
  }
}, "We help industries and governments balance operational throughput with ", React.createElement("span", {
  className: "grad-text"
}, "ecological responsibility"), " \u2014 through transparent, accurate, and ", React.createElement("span", {
  className: "serif-i"
}, "automated"), " environmental monitoring that holds up under audit.")), React.createElement(Reveal, {
  delay: 220
}, React.createElement("div", {
  style: {
    marginTop: 48,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,
    paddingTop: 32,
    borderTop: "1px solid var(--line)"
  }
}, [["Transparent by default", "Public dashboards available for any station, on request, for community accountability."], ["Locally engineered", "Built in India, for Indian regulatory regimes — designed for the realities of CPCB/SPCB filings."], ["Open data egress", "Every byte of telemetry is yours; export by REST, OPC-UA, or scheduled CSV."]].map(([t, d]) => React.createElement("div", {
  key: t
}, React.createElement("div", {
  style: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "-0.01em"
  }
}, t), React.createElement("div", {
  style: {
    fontSize: 14,
    color: "var(--mute)",
    marginTop: 6,
    lineHeight: 1.55
  }
}, d)))))));
const ProblemSolution = () => {
  const rows = [{
    old: "Reporting that arrives after the breach",
    oldD: "Monthly PDFs, hand-keyed values, regulatory letters arriving days after the incident.",
    new: "Telemetry-to-alert in < 5s",
    newD: "Pre-threshold warnings auto-routed to plant head, compliance officer, and SPCB portal."
  }, {
    old: "Fragmented monitoring across vendors",
    oldD: "Each analyser in its own silo. Operators stitch spreadsheets between shifts.",
    new: "One dashboard, every analyser",
    newD: "Multi-protocol DAS unifies analog, Modbus, MQTT and OPC-UA into a single station view."
  }, {
    old: "Manual compliance and audit prep",
    oldD: "Weeks of pre-inspection scramble to format Form V / Form IV records for the SPCB.",
    new: "Signed reports, auto-generated",
    newD: "EN 14181-aligned validation and SPCB templates produced from raw data, on schedule."
  }, {
    old: "Communities left in the dark",
    oldD: "No visibility for the people downstream of a discharge or near an emission stack.",
    new: "Public station dashboards",
    newD: "Optional public-facing views build trust and meet emerging transparency mandates."
  }];
  return React.createElement("section", {
    className: "about-page-section about-dark-section",
    style: {
      padding: "100px 48px",
      background: "var(--ink)",
      color: "var(--paper-2)"
    }
  }, React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: "0 auto"
    }
  }, React.createElement(Reveal, null, React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: 64,
      marginBottom: 56
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.12em",
      color: "var(--mute-2)",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "\u25C6 The problem we solve \xB7 04"), React.createElement("h2", {
    style: {
      fontSize: 44,
      lineHeight: 1.02,
      letterSpacing: "-0.025em",
      margin: 0,
      fontWeight: 500,
      color: "var(--paper-2)"
    }
  }, "The old way is", React.createElement("br", null), React.createElement("span", {
    className: "serif-i",
    style: {
      color: "var(--cyan)"
    }
  }, "structurally too slow."))), React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--mute-2)",
      margin: 0,
      alignSelf: "end",
      maxWidth: 540
    }
  }, "Environmental compliance still runs on paper-era plumbing. We map the four chronic failure modes \u2014 and what intelligent monitoring changes about each."))), React.createElement("div", {
    style: {
      borderTop: "1px solid var(--ink-3)"
    }
  }, rows.map((r, i) => React.createElement(Reveal, {
    key: r.old,
    delay: i * 80
  }, React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "60px 1fr 60px 1fr",
      gap: 32,
      padding: "28px 0",
      borderBottom: "1px solid var(--ink-3)",
      alignItems: "start"
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.1em",
      color: "var(--signal-alert)",
      textTransform: "uppercase",
      paddingTop: 5
    }
  }, "Before"), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 500,
      letterSpacing: "-0.015em",
      color: "var(--paper-2)"
    }
  }, r.old), React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--mute-2)",
      marginTop: 6,
      maxWidth: 460,
      lineHeight: 1.55
    }
  }, r.oldD)), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: "0.1em",
      color: "var(--cyan)",
      textTransform: "uppercase",
      paddingTop: 5
    }
  }, "With Vepolink"), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 500,
      letterSpacing: "-0.015em",
      color: "var(--paper-2)"
    }
  }, r.new), React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--mute-2)",
      marginTop: 6,
      maxWidth: 460,
      lineHeight: 1.55
    }
  }, r.newD))))))));
};
const values = [{
  k: "Transparency",
  n: "01",
  b: "Open dashboards, exportable data, signed audit trails. The default is visible."
}, {
  k: "Sustainability",
  n: "02",
  b: "We measure our impact in tonnes of effluent kept inside limit — not in seats sold."
}, {
  k: "Community empowerment",
  n: "03",
  b: "Public station views for the neighbourhoods downstream of every outfall we monitor."
}, {
  k: "Scientific accuracy",
  n: "04",
  b: "EN 14181 treatment, SI-traceable calibration, and drift correction in every record."
}, {
  k: "Innovation through data",
  n: "05",
  b: "Six years of telemetry trains the forecasting models that flag the next anomaly."
}];
const Values = () => React.createElement("section", {
  className: "about-page-section",
  style: {
    padding: "140px 48px 100px"
  }
}, React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto"
  }
}, React.createElement(Reveal, null, React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: 64,
    marginBottom: 56
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
}, "\u25C6 Our values \xB7 05"), React.createElement("h2", {
  style: {
    fontSize: 44,
    lineHeight: 1.02,
    letterSpacing: "-0.025em",
    margin: 0,
    fontWeight: 500
  }
}, "The five", React.createElement("br", null), React.createElement("span", {
  className: "serif-i"
}, "we don't compromise on."))), React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.5,
    color: "var(--mute)",
    margin: 0,
    alignSelf: "end",
    maxWidth: 560,
    textWrap: "pretty"
  }
}, "We hire for these. We turn down work that violates them. They show up in product decisions \u2014 not in the lobby of the office."))), React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 16
  }
}, values.map((v, i) => React.createElement(Reveal, {
  key: v.k,
  delay: i * 70
}, React.createElement(ValueCard, v))))));
const ValueCard = ({
  k,
  n,
  b
}) => {
  const [hover, setHover] = React.useState(false);
  return React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 6,
      padding: "22px 22px 26px",
      minHeight: 280,
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      transform: hover ? "translateY(-4px)" : "translateY(0)",
      boxShadow: hover ? "0 24px 50px -28px rgba(10,18,32,0.25)" : "0 0 0 transparent",
      transition: "transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s"
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: "var(--brand-grad)",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform .5s cubic-bezier(.2,.7,.2,1)"
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 28
    }
  }, React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--mute)",
      letterSpacing: "0.1em"
    }
  }, n), React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: hover ? "var(--cyan)" : "var(--line)",
      transition: "background .3s"
    }
  })), React.createElement("h3", {
    style: {
      fontSize: 22,
      lineHeight: 1.12,
      letterSpacing: "-0.015em",
      margin: 0,
      fontWeight: 500,
      textWrap: "balance"
    }
  }, k), React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: "var(--mute)",
      margin: "auto 0 0",
      paddingTop: 18,
      textWrap: "pretty"
    }
  }, b));
};
const DataSources = () => React.createElement("section", {
  className: "about-page-section",
  style: {
    padding: "100px 48px",
    background: "var(--paper)",
    borderTop: "1px solid var(--line)",
    borderBottom: "1px solid var(--line)"
  }
}, React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1.3fr",
    gap: 64,
    alignItems: "center"
  }
}, React.createElement(Reveal, null, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    letterSpacing: "0.12em",
    color: "var(--mute)",
    textTransform: "uppercase",
    marginBottom: 14
  }
}, "\u25C6 Data sources \xB7 06"), React.createElement("h2", {
  style: {
    fontSize: 44,
    lineHeight: 1.02,
    letterSpacing: "-0.025em",
    margin: "0 0 24px",
    fontWeight: 500
  }
}, "Every station, ", React.createElement("span", {
  className: "serif-i"
}, "on the same fabric.")), React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "var(--mute)",
    margin: "0 0 28px",
    maxWidth: 480,
    textWrap: "pretty"
  }
}, "Vepolink aggregates telemetry from field-deployed IoT analysers and fixed environmental monitoring stations into a single, queryable layer \u2014 with edge buffering for sites that go offline."), React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }
}, [["IoT sensors", "Field analysers · multi-parameter probes · radio-linked DAS"], ["Environmental monitoring stations", "CAAQMS, CEMS, CWQMS — wired to existing infrastructure"], ["Lab & manual entry", "Wet-chemistry results merged with continuous telemetry"], ["Partner & SCADA bridges", "OPC-UA, Modbus and existing plant control systems"]].map(([k, v]) => React.createElement("li", {
  key: k,
  style: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start"
  }
}, React.createElement("span", {
  style: {
    width: 18,
    height: 18,
    borderRadius: 99,
    background: "var(--card)",
    border: "1.5px solid var(--ink)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 3
  }
}, React.createElement("span", {
  style: {
    width: 5,
    height: 5,
    borderRadius: 99,
    background: "var(--ink)"
  }
})), React.createElement("div", null, React.createElement("div", {
  style: {
    fontSize: 14.5,
    fontWeight: 500
  }
}, k), React.createElement("div", {
  style: {
    fontSize: 13,
    color: "var(--mute)",
    marginTop: 2
  }
}, v)))))), React.createElement(Reveal, {
  delay: 120
}, React.createElement(NetworkViz, null))));
const NetworkViz = () => {
  const hub = {
    x: 320,
    y: 220
  };
  const nodes = [{
    x: 70,
    y: 70,
    k: "STP-04",
    t: "IoT"
  }, {
    x: 580,
    y: 80,
    k: "CWQMS-12",
    t: "Station"
  }, {
    x: 60,
    y: 380,
    k: "Outfall-A",
    t: "IoT"
  }, {
    x: 600,
    y: 360,
    k: "Lab-Aux",
    t: "Lab"
  }, {
    x: 320,
    y: 30,
    k: "CEMS-09",
    t: "Station"
  }, {
    x: 320,
    y: 430,
    k: "DAS-22-N",
    t: "IoT"
  }, {
    x: 130,
    y: 230,
    k: "Probe-B7",
    t: "IoT"
  }, {
    x: 520,
    y: 220,
    k: "SCADA",
    t: "Bridge"
  }];
  return React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 6,
      padding: 18,
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 24px 60px -34px rgba(10,18,32,0.18)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10.5,
      color: "var(--mute)",
      letterSpacing: "0.1em",
      textTransform: "uppercase"
    }
  }, "Vepolink mesh \xB7 8 of 240+ shown"), React.createElement("span", {
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
  }, React.createElement(LivePulse, null), " All nodes nominal")), React.createElement("svg", {
    viewBox: "0 0 640 450",
    width: "100%",
    style: {
      display: "block"
    }
  }, React.createElement("defs", null, React.createElement("radialGradient", {
    id: "hubGlow",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--cyan)",
    stopOpacity: "0.35"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--cyan)",
    stopOpacity: "0"
  }))), nodes.map((n, i) => React.createElement("g", {
    key: n.k
  }, React.createElement("line", {
    x1: n.x,
    y1: n.y,
    x2: hub.x,
    y2: hub.y,
    stroke: "var(--line)",
    strokeWidth: "1"
  }), React.createElement("line", {
    x1: n.x,
    y1: n.y,
    x2: hub.x,
    y2: hub.y,
    stroke: "var(--cyan)",
    strokeWidth: "1.4",
    strokeDasharray: "4 240",
    strokeLinecap: "round"
  }, React.createElement("animate", {
    attributeName: "stroke-dashoffset",
    from: "0",
    to: "-244",
    dur: `${2.4 + i % 3 * 0.5}s`,
    repeatCount: "indefinite"
  })))), React.createElement("circle", {
    cx: hub.x,
    cy: hub.y,
    r: "80",
    fill: "url(#hubGlow)"
  }), React.createElement("circle", {
    cx: hub.x,
    cy: hub.y,
    r: "22",
    fill: "var(--ink)"
  }), React.createElement("circle", {
    cx: hub.x,
    cy: hub.y,
    r: "22",
    fill: "none",
    stroke: "var(--cyan)",
    strokeWidth: "1.5"
  }, React.createElement("animate", {
    attributeName: "r",
    from: "22",
    to: "38",
    dur: "2.4s",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "opacity",
    from: "0.5",
    to: "0",
    dur: "2.4s",
    repeatCount: "indefinite"
  })), React.createElement("text", {
    x: hub.x,
    y: hub.y + 4,
    textAnchor: "middle",
    fontFamily: "Geist Mono",
    fontSize: "10",
    fill: "var(--paper-2)",
    letterSpacing: "0.08em"
  }, "VEPO"), nodes.map(n => React.createElement("g", {
    key: n.k
  }, React.createElement("circle", {
    cx: n.x,
    cy: n.y,
    r: "14",
    fill: "var(--card)",
    stroke: "var(--ink)",
    strokeWidth: "1.5"
  }), React.createElement("circle", {
    cx: n.x,
    cy: n.y,
    r: "4",
    fill: "var(--ink-2)"
  }), React.createElement("text", {
    x: n.x,
    y: n.y + 30,
    textAnchor: "middle",
    fontFamily: "Geist Mono",
    fontSize: "10",
    fill: "var(--ink)"
  }, n.k), React.createElement("text", {
    x: n.x,
    y: n.y + 42,
    textAnchor: "middle",
    fontFamily: "Geist Mono",
    fontSize: "8.5",
    fill: "var(--mute)",
    letterSpacing: "0.06em"
  }, n.t.toUpperCase())))));
};
const team = [{
  n: "Nikhil Garg",
  r: "Founder & CEO",
  img: "/assets/team/nikhil-garg.jpg",
  li: "https://www.linkedin.com/in/nikhil-garg-305487229/",
  b: "Nikhil leads Vepolink's product and company direction, shaping the business around practical digital systems for industrial teams. Since founding the company in 2021, he has focused on technology that improves reliability, efficiency, and long-term operating value."
}, {
  n: "Sachin Mandal",
  r: "IoT & Compliance Specialist",
  img: "/assets/team/sachin.jpg",
  li: "https://www.linkedin.com/in/sachin-mandal-132149197/",
  b: "Sachin Mandal owns the field edge of Vepolink's monitoring stack, from device configuration to cloud connectivity and client support. He keeps industrial telemetry dependable, audit-ready, and aligned with CPCB/SPCB requirements, with signals moving cleanly from plant floor to dashboard."
}, {
  n: "Kamal Mourya",
  r: "Front-end Developer",
  img: "/assets/team/kamal-mourya.jpg",
  li: "#",
  b: "Kamal turns Vepolink's product ideas into clean, responsive interfaces using React, TypeScript, and modern UI systems. He focuses on component architecture, API integration, and polished web experiences that make complex environmental data easier to use."
}, {
  n: "Anant Mendiratta",
  r: "AI & Tech Advisor",
  img: "/assets/team/anant-mendiratta.jpg",
  li: "https://www.linkedin.com/in/anantmendiratta/",
  b: "Anant advises Vepolink on AI strategy, technology direction, and scalable digital transformation. With leadership experience across startups and enterprises, he helps translate emerging AI capabilities into practical systems for growth, efficiency, and better decision-making."
}];
const Leadership = () => React.createElement("section", {
  className: "about-page-section",
  style: {
    padding: "140px 48px 100px"
  }
}, React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto"
  }
}, React.createElement(Reveal, null, React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: 64,
    marginBottom: 56
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
}, "\u25C6 Team members \xB7 07"), React.createElement("h2", {
  style: {
    fontSize: 44,
    lineHeight: 1.02,
    letterSpacing: "-0.025em",
    margin: 0,
    fontWeight: 500
  }
}, "The team behind", React.createElement("br", null), React.createElement("span", {
  className: "serif-i"
}, "Vepolink."))), React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.5,
    color: "var(--mute)",
    margin: 0,
    alignSelf: "end",
    maxWidth: 580,
    textWrap: "pretty"
  }
}, "Vepolink brings together entrepreneurship, environmental compliance, IoT systems, software engineering, and AI advisory experience to build dependable monitoring products for industrial teams."))), React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16
  }
}, team.map((p, i) => React.createElement(Reveal, {
  key: p.n,
  delay: i * 70
}, React.createElement(TeamCard, _extends({}, p, {
  idx: i
})))))));
const TeamCard = ({
  n,
  r,
  b,
  img,
  li,
  idx
}) => {
  const hasLinkedIn = li && li !== "#";
  const linkedinStyle = {
    width: 34,
    height: 34,
    borderRadius: 6,
    border: "1px solid var(--line)",
    background: "var(--paper-2)",
    color: "var(--ink)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto",
    textDecoration: "none",
    opacity: hasLinkedIn ? 1 : 0.35,
    cursor: hasLinkedIn ? "pointer" : "default"
  };
  return React.createElement("article", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 6,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 0,
      minHeight: 535,
      height: "100%",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      height: 260,
      background: "var(--paper)",
      borderRadius: 4,
      position: "relative",
      border: "1px solid var(--line-2)",
      overflow: "hidden"
    }
  }, React.createElement("img", {
    className: "team-portrait",
    src: img,
    alt: `${n}, ${r}`,
    loading: "lazy",
    width: "720",
    height: "720",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 18%"
    }
  }), React.createElement("span", {
    className: "mono",
    style: {
      position: "absolute",
      top: 10,
      left: 12,
      padding: "5px 8px",
      borderRadius: 99,
      background: "rgba(250,250,247,0.86)",
      border: "1px solid var(--line)",
      fontSize: 10,
      color: "var(--mute)",
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, "0", idx + 1)), React.createElement("div", {
    style: {
      paddingTop: 18,
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: "-0.015em"
    }
  }, n), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--mute)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginTop: 4
    }
  }, r)), hasLinkedIn ? React.createElement("a", {
    href: li,
    "aria-label": `${n} on LinkedIn`,
    title: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
    style: linkedinStyle
  }, React.createElement("img", {
    src: "/assets/linkedin-inbug-black.png",
    alt: "",
    width: "16",
    height: "16",
    style: {
      width: 16,
      height: 16,
      objectFit: "contain"
    }
  })) : React.createElement("span", {
    "aria-label": `${n} LinkedIn profile pending`,
    title: "LinkedIn profile pending",
    style: linkedinStyle
  }, React.createElement("img", {
    src: "/assets/linkedin-inbug-black.png",
    alt: "",
    width: "16",
    height: "16",
    style: {
      width: 16,
      height: 16,
      objectFit: "contain"
    }
  }))), React.createElement("p", {
    className: "team-bio",
    style: {
      fontSize: 13.5,
      color: "var(--mute)",
      lineHeight: 1.55,
      margin: "14px 0 0",
      height: 176,
      textWrap: "pretty"
    }
  }, b)));
};
const AboutCTA = () => React.createElement("section", {
  className: "about-page-section about-cta-section",
  style: {
    padding: "120px 48px"
  }
}, React.createElement("div", {
  style: {
    maxWidth: 1320,
    margin: "0 auto",
    background: "var(--ink)",
    color: "var(--paper-2)",
    borderRadius: 8,
    padding: "72px 64px",
    position: "relative",
    overflow: "hidden"
  }
}, React.createElement("div", {
  style: {
    position: "absolute",
    left: -180,
    bottom: -180,
    width: 480,
    height: 480,
    borderRadius: 999,
    background: "radial-gradient(circle, oklch(65% 0.14 160 / 0.35), transparent 60%)",
    pointerEvents: "none"
  }
}), React.createElement("div", {
  style: {
    position: "absolute",
    right: -120,
    top: -160,
    width: 460,
    height: 460,
    borderRadius: 999,
    background: "radial-gradient(circle, oklch(72% 0.13 210 / 0.32), transparent 60%)",
    pointerEvents: "none"
  }
}), React.createElement("svg", {
  style: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    opacity: 0.5
  },
  viewBox: "0 0 1200 400",
  preserveAspectRatio: "none"
}, Array.from({
  length: 12
}).map((_, i) => React.createElement("path", {
  key: i,
  d: `M 0 ${30 + i * 30} Q 300 ${10 + i * 30}, 600 ${30 + i * 30} T 1200 ${30 + i * 30}`,
  stroke: "var(--ink-3)",
  strokeWidth: "0.8",
  fill: "none"
}))), React.createElement("div", {
  style: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 64,
    alignItems: "end"
  }
}, React.createElement("div", null, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    letterSpacing: "0.12em",
    color: "var(--mute-2)",
    textTransform: "uppercase",
    marginBottom: 18
  }
}, "\u25C6 Let's talk"), React.createElement("h2", {
  style: {
    fontSize: 56,
    lineHeight: 1.0,
    letterSpacing: "-0.03em",
    margin: 0,
    fontWeight: 500,
    color: "var(--paper-2)"
  }
}, "Bring your sites", React.createElement("br", null), React.createElement("span", {
  className: "serif-i",
  style: {
    color: "var(--cyan)"
  }
}, "into the light."))), React.createElement("div", null, React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.55,
    color: "var(--mute-2)",
    margin: "0 0 28px",
    textWrap: "pretty"
  }
}, "Whether you operate one outfall or a cluster of refineries \u2014 we'll commission a pilot in 30 days and have you in clean compliance from day one."), React.createElement("div", {
  style: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap"
  }
}, React.createElement("a", {
  href: "mailto:sales@vepolink.com?subject=Request%20a%20Vepolink%20demo",
  style: {
    padding: "14px 24px",
    fontSize: 14.5,
    fontWeight: 500,
    background: "var(--paper-2)",
    color: "var(--ink)",
    border: "none",
    borderRadius: 99,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none"
  }
}, "Request a demo ", React.createElement(Icon, {
  name: "arrow",
  size: 15
})), React.createElement("a", {
  href: "mailto:techsupport@vepolink.com",
  style: {
    padding: "14px 24px",
    fontSize: 14.5,
    fontWeight: 500,
    background: "transparent",
    color: "var(--paper-2)",
    border: "1px solid var(--ink-3)",
    borderRadius: 99,
    cursor: "pointer",
    textDecoration: "none"
  }
}, "techsupport@vepolink.com"))))));
Object.assign(window, {
  AboutHero,
  Vision,
  Technology,
  Commitment,
  ProblemSolution,
  Values,
  DataSources,
  Leadership,
  AboutCTA,
  Reveal
});
const AboutApp = () => React.createElement(React.Fragment, null, React.createElement("a", {
  className: "skip-link",
  href: "#about-main"
}, "Skip to content"), React.createElement("site-header", null), React.createElement("main", {
  id: "about-main"
}, React.createElement(AboutHero, null), React.createElement(Vision, null), React.createElement(Technology, null), React.createElement(Commitment, null), React.createElement(ProblemSolution, null), React.createElement(Values, null), React.createElement(DataSources, null), React.createElement(Leadership, null), React.createElement(AboutCTA, null)), React.createElement("site-footer", null));
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(AboutApp, null));
