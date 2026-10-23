(() => {
  let ticking = false;

  const shared = window.VepolinkShared || {};
  const renderHeader = shared.renderHeader || (() => "");
  const renderFooter = shared.renderFooter || (() => "");
  const hasSharedHeaderRenderer = typeof shared.renderHeader === "function";

  const navIconPaths = new Map([
    [
      "/products/radar-level-sensors/pulseradar/",
      "M5 7h14M8 7v4m8-4v4M4 16c3-2 5-2 8 0s5 2 8 0M12 11v3M7 12l-2 2m12-2 2 2",
    ],
    [
      "/products/flowmeters/",
      "M3 8h18v8H3V8Zm4 0V5m10 3V5M7 16v3m10-3v3M8 12h8m-3-3 3 3-3 3",
    ],
    [
      "/products/water-monitoring-probes/",
      "M6 3v4m12-4v4M4 7h4v11a2 2 0 0 1-4 0V7Zm12 0h4v11a2 2 0 0 1-4 0V7ZM4 15h4m8 0h4",
    ],
    [
      "/products/iot-data-logger/",
      "M4 7h16v13H4V7Zm3 3h7v5H7v-5Zm10 0v1m0 3v1M7 18h10M7 7V3m10 4V3",
    ],
    [
      "/water-quality-monitoring/",
      "M7 13.8c2.9-3.8 4.1-6 5-8.8.9 2.8 2.1 5 5 8.8a5 5 0 1 1-10 0Z",
    ],
    [
      "/stack-emission-monitoring/",
      "M7 20V8h5v12M12 20V4h5v16M5 20h14M14 7c2-2 4 0 4-3",
    ],
    [
      "/ambient-air-monitoring/",
      "M4 15c2.4 0 3.2-2.4 5.2-2.4 2.2 0 2.7 2.4 5.2 2.4 2.1 0 3.2-1.5 5.6-1.5M6 9.5c1.7 0 2.2-1.8 3.8-1.8 1.8 0 2.2 1.8 4 1.8M5 19h14",
    ],
    [
      "/indoor-air-monitoring/",
      "M5 20V5h14v15M9 9h6M9 13h6M9 17h2M3 20h18",
    ],
    [
      "/products/multi-paramater-online-water-analyzer/",
      "M5.8 7.5h12.4M5.8 12h12.4M5.8 16.5h12.4M8.2 5.3v4.4M14.8 9.8v4.4M11.2 14.3v4.4",
    ],
    [
      "/products/multi-parameter-online-water-analyzer-in-situ/",
      "M12 3v3M8 6h8M9 6v10a3 3 0 0 0 6 0V6M7 20h10",
    ],
    [
      "/products/ambient-so2-gas-analyzer/",
      "M6 8.5h12M8 5h8M8 8.5v6.2a4 4 0 0 0 8 0V8.5M6 18.5h12M9 12h6",
    ],
    [
      "/products/ambient-nox-gas-analyzer/",
      "M4 12h3l2-5 3 10 3-8 2 3h3M5 20h14M7 4h10",
    ],
    [
      "/products/ambient-co-gas-analyzer/",
      "M4 12h4c1.2-4 3-6 5-6s3.8 2 5 6h2M4 16h16M7 20h10",
    ],
    [
      "/products/ambient-co2-gas-analyzer/",
      "M4 8h7v5H4V8Zm9 3h7v5h-7v-5ZM5 18h14M8 5h8",
    ],
    [
      "/products/ambient-ozone-gas-analyzer/",
      "M4 12h3M17 12h3M12 4v3M12 17v3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z",
    ],
    [
      "/products/ambient-btex-analyzer/",
      "M4 18h16M6 15l2-7 2 7 2-10 2 10 2-5 2 5M5 4h14",
    ],
    [
      "/products/pm10-pm25-beta-attenuation-monitor/",
      "M5 19h14M7 16V8h10v8M9 8V5h6v3M9 12h6M9 15h6",
    ],
    [
      "/products/sensor-based-ambient-air-quality-monitor/",
      "M4 18h16M6 15V7h12v8M9 7V4h6v3M9 11h6M9 14h6",
    ],
    [
      "/products/portable-single-gas-detector/",
      "M8 3h8v3h2v14H6V6h2V3Zm2 5v5h4V8h-4Zm-1 8h6M9 18h2M13 18h2",
    ],
    [
      "/products/portable-multi-gas-detector/",
      "M7 3h10v3h2v15H5V6h2V3Zm2 5h2v2H9V8Zm4 0h2v2h-2V8Zm-4 5h2v2H9v-2Zm4 0h2v2h-2v-2Zm-4 5h6",
    ],
    [
      "/products/fixed-gas-detector/",
      "M5 5h14v12H5V5Zm3 3h8v4H8V8Zm1 9v3h6v-3M8 14h2M12 14h2M16 14h1",
    ],
    [
      "/products/cross-duct-gas-analyzer/",
      "M3 7h5v10H3V7Zm13 0h5v10h-5V7ZM8 12h8M5 10h1M18 10h1M5 14h1M18 14h1",
    ],
    [
      "/products/extractive-flue-stack-gas-analyzer/",
      "M5 20V6h14v14M8 6V3h8v3M8 10h8M8 14h8M8 17h4M3 20h18",
    ],
    [
      "/products/in-situ-tdlas-gas-analyzer/",
      "M4 12h4M16 12h4M8 8h8v8H8zM10 10h4v4h-4zM3 6h18M3 18h18",
    ],
    [
      "/products/in-situ-flue-stack-gas-analyzer/",
      "M5 20V6h14v14M8 6V3h8v3M3 20h18M9 11h6M12 11v5M12 16h7",
    ],
    [
      "/about/",
      "M6.5 17.5v-6.3L12 6.5l5.5 4.7v6.3H14v-4h-4v4z",
    ],
  ]);

  const createNavIcon = (className, path) => {
    const icon = document.createElement("span");
    icon.className = className;
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = `<svg viewBox="0 0 24 24" focusable="false"><path d="${path}"></path></svg>`;
    return icon;
  };

  const decorateNavigation = (scope = document) => {
    scope.querySelectorAll(".mobile-nav-subitem, .nav-menu-link").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const path = navIconPaths.get(new URL(href, window.location.href).pathname);
      if (!path) return;

      if (link.classList.contains("mobile-nav-subitem")) {
        if (!link.querySelector(":scope > .mobile-nav-icon")) {
          link.prepend(createNavIcon("mobile-nav-icon", path));
        }
        return;
      }

      link.classList.add("nav-menu-link--icon");
      if (!link.querySelector(":scope > .nav-menu-icon")) {
        link.prepend(createNavIcon("nav-menu-icon", path));
      }
    });
  };

  const syncHeader = () => {
    document.querySelectorAll("[data-header]").forEach((header) => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    });
    ticking = false;
  };

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      if (hasSharedHeaderRenderer) {
        this.innerHTML = renderHeader();
      } else if (!this.innerHTML.trim()) {
        this.innerHTML = renderHeader();
      }
      syncHeader();
      decorateNavigation(this);
      enhanceNavigation(this);
    }
  }

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      if (typeof shared.renderFooter === "function") {
        this.innerHTML = renderFooter();
      } else if (!this.innerHTML.trim()) {
        this.innerHTML = renderFooter();
      }
    }
  }

  if (!customElements.get("site-header")) {
    customElements.define("site-header", SiteHeader);
  }

  if (!customElements.get("site-footer")) {
    customElements.define("site-footer", SiteFooter);
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(syncHeader);
      }
    },
    { passive: true }
  );
  syncHeader();

  const closeDropdowns = (except) => {
    document.querySelectorAll("[data-nav-dropdown].is-open").forEach((dropdown) => {
      if (dropdown === except) return;
      dropdown.classList.remove("is-open");
      dropdown.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
    });
  };

  const closeMobileNav = (header) => {
    if (!header) return;
    header.classList.remove("mobile-nav-open");
    header.querySelectorAll("[data-mobile-nav-group].is-open").forEach((group) => {
      group.classList.remove("is-open");
      group
        .querySelector("[data-mobile-nav-disclosure]")
        ?.setAttribute("aria-expanded", "false");
    });
    document.documentElement.classList.remove("mobile-nav-active");
    const toggle = header.querySelector("[data-mobile-nav-toggle]");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open navigation");
  };

  function enhanceNavigation(scope = document) {
    scope.querySelectorAll("[data-nav-dropdown]").forEach((dropdown) => {
      const trigger = dropdown.querySelector(".nav-trigger");
      if (!trigger || trigger.dataset.enhanced === "true") return;
      trigger.dataset.enhanced = "true";
      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = dropdown.classList.toggle("is-open");
        trigger.setAttribute("aria-expanded", String(isOpen));
        closeDropdowns(isOpen ? dropdown : null);
      });
    });

    scope.querySelectorAll("[data-mobile-nav-toggle]").forEach((toggle) => {
      if (toggle.dataset.enhanced === "true") return;
      toggle.dataset.enhanced = "true";
      const header = toggle.closest("[data-header]");
      const panel = header?.querySelector("[data-mobile-nav-panel]");
      toggle.addEventListener("click", () => {
        const isOpen = header?.classList.toggle("mobile-nav-open");
        document.documentElement.classList.toggle("mobile-nav-active", Boolean(isOpen));
        toggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
        toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        if (isOpen) {
          panel?.querySelector("a")?.focus({ preventScroll: true });
        }
      });
      panel?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          closeMobileNav(header);
        });
      });
    });

    scope.querySelectorAll("[data-mobile-nav-disclosure]").forEach((trigger) => {
      if (trigger.dataset.enhanced === "true") return;
      trigger.dataset.enhanced = "true";
      const group = trigger.closest("[data-mobile-nav-group]");
      trigger.addEventListener("click", () => {
        const nextOpen = !group?.classList.contains("is-open");
        group
          ?.parentElement
          ?.querySelectorAll("[data-mobile-nav-group].is-open")
          .forEach((openGroup) => {
            if (openGroup === group) return;
            openGroup.classList.remove("is-open");
            openGroup
              .querySelector("[data-mobile-nav-disclosure]")
              ?.setAttribute("aria-expanded", "false");
          });
        group?.classList.toggle("is-open", nextOpen);
        trigger.setAttribute("aria-expanded", String(nextOpen));
      });
    });
  }

  document.addEventListener("click", () => closeDropdowns());
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeDropdowns();
    document.querySelectorAll(".mobile-nav-open").forEach((header) => {
      closeMobileNav(header);
    });
  });
  decorateNavigation();
  enhanceNavigation();

  const metricConfig = [
    ["ph", 7.18, 0.04, 2],
    ["turbidity", 2.8, 0.2, 1],
    ["do", 6.4, 0.08, 2],
    ["temp", 24.6, 0.06, 1],
    ["conductivity", 412, 4, 0],
    ["tds", 248, 3, 0],
    ["stack-sox", 48, 1.6, 0, 42, 56],
    ["stack-nox", 62, 2.2, 0, 54, 78],
    ["stack-pm", 28, 1.1, 0, 23, 32],
    ["stack-co", 42, 2, 0, 34, 50],
    ["stack-o2", 11.4, 0.12, 1, 10.6, 12.2],
    ["stack-flow", 18.2, 0.4, 1, 16.5, 20.2],
    ["air-pm25", 48, 2.6, 0, 38, 62],
    ["air-pm10", 96, 4, 0, 78, 118],
    ["air-so2", 14.2, 0.6, 1, 10, 19],
    ["air-no2", 31, 1.4, 0, 24, 42],
    ["air-o3", 42, 2, 0, 31, 56],
    ["air-co", 0.94, 0.05, 2, 0.7, 1.2],
    ["iaq-co2", 612, 8, 0, 540, 760],
    ["iaq-pm25", 18, 1.2, 0, 11, 27],
    ["iaq-voc", 0.42, 0.03, 2, 0.28, 0.62],
    ["iaq-temp", 23.4, 0.08, 1, 22.6, 24.4],
    ["iaq-rh", 52, 0.8, 0, 46, 58],
    ["iaq-co", 0.6, 0.05, 2, 0.38, 0.86],
    ["home-ph", 7.18, 0.04, 2],
    ["home-nox", 62, 2.4, 0, 54, 70],
    ["home-pm25", 48, 1.8, 0, 42, 55],
    ["home-co2", 612, 14, 0, 580, 650],
  ];

  const nodes = metricConfig
    .map(([name, base, jitter, decimals, min = 0, max = Number.POSITIVE_INFINITY]) => ({
      node: document.querySelector(`[data-metric="${name}"]`),
      value: base,
      jitter,
      decimals,
      min,
      max,
    }))
    .filter((item) => item.node);

  if (nodes.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      for (const item of nodes) {
        item.value = Math.min(
          item.max,
          Math.max(item.min, item.value + (Math.random() - 0.5) * item.jitter)
        );
        item.node.textContent = item.value.toFixed(item.decimals);
      }
    }, 2400);
  }

  const body = document.querySelector("body");
  const ImageModel = document.querySelector(".image-popup")
  const SetImgSrc = document.querySelector("img.img-pop-model")
  function ThumbImage() {
    const thumbButtons = document.querySelectorAll(".sli_img button");
    const mainImage = document.querySelector(".pro-thumb-js");
    if (!mainImage || !thumbButtons.length) return;
    thumbButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const img = button.querySelector("img");
        const src = img?.currentSrc || img?.src;
        if (src) {
          mainImage.src = src;
          thumbButtons.forEach((btn) => {
            btn.classList.remove("currect");
          });
          button.classList.add("currect");
        }
      });
    });



    mainImage.addEventListener('click', function (e) {
      ImageModel.classList.add("active")
      body.classList.add("open");
      const src = e.target.currentSrc
      SetImgSrc.src = src
    })
    const close = document.querySelector(".close-pop1");
    close.addEventListener("click", function (e) {
      e.preventDefault();
      ImageModel.classList.remove("active")
      body.classList.remove("open");
    })
  }
  ThumbImage()
  const BookWalkThrough = document.querySelectorAll(".btn-book-walkthrouh");
  const BookWalkThroughPopup = document.querySelector(".PopupBookWalkthrough");

  BookWalkThrough.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault()
      if (body.classList.contains("open")) {
        body.classList.remove("open");
        BookWalkThroughPopup.classList.remove("active")
      }
      else {
        body.classList.add("open");
        BookWalkThroughPopup.classList.add("active")
      }
    })
  })


  // Close Popup
  const model = document.querySelectorAll(".model");
  const close = document.querySelectorAll(".close-pop");
  close.forEach((v, i) => {
    v.addEventListener("click", function () {
      if (body.classList.contains("open")) {
        body.classList.remove("open");
        model.forEach((m) => {
          m.classList.remove("active")
        })
      }
    })
  })


  // Book A Walkthrough
  const form = document.getElementById("form-book-walkthrough");
  const result = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    result.textContent = "Please wait while we submit your form.";
    const name = form.elements.namedItem("fullName");
    const companyName = form.elements.namedItem("companyName");
    const email = form.elements.namedItem("email");
    const phone = form.elements.namedItem("phone");
    const designation = form.elements.namedItem("designation");
    const industry = form.elements.namedItem("industry");
    const intrested = form.elements.namedItem("intrested");
    const preferredDate = form.elements.namedItem("preferredDate");
    const preferredTime = form.elements.namedItem("preferredTime");
    const message = form.elements.namedItem("message");
    try {
      const FormData = {
        name: name?.value,
        companyName: companyName?.value,
        email: email?.value,
        phone: phone?.value,
        designation: designation?.value,
        industry: industry?.value,
        solutions: intrested?.value,
        scheduleDate: preferredDate?.value,
        sheduleTime: preferredTime?.value,
        description: message?.value,
      };
      const api = "http://localhost:4000/client-request/book-walkthrough";
      const response = await fetch(api,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(FormData)
        }
      );
      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed.");
      }
      result.textContent =
        "Thank you! Your request has been submitted successfully.";
      form.reset();
    } catch (error) {
      result.textContent =
        "Unable to submit your request. Please try again.";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Submit Request";
    }
  });


  function fnDownloadBrochure() {
    const brochureModal = document.getElementById("brochureModal");
    const brochureForm = document.getElementById("brochureForm");
    const brochureMessage = document.getElementById("brochureFormMessage");
    const brochureSubmit = document.getElementById("brochureSubmit");

    let previousFocus = null;

    function openBrochureModal(link) {
      // return
      previousFocus = link;
      body.classList.add("open");
      document.getElementById("brochureProduct").value =
        link.dataset.product || "Product Brochure";

      document.getElementById("brochureUrl").value =
        link.dataset.brochure;

      document.getElementById("brochureModalTitle").textContent =
        "Download " + (link.dataset.product || "Product Brochure");

      brochureMessage.textContent = "";
      brochureMessage.className = "brochure-form-message";

      brochureModal.classList.add("active");
      brochureModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("brochure-modal-open");

      document.getElementById("brochureName").focus();
    }

    function closeBrochureModal() {
      brochureModal.classList.remove("active");
      brochureModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("brochure-modal-open");
      body.classList.remove("open");
      if (previousFocus) {
        previousFocus.focus();
      }
    }

    // Intercept brochure clicks
    document.querySelectorAll("a.brochure-download").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        openBrochureModal(link);
      });
    });

    // Close popup
    document.getElementById("closeBrochureModal")
      .addEventListener("click", closeBrochureModal);
    brochureModal.querySelectorAll("[data-close-modal]").forEach((element) => {
      element.addEventListener("click", closeBrochureModal);
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        brochureModal.classList.contains("is-open")
      ) {
        closeBrochureModal();
      }
    });

    // Submit form and download brochure after API success
    brochureForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!brochureForm.checkValidity()) {
        brochureForm.reportValidity();
        return;
      }

      const formData = new FormData(brochureForm);
      const data = Object.fromEntries(formData.entries());
      // The consent checkbox is required, but include its value explicitly.
      data.consent = brochureForm.elements.consent.checked;

      brochureSubmit.disabled = true;
      brochureSubmit.querySelector("span").textContent = "Submitting...";
      brochureMessage.textContent = "";
      brochureMessage.className = "brochure-form-message";
      const PostData = {
        "name": data.fullName,
        "companyName": data.companyName,
        "email": data.email,
        "phone": data.phone,
        "pdfId": data.brochureUrl,
        "solutions": data.product
      }
      try {
        const api = "http://localhost:4000/download-brochure/download";
        const response = await fetch(api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(PostData)
        });

        const result = await response.json().catch(() => ({

        }));
        console.log(result.data.pdf)

        if (!response.ok || result.success !== true) {
          throw new Error(
            result.message || "Unable to submit your request. Please try again."
          );
        }

        // Download only after the backend accepts the submission.
        const brochureUrl = new URL(
          // result.data.pdf,
          data.brochureUrl,
          window.location.origin
        );

        // Allow only brochure URLs hosted on this website.
        if (
          brochureUrl.origin !== window.location.origin ||
          !brochureUrl.pathname.toLowerCase().endsWith(".pdf")
        ) {
          throw new Error("The brochure link is invalid.");
        }

        const downloadLink = document.createElement("a");
        downloadLink.href = brochureUrl.href;
        downloadLink.download = "";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        downloadLink.remove();

        brochureMessage.textContent = "Thank you! Your request was submitted successfully. Your brochure download has started.";

        brochureMessage.className = "brochure-form-message success";

        brochureForm.reset();

        // Keep the success message visible briefly.
        setTimeout(() => {
          closeBrochureModal();
          brochureMessage.textContent = "";
          brochureMessage.className = "brochure-form-message";
        }, 2200);

      } catch (error) {
        brochureMessage.textContent =
          error.message || "Something went wrong. Please try again.";

        brochureMessage.className =
          "brochure-form-message error";
      } finally {
        brochureSubmit.disabled = false;
        brochureSubmit.querySelector("span").textContent =
          "Submit & Download Brochure";
      }
    });
  }
  fnDownloadBrochure();

  function handleCurrentActiveSection() {
    document.addEventListener('DOMContentLoaded', () => {
      // IntersectionObserver active link update logic
      const sections = document.querySelectorAll('article section[id]');
      const navLinks = document.querySelectorAll('aside nav a');

      if (!sections.length || !navLinks.length) return;

      const linkMap = new Map();
      navLinks.forEach(link => {
        const hash = link.getAttribute('href');
        if (hash && hash.startsWith('#')) {
          const id = hash.substring(1);
          linkMap.set(id, link);
        }
      });

      const observerOptions = {
        root: null,
        rootMargin: '-90px 0px -60% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeSectionId = entry.target.id;
            updateActiveLink(activeSectionId);
          }
        });
      }, observerOptions);

      sections.forEach(section => observer.observe(section));

      function updateActiveLink(id) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = linkMap.get(id);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }

      // Smooth Scrolling Click Handler with offset
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
              e.preventDefault();
              const headerOffset = 95;
              const elementPosition = targetSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });

              history.pushState(null, null, href);
              updateActiveLink(targetId);
            }
          }
        });
      });
    });
  }
  const currentPath = window.location.pathname.replace(/\/+$/, '') + '/';
  const listPages = ["/privacy/", "/terms/", "/security/", "/sla/", "/data-residency/"];

  if (listPages.includes(currentPath)) {
    console.log(currentPath)
    handleCurrentActiveSection();
  }


  const formBookWalk = document.querySelector("#form-book-walkthrough");
  formBookWalk.parsley().on('field:validated', function () {
    var ok = formBookWalk.parsley().isValid();
    console.log(ok);
  }).on('form:submit', function () {
    console.log("submit");
    return false; // Don't submit form for this demo
  });
})();
