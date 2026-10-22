// ─── Scroll-reveal helper ────────────────────────────
const useReveal = (delay = 0) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );

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
  className = "",
}) => {
  const [ref, shown] = useReveal(delay);

  return (
    <As
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition:
          "opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)",
        ...(style || {}),
      }}
    >
      {children}
    </As>
  );
};

const sectionClass =
  "product-page-section md:px-4 px-0 sm:px-6 lg:px-12 pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-20 lg:pb-24 relative block overflow-hidden";

const sectionHeadingGrid =
  "grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16 mb-10 lg:mb-14";

const sectionHeadingStyle = {
  fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
  lineHeight: 1.02,
  letterSpacing: "-0.025em",
  margin: 0,
  fontWeight: 500,
};

const sectionIntroStyle = {
  fontSize: "clamp(1rem, 1.35vw, 1.0625rem)",
  lineHeight: 1.6,
  color: "var(--mute)",
  margin: 0,
  maxWidth: 620,
  alignSelf: "end",
  textWrap: "pretty",
};

const pagerButtonClass =
  "px-3 md:px-4 py-2 rounded border border-(--line) text-sm disabled:opacity-50 disabled:cursor-not-allowed";

const pageDotClass = (isActive) =>
  `w-8 h-8 md:w-9 md:h-9 rounded text-sm border ${
    isActive
      ? "bg-slate-900 text-white border-slate-900"
      : "border-(--line) text-slate-700"
  }`;

const handleMissingProductImage = (event) => {
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
  const thumb = [
    { id: 1, img: "/assets/images/p1-Photoroom.png" },
    { id: 2, img: "/assets/images/p1-Photoroom.png" },
  ];

  const [active, setActive] = React.useState(0);
  const activeThumb = thumb[active];

  return (
    <section className="product-page-section product-hero min-h-[auto] md:min-h-[var(--heroheight)] px-4 sm:px-6 lg:px-12 pt-5 md:pt-10 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="@container py-0 md:py-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-12 items-center">
          <div className="w-full md:w-[55%] flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12">
            <div className="product-thumb-rail order-2 md:order-1 w-full md:w-[72px] lg:w-[84px] flex md:flex-col justify-center md:justify-start gap-2 overflow-x-auto md:overflow-visible pb-1">
              {thumb.map((t, index) => (
                <Reveal key={t.id} delay={120 * index}>
                  <button
                    key={t.id}
                    onClick={() => setActive(index)}
                    className={`product-thumb w-[52px] h-[52px] md:w-[48px] md:h-[48px] shrink-0 border rounded p-1 transition ${
                      index === active ? "border-(--ink)" : "border-[#dedede]"
                    }`}
                    aria-label={`Show product image ${index + 1}`}
                    aria-pressed={index === active}
                  >
                    <img
                      src={t.img}
                      alt="Vepolink Command Center"
                      onError={handleMissingProductImage}
                      className="w-full h-full object-contain"
                    />
                  </button>
                </Reveal>
              ))}
            </div>

            <div className="order-1 md:order-2 w-full max-w-[520px] mx-auto">
              <Reveal delay={120 * 2}>
                <img
                  src={activeThumb?.img}
                  alt="Vepolink Command Center"
                  onError={handleMissingProductImage}
                  className="w-full h-auto relative z-10 object-contain  max-w-[320px] md:max-w-none mx-auto"
                  data-tilt={activeThumb?.id}
                />
              </Reveal>
            </div>
          </div>

          <div className="w-full md:w-[45%]">
            <div className="w-full md:px-3">
              <Reveal delay={120 * 0}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
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
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 99,
                        background: "var(--signal-ok)",
                        flexShrink: 0,
                      }}
                    />
                    Real Time Water Quality Monitoring System / Technology
                  </span>
                </div>
              </Reveal>

              <Reveal delay={120 * 1}>
                <h1
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                    lineHeight: 1.04,
                    letterSpacing: "-0.03em",
                    margin: 0,
                    textWrap: "balance",
                  }}
                >
                  Online Water Analyser
                </h1>
              </Reveal>

              <Reveal delay={120 * 2}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end md:mt-[28px] mt-[15px]">
                  <p
                    style={{
                      fontSize: "clamp(1rem, 1.4vw, 1.1875rem)",
                      lineHeight: 1.55,
                      color: "var(--mute)",
                      margin: 0,
                      maxWidth: 620,
                      textWrap: "pretty",
                    }}
                  >
                    Complete range of analyzers with sampling for Biological and
                    Chemical Parameters
                  </p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }} />
                </div>
              </Reveal>

              <Reveal delay={120 * 3}>
                <Partners />
              </Reveal>

              <div
                className="flex flex-col sm:flex-row sm:flex-wrap"
                style={{ gap: 12, marginTop: 24 }}
              >
                <Reveal delay={120 * 4}>
                  <a
                    href="mailto:sales@vepolink.com?subject=Book%20a%20walkthrough%20-%20Online%20Water%20Analyser"
                    style={{
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
                      textDecoration: "none",
                    }}
                  >
                    Book a Walkthrough <Icon name="arrow" size={15} />
                  </a>
                </Reveal>
                <Reveal delay={120 * 5}>
                  <a
                    href="mailto:sales@vepolink.com?subject=Online%20Water%20Analyser%20brochure%20request"
                    style={{
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
                      textDecoration: "none",
                    }}
                  >
                    Download Brochure
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShadeBg />
    </section>
  );
};

