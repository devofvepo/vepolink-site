// About page entrypoint

const AboutApp = () => (
  <>
    <a className="skip-link" href="#about-main">Skip to content</a>
    <site-header></site-header>
    <main id="about-main">
      <AboutHero />
      <Vision />
      <Technology />
      <Commitment />
      <ProblemSolution />
      <Values />
      <DataSources />
      <Leadership />
      <AboutCTA />
    </main>
    <site-footer></site-footer>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<AboutApp />);
