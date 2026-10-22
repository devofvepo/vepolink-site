(function attachSharedUi(root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
  root.VepolinkShared = api;
})(typeof globalThis !== "undefined" ? globalThis : window, function createSharedUi() {
  const navGroups = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Solutions",
      items: [
        {
          label: "Water quality monitoring (WQMS)",
          href: "/water-quality-monitoring/",
        },
        {
          label: "Stack emission monitoring (CEMS / OCEMS)",
          href: "/stack-emission-monitoring/",
        },
        {
          label: "Ambient air monitoring (CAAQMS)",
          href: "/ambient-air-monitoring/",
        },
        {
          label: "Indoor air quality monitoring (IAQ)",
          href: "/indoor-air-monitoring/",
        },
      ],
    },
    {
      label: "Products",
      megaGroups: [
        {
          label: "Water monitoring",
          items: [
            {
              label: "Multi-Parameter Online Water Analyzer (Extractive)",
              href: "/products/multi-paramater-online-water-analyzer/",
            },
            {
              label: "Multi-Parameter Online Water Analyzer (In-situ)",
              href: "/products/multi-parameter-online-water-analyzer-in-situ/",
            },
            {
              label: "Water Quality Monitoring Probes",
              href: "/products/water-monitoring-probes/",
            },
            {
              label: "Electromagnetic & Ultrasonic Flowmeters",
              href: "/products/flowmeters/",
            },
            {
              label: "Radar Water Level Sensors",
              href: "/products/radar-level-sensors/pulseradar/",
            },
          ],
        },
        {
          label: "Ambient air",
          items: [
            {
              label: "Ambient SO2 Gas Analyzer (UV Fluorescence)",
              href: "/products/ambient-so2-gas-analyzer/",
            },
            {
              label: "Ambient NOx Gas Analyzer (Chemiluminescence)",
              href: "/products/ambient-nox-gas-analyzer/",
            },
            {
              label: "Ambient CO Gas Analyzer (NDIR GFC)",
              href: "/products/ambient-co-gas-analyzer/",
            },
            {
              label: "Ambient CO2 Gas Analyzer (Dual-Range NDIR GFC)",
              href: "/products/ambient-co2-gas-analyzer/",
            },
            {
              label: "Ambient Ozone Gas Analyzer (UV Absorption)",
              href: "/products/ambient-ozone-gas-analyzer/",
            },
            {
              label: "Ambient BTEX Analyzer (GC-PID)",
              href: "/products/ambient-btex-analyzer/",
            },
            {
              label: "PM10 & PM2.5 Beta Attenuation Monitor",
              href: "/products/pm10-pm25-beta-attenuation-monitor/",
            },
            {
              label: "Sensor-Based Ambient Air Quality Monitor",
              href: "/products/sensor-based-ambient-air-quality-monitor/",
            },
          ],
        },
        {
          label: "Process & emissions",
          items: [
            {
              label: "In-Situ TDLAS Gas Analyzer",
              href: "/products/in-situ-tdlas-gas-analyzer/",
            },
            {
              label: "In-Situ Flue / Stack Gas Analyzer",
              href: "/products/in-situ-flue-stack-gas-analyzer/",
            },
            {
              label: "Extractive Flue / Stack Gas Analyzer",
              href: "/products/extractive-flue-stack-gas-analyzer/",
            },
            {
              label: "Cross Duct Gas Analyzer",
              href: "/products/cross-duct-gas-analyzer/",
            },
            {
              label: "IoT Data Logger",
              href: "/products/iot-data-logger/",
            },
          ],
        },
        {
          label: "Gas safety",
          items: [
            {
              label: "Portable Single Gas Detector",
              href: "/products/portable-single-gas-detector/",
            },
            {
              label: "Portable Multi Gas Detector",
              href: "/products/portable-multi-gas-detector/",
            },
            {
              label: "Fixed Gas Detector",
              href: "/products/fixed-gas-detector/",
            },
          ],
        },
      ],
      items: [
        {
          label: "Multi-Parameter Online Water Analyzer (Extractive)",
          href: "/products/multi-paramater-online-water-analyzer/",
        },
        {
          label: "Multi-Parameter Online Water Analyzer (In-situ)",
          href: "/products/multi-parameter-online-water-analyzer-in-situ/",
        },
        {
          label: "Water Quality Monitoring Probes",
          href: "/products/water-monitoring-probes/",
        },
        {
          label: "Electromagnetic & Ultrasonic Flowmeters",
          href: "/products/flowmeters/",
        },
        {
          label: "Radar Water Level Sensors",
          href: "/products/radar-level-sensors/pulseradar/",
        },
        {
          label: "Ambient SO2 Gas Analyzer (UV Fluorescence)",
          href: "/products/ambient-so2-gas-analyzer/",
        },
        {
          label: "Ambient NOx Gas Analyzer (Chemiluminescence)",
          href: "/products/ambient-nox-gas-analyzer/",
        },
        {
          label: "Ambient CO Gas Analyzer (NDIR GFC)",
          href: "/products/ambient-co-gas-analyzer/",
        },
        {
          label: "Ambient CO2 Gas Analyzer (Dual-Range NDIR GFC)",
          href: "/products/ambient-co2-gas-analyzer/",
        },
        {
          label: "Ambient Ozone Gas Analyzer (UV Absorption)",
          href: "/products/ambient-ozone-gas-analyzer/",
        },
        {
          label: "Ambient BTEX Analyzer (GC-PID)",
          href: "/products/ambient-btex-analyzer/",
        },
        {
          label: "PM10 & PM2.5 Beta Attenuation Monitor",
          href: "/products/pm10-pm25-beta-attenuation-monitor/",
        },
        {
          label: "Sensor-Based Ambient Air Quality Monitor",
          href: "/products/sensor-based-ambient-air-quality-monitor/",
        },
        {
          label: "In-Situ TDLAS Gas Analyzer",
          href: "/products/in-situ-tdlas-gas-analyzer/",
        },
        {
          label: "In-Situ Flue / Stack Gas Analyzer",
          href: "/products/in-situ-flue-stack-gas-analyzer/",
        },
        {
          label: "Portable Single Gas Detector",
          href: "/products/portable-single-gas-detector/",
        },
        {
          label: "Portable Multi Gas Detector",
          href: "/products/portable-multi-gas-detector/",
        },
        {
          label: "Fixed Gas Detector",
          href: "/products/fixed-gas-detector/",
        },
        {
          label: "Cross Duct Gas Analyzer",
          href: "/products/cross-duct-gas-analyzer/",
        },
        {
          label: "IoT Data Logger",
          href: "/products/iot-data-logger/",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          label: "About",
          href: "/about/",
        },
      ],
    },
  ];

  const footerGroups = [
    {
      label: "Platform",
      aria: "Footer platform links",
      links: [
        ["Environmental platform", "/#platform"],
        ["Water quality monitoring", "/water-quality-monitoring/"],
        ["Stack emission monitoring", "/stack-emission-monitoring/"],
        ["Ambient air monitoring", "/ambient-air-monitoring/"],
        ["Indoor air quality monitoring", "/indoor-air-monitoring/"],
      ],
    },
    {
      label: "Company",
      aria: "Footer company links",
      links: [
        ["About", "/about/"],
        ["Careers", "mailto:techsupport@vepolink.com"],
        ["Channel partners", "mailto:sales@vepolink.com"],
        ["Support", "tel:+919810416132"],
        ["Contact", "mailto:techsupport@vepolink.com"],
      ],
    },
  ];

  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const renderDropdown = (group) => {
    if (!group.items) {
      return `<a class="nav-link" href="${group.href}">${escapeHtml(group.label)}</a>`;
    }

    const itemMarkup = group.items
      .map(
        (item) =>
          `<a class="nav-menu-link" href="${item.href}">${escapeHtml(item.label)}</a>`
      )
      .join("");

    const menuMarkup = group.megaGroups
      ? group.megaGroups
        .map(
          (megaGroup) => `
              <section class="nav-mega-group" aria-label="${escapeHtml(megaGroup.label)}">
                <p>${escapeHtml(megaGroup.label)}</p>
                ${megaGroup.items
              .map(
                (item) =>
                  `<a class="nav-menu-link" href="${item.href}">${escapeHtml(item.label)}</a>`
              )
              .join("")}
              </section>
            `
        )
        .join("")
      : itemMarkup;

    return `
      <div class="nav-dropdown${group.megaGroups ? " nav-dropdown--mega" : ""}" data-nav-dropdown>
        <button class="nav-link nav-trigger" type="button" aria-expanded="false">
          ${escapeHtml(group.label)}
          <span aria-hidden="true">▾</span>
        </button>
        <div class="nav-menu${group.megaGroups ? " nav-menu--mega" : ""}" role="menu">
          ${menuMarkup}
        </div>
      </div>
    `;
  };

  const mobileItemMeta = {
    Solutions: [
      {
        title: "Water quality monitoring",
        subtitle: "WQMS",
        href: "/water-quality-monitoring/",
        icon: "M7 13.8c2.9-3.8 4.1-6 5-8.8.9 2.8 2.1 5 5 8.8a5 5 0 1 1-10 0Z",
      },
      {
        title: "Stack emission monitoring",
        subtitle: "CEMS / OCEMS",
        href: "/stack-emission-monitoring/",
        icon: "M7 20V8h5v12M12 20V4h5v16M5 20h14M14 7c2-2 4 0 4-3",
      },
      {
        title: "Ambient air monitoring",
        subtitle: "CAAQMS outdoor",
        href: "/ambient-air-monitoring/",
        icon: "M4 15c2.4 0 3.2-2.4 5.2-2.4 2.2 0 2.7 2.4 5.2 2.4 2.1 0 3.2-1.5 5.6-1.5M6 9.5c1.7 0 2.2-1.8 3.8-1.8 1.8 0 2.2 1.8 4 1.8M5 19h14",
      },
      {
        title: "Indoor air quality monitoring",
        subtitle: "IAQ in-room",
        href: "/indoor-air-monitoring/",
        icon: "M5 20V5h14v15M9 9h6M9 13h6M9 17h2M3 20h18",
      },
    ],
    Products: [
      {
        title: "IoT Data Logger",
        subtitle: "Connected logging · CPCB / SPCB",
        href: "/products/iot-data-logger/",
        icon: "M4 7h16v13H4V7Zm3 3h7v5H7v-5Zm10 0v1m0 3v1M7 18h10M7 7V3m10 4V3",
      },
      {
        title: "Multi-Parameter Analyzer (Extractive)",
        subtitle: "Sample-line optical analyzer",
        href: "/products/multi-paramater-online-water-analyzer/",
        icon: "M5.8 7.5h12.4M5.8 12h12.4M5.8 16.5h12.4M8.2 5.3v4.4M14.8 9.8v4.4M11.2 14.3v4.4",
      },
      {
        title: "Multi-Parameter Analyzer (In-situ)",
        subtitle: "Direct-immersion UV-Vis sensor",
        href: "/products/multi-parameter-online-water-analyzer-in-situ/",
        icon: "M12 3v3M8 6h8M9 6v10a3 3 0 0 0 6 0V6M7 20h10",
      },
      {
        title: "Water Quality Monitoring Probes",
        subtitle: "Browse by measurement and output",
        href: "/products/water-monitoring-probes/",
        icon: "M6 3v4m12-4v4M4 7h4v11a2 2 0 0 1-4 0V7Zm12 0h4v11a2 2 0 0 1-4 0V7ZM4 15h4m8 0h4",
      },
      {
        title: "Electromagnetic & Ultrasonic Flowmeters",
        subtitle: "Inline, clamp-on and open-channel measurement",
        href: "/products/flowmeters/",
        icon: "M3 8h18v8H3V8Zm4 0V5m10 3V5M7 16v3m10-3v3M8 12h8m-3-3 3 3-3 3",
      },
      {
        title: "Radar Water Level Sensors",
        subtitle: "Non-contact river and reservoir level",
        href: "/products/radar-level-sensors/pulseradar/",
        icon: "M5 7h14M8 7v4m8-4v4M4 16c3-2 5-2 8 0s5 2 8 0M12 11v3M7 12l-2 2m12-2 2 2",
      },
      {
        title: "Ambient SO2 Gas Analyzer",
        subtitle: "UV fluorescence gas analysis",
        href: "/products/ambient-so2-gas-analyzer/",
        icon: "M6 8.5h12M8 5h8M8 8.5v6.2a4 4 0 0 0 8 0V8.5M6 18.5h12M9 12h6",
      },
      {
        title: "Ambient NOx Gas Analyzer",
        subtitle: "Chemiluminescence NO, NO₂ & NOx",
        href: "/products/ambient-nox-gas-analyzer/",
        icon: "M4 12h3l2-5 3 10 3-8 2 3h3M5 20h14M7 4h10",
      },
      {
        title: "Ambient CO Gas Analyzer",
        subtitle: "NDIR gas filter correlation",
        href: "/products/ambient-co-gas-analyzer/",
        icon: "M4 12h4c1.2-4 3-6 5-6s3.8 2 5 6h2M4 16h16M7 20h10",
      },
      {
        title: "Ambient CO2 Gas Analyzer",
        subtitle: "Dual-range NDIR gas analysis",
        href: "/products/ambient-co2-gas-analyzer/",
        icon: "M4 8h7v5H4V8Zm9 3h7v5h-7v-5ZM5 18h14M8 5h8",
      },
      {
        title: "Ambient Ozone Gas Analyzer",
        subtitle: "UV absorption at 254 nm",
        href: "/products/ambient-ozone-gas-analyzer/",
        icon: "M4 12h3M17 12h3M12 4v3M12 17v3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z",
      },
      {
        title: "Ambient BTEX Analyzer",
        subtitle: "GC-PID with thermal desorption",
        href: "/products/ambient-btex-analyzer/",
        icon: "M4 18h16M6 15l2-7 2 7 2-10 2 10 2-5 2 5M5 4h14",
      },
      {
        title: "PM10 & PM2.5 Monitor",
        subtitle: "Beta attenuation particulate monitor",
        href: "/products/pm10-pm25-beta-attenuation-monitor/",
        icon: "M5 19h14M7 16V8h10v8M9 8V5h6v3M9 12h6M9 15h6",
      },
      {
        title: "Sensor-Based Air Quality Monitor",
        subtitle: "Multi-gas, PM & weather station",
        href: "/products/sensor-based-ambient-air-quality-monitor/",
        icon: "M4 18h16M6 15V7h12v8M9 7V4h6v3M9 11h6M9 14h6",
      },
      {
        title: "Portable Single Gas Detector",
        subtitle: "Personal one-gas safety monitor",
        href: "/products/portable-single-gas-detector/",
        icon: "M8 3h8v3h2v14H6V6h2V3Zm2 5v5h4V8h-4Zm-1 8h6M9 18h2M13 18h2",
      },
      {
        title: "Portable Multi Gas Detector",
        subtitle: "Four-gas confined-space monitor",
        href: "/products/portable-multi-gas-detector/",
        icon: "M7 3h10v3h2v15H5V6h2V3Zm2 5h2v2H9V8Zm4 0h2v2h-2V8Zm-4 5h2v2H9v-2Zm4 0h2v2h-2v-2Zm-4 5h6",
      },
      {
        title: "Fixed Gas Detector",
        subtitle: "Flameproof 24/7 gas transmitter",
        href: "/products/fixed-gas-detector/",
        icon: "M5 5h14v12H5V5Zm3 3h8v4H8V8Zm1 9v3h6v-3M8 14h2M12 14h2M16 14h1",
      },
      {
        title: "In-Situ TDLAS Gas Analyzer",
        subtitle: "Laser absorption gas analysis",
        href: "/products/in-situ-tdlas-gas-analyzer/",
        icon: "M4 12h4M16 12h4M8 8h8v8H8zM10 10h4v4h-4zM3 6h18M3 18h18",
      },
      {
        title: "Cross Duct Gas Analyzer",
        subtitle: "In-situ TDLAS process analyzer",
        href: "/products/cross-duct-gas-analyzer/",
        icon: "M3 7h5v10H3V7Zm13 0h5v10h-5V7ZM8 12h8M5 10h1M18 10h1M5 14h1M18 14h1",
      },
      {
        title: "Extractive Flue / Stack Gas Analyzer",
        subtitle: "Heated extractive CEMS",
        href: "/products/extractive-flue-stack-gas-analyzer/",
        icon: "M5 20V6h14v14M8 6V3h8v3M8 10h8M8 14h8M8 17h4M3 20h18",
      },
      {
        title: "In-Situ Flue / Stack Gas Analyzer",
        subtitle: "Heat-traced multi-gas stack analyzer",
        href: "/products/in-situ-flue-stack-gas-analyzer/",
        icon: "M5 20V6h14v14M8 6V3h8v3M3 20h18M9 11h6M12 11v5M12 16h7",
      },
    ],
    Company: [
      {
        title: "About Vepolink",
        subtitle: "Company",
        href: "/about/",
        icon: "M6.5 17.5v-6.3L12 6.5l5.5 4.7v6.3H14v-4h-4v4z",
      },
    ],
  };

  const renderMobileItem = (item) => `<a class="mobile-nav-subitem" href="${item.href}">
            ${item.icon ? `<span class="mobile-nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="${item.icon}"></path>
              </svg>
            </span>` : ""}
            <span>
              <strong>${escapeHtml(item.title)}</strong>
              ${item.subtitle ? `<small>${escapeHtml(item.subtitle)}</small>` : ""}
            </span>
          </a>`;

  const renderMobileDisclosure = (label) => {
    const group = navGroups.find((entry) => entry.label === label);
    const metadata = new Map((mobileItemMeta[label] || []).map((item) => [item.href, item]));
    const id = `mobile-nav-${label.toLowerCase()}`;
    // Desktop owns page membership and ordering; mobile metadata only supplies presentation.
    const renderItems = (items) => items.map((item) => renderMobileItem({
      title: item.label,
      ...metadata.get(item.href),
      href: item.href,
    })).join("");
    const content = group.megaGroups
      ? group.megaGroups.map((category) => {
        const headingId = `${id}-${category.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
        return `<section class="mobile-nav-category" aria-labelledby="${headingId}">
            <h3 id="${headingId}">${escapeHtml(category.label)}</h3>
            ${renderItems(category.items)}
          </section>`;
      }).join("")
      : renderItems(group.items);

    return `
      <section class="mobile-nav-group" data-mobile-nav-group>
        <button class="mobile-nav-row" type="button" aria-expanded="false" aria-controls="${id}" data-mobile-nav-disclosure>
          <span>${escapeHtml(label)}</span>
          <span aria-hidden="true">▾</span>
        </button>
        <div class="mobile-nav-submenu" id="${id}" data-mobile-nav-items>
          ${content}
        </div>
      </section>
    `;
  };

  const renderHeader = () => `
    <header class="site-header" data-header>
      <div class="shell nav-shell">
        <a class="brand" href="/" aria-label="Vepolink home">
          <img src="/assets/vepolink-logo-horizontal-trimmed.png" width="206" height="40" alt="Vepolink">
        </a>
        <nav class="primary-nav" aria-label="Primary navigation">
          ${navGroups.map(renderDropdown).join("")}
        </nav>
        <div class="nav-actions">
          <a href="https://enviro.vepolink.com" class="login_link" target="_blank" rel="noopener noreferrer"><span>Sign in</span><img src="/assets/login.png" /></a>
          <button type="button" class="button button-dark btn-book-walkthrouh">Book a walkthrough</button>
        </div>
        <button class="mobile-nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-nav-panel" data-mobile-nav-toggle>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav class="mobile-nav-panel" id="mobile-nav-panel" aria-label="Mobile navigation" data-mobile-nav-panel>
        <a class="mobile-nav-row" href="/">Home</a>
        ${renderMobileDisclosure("Solutions")}
        ${renderMobileDisclosure("Products")}
        ${renderMobileDisclosure("Company")}
        <div class="mobile-nav-actions">
          <a href="https://enviro.vepolink.com" target="_blank" rel="noopener noreferrer">Sign in</a>
          <button type="button" class="button button-dark btn-book-walkthrouh">Book a walkthrough</button>
        </div>
      </nav>
    </header>
  `;

  const renderFooter = () => `
    <footer class="site-footer">
      <div class="shell footer-grid">
        <div class="footer-brand">
          <a class="brand" href="/" aria-label="Vepolink home">
            <img src="/assets/vepolink-logo-horizontal-trimmed.png" width="185" height="36" alt="Vepolink">
          </a>
          <p>Real-time data acquisition, monitoring and analytics for environmental compliance. Designed for industries that take environment seriously.</p>
        </div>
        ${footerGroups
      .map(
        (group) => `
              <nav class="footer-group" aria-label="${escapeHtml(group.aria)}">
                <h2>${escapeHtml(group.label)}</h2>
                ${group.links
            .map(([label, href]) => `<a href="${href}">${escapeHtml(label)}</a>`)
            .join("")}
              </nav>
            `
      )
      .join("")}
      </div>
      <div class="shell footer-bottom">
        <p class="mono">© 2026 Vepolink Technologies LLP · Monitoring purity</p>
        <nav aria-label="Legal links">
          <a href="/privacy/">Privacy</a>
          <a href="/terms/">Terms</a>
          <a href="/security/">Security</a>
          <a href="/sla/">SLA</a>
          <a href="/data-residency/">Data residency</a>
        </nav>
      </div>
    </footer>

    <div class="overlay close-pop"></div>

    <div class="PopupBookWalkthrough model">
    <div class="popupWrapper">
      <div class="close close-pop"><svg width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg></div>
      <div class="form-flex">
        <div class="walkthrough-content">
          <div>
            <span class="walkthrough-badge"><span></span>BOOK A WALKTHROUGH</span>
            <h2> See How Vepolink Can <span>Transform Your Monitoring</span> </h2>
            <p> Schedule a personalized walkthrough with our team and explore intelligent environmental monitoring
              solutions
              designed for your specific requirements. </p>
            <div class="walkthrough-points">
              <div class="walkthrough-point"> <span class="point-icon">✓</span> <span>Personalized product
                  walkthrough</span> </div>
              <div class="walkthrough-point"> <span class="point-icon">✓</span> <span>Live dashboard & monitoring
                  demonstration</span> </div>
              <div class="walkthrough-point"> <span class="point-icon">✓</span> <span>Discuss your application
                  requirements</span> </div>
              <div class="walkthrough-point"> <span class="point-icon">✓</span> <span>Get guidance from our technical
                  team</span> </div>
            </div>
          </div>
        </div>
        <div class="form">
          <div class="form-header">
            <h3>Book Your Walkthrough</h3>
            <p>Fill in your details and our team will contact you.</p>
          </div>
          <form action="" id="form-book-walkthrough" class="inner-form">
            <div class="col-2">
              <div class="form-input">
                <label for="fullName">Full Name <span>*</span></label>
                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" autocomplete="name"
                  required>
              </div>
            </div>
            <div class="col-2">
              <div class="form-input">
                <label for="companyName">Company Name <span>*</span></label>
                <input type="text" id="companyName" name="companyName" placeholder="Enter company name"
                  autocomplete="organization" required>
              </div>
            </div>
            <div class="col-2">
              <div class="form-input">
                <label for="email">Work Email <span>*</span></label>
                <input type="email" id="email" name="email" placeholder="name@company.com" autocomplete="email"
                  required>
              </div>
            </div>
            <div class="col-2">
              <div class="form-input">
                <label for="phone">Phone Number <span>*</span></label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" autocomplete="tel"
                  pattern="\+?[0-9]{10,15}" required>
              </div>
            </div>
            <div class="col-1">
              <div class="form-input">
                <label for="designation">Designation <span>*</span></label>
                <input type="text" id="designation" name="designation" placeholder="e.g. Plant Manager">
              </div>
            </div>
            <div class="col-2">
              <div class="form-input">
                <label for="industry">Industry / Sector <span>*</span></label>
                <select id="industry" class="select" name="industry">
                  <option value="">Select industry</option>
                  <option value="cement">Cement</option>
                  <option value="power">Power</option>
                  <option value="steel">Steel</option>
                  <option value="chemical">Chemical</option>
                  <option value="pharmaceutical">Pharmaceutical</option>
                  <option value="automobile">Automobile</option>
                  <option value="water-wastewater"> Water & Wastewater </option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="col-2">
              <div class="form-input">
                <label for="intrested">Interested Solution <span>*</span></label>
                <select class="select" id="intrested" name="intrested">
                  <option value="">Select a solution</option>
                  <option value="water-quality"> Water Quality Monitoring </option>
                  <option value="cems"> Continuous Emission Monitoring System (CEMS) </option>
                  <option value="caaqms"> CAAQMS </option>
                  <option value="gas-detection"> Gas Detection </option>
                  <option value="gas-analyzer"> Gas Analyzer </option>
                  <option value="flow-level"> Flow & Level </option>
                  <option value="noise-vibration"> Noise & Vibration </option>
                  <option value="iot-data-logger"> IoT Data Logger </option>
                  <option value="other"> Other </option>
                </select>
              </div>
            </div>
            <div class="col-2">
              <div class="form-input">
                <label for="preferredDate">Preferred Date</label>
                <input type="date" id="preferredDate" name="preferredDate">
              </div>
            </div>
            <div class="col-2">
              <div class="form-input">
                <label for="preferredTime">Preferred Time</label>
                <select id="preferredTime" name="preferredTime">
                  <option value="">Select time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>
            </div>
            <div class="col-1">
              <div class="form-input">
                <label for="message">Message / Requirements</label>
                <textarea id="message" name="message" rows="4"
                  placeholder="Tell us about your monitoring requirements..."></textarea>
              </div>
            </div>

            <div class="col-1">
              <label class="checkbox-label"> <input type="checkbox" id="consent" name="consent" required> <span> I agree
                  to be contacted by Vepolink regarding this walkthrough request. </span> </label>
            </div>
            <div class="form-submit full-width"> <button type="submit" id="submitBtn" class="walkthrough-btn button-dark"> <span>Book a
                  Walkthrough</span> <span class="btn-arrow">→</span> </button> </div>
          </form>
          <div id="formMessage" class="form-message" role="alert" aria-live="polite"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="image-popup model">
  <div class="pop-wrapp">
  <div class="close close-pop1"><svg width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg></div>
        <div class="model-body">
        <img class="img-pop-model" src="/assets/products/single-gas-detector.png" />
        </body>
  </div>
  </div>
  </div>
  <div class="brochure-modal model" id="brochureModal" aria-hidden="true">
  <div class="close close-pop" id="closeBrochureModal">
    <svg width="800px" height="800px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
    <div class="brochure-modal-wrapper" role="dialog" aria-modal="true" aria-labelledby="brochureModalTitle">
      <div class="brochure-modal-content">
        <div class="brochure-modal-heading">
          <span class="brochure-modal-badge"><span></span>PRODUCT BROCHURE</span>
          <h2 id="brochureModalTitle">Get Your Brochure</h2>
          <p>Please share your details to download the product brochure.</p>
        </div>
        <div class="form-brochure">
          <form id="brochureForm">
              <input type="hidden" name="product" id="brochureProduct">
              <input type="hidden" name="brochureUrl" id="brochureUrl">

              <div class="brochure-form-grid">
                  <div class="brochure-field">
                      <label for="brochureName">Full Name *</label>
                      <input
                          id="brochureName"
                          name="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          autocomplete="name"
                          maxlength="100"
                          required
                      >
                  </div>

                  <div class="brochure-field">
                      <label for="brochureCompany">Company Name *</label>
                      <input
                          id="brochureCompany"
                          name="companyName"
                          type="text"
                          placeholder="Enter company name"
                          autocomplete="organization"
                          maxlength="150"
                          required
                      >
                  </div>

                  <div class="brochure-field">
                      <label for="brochureEmail">Work Email *</label>
                      <input
                          id="brochureEmail"
                          name="email"
                          type="email"
                          placeholder="name@company.com"
                          autocomplete="email"
                          maxlength="254"
                          required
                      >
                  </div>

                  <div class="brochure-field">
                      <label for="brochurePhone">Phone Number *</label>
                      <input
                          id="brochurePhone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          autocomplete="tel"
                          maxlength="20"
                          required
                      >
                  </div>

                  <div class="brochure-consent brochure-full-width">
                      <label>
                          <input
                              type="checkbox"
                              name="consent"
                              value="true"
                              required
                          >
                          <span>
                              I agree to be contacted by Vepolink regarding
                              this product.
                          </span>
                      </label>
                  </div>

                  <div class="brochure-full-width">
                      <button
                          type="submit"
                          class="brochure-submit"
                          id="brochureSubmit"
                      >
                          <span>Submit & Download Brochure</span>
                          <span aria-hidden="true">→</span>
                      </button>
                  </div>
              </div>

              <p
                  id="brochureFormMessage"
                  class="brochure-form-message"
                  role="status"
                  aria-live="polite"
              ></p>
          </form>
        </div>
      </div>
    </div>
  `;

  return {
    navGroups,
    renderHeader,
    renderFooter,
  };
});
