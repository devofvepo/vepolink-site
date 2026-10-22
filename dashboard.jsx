// Faux live water-quality dashboard — visual proof of the product.
// Numbers tick subtly to feel live.

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

const Sparkline = ({ data, color = "var(--ink)", height = 32, width = 120, fill = false }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((d - min) / range) * (height - 4) - 2;
    return [x, y];
  });
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `${path} L ${width} ${height} L 0 ${height} Z`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height }}
    >
      {fill && <path d={area} fill={color} opacity="0.08" />}
      <path d={path} stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const genSeries = (base, jitter, n = 24, seed = 1) => {
  let v = base; const out = [];
  const rand = (s) => { let x = Math.sin(s * 9999) * 10000; return x - Math.floor(x); };
  for (let i = 0; i < n; i++) {
    v += (rand(seed + i) - 0.5) * jitter;
    out.push(v);
  }
  return out;
};

const ParamTile = ({ label, unit, value, decimals = 2, range, status = "ok", series, accent }) => {
  const statusColor = {
    ok: "var(--signal-ok)",
    warn: "var(--signal-warn)",
    alert: "var(--signal-alert)",
  }[status];
  return (
    <div style={{
      padding: "18px 18px 14px",
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 4,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      position: "relative",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span className="mono" style={{ fontSize: 11, letterSpacing: "0.08em", color: "var(--mute)", textTransform: "uppercase" }}>{label}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5 }} className="mono">
          <span style={{ width: 6, height: 6, borderRadius: 99, background: statusColor, boxShadow: `0 0 0 3px ${statusColor}22` }} />
          <span style={{ color: "var(--mute)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{status === "ok" ? "in range" : status === "warn" ? "watch" : "alert"}</span>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span className="mono" style={{ fontSize: 30, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.02em" }}>
          {value.toFixed(decimals)}
        </span>
        <span className="mono" style={{ fontSize: 13, color: "var(--mute)" }}>{unit}</span>
      </div>
      <Sparkline data={series} color={accent || "var(--ink-2)"} height={28} width={220} fill />
      <div className="mono" style={{ fontSize: 10.5, color: "var(--mute-2)", display: "flex", justifyContent: "space-between" }}>
        <span>range {range[0]}–{range[1]} {unit}</span>
        <span>5s</span>
      </div>
    </div>
  );
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
    tds: genSeries(245, 6, 28, 66),
  }), []);

  return (
    <div style={{
      width: "100%",
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 6,
      overflow: "hidden",
      boxShadow: "0 24px 60px -30px rgba(10,18,32,0.18), 0 2px 6px -2px rgba(10,18,32,0.04)",
    }}>
      {/* chrome bar */}
      <div style={{
        padding: "12px 18px",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--paper-2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", gap: 6 }}>
            {[0,1,2].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: 99, background: "var(--line)" }} />)}
          </div>
          <div className="mono" style={{ fontSize: 11.5, color: "var(--mute)" }}>
            vepolink<span style={{ opacity: 0.4 }}>.io</span> / stations / chembarambakkam-stp / live
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }} className="mono">
            <LivePulse />
            <span style={{ fontSize: 11, color: "var(--ink)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Live</span>
          </span>
          <span className="mono" style={{ fontSize: 11, color: "var(--mute)" }}>↻ 5s</span>
        </div>
      </div>

      {/* station header */}
      <div style={{
        padding: "18px 22px",
        borderBottom: "1px solid var(--line)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 16,
      }}>
        <div>
          <div className="mono" style={{ fontSize: 11, color: "var(--mute)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
            Station · CPCB ID 5572-TN-08
          </div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.015em" }}>
            Chembarambakkam STP — Outfall A
          </div>
          <div className="mono" style={{ fontSize: 12, color: "var(--mute)", marginTop: 4 }}>
            12.99°N · 80.07°E &nbsp;·&nbsp; Last calibration 14 days ago
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {["1H","24H","7D","30D"].map((t, i) => (
            <button key={t} style={{
              padding: "6px 12px",
              fontSize: 12,
              fontFamily: "Geist Mono",
              background: i === 1 ? "var(--ink)" : "var(--card)",
              color: i === 1 ? "var(--paper-2)" : "var(--ink)",
              border: "1px solid var(--line)",
              borderRadius: 4,
              cursor: "pointer",
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* tiles */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1,
        background: "var(--line-2)",
      }}>
        <ParamTile label="pH" unit="" value={ph} decimals={2} range={[6.5, 8.5]} status="ok" series={series.ph} accent="oklch(58% 0.18 285)" />
        <ParamTile label="Turbidity" unit="NTU" value={turb} decimals={1} range={[0, 5]} status="ok" series={series.turb} accent="oklch(70% 0.13 200)" />
        <ParamTile label="Dissolved O₂" unit="mg/L" value={dox} decimals={2} range={[5, 9]} status="ok" series={series.dox} accent="oklch(65% 0.14 160)" />
        <ParamTile label="Temperature" unit="°C" value={temp} decimals={1} range={[15, 30]} status="ok" series={series.temp} accent="oklch(70% 0.13 60)" />
        <ParamTile label="Conductivity" unit="µS/cm" value={cond} decimals={0} range={[200, 800]} status="ok" series={series.cond} accent="oklch(65% 0.14 215)" />
        <ParamTile label="TDS" unit="ppm" value={tds} decimals={0} range={[150, 500]} status="ok" series={series.tds} accent="oklch(60% 0.16 305)" />
      </div>

      {/* alert strip */}
      <div style={{
        padding: "14px 22px",
        borderTop: "1px solid var(--line)",
        background: "var(--paper-2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{
            width: 8, height: 8, borderRadius: 99,
            background: "var(--signal-warn)",
            boxShadow: "0 0 0 4px oklch(72% 0.16 75 / 0.18)",
          }} />
          <div>
            <div className="mono" style={{ fontSize: 11.5, letterSpacing: "0.06em", color: "var(--mute)", textTransform: "uppercase" }}>Watch · 14:32:08 IST</div>
            <div style={{ fontSize: 13.5, fontWeight: 500, marginTop: 2 }}>
              Turbidity trending toward upper bound — 3.8 NTU at Station 5572-TN-08
            </div>
          </div>
        </div>
        <button style={{
          padding: "8px 14px",
          fontSize: 12,
          fontFamily: "Geist Mono",
          background: "var(--card)",
          border: "1px solid var(--line)",
          borderRadius: 4,
          color: "var(--ink)",
          cursor: "pointer",
        }}>Acknowledge →</button>
      </div>
    </div>
  );
};

const LivePulse = () => (
  <span style={{ position: "relative", width: 8, height: 8, display: "inline-block" }}>
    <span style={{
      position: "absolute", inset: 0,
      borderRadius: 99, background: "var(--signal-ok)",
      animation: "vepoPulse 1.6s ease-out infinite",
    }} />
    <span style={{ position: "absolute", inset: 0, borderRadius: 99, background: "var(--signal-ok)" }} />
    <style>{`@keyframes vepoPulse { 0% { transform: scale(1); opacity: .6 } 100% { transform: scale(2.6); opacity: 0 } }`}</style>
  </span>
);

Object.assign(window, { Dashboard, Sparkline, ParamTile, LivePulse, genSeries, useTicker });
