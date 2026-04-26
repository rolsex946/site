/* ============================================================
   DR. ASMITA MONDAL — PREMIUM SPA JAVASCRIPT
   ============================================================ */

(function () {
  "use strict";

  // ── CONFIGURATION ──
  const CONFIG = {
    WHATSAPP_NUMBER: "918961355152", // Change to 918961355152 for production
    DOCTOR_NAME: "Dr. Asmita Mondal",
    CLINIC_PHONE: "8961355152",
    LOADING_DURATION: 2200,
    PAGE_TRANSITION_DURATION: 600,
    SCROLL_REVEAL_THRESHOLD: 0.15,
    SCROLL_REVEAL_ROOT_MARGIN: "0px 0px -60px 0px",
    COUNTER_DURATION: 2000,
    TESTIMONIAL_AUTOPLAY: 5000,
  };

  // ── DOM ELEMENTS ──
  const DOM = {
    body: document.body,
    loadingScreen: document.getElementById("loading-screen"),
    pageTransition: document.getElementById("page-transition"),
    mainHeader: document.getElementById("main-header"),
    mainNav: document.getElementById("main-nav"),
    mobileNav: document.getElementById("mobile-nav"),
    mobileMenuToggle: document.getElementById("mobile-menu-toggle"),
    mobileNavClose: document.getElementById("mobile-nav-close"),
    mainContent: document.getElementById("main-content"),
    pages: document.querySelectorAll(".page"),
    navLinks: document.querySelectorAll("[data-nav]"),
    backToTop: document.getElementById("back-to-top"),
    floatingAppointment: document.getElementById("floating-appointment-btn"),
    floatingWhatsapp: document.getElementById("floating-whatsapp-btn"),
    appointmentForm: document.getElementById("appointment-form"),
    formSubmitBtn: document.getElementById("form-submit-btn"),
    toast: document.getElementById("toast"),
    toastClose: document.getElementById("toast-close"),
    testimonialSlider: document.getElementById("home-testimonials-slider"),
    testimonialPrev: document.getElementById("testimonial-prev"),
    testimonialNext: document.getElementById("testimonial-next"),
    testimonialDots: document.getElementById("testimonial-dots"),
    faqList: document.getElementById("faq-list"),
    cursorFollower: document.getElementById("cursor-follower"),
    cursorDot: document.getElementById("cursor-dot"),
  };

  // ── STATE ──
  const state = {
    currentPage: "home",
    isTransitioning: false,
    isMobileMenuOpen: false,
    testimonialIndex: 0,
    testimonialAutoplayTimer: null,
    cursorX: 0,
    cursorY: 0,
    followerX: 0,
    followerY: 0,
  };

  // ============================================================
  // LOADING SCREEN
  // ============================================================
  function initLoadingScreen() {
    if (!DOM.loadingScreen) return;
    setTimeout(() => {
      DOM.loadingScreen.classList.add("hidden");
      document.body.style.overflow = "";
      initScrollReveal();
      initCounters();
    }, CONFIG.LOADING_DURATION);
    document.body.style.overflow = "hidden";
  }

  // ============================================================
  // SPA ROUTER
  // ============================================================
  function getRouteFromHash() {
    const hash = window.location.hash.replace("#", "") || "home";
    return hash;
  }

  function navigateTo(pageId, skipTransition = false) {
    if (state.isTransitioning || pageId === state.currentPage) return;
    if (!document.getElementById("page-" + pageId)) return;

    state.isTransitioning = true;
    const prevPage = state.currentPage;
    state.currentPage = pageId;

    if (skipTransition) {
      showPage(pageId);
      updateActiveNav(pageId);
      state.isTransitioning = false;
      window.scrollTo({ top: 0, behavior: "instant" });
      setTimeout(() => initScrollReveal(), 100);
      return;
    }

    // Page transition animation
    DOM.pageTransition.classList.remove("closing");
    DOM.pageTransition.classList.add("active");
    document.body.classList.add("page-transitioning");

    setTimeout(() => {
      hidePage(prevPage);
      showPage(pageId);
      updateActiveNav(pageId);
      window.scrollTo({ top: 0, behavior: "instant" });

      DOM.pageTransition.classList.remove("active");
      DOM.pageTransition.classList.add("closing");

      setTimeout(() => {
        DOM.pageTransition.classList.remove("closing");
        document.body.classList.remove("page-transitioning");
        state.isTransitioning = false;
        setTimeout(() => initScrollReveal(), 100);
      }, CONFIG.PAGE_TRANSITION_DURATION);
    }, CONFIG.PAGE_TRANSITION_DURATION);
  }

  function showPage(pageId) {
    DOM.pages.forEach((p) => {
      p.classList.remove("page-active");
      p.style.display = "none";
      p.style.opacity = "0";
    });
    const page = document.getElementById("page-" + pageId);
    if (page) {
      page.style.display = "block";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          page.style.opacity = "1";
          page.classList.add("page-active");
        });
      });
    }
  }

  function hidePage(pageId) {
    const page = document.getElementById("page-" + pageId);
    if (page) {
      page.style.opacity = "0";
      setTimeout(() => {
        if (!page.classList.contains("page-active")) {
          page.style.display = "none";
        }
      }, 100);
    }
  }

  function updateActiveNav(pageId) {
    // Desktop nav
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.nav === pageId) {
        link.classList.add("active");
      }
    });
    // Mobile nav
    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.nav === pageId) {
        link.classList.add("active");
      }
    });
    // Close mobile menu if open
    closeMobileMenu();
  }

  function initRouter() {
    const initialRoute = getRouteFromHash();
    showPage(initialRoute);
    updateActiveNav(initialRoute);
    state.currentPage = initialRoute;

    window.addEventListener("hashchange", () => {
      const route = getRouteFromHash();
      navigateTo(route);
    });

    // Intercept all navigation links
    document.addEventListener("click", (e) => {
      const navEl = e.target.closest("[data-nav]");
      if (navEl) {
        e.preventDefault();
        const pageId = navEl.dataset.nav;
        window.location.hash = pageId;
      }
    });
  }

  // ============================================================
  // HEADER SCROLL BEHAVIOR
  // ============================================================
  function initHeaderScroll() {
    let lastScroll = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        DOM.mainHeader.classList.add("scrolled");
      } else {
        DOM.mainHeader.classList.remove("scrolled");
      }
      lastScroll = scrollY;

      // Back to top visibility
      if (scrollY > 500) {
        DOM.backToTop.classList.add("visible");
      } else {
        DOM.backToTop.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // ============================================================
  // MOBILE NAVIGATION
  // ============================================================
  function openMobileMenu() {
    state.isMobileMenuOpen = true;
    DOM.mobileNav.classList.add("open");
    DOM.mobileMenuToggle.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    state.isMobileMenuOpen = false;
    DOM.mobileNav.classList.remove("open");
    DOM.mobileMenuToggle.classList.remove("active");
    document.body.style.overflow = "";
  }

  function initMobileNav() {
    DOM.mobileMenuToggle.addEventListener("click", () => {
      if (state.isMobileMenuOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    DOM.mobileNavClose.addEventListener("click", closeMobileMenu);

    // Mobile submenu toggles
    document
      .querySelectorAll(".mobile-has-submenu > .mobile-nav-link")
      .forEach((link) => {
        link.addEventListener("click", (e) => {
          const parent = link.parentElement;
          const isAlreadyOpen = parent.classList.contains("open");
          // Close all other submenus
          document
            .querySelectorAll(".mobile-has-submenu.open")
            .forEach((item) => {
              item.classList.remove("open");
            });
          if (!isAlreadyOpen) {
            e.preventDefault();
            parent.classList.add("open");
          }
        });
      });

    // Close on clicking outside
    document.addEventListener("click", (e) => {
      if (
        state.isMobileMenuOpen &&
        !DOM.mobileNav.contains(e.target) &&
        !DOM.mobileMenuToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  // ============================================================
  // SCROLL REVEAL
  // ============================================================
  let scrollRevealObserver = null;

  function initScrollReveal() {
    if (scrollRevealObserver) {
      scrollRevealObserver.disconnect();
    }

    const elements = document.querySelectorAll(".scroll-reveal:not(.revealed)");

    scrollRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, index * 80);
            scrollRevealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: CONFIG.SCROLL_REVEAL_THRESHOLD,
        rootMargin: CONFIG.SCROLL_REVEAL_ROOT_MARGIN,
      },
    );

    elements.forEach((el) => scrollRevealObserver.observe(el));
  }

  // ============================================================
  // COUNTER ANIMATION
  // ============================================================
  function initCounters() {
    const counters = document.querySelectorAll("[data-count]");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.count);
    const duration = CONFIG.COUNTER_DURATION;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // ease-out-quart
      const current = Math.round(eased * target);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  // ============================================================
  // TESTIMONIALS SLIDER
  // ============================================================
  function initTestimonialsSlider() {
    if (!DOM.testimonialSlider) return;
    const slides = DOM.testimonialSlider.querySelectorAll(".testimonial-slide");
    if (slides.length === 0) return;

    // Create dots
    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("slider-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goToTestimonial(i));
      DOM.testimonialDots.appendChild(dot);
    });

    function goToTestimonial(index) {
      slides.forEach((s) => s.classList.remove("active"));
      DOM.testimonialDots
        .querySelectorAll(".slider-dot")
        .forEach((d) => d.classList.remove("active"));
      state.testimonialIndex = index;
      slides[index].classList.add("active");
      DOM.testimonialDots.children[index]?.classList.add("active");
    }

    DOM.testimonialPrev.addEventListener("click", () => {
      const newIndex =
        (state.testimonialIndex - 1 + slides.length) % slides.length;
      goToTestimonial(newIndex);
      resetAutoplay();
    });

    DOM.testimonialNext.addEventListener("click", () => {
      const newIndex = (state.testimonialIndex + 1) % slides.length;
      goToTestimonial(newIndex);
      resetAutoplay();
    });

    function startAutoplay() {
      state.testimonialAutoplayTimer = setInterval(() => {
        const newIndex = (state.testimonialIndex + 1) % slides.length;
        goToTestimonial(newIndex);
      }, CONFIG.TESTIMONIAL_AUTOPLAY);
    }

    function resetAutoplay() {
      clearInterval(state.testimonialAutoplayTimer);
      startAutoplay();
    }

    startAutoplay();
  }

  // ============================================================
  // FAQ ACCORDION
  // ============================================================
  function initFAQs() {
    if (!DOM.faqList) return;

    // FAQ category filter
    document.querySelectorAll(".faq-cat-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".faq-cat-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.dataset.faqCat;

        DOM.faqList.querySelectorAll(".faq-item").forEach((item) => {
          if (cat === "all" || item.dataset.cat === cat) {
            item.classList.remove("hidden");
          } else {
            item.classList.add("hidden");
            item.classList.remove("open");
          }
        });
      });
    });

    // FAQ toggle
    DOM.faqList.querySelectorAll(".faq-question").forEach((question) => {
      question.addEventListener("click", () => {
        const item = question.parentElement;
        const isOpen = item.classList.contains("open");

        // Close all
        DOM.faqList.querySelectorAll(".faq-item.open").forEach((openItem) => {
          openItem.classList.remove("open");
        });

        if (!isOpen) {
          item.classList.add("open");
        }
      });
    });
  }

  // ============================================================
  // APPOINTMENT FORM — WHATSAPP INTEGRATION
  // ============================================================
  function initAppointmentForm() {
    if (!DOM.appointmentForm) return;

    // Set min date to today
    const dateInput = document.getElementById("ap-preferred-date");
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.setAttribute("min", today);
    }

    DOM.appointmentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateForm()) {
        sendToWhatsApp();
      }
    });

    // Real-time validation on blur
    DOM.appointmentForm
      .querySelectorAll("input, select, textarea")
      .forEach((field) => {
        field.addEventListener("blur", () => {
          validateField(field);
        });
        field.addEventListener("input", () => {
          if (field.closest(".form-group").classList.contains("has-error")) {
            validateField(field);
          }
        });
      });
  }

  function validateField(field) {
    const group = field.closest(".form-group");
    if (!group) return true;

    let isValid = true;

    if (field.hasAttribute("required") && !field.value.trim()) {
      isValid = false;
    }

    if (field.type === "email" && field.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(field.value.trim());
    }

    if (field.type === "tel" && field.value.trim()) {
      const phoneRegex = /^[0-9]{10}$/;
      isValid = phoneRegex.test(field.value.trim());
    }

    if (field.type === "number" && field.value.trim()) {
      const val = parseInt(field.value);
      if (val < 1 || val > 120) isValid = false;
    }

    if (field.type === "checkbox") {
      isValid = field.checked;
    }

    if (isValid) {
      group.classList.remove("has-error");
      field.classList.remove("error");
    } else if (field.value || field.type === "checkbox") {
      group.classList.add("has-error");
      field.classList.add("error");
    }

    return isValid;
  }

  function validateForm() {
    let isValid = true;
    const requiredFields = DOM.appointmentForm.querySelectorAll("[required]");

    requiredFields.forEach((field) => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      // Scroll to first error
      const firstError = DOM.appointmentForm.querySelector(".has-error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    return isValid;
  }

  function getFormData() {
    const form = DOM.appointmentForm;
    return {
      fullName: form.fullname.value.trim(),
      age: form.age.value.trim(),
      gender: form.gender.value,
      phone: form.phone.value.trim(),
      email: form.email.value.trim() || "Not provided",
      bloodGroup: form.blood_group.value || "Not provided",
      preferredDay: form.preferred_day.value,
      preferredDate: form.preferred_date.value,
      consultationType: form.consultation_type.value,
      primaryConcern: form.primary_concern.value,
      symptoms: form.symptoms.value.trim(),
      existingConditions: form.existing_conditions.value.trim() || "None",
      currentMedications: form.current_medications.value.trim() || "None",
      allergies: form.allergies.value.trim() || "None",
      previousSurgery: form.previous_surgery.value.trim() || "None",
      referredBy: form.referred_by.value.trim() || "Self",
    };
  }

  function formatWhatsAppMessage(data) {
    return `🏥 *APPOINTMENT REQUEST*
━━━━━━━━━━━━━━━━━━━━━

👤 *PERSONAL INFORMATION*
• Name: ${data.fullName}
• Age: ${data.age} years
• Gender: ${data.gender}
• Phone: ${data.phone}
• Email: ${data.email}
• Blood Group: ${data.bloodGroup}

📅 *APPOINTMENT DETAILS*
• Preferred Day: ${data.preferredDay}
• Preferred Date: ${data.preferredDate}
• Consultation Type: ${data.consultationType}
• Primary Concern: ${data.primaryConcern}

📋 *SYMPTOMS / DESCRIPTION*
 ${data.symptoms}

💊 *MEDICAL HISTORY*
• Existing Conditions: ${data.existingConditions}
• Current Medications: ${data.currentMedications}
• Known Allergies: ${data.allergies}
• Previous Surgeries: ${data.previousSurgery}
• Referred By: ${data.referredBy}

━━━━━━━━━━━━━━━━━━━━━
✅ Submitted via website
Sent to: ${CONFIG.DOCTOR_NAME}`;
  }

  function sendToWhatsApp() {
    const data = getFormData();
    const message = formatWhatsAppMessage(data);
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Show loading state on button
    const btnSpan = DOM.formSubmitBtn.querySelector("span");
    const originalText = btnSpan.textContent;
    btnSpan.textContent = "Opening WhatsApp...";
    DOM.formSubmitBtn.disabled = true;
    DOM.formSubmitBtn.style.opacity = "0.7";

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Show toast
    setTimeout(() => {
      showToast(
        "Appointment Request Sent",
        "Your details have been sent via WhatsApp. Please confirm with the clinic.",
      );
      btnSpan.textContent = originalText;
      DOM.formSubmitBtn.disabled = false;
      DOM.formSubmitBtn.style.opacity = "1";
      DOM.appointmentForm.reset();
    }, 1000);
  }

  // ============================================================
  // TOAST NOTIFICATION
  // ============================================================
  function showToast(title, message) {
    if (!DOM.toast) return;
    DOM.toast.querySelector(".toast-title").textContent = title;
    DOM.toast.querySelector(".toast-message").textContent = message;
    DOM.toast.classList.add("visible");

    setTimeout(() => {
      hideToast();
    }, 5000);
  }

  function hideToast() {
    if (DOM.toast) {
      DOM.toast.classList.remove("visible");
    }
  }

  function initToast() {
    if (DOM.toastClose) {
      DOM.toastClose.addEventListener("click", hideToast);
    }
  }

  // ============================================================
  // FLOATING WIDGETS
  // ============================================================
  function initFloatingWidgets() {
    if (DOM.backToTop) {
      DOM.backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (DOM.floatingAppointment) {
      DOM.floatingAppointment.addEventListener("click", () => {
        window.location.hash = "appointment";
      });
    }
  }

  // ============================================================
  // CUSTOM CURSOR
  // ============================================================
  function initCustomCursor() {
    if (!DOM.cursorFollower || !DOM.cursorDot) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.innerWidth < 1024) return;

    document.addEventListener("mousemove", (e) => {
      state.cursorX = e.clientX;
      state.cursorY = e.clientY;
      DOM.cursorDot.style.left = e.clientX + "px";
      DOM.cursorDot.style.top = e.clientY + "px";
    });

    function animateFollower() {
      state.followerX += (state.cursorX - state.followerX) * 0.12;
      state.followerY += (state.cursorY - state.followerY) * 0.12;
      DOM.cursorFollower.style.left = state.followerX + "px";
      DOM.cursorFollower.style.top = state.followerY + "px";
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    const hoverTargets =
      "a, button, input, select, textarea, .service-preview-card, .testimonial-full-card, .value-card, .tip-card, .faq-item";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverTargets)) {
        DOM.cursorFollower.classList.add("cursor-hover");
      }
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverTargets)) {
        DOM.cursorFollower.classList.remove("cursor-hover");
      }
    });

    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
      DOM.cursorFollower.style.opacity = "0";
      DOM.cursorDot.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
      DOM.cursorFollower.style.opacity = "1";
      DOM.cursorDot.style.opacity = "1";
    });
  }

  // ============================================================
  // SMOOTH SCROLL FOR ANCHOR LINKS (within same page sections)
  // ============================================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          // Let the router handle it for page navigation
          // Only smooth scroll for same-page anchors (not used in this SPA)
        }
      });
    });
  }

  // ============================================================
  // DESKTOP SUBMENU BEHAVIOR (click-based for better UX)
  // ============================================================
  // function initDesktopSubmenu() {
  //   const hasSubmenuItems = document.querySelectorAll(".has-submenu");

  //   hasSubmenuItems.forEach((item) => {
  //     const navLink = item.querySelector(".nav-link");

  //     navLink.addEventListener("click", (e) => {
  //       if (window.innerWidth >= 1024) {
  //         // On desktop, if the parent link has a matching page, navigate
  //         // Otherwise just toggle submenu
  //         const pageId = navLink.dataset.nav;
  //         if (pageId && document.getElementById("page-" + pageId)) {
  //           // Let the router handle it
  //           return;
  //         }
  //       }
  //     });

  //     // Close submenu when clicking outside
  //     document.addEventListener("click", (e) => {
  //       if (!item.contains(e.target)) {
  //         item.classList.remove("open");
  //       }
  //     });
  //   });
  // }

  // ✅ NEW DESKTOP SUBMENU — Click-based toggle, closes on outside click
  function initDesktopSubmenu() {
    const hasSubmenuItems = document.querySelectorAll(".has-submenu");

    hasSubmenuItems.forEach((item) => {
      const navLink = item.querySelector(".nav-link");

      // Click on the parent nav-link toggles the submenu dropdown
      navLink.addEventListener("click", (e) => {
        // Only handle on desktop viewports
        if (window.innerWidth < 1024) return;

        e.preventDefault();
        e.stopPropagation();

        const wasOpen = item.classList.contains("open");

        // Close ALL other submenus first
        hasSubmenuItems.forEach((other) => {
          if (other !== item) other.classList.remove("open");
        });

        // Toggle this one
        if (wasOpen) {
          item.classList.remove("open");
        } else {
          item.classList.add("open");
        }
      });

      // Clicking a submenu link navigates AND closes dropdown
      item.querySelectorAll(".submenu-link").forEach((subLink) => {
        subLink.addEventListener("click", () => {
          item.classList.remove("open");
        });
      });

      // Hover backup: open on hover, close when mouse leaves the entire nav-item area
      item.addEventListener("mouseenter", () => {
        if (window.innerWidth < 1024) return;
        hasSubmenuItems.forEach((other) => {
          if (other !== item) other.classList.remove("open");
        });
        item.classList.add("open");
      });

      item.addEventListener("mouseleave", () => {
        if (window.innerWidth < 1024) return;
        item.classList.remove("open");
      });
    });

    // Close all submenus when clicking anywhere outside the nav
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".main-nav")) {
        hasSubmenuItems.forEach((item) => {
          item.classList.remove("open");
        });
      }
    });

    // Close all submenus on scroll
    window.addEventListener(
      "scroll",
      () => {
        hasSubmenuItems.forEach((item) => {
          item.classList.remove("open");
        });
      },
      { passive: true },
    );
  }

  // ============================================================
  // PARALLAX EFFECT ON HERO ORBS
  // ============================================================
  function initParallax() {
    const orbs = document.querySelectorAll(".hero-orb");
    if (orbs.length === 0) return;

    window.addEventListener(
      "mousemove",
      (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        orbs.forEach((orb, i) => {
          const speed = (i + 1) * 15;
          orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
      },
      { passive: true },
    );
  }

  // ============================================================
  // KEYBOARD ACCESSIBILITY
  // ============================================================
  function initAccessibility() {
    // Escape key closes mobile menu
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (state.isMobileMenuOpen) {
          closeMobileMenu();
        }
        hideToast();
      }
    });

    // Focus trap in mobile nav
    DOM.mobileNav.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      const focusable = DOM.mobileNav.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  // ============================================================
  // PRELOADER FOR IMAGES (Lazy loading visual enhancement)
  // ============================================================
  function initImageEnhancements() {
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("load", () => {
        img.style.opacity = "1";
      });
      if (!img.complete) {
        img.style.opacity = "0";
        img.style.transition = "opacity 0.5s ease";
      }
    });
  }

  // ============================================================
  // INITIALIZE EVERYTHING
  // ============================================================
  function init() {
    initLoadingScreen();
    initRouter();
    initHeaderScroll();
    initMobileNav();
    initDesktopSubmenu();
    initTestimonialsSlider();
    initFAQs();
    initAppointmentForm();
    initToast();
    initFloatingWidgets();
    initCustomCursor();
    initSmoothScroll();
    initParallax();
    initAccessibility();
    initImageEnhancements();
  }

  // Wait for DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
