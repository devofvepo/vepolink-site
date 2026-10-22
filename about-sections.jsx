// About page sections — reuses Icon / VepoLogo / Sparkline from existing files.

// ─── Scroll-reveal helper ────────────────────────────
const useReveal = (delay = 0) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setShown(true), delay); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);
  return [ref, shown];
};

const Reveal = ({ children, delay = 0, y = 18, as: As = "div", style }) => {
  const [ref, shown] = useReveal(delay);
  return (
    <As ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      transition: "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
      ...(style || {}),
    }}>{children}</As>
  );
};

// ─── About Hero ──────────────────────────────────────
const AboutHero = () => (
  <section className="about-page-section about-hero" style={{ padding: "32px 48px 0", position: "relative", overflow: "hidden" }}>
    {/* animated sensor backdrop */}
    <SensorBackdrop />
    <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 1 }}>
      <Reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 12px 5px 8px",
            border: "1px solid var(--line)", borderRadius: 99,
            background: "var(--card)",
            fontSize: 12, fontFamily: "Geist Mono", color: "var(--ink-2)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--signal-ok)" }} />
            About Vepolink · Est. 2021 · Delhi, India
          </span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h1 style={{
          fontSize: "clamp(48px, 6.4vw, 92px)",
          fontWeight: 500, lineHeight: 0.98, letterSpacing: "-0.035em",
          margin: 0, maxWidth: 1180, color: "var(--ink)",
        }}>
          Intelligence for a<br/>
          {" "}<span className="serif-i" style={{ fontWeight: 400 }}>more sustainable planet.</span>
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <div className="about-stats-grid" style={{
          display: "grid", gridTemplateColumns: "1.2fr 1fr",
          gap: 48, marginTop: 36, alignItems: "end",
        }}>
          <p style={{
            fontSize: 19, lineHeight: 1.45, color: "var(--mute)",
            margin: 0, maxWidth: 620, textWrap: "pretty",
          }}>
            Vepolink equips enterprises, municipalities and researchers with
            real-time environmental intelligence — powered by IoT-enabled
            instruments, machine learning, and a serverless data fabric built
            for the regulatory reality of the places we serve.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <a href="mailto:sales@vepolink.com?subject=Talk%20to%20Vepolink" style={{
              padding: "13px 22px", fontSize: 14.5, fontWeight: 500,
              background: "var(--ink)", color: "var(--paper-2)",
              border: "none", borderRadius: 99, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
              textDecoration: "none",
            }}>
              Talk to our team <Icon name="arrow" size={15} />
            </a>
            <a href="mailto:techsupport@vepolink.com?subject=Careers%20at%20Vepolink" style={{
              padding: "13px 22px", fontSize: 14.5, fontWeight: 500,
              background: "transparent", color: "var(--ink)",
              border: "1px solid var(--ink-3)", borderRadius: 99, cursor: "pointer",
              textDecoration: "none",
            }}>
              View open roles
            </a>
          </div>
        </div>
      </Reveal>

      {/* by the numbers ribbon */}
      <Reveal delay={260}>
        <div style={{
          marginTop: 64, padding: "28px 0",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 32,
        }}>
          {[
            ["2021", "founded in Delhi"],
            ["240+", "live stations across India"],
            ["38M+", "telemetry events / day"],
            ["14", "OEM analyser partners"],
            ["6 yrs", "average customer tenure"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="mono" style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--ink)" }}>{k}</div>
              <div style={{ fontSize: 12.5, color: "var(--mute)", marginTop: 4, maxWidth: 180 }}>{v}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// Animated dot-grid + drifting "sensor pings" behind the hero — subtle, technical
const SensorBackdrop = () => {
  const dots = React.useMemo(() => {
    const arr = [];
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 20; x++) {
        arr.push({ x: x * 80 + 40, y: y * 70 + 40, k: `${x}-${y}` });
      }
    }
    return arr;
  }, []);
  const pings = [
    { cx: 240, cy: 180, d: 0 },
    { cx: 900, cy: 320, d: 1.3 },
    { cx: 1340, cy: 140, d: 2.6 },
    { cx: 560, cy: 460, d: 1.9 },
    { cx: 1180, cy: 520, d: 0.7 },
  ];
  return (
    <svg style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0,
      maskImage: "linear-gradient(180deg, black 0%, black 55%, transparent 100%)",
    }} viewBox="0 0 1600 640" preserveAspectRatio="xMidYMid slice">
      {dots.map(d => (
        <circle key={d.k} cx={d.x} cy={d.y} r="1" fill="var(--ink-3)" opacity="0.18" />
      ))}
      {pings.map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="2.5" fill="var(--cyan)" opacity="0.9" />
          <circle cx={p.cx} cy={p.cy} r="2.5" fill="none" stroke="var(--cyan)" strokeWidth="1">
            <animate attributeName="r" from="2.5" to="42" dur="3.6s" begin={`${p.d}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="3.6s" begin={`${p.d}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>
  );
};

