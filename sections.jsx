// Page sections — Nav, Hero, Capabilities, HowItWorks, Compliance, Partners, CTA, Footer

// ─── Nav ──────────────────────────────────────────────
const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Platform", "Sensors & DAS", "Compliance", "Industries", "Partners", "Resources"];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: scrolled ? "rgba(250,250,247,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--line-2)" : "1px solid transparent",
      transition: "background .2s, border-color .2s",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "14px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <VepoLogo height={26} />
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map(l => (
            <a key={l} href="#" style={{ fontSize: 13.5, color: "var(--ink-2)", textDecoration: "none", fontWeight: 500 }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="#" style={{ fontSize: 13.5, color: "var(--ink-2)", textDecoration: "none", fontWeight: 500 }}>Sign in</a>
          <button style={{
            padding: "9px 16px",
            fontSize: 13.5,
            fontWeight: 500,
            background: "var(--ink)",
            color: "var(--paper-2)",
            border: "none",
            borderRadius: 99,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
          }}>
            Book a walkthrough <Icon name="arrow" size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};

// ─── Hero ─────────────────────────────────────────────
const Hero = ({ headline }) => {
  return (
    <section style={{ padding: "32px 48px 0", position: "relative" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "5px 12px 5px 8px",
            border: "1px solid var(--line)",
            borderRadius: 99,
            background: "var(--card)",
            fontSize: 12,
            fontFamily: "Geist Mono",
            color: "var(--ink-2)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--signal-ok)" }} />
            EN 14181 · CPCB · SPCB ready
          </span>
          <span className="mono" style={{ fontSize: 12, color: "var(--mute)" }}>
            Trusted across 240+ industrial sites
          </span>
        </div>

        {/* headline */}
        <h1 style={{
          fontSize: "clamp(48px, 6.4vw, 92px)",
          fontWeight: 500,
          lineHeight: 0.98,
          letterSpacing: "-0.035em",
          margin: 0,
          maxWidth: 1180,
          color: "var(--ink)",
        }}>
          {headline === "instrument" && (<>
            Instrument-grade water intelligence,<br/>
            <span className="serif-i" style={{ fontWeight: 400 }}>delivered in real time.</span>
          </>)}
          {headline === "compliance" && (<>
            Stay in compliance.<br/>
            <span className="serif-i" style={{ fontWeight: 400 }}>Before</span> the regulator calls.
          </>)}
          {headline === "every-drop" && (<>
            Every drop, <span className="grad-text">measured</span>.<br/>
            <span className="serif-i" style={{ fontWeight: 400 }}>Every threshold, watched.</span>
          </>)}
        </h1>

        {/* sub + CTAs row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 48,
          marginTop: 36,
          alignItems: "end",
        }}>
          <p style={{
            fontSize: 19,
            lineHeight: 1.45,
            color: "var(--mute)",
            margin: 0,
            maxWidth: 620,
            textWrap: "pretty",
          }}>
            Vepolink turns IoT-enabled analyzers — pH, turbidity, dissolved oxygen,
            temperature, conductivity — into a single, compliance-ready picture
            of every effluent, intake and treatment line you operate.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", flexWrap: "wrap" }}>
            <button style={{
              padding: "13px 22px",
              fontSize: 14.5, fontWeight: 500,
              background: "var(--ink)", color: "var(--paper-2)",
              border: "none", borderRadius: 99, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Request a pilot <Icon name="arrow" size={15} />
            </button>
            <button style={{
              padding: "13px 22px",
              fontSize: 14.5, fontWeight: 500,
              background: "transparent", color: "var(--ink)",
              border: "1px solid var(--ink-3)", borderRadius: 99, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              <Icon name="play" size={12} /> See a live station
            </button>
          </div>
        </div>

        {/* dashboard preview */}
        <div style={{ marginTop: 56, position: "relative" }}>
          <Dashboard />
          {/* corner annotation */}
          <div className="mono" style={{
            position: "absolute",
            top: -18, right: 4,
            fontSize: 11, color: "var(--mute)",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            ↘ live operator view
          </div>
        </div>

        {/* stats strip */}
        <div style={{
          marginTop: 36,
          padding: "28px 0",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 32,
        }}>
          {[
            ["240+", "monitoring stations live"],
            ["99.4%", "data availability SLA"],
            ["6", "wired/wireless protocols per DAS"],
            ["< 5s", "telemetry-to-alert latency"],
            ["14", "OEM analyser partners"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="mono" style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--ink)" }}>{k}</div>
              <div style={{ fontSize: 12.5, color: "var(--mute)", marginTop: 4, maxWidth: 180 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Capabilities ─────────────────────────────────────
const capabilities = [
  {
    icon: "plug",
    eyebrow: "01 · Integrated sensors",
    title: "One dashboard. Every analyser.",
    body: "Map data from single or multi-parameter analysers through one (or many) IoT DAS units. Wireless multi-DAS mapping, station-level tagging, M2M, REST and OPC-UA on the roadmap.",
    metric: "99% data availability target",
    span: 7,
    visual: "rack",
  },
  {
    icon: "bell",
    eyebrow: "02 · Smart alerts",
    title: "Catch the breach before the audit does.",
    body: "Threshold-aware SMS & email dispatch, calibrated to your CPCB consent conditions. Watch-state warnings fire before the limit, not after.",
    metric: "Pre-threshold warnings",
    span: 5,
    visual: "alerts",
  },
  {
    icon: "chip",
    eyebrow: "03 · Multiplexing DAS",
    title: "Up to 6 protocols on a single DAS.",
    body: "Analog 4–20 mA, RS-485 Modbus, MQTT, LAN/WAN/Ethernet, and remote-configurable radios. One box, every signal.",
    metric: "6 protocols / 1 box",
    span: 4,
    visual: "protocols",
  },
  {
    icon: "shield",
    eyebrow: "04 · Compliance reporting",
    title: "EN 14181 & CPCB-aligned reports.",
    body: "Printable PDFs, CSV exports, signed audit trails. Schedule daily, weekly or pre-inspection — auto-routed to your authority of record.",
    metric: "Auto-routed audits",
    span: 4,
    visual: "reports",
  },
  {
    icon: "cloud",
    eyebrow: "05 · Serverless architecture",
    title: "Scales from one outfall to a refinery.",
    body: "Plug-and-play DAS, low cost of ownership, integrates with existing SCADA. Camera streams ride the same IP fabric without plugins.",
    metric: "Plug & play",
    span: 4,
    visual: "scale",
  },
];

const Capabilities = () => (
  <section style={{ padding: "120px 48px 40px" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, marginBottom: 56 }}>
        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 14 }}>
            ◆ Platform
          </div>
          <h2 style={{ fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, fontWeight: 500 }}>
            What you get when<br/>
            <span className="serif-i">water becomes legible.</span>
          </h2>
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--mute)", margin: 0, maxWidth: 580, alignSelf: "end", textWrap: "pretty" }}>
          A real-time data acquisition, monitoring and analytics platform built for
          environmental compliance — designed to meet the operational reality of
          a plant supervisor, not the imagination of a software vendor.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>
        {capabilities.map((c, i) => (
          <CapCard key={i} {...c} />
        ))}
      </div>
    </div>
  </section>
);

const CapCard = ({ icon, eyebrow, title, body, metric, span, visual }) => (
  <article style={{
    gridColumn: `span ${span}`,
    background: "var(--card)",
    border: "1px solid var(--line)",
    borderRadius: 6,
    padding: "28px 28px 24px",
    display: "flex", flexDirection: "column",
    minHeight: 320,
    position: "relative",
    overflow: "hidden",
  }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
      <span className="mono" style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--mute)", textTransform: "uppercase" }}>{eyebrow}</span>
      <span style={{
        width: 34, height: 34, borderRadius: 6,
        background: "var(--paper-2)",
        border: "1px solid var(--line)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--ink-2)",
      }}>
        <Icon name={icon} size={16} />
      </span>
    </div>

    <CapVisual kind={visual} />

    <h3 style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: "-0.015em", margin: "0 0 10px", fontWeight: 500, textWrap: "balance" }}>
      {title}
    </h3>
    <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--mute)", margin: 0, flex: 1, textWrap: "pretty" }}>
      {body}
    </p>
    <div style={{
      marginTop: 16, paddingTop: 14,
      borderTop: "1px dashed var(--line)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <span className="mono" style={{ fontSize: 11.5, letterSpacing: "0.06em", color: "var(--ink)" }}>{metric}</span>
      <Icon name="arrow" size={14} color="var(--mute)" />
    </div>
  </article>
);

const CapVisual = ({ kind }) => {
  if (kind === "rack") {
    return (
      <div style={{
        marginBottom: 22,
        height: 120,
        background: "var(--paper-2)",
        border: "1px solid var(--line-2)",
        borderRadius: 4,
        padding: 14,
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr 1fr",
        gap: 10,
      }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>DAS · 02-AB</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 5, height: 5, borderRadius: 99, background: i === 2 ? "var(--signal-warn)" : "var(--signal-ok)" }} />
                <span className="mono" style={{ fontSize: 10, color: "var(--ink-2)" }}>CH-0{i+1}</span>
                <span style={{ flex: 1, height: 1, background: "var(--line)" }} />
                <span className="mono" style={{ fontSize: 10, color: "var(--mute)" }}>live</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderLeft: "1px dashed var(--line)", paddingLeft: 10, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Analyser</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span className="mono" style={{ fontSize: 11, color: "var(--ink)" }}>pH 7.18</span>
            <span className="mono" style={{ fontSize: 11, color: "var(--ink)" }}>NTU 2.8</span>
            <span className="mono" style={{ fontSize: 11, color: "var(--ink)" }}>DO 6.41</span>
          </div>
        </div>
        <div style={{ borderLeft: "1px dashed var(--line)", paddingLeft: 10, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Cloud</div>
          <Sparkline data={genSeries(7, 0.3, 24, 7)} color="var(--ink-2)" height={48} width={100} fill />
        </div>
      </div>
    );
  }
  if (kind === "alerts") {
    return (
      <div style={{
        marginBottom: 22, height: 120,
        background: "var(--paper-2)",
        border: "1px solid var(--line-2)",
        borderRadius: 4,
        padding: 12,
        display: "flex", flexDirection: "column", gap: 6,
      }}>
        {[
          { c: "var(--signal-alert)", t: "14:32", l: "Turbidity ↑ 4.8 NTU — Outfall A" },
          { c: "var(--signal-warn)", t: "14:18", l: "pH approaching 8.4 — Intake 02" },
          { c: "var(--signal-ok)", t: "13:55", l: "DO restored — Aerator-3 back online" },
        ].map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 8px", background: "var(--card)", border: "1px solid var(--line-2)", borderRadius: 3 }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: a.c }} />
            <span className="mono" style={{ fontSize: 10.5, color: "var(--mute)" }}>{a.t}</span>
            <span style={{ fontSize: 11.5, color: "var(--ink-2)", flex: 1 }}>{a.l}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "protocols") {
    return (
      <div style={{
        marginBottom: 22, height: 120,
        background: "var(--paper-2)",
        border: "1px solid var(--line-2)",
        borderRadius: 4,
        padding: 14,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {["Modbus","MQTT","4-20mA","OPC-UA","RS-485","Ethernet"].map(p => (
            <span key={p} className="mono" style={{
              fontSize: 10, padding: "3px 8px",
              background: "var(--card)", border: "1px solid var(--line)", borderRadius: 99,
              color: "var(--ink-2)",
            }}>{p}</span>
          ))}
        </div>
        <div className="mono" style={{ fontSize: 10.5, color: "var(--mute)", display: "flex", justifyContent: "space-between" }}>
          <span>6 inputs / 1 DAS</span>
          <span>OTA configurable</span>
        </div>
      </div>
    );
  }
  if (kind === "reports") {
    return (
      <div style={{
        marginBottom: 22, height: 120,
        background: "var(--paper-2)",
        border: "1px solid var(--line-2)",
        borderRadius: 4,
        padding: 12,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 10, left: 14, right: 14, bottom: 10,
          background: "var(--card)", border: "1px solid var(--line)", borderRadius: 3,
          padding: 10,
        }}>
          <div className="mono" style={{ fontSize: 9.5, color: "var(--mute)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Form V — Q3 2026</div>
          <div style={{ fontSize: 11.5, fontWeight: 500, marginTop: 4, color: "var(--ink)" }}>Effluent Discharge Compliance</div>
          <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 3 }}>
            {[1,2,3].map(i => <span key={i} style={{ height: 4, background: "var(--line-2)", borderRadius: 2, width: `${100 - i*12}%` }} />)}
          </div>
          <div className="mono" style={{ position: "absolute", bottom: 8, right: 10, fontSize: 9, color: "var(--mute)" }}>↳ CPCB</div>
        </div>
      </div>
    );
  }
  if (kind === "scale") {
    return (
      <div style={{
        marginBottom: 22, height: 120,
        background: "var(--paper-2)",
        border: "1px solid var(--line-2)",
        borderRadius: 4,
        padding: 14,
        display: "flex", alignItems: "center", justifyContent: "space-around",
      }}>
        {[
          { l: "Outfall", s: 8 },
          { l: "Line", s: 14 },
          { l: "Plant", s: 22 },
          { l: "Cluster", s: 32 },
        ].map(d => (
          <div key={d.l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ width: d.s, height: d.s, border: "1.5px solid var(--ink-2)", borderRadius: 2 }} />
            <span className="mono" style={{ fontSize: 9.5, color: "var(--mute)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{d.l}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// ─── How it works ─────────────────────────────────────
const HowItWorks = () => {
  const steps = [
    { n: "01", k: "Sensor", t: "Field analyser", d: "pH, turbidity, DO, ORP, conductivity, temperature, ammonia, BOD/COD probes — yours or ours." },
    { n: "02", k: "DAS", t: "Plug-and-play DAS", d: "Multi-protocol, multi-channel data acquisition with onboard buffering. OTA-configurable in the field." },
    { n: "03", k: "Cloud", t: "Vepolink cloud", d: "Serverless ingest, station tagging, big-data time-series store, REST & OPC-UA outputs." },
    { n: "04", k: "View", t: "Live dashboard", d: "Operators, supervisors, plant heads, regulators — each gets the view they actually need." },
    { n: "05", k: "Act", t: "Alerts & reports", d: "Pre-threshold SMS/email, automated forms for SPCB/CPCB filings, third-party API push." },
  ];
  return (
    <section style={{ padding: "80px 48px", background: "var(--ink)", color: "var(--paper-2)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", marginBottom: 56, gap: 32 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute-2)", textTransform: "uppercase", marginBottom: 14 }}>
              ◆ How it works
            </div>
            <h2 style={{ fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.025em", margin: 0, fontWeight: 500, color: "var(--paper-2)" }}>
              From probe to plant head,<br/>
              <span className="serif-i" style={{ color: "var(--cyan)" }}>under five seconds.</span>
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--mute-2)", margin: 0, maxWidth: 380, lineHeight: 1.55 }}>
            One architecture, every site. Wired in over a weekend; tuned to your
            consent conditions in the first week.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, position: "relative" }}>
          {/* connector line */}
          <div style={{
            position: "absolute",
            top: 18, left: "10%", right: "10%",
            height: 1, background: "linear-gradient(90deg, transparent, var(--ink-3) 12%, var(--ink-3) 88%, transparent)",
          }} />
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 14, position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 99,
                  background: "var(--ink)",
                  border: "1px solid var(--ink-3)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }} className="mono">
                  <span style={{ fontSize: 12, color: "var(--cyan)" }}>{s.n}</span>
                </span>
                <span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute-2)", textTransform: "uppercase" }}>
                  {s.k}
                </span>
              </div>
              <h3 style={{ fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.015em", margin: 0, fontWeight: 500, color: "var(--paper-2)" }}>
                {s.t}
              </h3>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--mute-2)", margin: 0, textWrap: "pretty" }}>
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Compliance / Alerts ──────────────────────────────
const Compliance = () => (
  <section style={{ padding: "120px 48px" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }}>
      <div>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 14 }}>
          ◆ Compliance, by design
        </div>
        <h2 style={{ fontSize: 48, lineHeight: 1.02, letterSpacing: "-0.025em", margin: "0 0 24px", fontWeight: 500 }}>
          Built around the rules<br/>
          <span className="serif-i">you already operate under.</span>
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--mute)", margin: "0 0 36px", maxWidth: 540, textWrap: "pretty" }}>
          CEMS-style continuity for water. Reporting mapped to your state pollution
          control board templates. Calibration certificates retained for the full
          audit lifecycle, retrievable in two clicks.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            ["EN 14181 data treatment", "Validation, normalisation, drift correction baked in."],
            ["CPCB / SPCB submission templates", "Form V, Form IV, real-time data feed to OCEMS portals."],
            ["OTP-secured multi-tier access", "Super-admin, admin, sub-user — with module-level visibility."],
            ["SI-traceable remote calibration", "Manufacturer-signed certificates retained with each record."],
          ].map(([k, v]) => (
            <li key={k} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{
                width: 22, height: 22, borderRadius: 99,
                background: "var(--ink)", color: "var(--paper-2)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: 2,
              }}>
                <Icon name="check" size={12} color="var(--paper-2)" />
              </span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: "var(--ink)" }}>{k}</div>
                <div style={{ fontSize: 13.5, color: "var(--mute)", marginTop: 2 }}>{v}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ComplianceVisual />
    </div>
  </section>
);

const ComplianceVisual = () => (
  <div style={{
    background: "var(--card)",
    border: "1px solid var(--line)",
    borderRadius: 6,
    padding: 24,
    boxShadow: "0 24px 60px -30px rgba(10,18,32,0.15)",
  }}>
    {/* alert composer */}
    <div className="mono" style={{ fontSize: 10.5, letterSpacing: "0.1em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 10 }}>
      ALERT RULES · Outfall A · Industrial Effluent
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {[
        { p: "pH", op: "between", v: "6.5 – 8.5", st: "ok" },
        { p: "Turbidity", op: "<", v: "5 NTU", st: "warn" },
        { p: "Dissolved O₂", op: ">", v: "5 mg/L", st: "ok" },
        { p: "Temperature", op: "<", v: "30 °C", st: "ok" },
      ].map(r => (
        <div key={r.p} style={{
          display: "grid", gridTemplateColumns: "20px 1.2fr 0.8fr 1.4fr 60px",
          alignItems: "center", gap: 10,
          padding: "10px 12px",
          background: "var(--paper-2)",
          border: "1px solid var(--line-2)",
          borderRadius: 4,
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: 99,
            background: r.st === "warn" ? "var(--signal-warn)" : "var(--signal-ok)",
          }} />
          <span style={{ fontSize: 13, fontWeight: 500 }}>{r.p}</span>
          <span className="mono" style={{ fontSize: 11.5, color: "var(--mute)" }}>{r.op}</span>
          <span className="mono" style={{ fontSize: 12.5, color: "var(--ink)" }}>{r.v}</span>
          <span className="mono" style={{ fontSize: 10.5, color: "var(--mute)", textAlign: "right" }}>SMS · MAIL</span>
        </div>
      ))}
    </div>

    <div style={{
      marginTop: 18, padding: "14px 16px",
      borderRadius: 4,
      background: "linear-gradient(0deg, rgba(122,63,228,0.06), rgba(60,200,223,0.06))",
      border: "1px solid var(--line)",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
    }}>
      <div>
        <div className="mono" style={{ fontSize: 10.5, color: "var(--mute)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Auto-route on breach
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 500, marginTop: 3 }}>
          Plant Head → Compliance Officer → SPCB Portal
        </div>
      </div>
      <Icon name="arrow" size={16} color="var(--ink)" />
    </div>
  </div>
);

// ─── Partners ─────────────────────────────────────────
const Partners = () => {
  const partners = [
    "Anodyne", "Advance Analytik", "Hemera Analysers", "Process Instruments",
    "Horiba", "Vasthi Instruments", "Adept", "OTT Hydromet", "Siemens",
  ];
  return (
    <section style={{ padding: "60px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", background: "var(--paper)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 48px 28px" }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase" }}>
          ◆ OEM analyser partners · 9
        </div>
      </div>
      <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
        <div style={{
          display: "flex", gap: 56,
          animation: "vepoScroll 60s linear infinite",
          width: "max-content",
          padding: "12px 24px",
        }}>
          {[...partners, ...partners].map((p, i) => (
            <span key={i} style={{
              fontFamily: "Geist",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "var(--ink-3)",
              opacity: 0.7,
              whiteSpace: "nowrap",
            }}>{p}</span>
          ))}
        </div>
        <style>{`@keyframes vepoScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────
const CTA = () => (
  <section style={{ padding: "120px 48px" }}>
    <div style={{
      maxWidth: 1320, margin: "0 auto",
      background: "var(--ink)", color: "var(--paper-2)",
      borderRadius: 8,
      padding: "72px 64px",
      position: "relative", overflow: "hidden",
    }}>
      {/* subtle gradient orb */}
      <div style={{
        position: "absolute", right: -120, top: -120,
        width: 420, height: 420, borderRadius: 999,
        background: "radial-gradient(circle, oklch(72% 0.13 210 / 0.35), transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute-2)", textTransform: "uppercase", marginBottom: 18 }}>
            ◆ Pilot in 30 days
          </div>
          <h2 style={{ fontSize: 56, lineHeight: 1.0, letterSpacing: "-0.03em", margin: 0, fontWeight: 500, color: "var(--paper-2)" }}>
            Bring one outfall<br/>
            <span className="serif-i" style={{ color: "var(--cyan)" }}>online this quarter.</span>
          </h2>
        </div>
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--mute-2)", margin: "0 0 28px", textWrap: "pretty" }}>
            A 30-day pilot covers one station, one DAS, four parameters and full
            compliance reporting. Hardware shipped from Pune, commissioned by our team.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button style={{
              padding: "14px 24px", fontSize: 14.5, fontWeight: 500,
              background: "var(--paper-2)", color: "var(--ink)",
              border: "none", borderRadius: 99, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Book a walkthrough <Icon name="arrow" size={15} />
            </button>
            <button style={{
              padding: "14px 24px", fontSize: 14.5, fontWeight: 500,
              background: "transparent", color: "var(--paper-2)",
              border: "1px solid var(--ink-3)", borderRadius: 99, cursor: "pointer",
            }}>
              Talk to engineering
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Footer ───────────────────────────────────────────
const Footer = () => (
  <footer style={{ borderTop: "1px solid var(--line)", padding: "56px 48px 40px", background: "var(--paper-2)" }}>
    <div style={{ maxWidth: 1320, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
        <div>
          <VepoLogo height={26} />
          <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--mute)", marginTop: 20, maxWidth: 320 }}>
            Real-time data acquisition, monitoring and analytics for environmental
            compliance. Designed for industries that take water seriously.
          </p>
          <div className="mono" style={{ fontSize: 11.5, color: "var(--mute)", marginTop: 24, lineHeight: 1.7 }}>
            Vepolink Pvt Ltd<br/>
            Pune · Chennai · Ahmedabad
          </div>
        </div>
        {[
          ["Platform", ["Environmental platform","Water quality monitoring","Stack emission monitoring","Ambient air monitoring","Indoor air quality monitoring"]],
          ["Product", ["Multi-Parameter Online Water Analyzer (Extractive)","Multi-Parameter Online Water Analyzer (In-situ)","Ambient SO2 Gas Analyzer (UV Fluorescence)","PM10 & PM2.5 Beta Attenuation Monitor","Sensor-Based Ambient Air Quality Monitor"]],
          ["Company", ["About","Careers","Channel partners","Support","Contact"]],
        ].map(([h, items]) => (
          <div key={h}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", color: "var(--mute)", textTransform: "uppercase", marginBottom: 14 }}>{h}</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
              {items.map(i => (
                <li key={i}><a href="#" style={{ fontSize: 13.5, color: "var(--ink-2)", textDecoration: "none" }}>{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{
        paddingTop: 24, borderTop: "1px solid var(--line)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap",
      }}>
        <div className="mono" style={{ fontSize: 11.5, color: "var(--mute)" }}>
          © 2026 Vepolink Pvt Ltd · Monitoring purity
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy","Terms","Security","SLA","Data residency"].map(l => (
            <a key={l} href="#" style={{ fontSize: 12, color: "var(--mute)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Nav, Hero, Capabilities, HowItWorks, Compliance, Partners, CTA, Footer });