const ProductOverView = () => {
  return (
    <section className={`${sectionClass} product-overview`}>
      <div className="shell pl-auto mr-auto">
        <Reveal delay={120 * 0}>
          <div
            className="mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              color: "var(--mute)",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            ◆ Overview
          </div>
        </Reveal>

        <div>
          <Reveal delay={120 * 1}>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                margin: "0 0 24px",
                fontWeight: 500,
                textWrap: "balance",
                maxWidth: 680,
              }}
            >
              Online Water analyzer
            </h2>
          </Reveal>

          <div className="bg-(--card) border border-(--line) rounded p-4 md:p-6">
            <Reveal delay={120 * 2}>
              <h3
                style={{
                  fontSize: "clamp(1.35rem, 2.6vw, 1.75rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.03em",
                  margin: "0 0 14px",
                  fontWeight: 500,
                  maxWidth: 680,
                  textWrap: "balance",
                }}
              >
                Aqualog series are on-line water analyser based on a{" "}
                <span className="serif-i grad-text" style={{ fontWeight: 400 }}>
                  high resolution UV-visible
                </span>{" "}
                spectrograph.
              </h3>
            </Reveal>
            <Reveal delay={120 * 3}>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--mute)",
                  margin: "0 0 14px",
                  textWrap: "pretty",
                }}
              >
                Our range of analyzers monitor simultaneously many different
                parameters for waste water treatment plants or river monitoring
                stations with an excellent stability and low operating cost. The
                spectrograph can measure organic matter, nitrate, colour,
                turbidity, phosphate and other metallic and non-metallic
                parameters. The UV – Vis analyser, is advantageous over
                conventional analyzers as it comes with parameter and its
                respective technology addition. A complementary UV-visible
                fluorescence module allows the measurement of aromatics
                hydrocarbons (PAH). Nephelometric turbidity by visible or
                infra-red laser diode is also available.
              </p>
            </Reveal>
            <Reveal delay={120 * 4}>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--mute)",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                The full UV-visible spectrum can also be used to monitor
                specific chemical process making the it an ideal instrument for
                chemical plants. External probes can be added for
                physicochemical parameters like pH, ORP, dissolved oxygen,
                conductivity and turbidity. Thanks to its automatic cleaning
                system and its extremely long life time lamp, the maintenance is
                roughly limited to the periodic refill of the inexpensive
                cleaning solution and eventually reagents depending on the
                parameters.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechPanel = () => (
  <Reveal delay={120 * 0}>
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--line)",
        borderRadius: 6,
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        boxShadow: "0 24px 60px -34px rgba(10,18,32,0.18)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <Reveal delay={120 * 1}>
          <div
            className="mono"
            style={{
              fontSize: 10.5,
              color: "var(--mute)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            UV-Visible Spectroscopy
          </div>
        </Reveal>
        <Reveal delay={120 * 2}>
          <span
            className="mono"
            style={{
              fontSize: 10.5,
              color: "var(--ink)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <LivePulse /> Streaming
          </span>
        </Reveal>
      </div>
      <Reveal delay={120 * 3}>
        <div
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            marginTop: 4,
          }}
        >
          Typical UV-Vis{" "}
          <span className="serif-i" style={{ color: "var(--mute)" }}>
            Absorption Spectrum
          </span>
        </div>
      </Reveal>

      <div className="w-full overflow-hidden">
        <Reveal delay={120 * 5}>
          <Sparkline
            data={genSeries(2.8, 0.45, 60, 17)}
            color="var(--ink-2)"
            height={84}
            width={600}
            className="w-full"
            fill
          />
        </Reveal>
      </div>
    </div>
  </Reveal>
);

const TechRow = ({ i, t, d }) => (
  <div
    style={{
      display: "flex",
      gap: 14,
      padding: "16px",
      background: "var(--card)",
      border: "1px solid var(--line)",
      borderRadius: 6,
      height: "100%",
      alignItems: "flex-start",
    }}
  >
    <span
      style={{
        width: 38,
        height: 38,
        borderRadius: 6,
        flexShrink: 0,
        background: "var(--paper-2)",
        border: "1px solid var(--line)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--ink-2)",
      }}
    >
      <Icon name={i} size={17} />
    </span>
    <div>
      <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>
        {t}
      </div>
      <div
        style={{
          fontSize: 13.5,
          color: "var(--mute)",
          marginTop: 3,
          lineHeight: 1.5,
        }}
      >
        {d}
      </div>
    </div>
  </div>
);

const ProductSpectroscopy = () => {
  const dataA = [
    {
      id: 1,
      name: "UV Absorbance Spectroscopy",
      data: [
        "Xenon Lamp",
        "Flow Cell",
        "Beam splitter",
        "Peak Filter",
        "Peak detector",
        "Reference filter",
        "Reference detector",
      ],
    },
    {
      id: 2,
      name: "UV Fluorescence",
      data: [
        "Xenon Lamp",
        "Excitation Filter",
        "Flow Cell",
        "Emission Filter",
        "Photomultiplier",
        "Reference photo detector",
      ],
    },
    {
      id: 3,
      name: "Colorimetric method",
      data: [
        "LED",
        "Flow Cell",
        "Photo Detector",
        "Reagent Pump",
        "Reagent Tank",
      ],
    },
    {
      id: 4,
      name: "90 Degree light Scattering Nephelometry (Turbidity)",
      data: ["Laser Diode", "Flow Cell", "Photo Detector"],
    },
    {
      id: 5,
      name: "UV Absorbance – Gas Stripping",
      data: [
        "Spectrograph",
        "Beam Splitter",
        "Liquid Flow Cell",
        "Xenon Lamp (Liquid phase)",
        "Xenon Lamp (Gas phase)",
        "Gas flow cell",
        "Gas pump",
        "Stripping Pot",
        "Temperature Probe",
      ],
    },
  ];

  const techData = [
    {
      i: "drop",
      t: "Direct Absorbance",
      d: "Direct absorbance measurement for UVA, COD, BOD, TOC, NO3, Colour, PO4 and Cr VI brings fast, stable measurements with a simple hydraulic circuit. The analyzers are factory calibrated, and local multi-point calibration supports COD, BOD and TOC readings where UV alternative methods are compatible.",
    },

    {
      i: "shield",
      t: "Aqualog series",
      d: "Aqualog series of analyzers are designed for a non-clog operation, as the Analyzer comes equipped with a flow cell of different apertures of 1mm, 3 mm and 10 mm. This makes these analyzers advantageous for all levels of suspended solids.",
    },
    {
      i: "chart",
      t: "Analyzer",
      d: "The Analyzer allows to add additional modules for Gaseous parameters mainly Ammonia, Hydrogen Sulphide. A revolutionary method of Gas stripping allows to monitor total gas concentration and not in ionic form. This method allows to measure Ammonia and Hydrogen Sulphide separately and Ammonical Nitrogen in liquid phase.",
    },
    {
      i: "waves",
      t: "High Resolution",
      d: "A high resolution spectrograph scanning wavelengths from 180 nm to 750 nm, with wavelength resolution and on-screen display of values at each wavelength is the master part.",
    },
    {
      i: "chart",
      t: "Light Source",
      d: "The light source, being a pulsed Xenon Lamp, allows for 10 years of life as 10^9 flashes.",
    },
  ];

  return (
    <section
      className={`${sectionClass} product-spectroscopy bg-(--paper) border border-t-(--line) border-b-(--line) pt-16 md:pt-20 lg:pt-24`}
    >
      <div className="shell pl-auto mr-auto">
        <Reveal>
          <div className={sectionHeadingGrid}>
            <div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--mute)",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                ◆ Innovation
              </div>
              <h2 style={sectionHeadingStyle}>
                Innovation to UV -
                <br />
                <span className="serif-i">Vis Spectroscopy</span>
              </h2>
            </div>

            <p style={sectionIntroStyle}>
              A complementary UV-visible fluorescence module allows the
              measurement of aromatics hydrocarbons (PAH). Nephelometric
              turbidity by visible or infra-red laser diode is also available.
            </p>
          </div>
        </Reveal>

        <div className="pb-4 mb-4">
          <Reveal delay={160}>
            <div className="my-10 md:my-14 grid grid-cols-1 md:grid-cols-2 gap-3">
              <Reveal delay={80}>
                <TechPanel />
              </Reveal>
              {techData.map((p, idx) => (
                <Reveal key={p.t} delay={100 * (idx + 1)}>
                  <TechRow {...p} />
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {dataA.map((item, i) => (
            <div className="pt-3 border-t border-(--line)" key={item.id}>
              <div className="font-semibold text-black text-base">
                <Reveal delay={120 * i}>{item.name}</Reveal>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.data.map((component, index) => (
                  <Reveal delay={120 * index}>
                    <span
                      key={index}
                      className="inline px-2 py-1 bg-[#fafaf7] border border-(--line) rounded-full text-[12px] text-[#1a2333] whitespace-nowrap"
                    >
                      {component}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  const data = [
    {
      id: 1,
      name: "User Friendly Interface",
      desc: "The colour touch screen and user friendly interface available in different languages makes it easy to test or configure the analyser.",
    },
    {
      id: 2,
      name: "Multiplexing System",
      desc: "Aqualog analyzers offer analysis of different streams in a single instrument with electronically controlled valves and software support.",
    },
    {
      id: 3,
      name: "Automatic Cleaning",
      desc: "A built-in automatic cleaning system injects solution periodically and performs auto-zero to avoid drift of the measurement.",
    },
    {
      id: 4,
      name: "Up to 6 different streams",
      desc: "Channels can be duplicated or measured sequentially to support multiple streams with MODBUS reporting.",
    },
  ];

  return (
    <section className={`${sectionClass} product-feature bg-(--ink)`}>
      <div className="shell pl-auto mr-auto">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-16 mb-10 lg:mb-14">
            <div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--mute-2)",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                ◆ Features
              </div>
              <h2
                style={{
                  ...sectionHeadingStyle,
                  color: "var(--paper-2)",
                }}
              >
                Features of Aqualog series
                <br />
                <span className="serif-i" style={{ color: "var(--cyan)" }}>
                  UV-Vis Analyzers.
                </span>
              </h2>
            </div>

            <p
              style={{
                fontSize: 16,
                lineHeight: 1.55,
                color: "var(--mute-2)",
                margin: 0,
                alignSelf: "end",
                maxWidth: 540,
              }}
            >
              The 4D model adheres to all Government norms, features and design
              standards. The main standard features incorporated are:
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-4 relative z-11 border-t border-(--ink-3)"
              >
                <div className="pt-[18px] flex flex-col gap-3">
                  <span className="w-[36px] h-[36px] bg-(--ink) border border-(--ink-3) rounded-full mono flex flex-col items-center justify-center relative">
                    <span className="text-[12px] text-(--cyan)">
                      0{item.id}
                    </span>
                  </span>
                  <div className="mono text-base tracking-[0.1em] text-white">
                    {item.name}
                  </div>
                  <p className="text-[13px] text-(--mute) leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SpecificationSection = () => {
  const [tab, setTab] = React.useState("Analyzer Specifications");

  return (
    <section
      className={`${sectionClass} product-specification bg-(--paper) pt-16 md:pt-20 lg:pt-24`}
    >
      <div className="shell pl-auto mr-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-auto overflow-x-auto pb-2">
            <div className="mx-auto inline-flex min-w-max gap-2 md:gap-4 items-center mb-10 md:mb-14 bg-(--card) border border-(--line) rounded-full px-2 md:px-4 py-2">
              {[
                "Analyzer Specifications",
                "Parameter Specifications",
                "Parts",
              ].map((item) => (
                <button
                  className={`py-2 px-3 md:px-4 text-[13px] md:text-[14px] rounded-full whitespace-nowrap transition ${
                    item === tab ? "bg-(--ink) text-white" : "bg-(--card)"
                  }`}
                  key={item}
                  onClick={() => setTab(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {tab === "Analyzer Specifications" ? <SpecificationTab /> : null}
        {tab === "Parameter Specifications" ? <ParameterTab /> : null}
        {tab === "Parts" ? <PartsTab /> : null}
      </div>
    </section>
  );
};

const SpecificationTab = () => {
  const data = [
    {
      id: 1,
      heading: "Sample flow Recommended",
      desc: "Recommended: 0 - 5 l/min",
    },
    {
      id: 2,
      heading: "Sample pressure",
      desc: "0 - 4 Bar (0 - 1 Bar with sampling peristaltic pump)",
    },
    { id: 3, heading: "Sample temperature", desc: "0 - 80 °C" },
    {
      id: 4,
      heading: "Wet parts materials",
      desc: "Quartz, Polypropylene, Polyethylene, FPM (Viton), PMMA",
    },
    {
      id: 5,
      heading: "Measuring time",
      desc: "5 sec (except PO4, NO2, Fe, Cr(VI): 3 min / Cl2, Al: 2 min / SiO2: 6 min)",
    },
    {
      id: 6,
      heading: "Measurement interval",
      desc: "1 min to 720 min (if measuring time compatible). Physicochemical parameters may be continuous.",
    },
    {
      id: 7,
      heading: "Memory",
      desc: "5000 lines of measurements (up to 16 channels) with date and time.",
    },
    {
      id: 8,
      heading: "Consumption Cleaning solution",
      desc: "Cleaning solution (5% sulfuric acid): 220 ml/day. Reagent per measurement: Al 0.5 ml, Cl2/PO4/Fe/NO2/Cr(VI) 0.6 ml, SiO2 1.2 ml.",
    },
    {
      id: 9,
      heading: "Maintenance interval",
      desc: "Recommended: 6 months to 1 year (except for refilling).",
    },
    {
      id: 10,
      heading: "Power supply",
      desc: "90 - 264 VAC, 50/60 Hz, 40 VA. 12V DC, 3A max.",
    },
    {
      id: 11,
      heading: "Screen",
      desc: "Colour TFT LCD 320×240 pixels with LED backlight. Depending on model and configuration.",
    },
    {
      id: 12,
      heading: "Communication",
      desc: "RS232, Modbus, HTTP/Web interface, RS485 for external probes (DO, TSS), USB Wi-Fi (IEEE 802.11b), optional Ethernet (IEEE 802.3).",
    },
    {
      id: 13,
      heading: "Certifications",
      desc: "TUV Rheinland, CE, EN 61010-1, EN 61326.",
    },
    {
      id: 14,
      heading: "Enclosure",
      desc: "Stainless steel with epoxy coating, IP65, wall mounting brackets.",
    },
    {
      id: 15,
      heading: "Dimensions",
      desc: "230 × 340 × 190 mm (H × W × D). Standard for BOD, COD, TSS. Changes as per parameter specifications.",
    },
    {
      id: 16,
      heading: "Weight",
      desc: "15 to 20 kg depending on the configuration.",
    },
  ];

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const currentItems = React.useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <>
      <Reveal>
        <div className={sectionHeadingGrid}>
          <div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "var(--mute)",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              ◆ Online Water analyzer
            </div>
            <h2 style={sectionHeadingStyle}>
              Analyzer
              <br />
              <span className="serif-i">Specifications</span>
            </h2>
          </div>
          <p style={sectionIntroStyle}>
            Would you like a robust data base to help you better understand your
            process over time and under specific conditions? Do you want to
            review your plant’s processes, identify opportunities for
            improvement and make fact-based operational decisions? Vepolink is
            your tool.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="bg-(--card) border p-4 md:p-5 border-(--line) rounded overflow-hidden">
          <Reveal>
            <div className="mono text-[10.5px] text-(--mute) uppercase mb-[20px]">
              Specification · <b>UV300</b> · Analyzer
            </div>
          </Reveal>

          {currentItems.map((item, l) => {
            return (
              <Reveal delay={140 * l} key={item.id}>
                <div className="bg-(--paper-2) border border-(--line-2) rounded-[6px] mt-2 p-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <div className="font-semibold text-slate-900 md:border-r md:border-(--line) md:pr-4">
                    {item.heading}
                  </div>
                  <div className="text-slate-600 text-sm md:col-span-2">
                    {item.desc}
                  </div>
                </div>
              </Reveal>
            );
          })}

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-5 pt-4 border-t border-(--line)">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={pagerButtonClass}
            >
              Previous
            </button>

            <div className="flex items-center gap-2 flex-wrap justify-center">
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={pageDotClass(page === currentPage)}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={pagerButtonClass}
            >
              Next
            </button>
          </div>
        </div>
      </Reveal>
    </>
  );
};

const ParameterTab = () => {
  const parameterSpecifications = [
    {
      id: 1,
      parameter: "UVA",
      technology: "UV – Vis Spectroscopy",
      range: "0-200 Abs/m, 0-600 Abs/m",
      accuracy: "± 2%",
    },
    {
      id: 2,
      parameter: "COD",
      technology: "UV – Vis Spectroscopy",
      range: "0-100 mg/l COD, 0-2000 mg/l COD, 0-20000 mg/l COD",
      accuracy: "± 2%",
    },
    {
      id: 3,
      parameter: "BOD",
      technology: "UV – Vis Spectroscopy",
      range: "0-100 mg/l BOD, 0-1000 mg/l BOD, 0-10000 mg/l BOD",
      accuracy: "± 2%",
    },
    {
      id: 4,
      parameter: "TOC",
      technology: "UV – Vis Spectroscopy",
      range: "0-100 mg/l TOC, 0-1000 mg/l TOC, 0-10000 mg/l TOC",
      accuracy: "± 2%",
    },
    {
      id: 5,
      parameter: "TSS",
      technology: "UV – Vis Spectroscopy",
      range: "0-1000 mg/l TSS, 0-10000 mg/l TSS",
      accuracy: "± 2%",
    },
    {
      id: 6,
      parameter: "Nitrate",
      technology: "UV – Vis Spectroscopy",
      range: "0-100 mg/l NO3",
      accuracy: "± 2%",
    },
    {
      id: 7,
      parameter: "Colour",
      technology: "UV – Vis Spectroscopy",
      range: "0-100 pt/Co, 0-1000 pt/Co",
      accuracy: "± 2%",
    },
    {
      id: 8,
      parameter: "PAH (aromatics)",
      technology: "UV Fluorescence",
      range: "0-10 mg/l C6H6",
      accuracy: "± 2%",
    },
    {
      id: 9,
      parameter: "Oil in Water",
      technology: "UV Fluorescence",
      range: "0-100 ppm OIW, 0-1000 ppm OIW",
      accuracy: "± 2%",
    },
    {
      id: 10,
      parameter: "Chlorophyll A",
      technology: "",
      range: "0-100 µg/l ChlA",
      accuracy: "± 2%",
    },
    {
      id: 11,
      parameter: "Phosphate",
      technology: "Colorimetry",
      range: "0-2 mg/l P-PO4, 0-20 mg/l P-PO4",
      accuracy: "± 2%",
    },
    {
      id: 12,
      parameter: "Chlorine",
      technology: "Electrochemistry / UV – Vis Spectroscopy",
      range: "0-5 mg/l Cl2",
      accuracy: "± 2%",
    },
    {
      id: 13,
      parameter: "Nitrite",
      technology: "UV – Vis Spectroscopy",
      range: "0-5 mg/l NO2",
      accuracy: "± 2%",
    },
    {
      id: 14,
      parameter: "Aluminium",
      technology: "Colorimetry",
      range: "0-500 ppb Al",
      accuracy: "± 2%",
    },
    {
      id: 15,
      parameter: "Iron",
      technology: "Colorimetry",
      range: "0-2 mg/l Fe",
      accuracy: "± 2%",
    },
    {
      id: 16,
      parameter: "Silica",
      technology: "Colorimetry",
      range: "0-20 mg/l SiO2",
      accuracy: "± 2%",
    },
    {
      id: 17,
      parameter: "Cr VI",
      technology: "Colorimetry",
      range: "0-2 mg/l Cr VI",
      accuracy: "± 2%",
    },
    {
      id: 18,
      parameter: "Turbidity",
      technology: "UV – Vis Spectrophotometry",
      range: "0-10 NTU, 0-100 NTU, 0-1000 NTU",
      accuracy: "± 2%",
    },
    {
      id: 19,
      parameter: "pH",
      technology: "Electrochemistry",
      range: "0-14",
      accuracy: "± 2%",
    },
    {
      id: 20,
      parameter: "ORP",
      technology: "Electrochemistry",
      range: "+/- 2000 mV",
      accuracy: "± 2%",
    },
    {
      id: 21,
      parameter: "Dissolved Oxygen",
      technology: "Optical Fluorescence",
      range: "0-25 mg/l O2",
      accuracy: "± 2%",
    },
    {
      id: 22,
      parameter: "External TSS",
      technology: "90 degree light scattering",
      range: "0-1500 mg/l TSS, 0-30000 mg/l TSS",
      accuracy: "± 2%",
    },
    {
      id: 23,
      parameter: "External Turbidity",
      technology: "90 degree light scattering",
      range: "0-4 NTU, 0-40 NTU",
      accuracy: "± 2%",
    },
    {
      id: 24,
      parameter: "Conductivity",
      technology: "Electrochemistry",
      range: "0-2000 uS",
      accuracy: "± 2%",
    },
  ];

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(parameterSpecifications.length / ITEMS_PER_PAGE);

  const currentItems = React.useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return parameterSpecifications.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  return (
    <>
      <Reveal>
        <div className={sectionHeadingGrid}>
          <div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "var(--mute)",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              ◆ Online Water analyzer
            </div>
            <h2 style={sectionHeadingStyle}>
              Parameter
              <br />
              <span className="serif-i">Specifications</span>
            </h2>
          </div>
          <p style={sectionIntroStyle}>
            Would you like a robust data base to help you better understand your
            process over time and under specific conditions? Do you want to
            review your plant’s processes, identify opportunities for
            improvement and make fact-based operational decisions? Vepolink is
            your tool.
          </p>
        </div>
      </Reveal>

      <div className="bg-(--card) border p-4 md:p-5 border-(--line) rounded overflow-hidden">
        <Reveal>
          <div className="mono text-[10.5px] text-(--mute) uppercase mb-[20px]">
            Parameter · <b>UV300</b> · Analyzer
          </div>
        </Reveal>

        {currentItems.map((item, k) => {
          return (
            <Reveal delay={140 * k} key={item.id}>
              <div className="bg-(--paper-2) border border-(--line-2) rounded-[6px] mt-2 p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                <div className="font-semibold text-slate-900 xl:border-r xl:border-(--line) xl:pr-3">
                  {item.parameter}
                </div>
                <div className="text-slate-600 text-sm xl:border-r xl:border-(--line) xl:pr-3">
                  {item.technology || "-"}
                </div>
                <div className="text-slate-600 text-sm xl:border-r xl:border-(--line) xl:pr-3">
                  {item.range}
                </div>
                <div className="text-slate-600 text-sm">{item.accuracy}</div>
              </div>
            </Reveal>
          );
        })}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-5 pt-4 border-t border-(--line)">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={pagerButtonClass}
          >
            Previous
          </button>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={pageDotClass(page === currentPage)}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={pagerButtonClass}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const PartsTab = () => {
  const data = [
    {
      id: 1,
      heading: "Aqualog 4000 UVS",
      desc: [
        "Full spectrum UV-Vis absorbance Analyzer",
        "Optical path: 1,3,10 mm",
        "(4 multiplexing option)",
      ],
    },
    {
      id: 2,
      heading: "Aqualog 4000 UVS/1",
      desc: [
        "Full spectrum UV-Vis absorbance Analyzer",
        "Optical path: 1 mm",
        "Standard for inlet and outlet of waste water",
      ],
    },
    {
      id: 3,
      heading: "Aqualog 4000 UVS/3",
      desc: [
        "Full spectrum UV-Vis absorbance Analyzer",
        "Optical path: 10 mm",
        "For Drinking water",
      ],
    },
    {
      id: 4,
      heading: "Aqualog 5000 UVS",
      desc: [
        "Full spectrum UV-Vis absorbance Analyzer",
        "Optical path: 1,3,10 mm",
        "(6 multiplexing option)",
      ],
    },
  ];

  return (
    <>
      <Reveal>
        <div className={sectionHeadingGrid}>
          <div>
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                color: "var(--mute)",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              ◆ Online Water analyzer
            </div>
            <h2 style={sectionHeadingStyle}>
              Parts
              <br />
              <span className="serif-i">Specifications</span>
            </h2>
          </div>
          <p style={sectionIntroStyle}>
            Would you like a robust data base to help you better understand your
            process over time and under specific conditions? Do you want to
            review your plant’s processes, identify opportunities for
            improvement and make fact-based operational decisions? Vepolink is
            your tool.
          </p>
        </div>
      </Reveal>

      <div className="bg-(--card) border p-4 md:p-5 border-(--line) rounded overflow-hidden">
        <Reveal>
          <div className="mono text-[10.5px] text-(--mute) uppercase mb-[20px]">
            Parts · <b>UV300</b> · Analyzer
          </div>
        </Reveal>

        {data.map((item, k) => {
          return (
            <Reveal delay={140 * k} key={item.id}>
              <div className="bg-(--paper-2) border border-(--line-2) rounded-[6px] mt-2 p-4 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="font-semibold text-slate-900 md:border-r md:border-(--line) md:pr-4 flex flex-col justify-center">
                  {item.heading}
                </div>
                <div className="text-slate-600 text-sm flex flex-col gap-1">
                  {item.desc.map((l, i) => {
                    return (
                      <p key={i} className="flex gap-1 flex-row items-center">
                        <span className="w-[6px] h-[6px] rounded mr-[3px] bg-[#cbcbcb]"></span>
                        <span>{l}</span>
                      </p>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
};

const AccessoriesSection = () => {
  const data = [
    {
      id: 1,
      title: "SAMPLING PUMP",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffffff"
        >
          <path d="M140-280h210.15q-28.53-17.77-51.5-43.15-22.96-25.39-37.03-56.85H140v100Zm481.5-58.5Q680-397 680-480t-58.5-141.5Q563-680 480-680t-141.5 58.5Q280-563 280-480t58.5 141.5Q397-280 480-280t141.5-58.5Z" />
        </svg>
      ),
      img: "gan1.jpg",
      prod_code: "AGMS-P-EXT",
      feat: "External Peristaltic sampling pump for Peltier Probe",
      desc: [
        "Heavy duty brushless motor",
        "Connected to analyzer electronics with timer for sampling",
      ],
    },
    {
      id: 2,
      title: "SOLENOID VALVES",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffffff"
        >
          <path d="M460-655.38v-120H300v-40h360v40H500v120h-40ZM180-144.62v-280h40v40h160v-160h-40v-40h280v40h-40v160h160v-40h40v280h-40v-40H220v40h-40Z" />
        </svg>
      ),
      img: "gan2.jpg",
      prod_code: "AGMS-SV-EXT",
      feat: "External Valves for Multiplexing & Remote Calibration",
      desc: [
        "Normally Open configuration",
        "Connected to analyzer electronics for sampling, increasing life of pump and tubing.",
      ],
    },
    {
      id: 3,
      title: "INPUT MODULES",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffffff"
        >
          <path d="M260-380h40v-200h-40v200Zm200 0h40v-200h-40v200Zm200 0h40v-200h-40v200Z" />
        </svg>
      ),
      img: "output.jpg",
      prod_code: "AN/IN-4-20-AQUVS",
      feat: "Normally Open configuration",
      desc: [
        "Connected to analyzer electronics for sampling, increasing life of pump and tubing.",
      ],
    },
    {
      id: 4,
      title: "SOLENOID VALVES",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffffff"
        >
          <path d="M260-380h40v-200h-40v200Zm200 0h40v-200h-40v200Zm200 0h40v-200h-40v200Z" />
        </svg>
      ),
      img: "input.jpg",
      prod_code: "AN/OUT-4-20-AQUVS",
      feat: "External Valves for Multiplexing & Remote Calibration",
      desc: [
        "Normally Open configuration",
        "Connected to analyzer electronics for sampling, increasing life of pump and tubing.",
      ],
    },
    {
      id: 5,
      title: "COMMUNICATION",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffffff"
        >
          <path d="M292.31-200.77 120-373.08l172.31-172.3 28.31 28.53-123.77 123.77h295.46v40H196.85l123.77 123.77-28.31 28.54Z" />
        </svg>
      ),
      img: "gan5.jpg",
      prod_code: "AN-COMM-AQUVS",
      feat: "WiFi Interface for future norms",
      desc: [
        "Connection to wireless network",
        "Secured tamper proof data transfer",
      ],
    },
    {
      id: 6,
      title: "COMMUNICATION",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#ffffff"
        >
          <path d="M292.31-200.77 120-373.08l172.31-172.3 28.31 28.53-123.77 123.77h295.46v40H196.85l123.77 123.77-28.31 28.54Z" />
        </svg>
      ),
      img: "ax5.png",
      prod_code: "AN-COMM",
      feat: "Cloud Data Logger Interface",
      desc: ["Connection via SIM, LAN", "Secured tamper proof data transfer"],
    },
  ];

  return (
    <section className={`${sectionClass} product-Accessories bg-(--paper-2)`}>
      <div className="shell pl-auto mr-auto">
        <Reveal>
          <div className={sectionHeadingGrid} style={{ marginBottom: 80 }}>
            <div>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--mute)",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                ◆ Online Water analyzer
              </div>
              <h2 style={sectionHeadingStyle}>
                Accessories
                <br />
                <span className="serif-i">Water analyzer.</span>
              </h2>
            </div>

            <p style={sectionIntroStyle}>
              Would you like a robust data base to help you better understand
              your process over time and under specific conditions? Do you want
              to review your plant’s processes, identify opportunities for
              improvement and make fact-based operational decisions? Vepolink is
              your tool.
            </p>
          </div>
        </Reveal>

        <div className="overflow-x-auto md:overflow-hidden">
          <div
            className="inline-flex flex-row gap-4 md:gap-5 w-max pr-4"
            style={{ animation: "vepoScroll 30s linear infinite" }}
          >
            {[...data, ...data].map((item, idx) => {
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[260px] sm:w-[280px] md:max-w-[300px] border border-(--line) rounded overflow-hidden shrink-0 bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`/assets/images/${item.img}`}
                      alt={item.title}
                      onError={handleMissingProductImage}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-row items-center gap-2 bg-[#203254] text-[15px] md:text-[16px] font-medium py-2 px-2 text-white rounded-t-[5px]">
                    <span className="w-[30px] h-[30px] shrink-0">
                      {item.icon}
                    </span>
                    <span>{item.title}</span>
                  </div>

                  <div className="px-3">
                    <div className="flex flex-row gap-2 items-center my-3 border-b border-(--line-2) pb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="rotate-[100deg]"
                      >
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      <span className="text-[12px]">
                        <span className="text-gray-400">Product Code: </span>
                        <span>{item.prod_code}</span>
                      </span>
                    </div>

                    <div className="text-sm text-(--muted) mb-3">
                      {item.feat}
                    </div>

                    <div className="p-2 bg-[#f1f1f1] rounded h-full flex flex-col gap-2 mb-3">
                      {item.desc.map((t, i) => {
                        return (
                          <div
                            key={i}
                            className="text-sm text-(--muted) flex flex-row gap-2 items-baseline"
                          >
                            <div className="w-[7px] h-[7px] rounded-full bg-[#203254]"></div>
                            <div className="flex-1">{t}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`@keyframes vepoScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-10 md:mt-12 max-w-[1170px] ml-auto mr-auto">
          <div className="flex flex-row gap-2 px-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#203254"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4" />
                <circle cx="17.695" cy="17.695" r="3" />
              </svg>
            </div>
            <div>
              <div className="text-[16px] text-(--ink) font-bold">
                Reliable Performance
              </div>
              <p className="text-sm text-(--muted)">
                Built for continuous operation
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 px-3 lg:border-r lg:border-l lg:border-(--line)">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#203254"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <div>
              <div className="text-[16px] text-(--ink) font-bold">
                Smart Integration
              </div>
              <p className="text-sm text-(--muted)">
                Work seamlessly with analyzer electronics
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 px-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#203254"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 14v2.2l1.6 1" />
                <path d="M16 2v4" />
                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
                <path d="M3 10h5" />
                <path d="M8 2v4" />
                <circle cx="16" cy="16" r="6" />
              </svg>
            </div>
            <div>
              <div className="text-[16px] text-(--ink) font-bold">
                Extended Component Life
              </div>
              <p className="text-sm text-(--muted)">
                Protects pump and tubing for longer use
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2 px-3 lg:border-l lg:border-(--line)">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#203254"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <div className="text-[16px] text-(--ink) font-bold">
                Easy Installation
              </div>
              <p className="text-sm text-(--muted)">
                Plug-and-play design for quick setup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ShadeBg = () => (
  <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50">
    <svg
      className="absolute -z-10 -mt-20 right-0 max-w-full h-auto"
      width="890"
      height="764"
      viewBox="0 0 890 764"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="890" height="764" fill="url(#a)" />
      <defs>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 381.525 -445 0 445 381.525)"
        >
          <stop offset=".293" stopColor="#fafaf7" stopOpacity="0"></stop>
          <stop offset="1" stopColor="#fafaf7"></stop>
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const Partners = () => {
  const partners = [
    "User Friendly Interface",
    "Multiplexing System",
    "Automatic Cleaning",
    "Up to 6 different streams",
  ];

  return (
    <section
      className="product-proof-strip"
      style={{
        padding: window.screen.width < 767 ? "0px" : "15px 0",
        marginTop: window.screen.width < 767 ? "0px" : "25px",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--mute)",
          borderBottom: "1px solid var(--mute)",
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 28,
            animation: "vepoScroll 30s linear infinite",
            width: "max-content",
            padding: "12px 24px",
          }}
        >
          {[...partners, ...partners].map((p, i) => (
            <span
              key={i}
              style={{
                fontFamily: "Geist",
                fontSize: "clamp(14px, 2vw, 18px)",
                fontWeight: 600,
                color: "var(--ink-3)",
                whiteSpace: "nowrap",
              }}
            >
              <span
                className="w-[6px] h-[6px] bg-[var(--ink-3)] mr-2.5 inline-block"
                style={{ verticalAlign: "middle" }}
              ></span>
              {p}
            </span>
          ))}
        </div>
        <style>{`@keyframes vepoScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="md:py-[120px] md:px-[48px] py-[100px] px-[16px]">
    <div className="max-w-[1320px] m-auto bg-(--ink) text-(--paper-2) rounded-[8px] md:py-[72px] md:px-[64px] p-8 relative overflow-hidden">
      {/* subtle gradient orb */}
      <div
        style={{
          position: "absolute",
          left: -120,
          top: 0,
          width: 420,
          height: 420,
          borderRadius: 999,
          background:
            "radial-gradient(circle, oklch(72% 0.13 210 / 0.35), transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative grid md:grid-cols-2 grid-cols-1 md:gap-[64px] gap-[35px]  align-start">
        <div className="col-span-1">
          <div className="mono text-[11px] leading-[0.12em] text-(--mute-2) uppercase mb-[18px]">
            ◆ Request for Information
          </div>
          <div
            style={{ color: "var(--paper-2)" }}
            className="md:text-4xl text-2xl leading-[1.26] tracking-[-0.03em] m-0 font-[500] text-(--paper-2)"
          >
            Have a question or need assistance with our products? Complete the
            form below, and one of our specialists will contact you shortly
          </div>
        </div>
        <div className="col-span-1">
          <form className="prod-form flex flex-wrap p-2" action="mailto:techsupport@vepolink.com" method="post" encType="text/plain">
            <div className=" mb-2 md:w-1/2 w-full px-1">
              <div className="relative">
                <input
                  className="w-full"
                  placeholder="Enter your first name"
                  required
                />
                <label>First name</label>
              </div>
            </div>
            <div className=" mb-2 md:w-1/2 w-full px-1">
              <div className="relative">
                <input
                  className="w-full"
                  placeholder="Enter your last name"
                  required
                />
                <label>Last name</label>
              </div>
            </div>
            <div className=" mb-2 md:w-1/2 w-full px-1">
              <div className="relative">
                <input
                  className="w-full"
                  placeholder="Enter your Company Name"
                  required
                />
                <label>Company Name</label>
              </div>
            </div>
            <div className=" mb-2 md:w-1/2 w-full px-1">
              <div className="relative">
                <input
                  className="w-full"
                  placeholder="Enter your Post code"
                  required
                />
                <label>Post code</label>
              </div>
            </div>
            <div className=" mb-2 md:w-1/2 w-full px-1">
              <div className="relative">
                <input
                  className="w-full"
                  placeholder="Enter your City"
                  required
                />
                <label>City</label>
              </div>
            </div>
            <div className=" mb-2 md:w-1/2 w-full px-1">
              <div className="relative">
                <input
                  className="w-full"
                  placeholder="Enter your Country/Region"
                  required
                />
                <label>Country/Region</label>
              </div>
            </div>
            <div className=" mb-2 md:w-1/2 w-full px-1">
              <div className="relative">
                <input
                  type="email"
                  className="w-full"
                  placeholder="Enter your Email Address"
                  required
                />
                <label>Email Address</label>
              </div>
            </div>
            <div className=" mb-2 md:w-1/2 w-full px-1">
              <div className="relative">
                <input
                  type="tel"
                  className="w-full"
                  placeholder="Enter your Phone"
                  required
                />
                <label>Phone</label>
              </div>
            </div>
            <div className=" mb-2 md:w-full px-1">
              <div className="relative">
                <textarea
                  className="w-full"
                  placeholder="Enter Your message"
                  required
                />
                {/* <label>Your message</label> */}
              </div>
            </div>
            <div className="w-full flex flex-col items-end">
              {" "}
              <button
                type="submit"
                style={{
                  padding: "14px 24px",
                  fontSize: 14,
                  fontWeight: 500,
                  background: "var(--ink)",
                  color: "var(--paper-2)",
                  border: "1px solid var(--ink-3)",
                  borderRadius: 99,
                  cursor: "pointer",
                }}
              >
                Talk to engineering
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  ProductHero,
  ProductOverView,
  ProductSpectroscopy,
  FeaturedProducts,
  SpecificationSection,
  AccessoriesSection,
  CTA,
  Reveal,
});