// ─── Vision ──────────────────────────────────────────
const Vision = () => (
  <section className="about-page-section" style={{ padding: "140px 48px 100px" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 96, alignItems: "start" }}>
      <Reveal>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 14 }}>
          ◆ Our vision
        </div>
        <div className="mono" style={{ fontSize: 12.5, color: "var(--ink)", letterSpacing: "0.04em" }}>
          01 / 06
        </div>
      </Reveal>
      <Reveal delay={120}>
        <h2 style={{ fontSize: 56, lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 28px", fontWeight: 500, textWrap: "balance" }}>
          A future where every plant manager can <span className="serif-i">see what their water is doing</span> the moment it changes.
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--mute)", margin: "0 0 14px", maxWidth: 720, textWrap: "pretty" }}>
          Environmental data has historically lived in clipboards, monthly PDFs,
          and the gap between an event and its report. Compliance came late;
          intervention came later. We're closing that gap to under five seconds —
          because the difference between a breach and a near-miss is usually one
          alert sent in time.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--mute)", margin: 0, maxWidth: 720, textWrap: "pretty" }}>
          Vepolink exists to turn the dark, fragmented telemetry of industrial
          water into clear, actionable intelligence — and to make it the
          unremarkable default for the operators and regulators we serve.
        </p>
      </Reveal>
    </div>
  </section>
);

// ─── Technology ──────────────────────────────────────
const Technology = () => (
  <section className="about-page-section" style={{ padding: "100px 48px", background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto" }}>
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 14 }}>
              ◆ The technology · 02
            </div>
            <h2 style={{ fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, fontWeight: 500 }}>
              An IoT + AI<br/>
              <span className="serif-i">stack for the field.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--mute)", margin: 0, maxWidth: 620, alignSelf: "end", textWrap: "pretty" }}>
            Edge data acquisition units talk to a serverless cloud, which feeds
            an analytics layer trained on six years of Indian environmental
            telemetry. Built for sites with patchy networks and uncompromising
            regulators.
          </p>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 24 }}>
        <Reveal delay={80}>
          <TechPanel />
        </Reveal>
        <Reveal delay={160} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { i: "waves", t: "Real-time monitoring", d: "Sub-5s ingest from analog 4–20 mA, Modbus, MQTT, OPC-UA sensors." },
            { i: "drop", t: "Air, water, climate data", d: "Same fabric — pH, turbidity, DO, AQI, PM, SO₂, NOₓ, ambient." },
            { i: "chart", t: "Machine learning insights", d: "Forecasting, wind/pollution roses, anomaly detection on streaming data." },
            { i: "shield", t: "ESG & compliance reporting", d: "EN 14181 treatment, CPCB/SPCB templates, third-party API push." },
          ].map(p => (
            <TechRow key={p.t} {...p} />
          ))}
        </Reveal>
      </div>
    </div>
  </section>
);

