"""Extract the three supplied brochure illustrations with their alpha masks.

This is a provenance record and local preparation helper, not a build dependency.
The original PDFs are supplied separately and copied without modifying their pages.
"""
from pathlib import Path
from hashlib import sha256
from io import BytesIO
import json
import subprocess

from PIL import Image
from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path.home() / "Desktop"
DATA = json.loads((ROOT / "content/radar-level-sensors.json").read_text())
IMAGES = ROOT / "assets/products/radar-level-sensors"
BROCHURES = ROOT / "assets/brochures/radar-level-sensors"
MANIFEST = ROOT / "docs/sources/radar-level-sensors/pdf-manifest.json"
IMAGES.mkdir(parents=True, exist_ok=True)
BROCHURES.mkdir(parents=True, exist_ok=True)
MANIFEST.parent.mkdir(parents=True, exist_ok=True)

records = []
for sensor in DATA["sensors"]:
    source = SOURCE / sensor["source"]
    assert source.exists(), source
    brochure = ROOT / sensor["brochure"].lstrip("/")
    # The supplied PDFs all have the generic document title "Online Water Analyzer".
    # Keep their pages intact while giving each downloadable brochure its own title.
    writer = PdfWriter()
    writer.clone_document_from_reader(PdfReader(source))
    writer.add_metadata({"/Title": f"Vepolink {sensor['name']} Level Sensor", "/Author": "Vepolink Technologies LLP"})
    with brochure.open("wb") as output_pdf:
        writer.write(output_pdf)
    with subprocess.Popen(
        ["pdfimages", "-f", "1", "-l", "1", "-png", str(source), "/tmp/vepolink-radar-extract"],
        stdout=subprocess.PIPE, stderr=subprocess.PIPE
    ) as proc:
        _, err = proc.communicate()
        if proc.returncode:
            raise RuntimeError(err.decode())
    color = Image.open("/tmp/vepolink-radar-extract-006.png").convert("RGB")
    mask = Image.open("/tmp/vepolink-radar-extract-007.png").convert("L")
    assert color.size == mask.size
    color.putalpha(mask)
    output = IMAGES / sensor["image"]
    color.save(output, "WEBP", quality=88, method=6)
    record = {
        "id": sensor["id"],
        "sourceFile": sensor["source"],
        "sourceSha256": sha256(source.read_bytes()).hexdigest(),
        "brochure": sensor["brochure"],
        "brochureSha256": sha256(brochure.read_bytes()).hexdigest(),
        "image": {"path": f"/assets/products/radar-level-sensors/{sensor['image']}", "width": color.width, "height": color.height, "sha256": sha256(output.read_bytes()).hexdigest(), "sourcePage": 1, "embeddedImage": 6, "alphaMask": 7},
        "alt": sensor["imageAlt"],
        "treatment": "Brochure illustration, not a product photograph; supplied configuration may vary."
    }
    (output.with_suffix(".webp.json")).write_text(json.dumps(record, indent=2) + "\n")
    records.append(record)

MANIFEST.write_text(json.dumps(records, indent=2) + "\n")
print(f"Prepared {len(records)} radar sensor illustrations and brochures")
