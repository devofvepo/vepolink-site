// App entrypoint — wires sections together + tweaks panel for variations.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "instrument",
  "accent": "violet-cyan"
}/*EDITMODE-END*/;

const HEADLINE_LABELS = {
  "instrument": "Instrument-grade",
  "compliance": "Compliance-first",
  "every-drop": "Every drop measured",
};
const HEADLINE_FROM_LABEL = Object.fromEntries(Object.entries(HEADLINE_LABELS).map(([k,v]) => [v,k]));

const ACCENT_LABELS = {
  "violet-cyan": "Logo violet → cyan",
  "ocean": "Ocean blue → cyan",
  "mono-cyan": "Mono + cyan",
};
const ACCENT_FROM_LABEL = Object.fromEntries(Object.entries(ACCENT_LABELS).map(([k,v]) => [v,k]));

const App = () => {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    const presets = {
      "violet-cyan": { violet: "#7B3FE4", cyan: "#3CC8DF" },
      "ocean": { violet: "#1E5BD9", cyan: "#4EC9E6" },
      "mono-cyan": { violet: "#1F2937", cyan: "#3CC8DF" },
    };
    const p = presets[t.accent] || presets["violet-cyan"];
    root.style.setProperty("--brand-grad", `linear-gradient(95deg, ${p.violet} 0%, ${p.cyan} 100%)`);
    root.style.setProperty("--cyan", p.cyan);
  }, [t.accent]);

  return (
    <div>
      <Nav />
      <Hero headline={t.headline} />
      <Capabilities />
      <HowItWorks />
      <Compliance />
      <Partners />
      <CTA />
      <Footer />

      <window.TweaksPanel title="Tweaks">
        <window.TweakRadio
          label="Hero headline"
          value={HEADLINE_LABELS[t.headline]}
          options={Object.values(HEADLINE_LABELS)}
          onChange={v => setTweak("headline", HEADLINE_FROM_LABEL[v])}
        />
        <window.TweakRadio
          label="Brand accent"
          value={ACCENT_LABELS[t.accent]}
          options={Object.values(ACCENT_LABELS)}
          onChange={v => setTweak("accent", ACCENT_FROM_LABEL[v])}
        />
      </window.TweaksPanel>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
