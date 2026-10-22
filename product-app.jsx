const ProductApp = () => (
  <>
    <a className="skip-link" href="#product-main">
      Skip to content
    </a>
    <site-header></site-header>
    <main id="product-main">
      <ProductHero />
      <ProductOverView />
      <ProductSpectroscopy />
      <FeaturedProducts />
      <SpecificationSection />
      <AccessoriesSection />
      <CTA />
    </main>
    <site-footer></site-footer>
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<ProductApp />);
