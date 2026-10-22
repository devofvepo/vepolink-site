# Water probe source and publication decisions

## Current authority

On 23 September 2026 the user authorized all 18 sensors listed on [Advance Analytik’s sensor index](https://www.advanceanalytik.com/products/sensors.html), and explicitly superseded their draft Vepolink PDF. The earlier category decisions are archived in `docs/sources/water-probes/superseded-draft-category-decisions.md`; they are not current specifications.

Every linked sensor page was read, including the technical tables hidden behind its Specifications control. Every linked source datasheet was retrieved and inspected. Web tables, image assignments and extracted datasheet text are retained in `docs/sources/water-probes/advance-analytik.json`. The child pages rewrite the material for Vepolink. They do not invent Vepolink model numbers, manufacturing claims, prices, certification or controller compatibility.

The user subsequently confirmed that supplier branding must not appear anywhere on the public site. Vepolink supplies instruments based on availability and client requirements and combines them with its own cloud environment platform. Supplier names, product-family identifiers and original datasheet links remain internal provenance only. Public pages offer a probe-specific Vepolink datasheet enquiry. Source records and image-provenance sidecars are excluded from deployment; do not upload the repository wholesale.

## Routes and source mapping

The 18 sensors form 15 measurement cards. Existing category fragment IDs remain stable. pH, conductivity and turbidity each contain two separately linked options.

The category cards were simplified at the user's request on 23 September 2026. Each now shows a short measurement summary and prominent links to the individual probes; each link carries its own output and range from `content/water-probe-details.json`. Removed shared technical disclosures, care text and duplicate enquiry actions from the cards because those details belong on the approved child pages. Category search/output filtering applies to individual probe options, including variant-specific queries such as “pH analog”. Both measurement and option counts update. Existing measurement/variant anchors reveal any filtered-out target. The old detailed category fields remain internal reference data and are not rendered.

| Sensor | Child route | Source |
| --- | --- | --- |
| Digital pH Probe | `/products/water-monitoring-probes/ph-digital/` | [vizsens-ph-digital](https://www.advanceanalytik.com/products/sensors/vizsens-ph-digital.html) |
| Analog pH Probe | `/products/water-monitoring-probes/ph-analog/` | [vizsens-ph-analog](https://www.advanceanalytik.com/products/sensors/vizsens-ph-analog.html) |
| Analog ORP Probe | `/products/water-monitoring-probes/orp-analog/` | [vizsens-orp-analog](https://www.advanceanalytik.com/products/sensors/vizsens-orp-analog.html) |
| Digital Conductivity Probe | `/products/water-monitoring-probes/ec-digital/` | [vizsens-ec-digital](https://www.advanceanalytik.com/products/sensors/vizsens-ec-digital.html) |
| Analog Conductivity Probe | `/products/water-monitoring-probes/ec-analog/` | [vizsens-ec-analog](https://www.advanceanalytik.com/products/sensors/vizsens-ec-analog.html) |
| Analog TDS Probe | `/products/water-monitoring-probes/tds-analog/` | [vizsens-tds-analog](https://www.advanceanalytik.com/products/sensors/vizsens-tds-analog.html) |
| Optical Dissolved Oxygen Probe | `/products/water-monitoring-probes/odo/` | [vizsens-odo](https://www.advanceanalytik.com/products/sensors/vizsens-odo.html) |
| Residual Chlorine Probe | `/products/water-monitoring-probes/rcl/` | [vizsens-rcl](https://www.advanceanalytik.com/products/sensors/vizsens-rcl.html) |
| Turbidity Probe | `/products/water-monitoring-probes/turbidity/` | [vizsens-turb](https://www.advanceanalytik.com/products/sensors/vizsens-turb.html) |
| Low-range Turbidity Sensor | `/products/water-monitoring-probes/turbidity-low/` | [vizsens-turb-lo](https://www.advanceanalytik.com/products/sensors/vizsens-turb-lo.html) |
| UV COD Probe | `/products/water-monitoring-probes/uv-cod/` | [vizsens-uvcod](https://www.advanceanalytik.com/products/sensors/vizsens-uvcod.html) |
| Suspended Solids Probe | `/products/water-monitoring-probes/ss/` | [vizsens-ss](https://www.advanceanalytik.com/products/sensors/vizsens-ss.html) |
| Chlorophyll-a Probe | `/products/water-monitoring-probes/cphl/` | [vizsens-cphl](https://www.advanceanalytik.com/products/sensors/vizsens-cphl.html) |
| Blue-green Algae Probe | `/products/water-monitoring-probes/bga/` | [vizsens-bga](https://www.advanceanalytik.com/products/sensors/vizsens-bga.html) |
| Oil in Water Probe | `/products/water-monitoring-probes/oiw/` | [vizsens-oiw](https://www.advanceanalytik.com/products/sensors/vizsens-oiw.html) |
| Ammonia Nitrogen Probe | `/products/water-monitoring-probes/nh4n/` | [vizsens-nh4n](https://www.advanceanalytik.com/products/sensors/vizsens-nh4n.html) |
| Nitrate Nitrogen Probe | `/products/water-monitoring-probes/no3n/` | [vizsens-no3n](https://www.advanceanalytik.com/products/sensors/vizsens-no3n.html) |
| Dissolved Ozone Probe | `/products/water-monitoring-probes/ozone/` | [vizsens-o3](https://www.advanceanalytik.com/products/sensors/vizsens-o3.html) |

## Current source conflicts and decisions

The draft Vepolink PDF is not used to dispute these values. The following issues are within Advance Analytik’s own published pages and current linked datasheets:

| Sensor / field | Evidence | Published treatment |
| --- | --- | --- |
| ORP | Web feature bullets describe conductivity; ORP technical table and datasheet specify −2000 to +2000 mV | Use the ORP-specific table and datasheet; discard copied conductivity bullets |
| Analog pH response | Web table says ≤10 seconds after stirring; datasheet mistakenly gives a pressure unit | Retain the dimensionally valid web value with its condition |
| Digital pH operating temperature | Web applicable temperature 0–60 °C; datasheet −5 to +60 °C; temperature channel range is −15 to 110 °C | Separate temperature channel from operating limit; confirm operating limits |
| Digital EC construction | Intro says PPS; web table and datasheet say 316L stainless steel + POM | Use corroborated table material; retain separate electrode and temperature-channel ranges |
| Analog EC range | Web 10–1000 mS/cm; datasheet 10–5000 µS/cm at K=1 | Withhold range; confirm cell constant and configuration |
| RCL | Marketing says no flow needed, while web table and datasheet require 30–60 L/h; cable web 10 m/ext.100 m versus datasheet 5 m | Publish required flow; confirm cable. Use datasheet’s 12 VDC / Modbus / PG13.5 details; omit unsupported annual-only calibration and suspicious 1.4 kg weight |
| UV COD | Web uses path-specific COD/BOD/TOC ranges; datasheet lists a different range family, pressure and material | Confirm range/path/material/pressure/interface. Preserve COD-equivalent interpretation and calibration requirement. No verified external output is specified |
| SS / turbidity power | Web tables combine 85–500 VAC and 9–36 VDC, likely system/controller fields; SS lists three analog outputs | Do not present mains voltage or three current loops as probe connections; digital operation is explicitly supported elsewhere |
| Low-range turbidity | Web lower bound 0.01 NTU versus datasheet 0.001 NTU; resolution and low-end accuracy differ | Publish up to 100 NTU, confirm lower bound/resolution/accuracy. Retain indoor IP65 flow-cell installation; never describe as an immersion probe |
| Chlorophyll | Web installation note names BGA; datasheet correctly names chlorophyll | Use chlorophyll-specific guidance; reference-dye accuracy stays qualified. Digital Modbus is supported; three analog outputs are not assumed to be native probe outputs |
| BGA protection | Web table IP65/NEMA4X versus datasheet IP68/NEMA6P | Confirm protection before immersion. Retain cells/mL units and the Rhodamine B reference qualification |
| Oil in water | Web 0–50 ppm/0.1 ppm detection versus datasheet 0–100 mg/L/0.01 mg/L; both give unitless 0.999 resolution | Withhold range/detection/resolution and do not silently convert reporting units. Do not promise immunity to suspended solids |
| NH4-N | Web range 0.1–3000 mg/L, accuracy ±5% or ±0.2 mg/L versus datasheet configurable 0.01–20,000 ppm and ±2% | Confirm range/accuracy/resolution and sensing configuration; preserve supported compensation, digital interface, cable and installation information |
| Nitrate | Web resolution 0.1 ppm versus datasheet 0.01 ppm | Confirm resolution. Preserve the six-hour post-calibration laboratory accuracy condition |
| Ozone | Source describes internal digital processing but does not specify external output or supply | Keep output unconfirmed. Precision <1% applies only to 0–2 ppm, not the complete 0–20 ppm range |

No SDI-12 support is carried over from the superseded draft. Analog pH, ORP, EC and TDS are electrode connections; a 4–20 mA transmitter is not presumed. UV COD and ozone remain visible under Any with a clear exclusion explanation when filtering for a known output.

## Images

Five source-mapped workbook photos remain: ODO, SS, OIW, NH4-N and NO3-N. The user’s PDF correction does not invalidate their original workbook mappings. Four unique images from the newly authorized web source were added: residual chlorine with flow cell (`img010.png`), UV COD (`img011.png`), low-range turbidity (`img015.png`) and ozone (`vizsens-o3.png`). Original transparent images were composited on white and proportionally fitted to a 600 × 450 canvas; no sensor features were invented or changed.

The user confirmed that supplier-assigned photographs can legitimately be shared by similar products. Repetition alone is not treated as a copy-paste error. This supersedes the initial decision to withhold duplicated photos and the subsequent representative-image caveats. Supplier branding remains excluded.

The published source-page assignments are `img003.png` for analog pH/ORP/EC/TDS (`analog-electrode.webp`), `imgpH.png` for digital pH/EC (`digital-electrode.webp`), `img014.png` for turbidity (`turbidity.webp`), and `img016.png` for chlorophyll/BGA (`algae.webp`). The original workbook photo remains for SS. All 15 measurement cards and 18 child pages have photographs, without illustrative/representative labels; parameter labels remain only as loading-error fallbacks. These records use `source-page-assignment`, preserving the supplier's actual mapping rather than claiming a unique photo per product. Image sidecars record source URL/pages, retrieval date, SHA-256, correspondence checks and proportional transformation. Sidecars remain internal and excluded from deployment.

## Maintenance

- Category records: `content/water-probes.json`.
- Full child records: `content/water-probe-details.json` (specifications, source URLs, editorial caveats, images and related entries).
- Render children and sitemap: `node scripts/render-water-probe-pages.js`.
- Render category: `node scripts/render-water-probes.js`.
- Synchronize shared UI: `node scripts/render-shared.js`.
- Verify: `node --test scripts/water-probes.test.js scripts/water-probe-pages.test.js`.

Do not change an established route or fragment ID when replacing a specification or photo. Resolve source conflicts with the current model documentation; keep the source record and public copy synchronized. This task covers implementation and preview only.
