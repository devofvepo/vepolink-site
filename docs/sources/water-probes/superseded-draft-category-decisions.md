# Superseded decisions

The user replaced this source authority with Advance Analytik on 23 September 2026. This is historical context only.

# Water probe source decisions

The first category release uses the supplied **Vepolink - Water Probes (Sensor Lineup).pdf**, pages 4–5, for lineup membership: 14 entries, grouped into 13 measurement cards because EC Analog and EC Digital share a card. This is not a claim of 14 confirmed model numbers. The second Turbidity row in **Copy of website List of Products.xlsx**, sheet **Water - Anant**, does not add a product. No individual child routes are published.

The user chose to withhold disputed figures. The existing analyzer pages are comparison evidence, not permission to overwrite the new source or infer identical models. Those pages retain their existing technical content. The Claude ZIP is design reference only. Its product codes, shared interface expansion, images and placeholder links are not independent evidence.

## Range and variant discrepancies

| Measurement | Probe PDF | Existing extractive / in-situ analyzer pages | Category decision |
| --- | --- | --- | --- |
| ORP | −1000 to +1000 mV | ±2000 mV | Range depends on model |
| EC | 0–200 mS/cm | Extractive: 0–20; in-situ: 0–200 mS/cm | Range depends on model; retain EC Analog and EC Digital as distinct entries |
| Turbidity | 0–1000 NTU; 0–4000 optional | Extractive: 0.01–4000 plus separate low-range model; in-situ: 0–4000 plus low-range model | Withhold exact figure; preserve standard/extended options and optional wiper; do not add TurbLo as a fifteenth entry |
| Ammonia nitrogen | 0–100 mg/L NH4-N | Extractive: 0.1–3000; in-situ: 0–100 | Range depends on model |
| Nitrate nitrogen | 0–100 mg/L NO3-N | Extractive: 0–3000; in-situ: 0–100 | Range depends on model |
| Suspended solids / sludge | 0–50,000 mg/L, optical or ultrasonic | Extractive: 0.01–20,000 mg/L; in-situ: 0–30 g/L | Range depends on model; distinguish concentration from sludge-interface depth |
| Oil in water | “ppm-level to percent” | Extractive: 0–50 ppm; in-situ: 0–50 mg/L | Range depends on model; no assumed equivalence or continuous range |
| Blue-green algae | 0–200 µg/L equivalent | Extractive: 0–300,000 cells/mL; in-situ: 0–200 µg/L | Withhold range and confirm reporting units; do not convert biomass to cell counts |
| pH | Digital entry; 0–14 pH | Existing pages describe digital / analog | Publish only supplied Digital entry; retain undisputed 0–14 pH |
| Residual chlorine | “Ion-selective / amperometric”; free or total | Generic compatible RCL listings | Publish 0–20 mg/L; confirm principle/species by model rather than resolving the ambiguity by assumption |
| UV COD | 0–1000 mg/L COD-eq, UV surrogate | In-situ VS-UV254 has configurable optical path and a nominal 0–1000 mg/L range | Preserve COD-equivalent qualification; do not claim it is a direct wet-chemistry test or equate the unnamed probe to a specific VS-UV254 SKU |

Undisputed category ranges: pH 0–14; optical DO 0–20 mg/L and 0–200% saturation; residual chlorine 0–20 mg/L; UV COD 0–1000 mg/L COD-eq; chlorophyll 0–500 µg/L. These are brochure-level values, with final model/configuration confirmed at enquiry.

## Output, shared specifications and copy

- Chlorophyll and BGA have no per-entry output specification in the probe PDF. Keep their output arrays empty. They are visible under Any; an output filter explains their exclusion when they match the search.
- RS-485/SDI-12 is shown only where the per-entry source supports it. “Digital” alone does not expand to both interfaces. RCL and UV COD specify RS-485 only.
- No universal 8–24 VDC supply, two-wire wiring, operating-temperature limit, depth rating, interchangeable connector, calibration-memory claim or all-model wiper is asserted. Generic platform claims do not establish per-model guarantees.
- IP68 identifies enclosure protection, not a universal depth. Housing materials and cable lengths are stated as lineup options, subject to model selection.
- Probe processing is described accurately: digital probes may process measurements internally. The page does not repeat the PDF's claim that a probe cannot compute a result.
- Sensing families are explanatory, not a mutually exclusive scientific taxonomy. Ion-selective electrodes are electrochemical; RCL's ambiguous method is not forced into the nutrient family.
- The PDF lists nine application contexts; no tenth application is invented.
- Maintenance text is conservative general guidance, not a replacement for model manuals or an invented service interval.

## Spreadsheet image provenance

The workbook contains ten unique embedded media files: one analyzer and nine probe pictures. Images can be referenced by several drawing anchors, so comparing file hashes alone does not reveal the repeated assignments. Row numbers below are one-based label rows; drawing anchors sometimes begin above/below a label.

| Workbook media | Label rows / assignments | Use |
| --- | --- | --- |
| image2.png | Analyzer near row 5 | Exclude from probe catalog |
| image4.png | A19 Turbidity, A28 ORP Analog, A37 EC Analog | Unresolved; parameter labels only |
| image10.png | A46 pH Digital, A55 EC Digital, A73 RCL, A82 UV COD | Unresolved; parameter labels only |
| image8.png | A64 ODO; drawing starts row 63 | `odo.webp` |
| image6.png | A91 SS; drawing starts row 90 | `ss.webp` |
| image5.png | A100 Chlorophyll, A118 BGA | Unresolved; parameter labels only |
| image7.png | Extra drawing starts row 102, near duplicate Turbidity A108 | Unresolved; not assigned to any probe |
| image1.png | A128 OIW; drawing starts row 129 | `oiw.webp` |
| image3.png | A137 NH4N; drawing starts row 134 | `nh4n.webp` |
| image9.png | A145 NO3N; drawing starts row 146 | `no3n.webp` |

The five used photos have unambiguous workbook assignments, not independently verified model identities. Original proportions and physical details are retained; only resizing, white-canvas normalization and WebP compression are applied. Adjacent `.json` files preserve origin and transformation. Source originals remain intact in the supplied workbook. No image was AI-generated or relabeled to fill a missing model photo.

## Updating content

Edit `content/water-probes.json`, keeping stable entry IDs and per-field source decisions. A replacement photo requires a confirmed mapping. Do not fill empty output fields or disputed ranges from generic platform tables. Run the renderer, static verification and relevant browser checks. New child pages require model-specific evidence before publication. The current page intentionally offers no brochure download while the supplied brochure contains unresolved claims.