const TechPanel = () => (
  <div style={{
    background: "var(--card)", border: "1px solid var(--line)", borderRadius: 6,
    padding: 22, display: "flex", flexDirection: "column", gap: 14,
    boxShadow: "0 24px 60px -34px rgba(10,18,32,0.18)",
  }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div className="mono" style={{ fontSize: 10.5, color: "var(--mute)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        ML insight · Outfall A · last 24h
      </div>
      <span className="mono" style={{ fontSize: 10.5, color: "var(--ink)", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>
        <LivePulse /> Streaming
      </span>
    </div>
    <div>
      <div className="mono" style={{ fontSize: 11, color: "var(--mute)" }}>Predicted breach window</div>
      <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em", marginTop: 4 }}>
        Turbidity ↑ 4.7 NTU <span className="serif-i" style={{ color: "var(--mute)" }}>in ~28 min</span>
      </div>
    </div>
    <Sparkline data={genSeries(2.8, 0.45, 60, 17)} color="var(--ink-2)" height={84} width={620} fill />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--line-2)", marginTop: 6 }}>
      {[
        ["Model", "vepo-forecast v3"],
        ["MAE", "0.21 NTU"],
        ["Horizon", "60 min"],
        ["Confidence", "92.4%"],
      ].map(([k, v]) => (
        <div key={k} style={{ background: "var(--card)", padding: "10px 12px" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{k}</div>
          <div className="mono" style={{ fontSize: 12.5, color: "var(--ink)", marginTop: 3 }}>{v}</div>
        </div>
      ))}
    </div>
  </div>
);

const TechRow = ({ i, t, d }) => (
  <div style={{
    display: "flex", gap: 16,
    padding: "18px 20px",
    background: "var(--card)", border: "1px solid var(--line)", borderRadius: 6,
  }}>
    <span style={{
      width: 38, height: 38, borderRadius: 6, flexShrink: 0,
      background: "var(--paper-2)", border: "1px solid var(--line)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      color: "var(--ink-2)",
    }}>
      <Icon name={i} size={17} />
    </span>
    <div>
      <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>{t}</div>
      <div style={{ fontSize: 13.5, color: "var(--mute)", marginTop: 3, lineHeight: 1.5 }}>{d}</div>
    </div>
  </div>
);

// ─── Commitment ──────────────────────────────────────
const Commitment = () => (
  <section className="about-page-section" style={{ padding: "140px 48px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "left" }}>
      <Reveal>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 18 }}>
          ◆ Our commitment · 03
        </div>
      </Reveal>
      <Reveal delay={100}>
        <p style={{
          fontSize: "clamp(28px, 3.4vw, 44px)",
          fontWeight: 500, lineHeight: 1.18, letterSpacing: "-0.02em",
          margin: 0, color: "var(--ink)", textWrap: "balance",
        }}>
          We help industries and governments balance operational throughput
          with <span className="grad-text">ecological responsibility</span> —
          through transparent, accurate, and <span className="serif-i">automated</span> environmental
          monitoring that holds up under audit.
        </p>
      </Reveal>
      <Reveal delay={220}>
        <div style={{
          marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 32, paddingTop: 32, borderTop: "1px solid var(--line)",
        }}>
          {[
            ["Transparent by default", "Public dashboards available for any station, on request, for community accountability."],
            ["Locally engineered", "Built in India, for Indian regulatory regimes — designed for the realities of CPCB/SPCB filings."],
            ["Open data egress", "Every byte of telemetry is yours; export by REST, OPC-UA, or scheduled CSV."],
          ].map(([t, d]) => (
            <div key={t}>
              <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" }}>{t}</div>
              <div style={{ fontSize: 14, color: "var(--mute)", marginTop: 6, lineHeight: 1.55 }}>{d}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

// ─── Problem We Solve ────────────────────────────────
const ProblemSolution = () => {
  const rows = [
    {
      old: "Reporting that arrives after the breach",
      oldD: "Monthly PDFs, hand-keyed values, regulatory letters arriving days after the incident.",
      new: "Telemetry-to-alert in < 5s",
      newD: "Pre-threshold warnings auto-routed to plant head, compliance officer, and SPCB portal.",
    },
    {
      old: "Fragmented monitoring across vendors",
      oldD: "Each analyser in its own silo. Operators stitch spreadsheets between shifts.",
      new: "One dashboard, every analyser",
      newD: "Multi-protocol DAS unifies analog, Modbus, MQTT and OPC-UA into a single station view.",
    },
    {
      old: "Manual compliance and audit prep",
      oldD: "Weeks of pre-inspection scramble to format Form V / Form IV records for the SPCB.",
      new: "Signed reports, auto-generated",
      newD: "EN 14181-aligned validation and SPCB templates produced from raw data, on schedule.",
    },
    {
      old: "Communities left in the dark",
      oldD: "No visibility for the people downstream of a discharge or near an emission stack.",
      new: "Public station dashboards",
      newD: "Optional public-facing views build trust and meet emerging transparency mandates.",
    },
  ];
  return (
    <section className="about-page-section about-dark-section" style={{ padding: "100px 48px", background: "var(--ink)", color: "var(--paper-2)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, marginBottom: 56 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute-2)", textTransform: "uppercase", marginBottom: 14 }}>
                ◆ The problem we solve · 04
              </div>
              <h2 style={{ fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, fontWeight: 500, color: "var(--paper-2)" }}>
                The old way is<br/>
                <span className="serif-i" style={{ color: "var(--cyan)" }}>structurally too slow.</span>
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--mute-2)", margin: 0, alignSelf: "end", maxWidth: 540 }}>
              Environmental compliance still runs on paper-era plumbing. We map
              the four chronic failure modes — and what intelligent monitoring
              changes about each.
            </p>
          </div>
        </Reveal>
        <div style={{ borderTop: "1px solid var(--ink-3)" }}>
          {rows.map((r, i) => (
            <Reveal key={r.old} delay={i * 80}>
              <div style={{
                display: "grid", gridTemplateColumns: "60px 1fr 60px 1fr",
                gap: 32, padding: "28px 0",
                borderBottom: "1px solid var(--ink-3)",
                alignItems: "start",
              }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--signal-alert)", textTransform: "uppercase", paddingTop: 5 }}>
                  Before
                </div>
                <div>
                  <div style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.015em", color: "var(--paper-2)" }}>{r.old}</div>
                  <div style={{ fontSize: 13.5, color: "var(--mute-2)", marginTop: 6, maxWidth: 460, lineHeight: 1.55 }}>{r.oldD}</div>
                </div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--cyan)", textTransform: "uppercase", paddingTop: 5 }}>
                  With Vepolink
                </div>
                <div>
                  <div style={{ fontSize: 19, fontWeight: 500, letterSpacing: "-0.015em", color: "var(--paper-2)" }}>{r.new}</div>
                  <div style={{ fontSize: 13.5, color: "var(--mute-2)", marginTop: 6, maxWidth: 460, lineHeight: 1.55 }}>{r.newD}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Values ──────────────────────────────────────────
const values = [
  { k: "Transparency", n: "01", icon: "eye", b: "Open dashboards, exportable data, signed audit trails. The default is visible." },
  { k: "Sustainability", n: "02", icon: "drop", b: "We measure our impact in tonnes of effluent kept inside limit — not in seats sold." },
  { k: "Community empowerment", n: "03", icon: "user", b: "Public station views for the neighbourhoods downstream of every outfall we monitor." },
  { k: "Scientific accuracy", n: "04", icon: "shield", b: "EN 14181 treatment, SI-traceable calibration, and drift correction in every record." },
  { k: "Innovation through data", n: "05", icon: "chart", b: "Six years of telemetry trains the forecasting models that flag the next anomaly." },
];

const Values = () => (
  <section className="about-page-section" style={{ padding: "140px 48px 100px" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto" }}>
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 14 }}>
              ◆ Our values · 05
            </div>
            <h2 style={{ fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, fontWeight: 500 }}>
              The five<br/>
              <span className="serif-i">we don't compromise on.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--mute)", margin: 0, alignSelf: "end", maxWidth: 560, textWrap: "pretty" }}>
            We hire for these. We turn down work that violates them. They show
            up in product decisions — not in the lobby of the office.
          </p>
        </div>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
        {values.map((v, i) => (
          <Reveal key={v.k} delay={i * 70}>
            <ValueCard {...v} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const ValueCard = ({ k, n, icon, b }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--card)", border: "1px solid var(--line)",
        borderRadius: 6, padding: "22px 22px 26px",
        minHeight: 280, display: "flex", flexDirection: "column",
        position: "relative", overflow: "hidden",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 24px 50px -28px rgba(10,18,32,0.25)" : "0 0 0 transparent",
        transition: "transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s",
      }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: "var(--brand-grad)",
        transform: hover ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform .5s cubic-bezier(.2,.7,.2,1)",
      }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28 }}>
        <span className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.1em" }}>{n}</span>
        <span style={{
          width: 8, height: 8, borderRadius: 99,
          background: hover ? "var(--cyan)" : "var(--line)",
          transition: "background .3s",
        }} />
      </div>
      <h3 style={{
        fontSize: 22, lineHeight: 1.12, letterSpacing: "-0.015em",
        margin: 0, minHeight: 56, fontWeight: 500, textWrap: "balance",
      }}>{k}</h3>
      <div style={{
        width: 48, height: 48, borderRadius: 8,
        border: "1px solid var(--line)", background: "var(--paper-2)",
        color: hover ? "var(--ink)" : "var(--mute)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        margin: "22px 0 24px",
        transition: "color .3s, border-color .3s, background .3s",
      }}>
        <Icon name={icon} size={23} />
      </div>
      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--mute)", margin: 0, textWrap: "pretty" }}>
        {b}
      </p>
    </article>
  );
};

// ─── Data Sources / Network viz ──────────────────────
const DataSources = () => (
  <section className="about-page-section" style={{ padding: "100px 48px", background: "var(--paper)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 64, alignItems: "center" }}>
      <Reveal>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 14 }}>
          ◆ Data sources · 06
        </div>
        <h2 style={{ fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.025em", margin: "0 0 24px", fontWeight: 500 }}>
          Every station, <span className="serif-i">on the same fabric.</span>
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--mute)", margin: "0 0 28px", maxWidth: 480, textWrap: "pretty" }}>
          Vepolink aggregates telemetry from field-deployed IoT analysers and
          fixed environmental monitoring stations into a single, queryable layer
          — with edge buffering for sites that go offline.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            ["IoT sensors", "Field analysers · multi-parameter probes · radio-linked DAS"],
            ["Environmental monitoring stations", "CAAQMS, CEMS, CWQMS — wired to existing infrastructure"],
            ["Lab & manual entry", "Wet-chemistry results merged with continuous telemetry"],
            ["Partner & SCADA bridges", "OPC-UA, Modbus and existing plant control systems"],
          ].map(([k, v]) => (
            <li key={k} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{
                width: 18, height: 18, borderRadius: 99,
                background: "var(--card)", border: "1.5px solid var(--ink)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: 3,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: 99, background: "var(--ink)" }} />
              </span>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 500 }}>{k}</div>
                <div style={{ fontSize: 13, color: "var(--mute)", marginTop: 2 }}>{v}</div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={120}>
        <NetworkViz />
      </Reveal>
    </div>
  </section>
);

const NetworkViz = () => {
  // Central hub + radial nodes — animated dashes traveling toward the hub.
  const hub = { x: 320, y: 220 };
  const nodes = [
    { x: 70,  y: 70,  k: "STP-04",     t: "IoT" },
    { x: 580, y: 80,  k: "CWQMS-12",   t: "Station" },
    { x: 60,  y: 380, k: "Outfall-A",  t: "IoT" },
    { x: 600, y: 360, k: "Lab-Aux",    t: "Lab" },
    { x: 320, y: 30,  k: "CEMS-09",    t: "Station" },
    { x: 320, y: 430, k: "DAS-22-N",   t: "IoT" },
    { x: 130, y: 230, k: "Probe-B7",   t: "IoT" },
    { x: 520, y: 220, k: "SCADA",      t: "Bridge" },
  ];
  return (
    <div style={{
      background: "var(--card)", border: "1px solid var(--line)", borderRadius: 6,
      padding: 18, position: "relative", overflow: "hidden",
      boxShadow: "0 24px 60px -34px rgba(10,18,32,0.18)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div className="mono" style={{ fontSize: 10.5, color: "var(--mute)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Vepolink mesh · 8 of 240+ shown
        </div>
        <span className="mono" style={{ fontSize: 10.5, color: "var(--ink)", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <LivePulse /> All nodes nominal
        </span>
      </div>
      <svg viewBox="0 0 640 450" width="100%" style={{ display: "block" }}>
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* connection lines */}
        {nodes.map((n, i) => (
          <g key={n.k}>
            <line x1={n.x} y1={n.y} x2={hub.x} y2={hub.y}
              stroke="var(--line)" strokeWidth="1" />
            <line x1={n.x} y1={n.y} x2={hub.x} y2={hub.y}
              stroke="var(--cyan)" strokeWidth="1.4"
              strokeDasharray="4 240" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset"
                from="0" to="-244" dur={`${2.4 + (i % 3) * 0.5}s`}
                repeatCount="indefinite" />
            </line>
          </g>
        ))}
        {/* hub glow */}
        <circle cx={hub.x} cy={hub.y} r="80" fill="url(#hubGlow)" />
        {/* hub */}
        <circle cx={hub.x} cy={hub.y} r="22" fill="var(--ink)" />
        <circle cx={hub.x} cy={hub.y} r="22" fill="none" stroke="var(--cyan)" strokeWidth="1.5">
          <animate attributeName="r" from="22" to="38" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x={hub.x} y={hub.y + 4} textAnchor="middle" fontFamily="Geist Mono" fontSize="10" fill="var(--paper-2)" letterSpacing="0.08em">
          VEPO
        </text>
        {/* nodes */}
        {nodes.map(n => (
          <g key={n.k}>
            <circle cx={n.x} cy={n.y} r="14" fill="var(--card)" stroke="var(--ink)" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="4" fill="var(--ink-2)" />
            <text x={n.x} y={n.y + 30} textAnchor="middle" fontFamily="Geist Mono" fontSize="10" fill="var(--ink)">
              {n.k}
            </text>
            <text x={n.x} y={n.y + 42} textAnchor="middle" fontFamily="Geist Mono" fontSize="8.5" fill="var(--mute)" letterSpacing="0.06em">
              {n.t.toUpperCase()}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// ─── Leadership ──────────────────────────────────────
const team = [
  {
    n: "Nikhil Garg",
    r: "Founder & CEO",
    img: "/assets/team/nikhil-garg.jpg",
    li: "https://www.linkedin.com/in/nikhil-garg-305487229/",
    b: "Nikhil leads Vepolink's product and company direction, shaping the business around practical digital systems for industrial teams. Since founding the company in 2021, he has focused on technology that improves reliability, efficiency, and long-term operating value.",
  },
  {
    n: "Sachin Mandal",
    r: "IoT & Compliance Specialist",
    img: "/assets/team/sachin.jpg",
    li: "https://www.linkedin.com/in/sachin-mandal-132149197/",
    b: "Sachin Mandal owns the field edge of Vepolink's monitoring stack, from device configuration to cloud connectivity and client support. He keeps industrial telemetry dependable, audit-ready, and aligned with CPCB/SPCB requirements, with signals moving cleanly from plant floor to dashboard.",
  },
  {
    n: "Kamal Mourya",
    r: "Front-end Developer",
    img: "/assets/team/kamal-mourya.jpg",
    li: "#",
    b: "Kamal turns Vepolink's product ideas into clean, responsive interfaces using React, TypeScript, and modern UI systems. He focuses on component architecture, API integration, and polished web experiences that make complex environmental data easier to use.",
  },
  {
    n: "Anant Mendiratta",
    r: "AI & Tech Advisor",
    img: "/assets/team/anant-mendiratta.jpg",
    li: "https://www.linkedin.com/in/anantmendiratta/",
    b: "Anant advises Vepolink on AI strategy, technology direction, and scalable digital transformation. With leadership experience across startups and enterprises, he helps translate emerging AI capabilities into practical systems for growth, efficiency, and better decision-making.",
  },
];

const Leadership = () => (
  <section className="about-page-section" style={{ padding: "140px 48px 100px" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto" }}>
      <Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 56 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 14 }}>
              ◆ Team members · 07
            </div>
            <h2 style={{ fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, fontWeight: 500 }}>
              The team behind<br/>
              <span className="serif-i">Vepolink.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--mute)", margin: 0, alignSelf: "end", maxWidth: 580, textWrap: "pretty" }}>
            Vepolink brings together entrepreneurship, environmental compliance,
            IoT systems, software engineering, and AI advisory experience to
            build dependable monitoring products for industrial teams.
          </p>
        </div>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {team.map((p, i) => (
          <Reveal key={p.n} delay={i * 70}>
            <TeamCard {...p} idx={i} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const TeamCard = ({ n, r, b, img, li, idx }) => {
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
    cursor: hasLinkedIn ? "pointer" : "default",
  };
  return (
    <article style={{
      background: "var(--card)", border: "1px solid var(--line)", borderRadius: 6,
      padding: 16, display: "flex", flexDirection: "column", gap: 0,
      minHeight: 535, height: "100%", overflow: "hidden",
    }}>
      <div style={{
        height: 260, background: "var(--paper)",
        borderRadius: 4, position: "relative",
        border: "1px solid var(--line-2)",
        overflow: "hidden",
      }}>
        <img
          className="team-portrait"
          src={img}
          alt={`${n}, ${r}`}
          loading="lazy"
          width="720"
          height="720"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 18%",
          }}
        />
        <span className="mono" style={{
          position: "absolute", top: 10, left: 12,
          padding: "5px 8px",
          borderRadius: 99,
          background: "rgba(250,250,247,0.86)",
          border: "1px solid var(--line)",
          fontSize: 10, color: "var(--mute)", letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          0{idx + 1}
        </span>
      </div>
      <div style={{ paddingTop: 18, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.015em" }}>{n}</div>
            <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 4 }}>
              {r}
            </div>
          </div>
          {hasLinkedIn ? (
            <a href={li} aria-label={`${n} on LinkedIn`} title="LinkedIn" target="_blank" rel="noopener noreferrer" style={linkedinStyle}>
              <img src="/assets/linkedin-inbug-black.png" alt="" width="16" height="16" style={{ width: 16, height: 16, objectFit: "contain" }} />
            </a>
          ) : (
            <span aria-label={`${n} LinkedIn profile pending`} title="LinkedIn profile pending" style={linkedinStyle}>
              <img src="/assets/linkedin-inbug-black.png" alt="" width="16" height="16" style={{ width: 16, height: 16, objectFit: "contain" }} />
            </span>
          )}
        </div>
        <p className="team-bio" style={{ fontSize: 13.5, color: "var(--mute)", lineHeight: 1.55, margin: "14px 0 0", height: 176, textWrap: "pretty" }}>
          {b}
        </p>
      </div>
    </article>
  );
};

// ─── Final CTA (variant: greener / planet framing) ───
const AboutCTA = () => (
  <section className="about-page-section about-cta-section" style={{ padding: "120px 48px" }}>
    <div style={{
      maxWidth: 1320, margin: "0 auto",
      background: "var(--ink)", color: "var(--paper-2)",
      borderRadius: 8, padding: "72px 64px",
      position: "relative", overflow: "hidden",
    }}>
      {/* layered animated gradient orbs */}
      <div style={{
        position: "absolute", left: -180, bottom: -180,
        width: 480, height: 480, borderRadius: 999,
        background: "radial-gradient(circle, oklch(65% 0.14 160 / 0.35), transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: -120, top: -160,
        width: 460, height: 460, borderRadius: 999,
        background: "radial-gradient(circle, oklch(72% 0.13 210 / 0.32), transparent 60%)",
        pointerEvents: "none",
      }} />
      {/* contour grid */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.5 }} viewBox="0 0 1200 400" preserveAspectRatio="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={i} d={`M 0 ${30 + i * 30} Q 300 ${10 + i * 30}, 600 ${30 + i * 30} T 1200 ${30 + i * 30}`}
            stroke="var(--ink-3)" strokeWidth="0.8" fill="none" />
        ))}
      </svg>
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute-2)", textTransform: "uppercase", marginBottom: 18 }}>
            ◆ Let's talk
          </div>
          <h2 style={{ fontSize: 56, lineHeight: 1.0, letterSpacing: "-0.03em", margin: 0, fontWeight: 500, color: "var(--paper-2)" }}>
            Bring your sites<br/>
            <span className="serif-i" style={{ color: "var(--cyan)" }}>into the light.</span>
          </h2>
        </div>
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--mute-2)", margin: "0 0 28px", textWrap: "pretty" }}>
            Whether you operate one outfall or a cluster of refineries — we'll
            commission a pilot in 30 days and have you in clean compliance from
            day one.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="mailto:sales@vepolink.com?subject=Request%20a%20Vepolink%20demo" style={{
              padding: "14px 24px", fontSize: 14.5, fontWeight: 500,
              background: "var(--paper-2)", color: "var(--ink)",
              border: "none", borderRadius: 99, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
              textDecoration: "none",
            }}>
              Request a demo <Icon name="arrow" size={15} />
            </a>
            <a href="mailto:techsupport@vepolink.com" style={{
              padding: "14px 24px", fontSize: 14.5, fontWeight: 500,
              background: "transparent", color: "var(--paper-2)",
              border: "1px solid var(--ink-3)", borderRadius: 99, cursor: "pointer",
              textDecoration: "none",
            }}>
              techsupport@vepolink.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  AboutHero, Vision, Technology, Commitment, ProblemSolution,
  Values, DataSources, Leadership, AboutCTA, Reveal,
});
