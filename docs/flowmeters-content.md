# Flowmeters category and product pages

Category route: `/products/flowmeters/`. The five child routes are `/products/flowmeters/{emf,ecoflow,sonicline,clampwave,echoflow}/`. Source data: `content/flowmeters.json`; render with `node scripts/render-flowmeters.js` and `node scripts/render-flowmeter-pages.js`, then `node scripts/render-shared.js` only after shared navigation changes. The category has concise selection cards and prominent child links; specifications live on the product pages. Children reuse the approved probe detail stylesheet and image fallback behavior, with a small flowmeter-specific extension.

## Sources and image provenance

The five user-supplied Vepolink brochures are the factual source for this category. `docs/sources/flowmeters/pdf-manifest.json` records original filenames, SHA-256 hashes, page counts and image mappings. Each PDF has nine pages; the main specification table is page 5. The original transparent `X35` illustration on page 1 was extracted and optimized as WebP, with no generated replacement or supplier branding. The other embedded images are logo/background artwork and are not product assets.

Images are brochure illustrations, not photographs. The catalog identifies this once and image alternative text describes the installation. Illustrative screen readings inside the original artwork are not product performance claims. Existing deployment excludes `docs/` and `content/`. Source text remains internal. Following the user’s explicit 4 October request, public brochures are served from `assets/brochures/flowmeters/`, with native download links in the child hero and specification section. EMF, EcoFlow, SonicLine and ClampWave are byte-identical copies of the supplied PDFs. The EchoFlow public copy replaces “Sonic Intelligence-” and “class signal processing” on page 4 with “Ultrasonic” and “signal processing”; no specifications were changed. The edited page was rendered and visually verified. The manifest records each public asset’s SHA-256, size and publication changes. The original PDFs remain untouched.

## Publication decisions

| Source issue | Decision |
| --- | --- |
| SonicLine p5 lists resolution and repeatability as 3 mm | Omit both. Length units do not establish volumetric flow resolution or repeatability. Do not reuse EchoFlow's level metrics. |
| SonicLine p4/p7/p8 presents inline retrofit without stopping flow | Distinguish initial inline installation from transducer servicing. Under-pressure service requires the specified retractable fittings and procedure; do not promise installation without shutdown. |
| SonicLine special versions include DN25, 430 bar, +250/−200 °C, with ambiguous p4 typography | Publish only the standard DN50–1200, 40 bar and −20 to 200 °C limits. Confirm combined duty for the supplied configuration. |
| SonicLine p5 attributes HART/PROFIBUS PA to a “transducer output” while p2/p3/p8 describe a transmitter system | List these as interface options to confirm, without asserting a port topology or simultaneous availability. |
| EcoFlow p2 says no metal wetted surface; p4/p5 specify SS316L electrodes | State HDPE body and flow tube, with SS316L electrodes. Require compatibility of both; omit “entirely metal-free,” “all liquids,” unlimited corrosion resistance and cost guarantees. |
| EcoFlow does not give a minimum liquid conductivity | Do not inherit EMF's >20 µS/cm threshold. Request the supplied model's minimum conductivity. |
| EMF sensor IP65 with IP67/IP68 options and transmitter IP67 | Keep these as component-specific ratings, not a universal IP68 platform claim. |
| EMF pressure is given in kg/cm²; ANSI 150 flange is also mentioned | Preserve source units, do not silently relabel them bar. Confirm complete assembly/flange rating. |
| ClampWave hero gives 1%; p5 limits this to velocities ≥0.3 m/s, p8 says above 0.3 m/s | Use the qualified p5 specification in every summary. Pipe coverage is sensor-dependent, not every sensor covering the full 12.7 mm–10 m range. |
| ClampWave p2/p4/p8 claim performance through aeration/solids without limits | Require acoustic suitability and signal-quality verification; publish no unconditional aeration/solids guarantee or custody-transfer approval. |
| EchoFlow level accuracy and range could be mistaken for flow accuracy/range | Explicitly label level range, accuracy and resolution. Final flow depends on the primary device and head–discharge relationship. |
| EchoFlow p4 contains a supplier-specific signal-processing family name | Omit it. Public branding stays Vepolink; describe false-echo suppression in generic technical terms. |
| EchoFlow p6 broadly says centered over channel and primary device upstream of measurement point | Avoid generalizing the location. Follow the installed primary device's specified head-measurement point, beam clearance and datum. |
| Brochures contain absolute no-pressure-drop, no-energy-loss and no-maintenance claims | Describe an unobstructed bore/external mounting where supported. Retain commissioning and periodic verification; do not promise zero hydraulic loss or universal maintenance-free operation. |
| Brochures say figures are indicative and confirmed at order | Keep configuration qualifications on the product pages and enquiry forms. The user explicitly requested brochure downloads on 4 October; publish the supplied brochures with an indicative-specifications note beside the download. The editorial corrections below apply to the HTML; the source brochure specifications have not been rewritten. |

## UX and verification

- Five unique models: EMF, EcoFlow, SonicLine, ClampWave and EchoFlow.
- Installation grouping: inline (3), clamp-on (1), open channel (1).
- Technology filters: electromagnetic (2), ultrasonic (3), combined with installation. Empty combinations explain the available methods and offer reset.
- HTML contains all category links and every child specification, brochure download and enquiry without JavaScript. Filtering is progressive enhancement, shown only after initialization.
- Direct model/group anchors reveal filtered category targets. Each child has stable measurement, specifications, installation and related anchors. Category specification disclosures have been removed.
- Enquiry bodies name the selected model and request process, flow, pipe/channel geometry, interfaces and installation constraints.
- Category metadata uses collection and breadcrumb structured data with five real child URLs. Every child has WebPage, Product and breadcrumb structured data; six sitemap entries cover the family. Shared navigation includes desktop, mobile and footer links.
- Tests: `node --test scripts/flowmeters.test.js scripts/flowmeter-pages.test.js scripts/water-probes.test.js scripts/water-probe-pages.test.js scripts/cloudfront-clean-urls.test.js`.

## Verification history

Work began on `codex/flowmeters-category` from the locally available `origin/main` at `aed9324` (the merged URL-routing fix). Fetching a newer main, opening BrowserOS and starting a local preview were blocked by an automatic approval service configuration error on 2 October 2026. The service returned HTTP 404 for its configured API deployment before reviewing those operations. Do not treat static checks as a fresh browser or visual verification.


On 4 October 2026 the local server and BrowserOS preview were available. All 28 Node checks passed after adding child pages and brochure downloads. Browser checks verified the category’s keyboard technology filter, combined empty state, reset focus, and all five visible child links with JavaScript disabled. Product tables and downloads remain present without JavaScript. Each PDF returned HTTP 200 with application/pdf and a PDF signature; an actual EMF button download saved the matching file. All brochures contain nine pages; four retain their original source hashes, and EchoFlow text differs only by the two intended supplier-neutral replacements and extraction whitespace. Desktop/mobile captures and the finish-review verdict are under `.impeccable/review/flowmeter-pages/`. These checks cover local preview; no deployment was performed.
