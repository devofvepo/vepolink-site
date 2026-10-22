# Website image corrections

Branch: `codex/website-correction-images`, based on main `74c4482`.

The user’s `Website Correction.doc` (7 pages, supplied 7 October 2026) is the visual checklist. This change addresses the highlighted imagery across 17 product URLs; specifications, brochures, navigation, enquiry behavior and social images remain unchanged.

## Coverage

| Product URL under `/products/` | Corrected imagery |
| --- | --- |
| `multi-paramater-online-water-analyzer/` | Six hero display tiles with separate values and units; true 90° IR-scatter path |
| `multi-parameter-online-water-analyzer-in-situ/` | Separate mechanical-wiper and air-jet illustrations |
| `flowmeters/echoflow/` | Transducer, controller display and open-channel labels |
| `ambient-so2-gas-analyzer/` | Front display and rear-panel labels; visible accessible image |
| `ambient-nox-gas-analyzer/` | Front display and rear-panel labels |
| `ambient-co-gas-analyzer/` | Front display and rear-panel labels |
| `ambient-co2-gas-analyzer/` | Front display and rear-panel labels; preserved 0.041% example |
| `ambient-ozone-gas-analyzer/` | Front display and rear-panel labels; O₃ formula |
| `ambient-btex-analyzer/` | Front display and rear-panel labels |
| `pm10-pm25-beta-attenuation-monitor/` | PM10 display, separate µg/m³ line; visible image with room on mobile |
| `sensor-based-ambient-air-quality-monitor/` | PM2.5 display; visible image |
| `in-situ-tdlas-gas-analyzer/` | Hero labels; NH₃ formula |
| `in-situ-flue-stack-gas-analyzer/` | Hero labels; heat-trace wording; DOAS legend outside curves; probe/purge diagram |
| `extractive-flue-stack-gas-analyzer/` | Hero labels; 028.4 mg/Nm³, heated line and mA. Existing oxygen-reference fix retained |
| `cross-duct-gas-analyzer/` | Hero labels and mA; optical-window purge diagram |
| `iot-data-logger/` | Separate channel, measurement, value and unit; removed stale WebP sources so browsers select the corrected SVG |
| `fixed-gas-detector/` | Hero labels; preserved `Ex d IIC T6` capitalization |

## Asset provenance and maintenance

Fourteen instrument-body SVGs are selectively adapted from `kamal/fixed-image-overlapping-issue` commit `60fd369`. No HTML, CSS or JavaScript from that branch was merged. Their embedded Vepolink logo images remain; outlined device geometry is retained. Faulty text runs were replaced by editable SVG `<text data-corrected-label>` elements, and faint outlined labels received improved contrast. In particular, O₂→O₃, NH₂→NH₃, 0.62→0.041%, mg/Nm²→mg/Nm³, 0.28.4→028.4, MA→mA, Ex D→Ex d and the two heat-trace typos were corrected against the existing illustrations. Ambient rear labels now distinguish SAMPLE / EXHAUST from ETH, RS-485 and USB. Decorative status badges that overlapped the display heading are omitted. Display readings are illustrative examples, not live values.

`multi-parameter-analyzer.svg` embeds the existing `multi-parameter-analyzer.png` and replaces its six screen tiles with editable vector labels. The original illustration is retained as the visual source.

Five new standalone technical diagrams use the existing page explanations and the correction document: `water-turbidity-principle.svg`, `water-probe-cleaning.svg`, `in-situ-flue-doas-principle.svg`, `in-situ-flue-probe-purge.svg`, and `cross-duct-optical-purge.svg`. Labels sit outside rays, curves and box outlines. Static `<img>` markup includes descriptive alternatives and intrinsic dimensions; JavaScript is not required to display the figures.

`assets/products/flowmeters/echoflow.svg` is the editable redrawing of the original brochure illustration. The existing 800×768 WebP is regenerated from this master with `rsvg-convert` and `cwebp -q 95`, so the category, child page and image metadata retain valid URLs. Details are recorded in `docs/sources/flowmeters/pdf-manifest.json`. The downloadable PDF is unchanged.

## Verification

- All 17 routes checked at 320, 1024 and 1440 CSS pixels: no page-width overflow or off-screen figures; eager hero images load and are visible.
- Additional 390px visual checks of the PM monitor and measurement diagrams; all 21 SVGs rendered and visually inspected at representative display sizes.
- XML validity, local image references and changed-page JSON-LD checked; all local references exist. SVGs have no scripts or external image dependencies.
- Existing 36 Node tests pass, including shared navigation, static content, image fallbacks and source qualifications. `git diff --check` passes.
- Independent source and asset review: no blocking findings. Mechanical scan of new SVGs: no findings. Broad stylesheet/page detector findings relate to the preserved site design (existing fonts, grids, accent borders and section labels); these are outside this image-correction scope.

Deployment is a separate release step.
