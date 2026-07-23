/**
 * Khaki Luxury Real Estate - Symmetrical Emerald Motion System
 */

document.addEventListener("DOMContentLoaded", () => {
    // Lock baseline background canvas actions while drawing transitions
    document.body.classList.add("is-loading");

    // Primary Unified Execution Orchestration Framework
    let presentationTimeline = gsap.timeline({
        onComplete: () => {
            document.body.classList.remove("is-loading");
            // Instantiate sliding system engines post reveal completion
            bootEditorialSlider();
        }
    });

    // --- SYSTEM PHASE 1: EXECUTE LOGO GEOMETRIC SWEEP ---
    presentationTimeline.fromTo(".logo-mask-container",
        { clipPath: "inset(0% 100% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "power2.inOut" }
    );

    // Fade away preloader mask canvas frame gracefully
    presentationTimeline.to("#preloader", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    }, "+=0.1");

    presentationTimeline.set("#preloader", { display: "none" });


    // --- SYSTEM PHASE 2: INTRODUCE ULTRA-SLIM FLOATING BAR ---
    presentationTimeline.fromTo(".floating-header", {
        y: -15,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out"
    }, "-=0.2");

    presentationTimeline.fromTo(".reveal-nav",
        { yPercent: 105 },
        { yPercent: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" },
        "-=0.5"
    );


    // --- SYSTEM PHASE 3: ORCHESTRATE EDITORIAL TYPOGRAPHY REVEAL ---
    presentationTimeline.fromTo(".hero-micro-tag",
        { yPercent: 110 },
        { yPercent: 0, duration: 0.5, ease: "power2.out" },
        "-=0.5"
    );

    presentationTimeline.fromTo(".title-mask span",
        { yPercent: 100, rotate: 1, skewY: 1 },
        { yPercent: 0, rotate: 0, skewY: 0, duration: 0.9, stagger: 0.08, ease: "power4.out" },
        "-=0.6"
    );

    presentationTimeline.fromTo(".hero-editorial-desc",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.5"
    );

    presentationTimeline.fromTo(".luxury-action-btn",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.4"
    );

    presentationTimeline.fromTo(".interactive-slider-controls",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "<"
    );
    
    

    // --- SYSTEM PHASE 4: HIGH-END GSAP LIQUID CURSOR INTERACTION ---
    const cursorDot = document.querySelector(".custom-cursor-dot");
    const cursorBall = document.querySelector(".custom-cursor-ball");
    const interactiveTargets = document.querySelectorAll("a, .dot, .luxury-action-btn, .nav-item, .nav-mini-cta");

    if (window.innerWidth > 768) {
        // Fluid Mouse Movement Tracking Loop
        window.addEventListener("mousemove", (e) => {
            gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.02 });
            gsap.to(cursorBall, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
        });

        // Hover Magnetic Scaling Animations
        interactiveTargets.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                gsap.to(cursorBall, {
                    scale: 1.4,
                    backgroundColor: "rgba(243, 180, 68, 0.08)",
                    borderColor: "var(--brand-gold)",
                    duration: 0.3
                });
                gsap.to(cursorDot, { scale: 0.5, duration: 0.3 });
            });

            element.addEventListener("mouseleave", () => {
                gsap.to(cursorBall, {
                    scale: 1,
                    backgroundColor: "transparent",
                    borderColor: "rgba(243, 180, 68, 0.4)",
                    duration: 0.3
                });
                gsap.to(cursorDot, { scale: 1, duration: 0.3 });
            });
        });

        // Responsive Click Feedback Action
        window.addEventListener("mousedown", () => {
            gsap.to(cursorBall, { scale: 0.8, borderColor: "var(--brand-gold)", duration: 0.1 });
        });
        window.addEventListener("mouseup", () => {
            gsap.to(cursorBall, { scale: 1, borderColor: "rgba(243, 180, 68, 0.4)", duration: 0.2 });
        });
    }


    // --- CONTINUOUS BRIGHT SLIDER REPEATER LOGIC ---
    function bootEditorialSlider() {
        const slides = document.querySelectorAll(".slide");
        const dots = document.querySelectorAll(".dot");
        let currentIdx = 0;
        const autoIntervalTime = 5000; // Track shifts exactly every 5 seconds

        const runActiveKenBurns = (targetSlideNode) => {
            gsap.fromTo(targetSlideNode, 
                { scale: 1.05 },
                { scale: 1, duration: autoIntervalTime / 1000, ease: "none" }
            );
        };

        // Fire initial architectural image focus track loop scaling run
        runActiveKenBurns(slides[0]);

        function progressToNextFrame() {
            let outgoingIdx = currentIdx;
            currentIdx = (currentIdx + 1) % slides.length;

            // Sort multi-layered surface positions perfectly
            slides.forEach(s => s.style.zIndex = 1);
            slides[outgoingIdx].style.zIndex = 2;
            slides[currentIdx].style.zIndex = 3;

            // Trigger elite cross-fade render sweeps
            gsap.fromTo(slides[currentIdx], 
                { opacity: 0 },
                { opacity: 1, duration: 1.2, ease: "power2.inOut" }
            );

            gsap.to(slides[outgoingIdx], {
                opacity: 0,
                duration: 1.2,
                ease: "power2.inOut"
            });

            // Re-fire continuous tracking motion configuration checks
            runActiveKenBurns(slides[currentIdx]);

            // Sync dynamic highlights on dot elements
            dots.forEach(d => d.classList.remove("active-dot"));
            dots[currentIdx].classList.add("active-dot");
        }

        setInterval(progressToNextFrame, autoIntervalTime);
    }
});

// --- EXTRA ADVANCED LUXURY DROPDOWN INTERACTION CONTROLLER ENGINE ---
const dropdowns = document.querySelectorAll(".custom-dropdown");

dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const options = dropdown.querySelectorAll(".dropdown-option");
    const triggerText = dropdown.querySelector(".trigger-text");

    // Toggle dropdown overlay state
    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove("open");
        });
        dropdown.classList.toggle("open");
    });

    // Option Processing core logic
    options.forEach(option => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.querySelectorAll(".dropdown-option").forEach(opt => opt.classList.remove("active"));
            option.classList.add("active");
            
            triggerText.textContent = option.textContent;
            dropdown.classList.remove("open");
        });
    });
});

// Real-time Area Selector Field Logic inside Dropdown
const areaSearchField = document.getElementById("area-search-field");
if (areaSearchField) {
    areaSearchField.addEventListener("input", (e) => {
        const queryValue = e.target.value.toLowerCase().trim();
        const targetOptions = document.querySelectorAll("#dropdown-area .dropdown-option");

        targetOptions.forEach(option => {
            const optionString = option.textContent.toLowerCase();
            option.style.display = optionString.includes(queryValue) ? "block" : "none";
        });
    });
    areaSearchField.addEventListener("click", (e) => e.stopPropagation());
}

// Global UI Layout Blur Click Reset
window.addEventListener("click", () => {
    dropdowns.forEach(d => d.classList.remove("open"));
});


// =====================================================================
// DYNAMIC HIGHEST-STANDARD ENGINE FILTER ACTION (AREA TARGETED)
// =====================================================================
const searchSubmitBtn = document.getElementById("search-submit-btn");
const propertiesGridContainer = document.getElementById("properties-grid-container");

if (searchSubmitBtn && propertiesGridContainer) {
    searchSubmitBtn.addEventListener("click", () => {
        
        // Target current active data attributes
        const selectedStatus = document.querySelector("#dropdown-status .dropdown-option.active").getAttribute("data-value");
        const selectedType = document.querySelector("#dropdown-type .dropdown-option.active").getAttribute("data-value");
        const selectedArea = document.querySelector("#dropdown-area .dropdown-option.active").getAttribute("data-value");

        // Clear existing feedback layouts if active
        const existingFeedback = propertiesGridContainer.querySelector(".no-results-feedback");
        if (existingFeedback) existingFeedback.remove();

        const propertyCards = propertiesGridContainer.querySelectorAll(".property-card");
        let matchingItemsCount = 0;

        // Run validation layout loops
        propertyCards.forEach(card => {
            const cardStatus = card.getAttribute("data-status");
            const cardType = card.getAttribute("data-type");
            const cardArea = card.getAttribute("data-area");

            const matchStatus = (selectedStatus === "all" || cardStatus === selectedStatus);
            const matchType = (selectedType === "all" || cardType === selectedType);
            const matchArea = (selectedArea === "all" || cardArea === selectedArea);

            if (matchStatus && matchType && matchArea) {
                card.style.display = "block";
                matchingItemsCount++;
            } else {
                card.style.display = "none";
            }
        });

        // Trigger safe check error card callback if empty
        if (matchingItemsCount === 0) {
            const feedbackElement = document.createElement("div");
            feedbackElement.className = "no-results-feedback";
            feedbackElement.textContent = "No elite properties match your specific criteria.";
            propertiesGridContainer.appendChild(feedbackElement);
        }

        // Smoothly display grid contents
        propertiesGridContainer.classList.add("reveal-results");
        
        // Premium scroll tracking action
        setTimeout(() => {
            propertiesGridContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 120);
    });
}
/** */
document.addEventListener("DOMContentLoaded", function () {
    
    /* =====================================================================
       1. 6-IMAGES CINEMATIC SHOWCASE ENGINE (AUTO-LOOP ROTATION)
       ===================================================================== */
    const slides = document.querySelectorAll(".editorial-slide");
    const panelContents = document.querySelectorAll(".panel-inner-content");
    
    if (slides.length > 0) {
        let currentIndex = 0;
        const totalSlides = slides.length;

        // Strict appearance flow: Top -> Bottom -> Right -> Left
        const slideDirections = ["state-top", "state-bottom", "state-right", "state-left"];

        // Initial trigger to make green/khaki panel texts visible on mount
        panelContents.forEach(content => content.classList.add("reveal-active"));

        function rotateEditorialShowcase() {
            let nextIndex = (currentIndex + 1) % totalSlides;
            let incomingDirection = slideDirections[currentIndex % slideDirections.length];

            // Stage the directional animation class onto the incoming slide
            slides[nextIndex].className = `editorial-slide ${incomingDirection}`;

            // Clear visual text tokens to initiate smooth fade-out phase
            panelContents.forEach(content => content.classList.remove("reveal-active"));

            setTimeout(() => {
                // Perform the active slide node state swap
                slides[currentIndex].classList.remove("active");
                slides[nextIndex].classList.add("active");

                currentIndex = nextIndex;
            }, 50);

            // Smoothly re-reveal logo texts and URL titles along with the new image view
            setTimeout(() => {
                panelContents.forEach(content => content.classList.add("reveal-active"));
            }, 550);
        }

        // Set slide loop rotation interval to 4.8 seconds
        setInterval(rotateEditorialShowcase, 4800);
    }


    /* =====================================================================
       2. TEXT-BASED EDITORIAL MANIFESTO ENGINE (INFINITE REFRESH SCROLL)
       ===================================================================== */
    const dynamicTargets = document.querySelectorAll(".dynamic-scroll-target");
    
    if (dynamicTargets.length > 0) {
        const observerOptions = {
            root: null,
            threshold: 0.1, // Triggers early as soon as 10% enters or leaves viewport
            rootMargin: "0px 0px -40px 0px"
        };

        const infiniteRealEstateObserver = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Element enters view: Trigger smooth blur/fade appearance
                    entry.target.classList.add("revealed");
                } else {
                    // Reverse Query Action: Element leaves view, reset state for next visit
                    entry.target.classList.remove("revealed");
                }
            });
        }, observerOptions);

        // Bind the observer onto left sticky block and right text pillars
        dynamicTargets.forEach(target => {
            infiniteRealEstateObserver.observe(target);
        });
    }

});

/*PROJECT CARDS */
// --- PROJECT CARDS SCROLL REVEAL CONTROLLER (INTERSECTION OBSERVER) ---
const revealElements = document.querySelectorAll(".animate-fade-up");

const projectObserverOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px"
};

const projectScrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // Trigger only once for flawless luxury reveal
        }
    });
}, projectObserverOptions);

revealElements.forEach(element => {
    projectScrollObserver.observe(element);
});

/*TEXT AREA SECTION */
document.addEventListener("DOMContentLoaded", () => {
    const hexItems = document.querySelectorAll(".hex-item");

    hexItems.forEach((item) => {
        const typewriterElement = item.querySelector(".hex-typewriter");
        if (!typewriterElement) return;

        // Extracting target string directly from data attribute safely
        const fullText = typewriterElement.getAttribute("data-text") || "";
        let typingInterval = null;

        // TRIGGER ON CURSOR ENTER
        item.addEventListener("mouseenter", () => {
            // Clear any lingering active animation sequences
            clearInterval(typingInterval);
            typewriterElement.textContent = "";
            
            let charIndex = 0;
            
            // Premium fast-paced mechanical tick speed
            typingInterval = setInterval(() => {
                if (charIndex < fullText.length) {
                    typewriterElement.textContent += fullText.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 45); 
        });

        // RE-SET ON CURSOR LEAVE
        item.addEventListener("mouseleave", () => {
            clearInterval(typingInterval);
            // Instantly clear text string to leave frame clean for next hover cycle
            typewriterElement.textContent = "";
        });
    });
});
/*HONEY HEXAGONAL */
document.addEventListener("DOMContentLoaded", () => {
    const hexItems = document.querySelectorAll(".hex-item");
    const previewStage = document.querySelector(".hex-global-preview-stage");
    
    const popupImg = document.getElementById("popup-square-img");
    const popupMeta = document.getElementById("popup-meta-category");
    const popupTitle = document.getElementById("popup-main-title");
    const popupDesc = document.getElementById("popup-dynamic-desc");
    
    const spec1 = document.getElementById("spec-val-1");
    const spec2 = document.getElementById("spec-val-2");
    const spec3 = document.getElementById("spec-val-3");
    const spec4 = document.getElementById("spec-val-4");
    const spec5 = document.getElementById("spec-val-5");

    let typeInterval = null;

    hexItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            clearInterval(typeInterval);

            // BULLETPROOF IMAGE DETECTION: 
            // Yeh pehle grid ke andar mojood asal HTML <img> tag ko pakedga
            const gridImageElement = item.querySelector("img");
            
            // Agar tag mil gaya toh uski src uthayega, warna data-img attribute check karega
            let imgUrl = "";
            if (gridImageElement) {
                imgUrl = gridImageElement.src;
            } else {
                imgUrl = item.getAttribute("data-img");
            }

            const title = item.getAttribute("data-title") || "LUXURY RESIDENCY";
            const category = item.getAttribute("data-category") || "ARCHITECTURE";
            const descText = item.getAttribute("data-desc") || "Premium space crafted with raw concrete textures and clean structural lines.";

            // State transfer to Popup Panel
            if (popupImg) {
                popupImg.src = imgUrl; // Ab image path 100% yahan pass hoga
            }
            
            if (popupMeta) popupMeta.textContent = category;
            if (popupTitle) popupTitle.textContent = title;
            
            if (spec1) spec1.textContent = item.getAttribute("data-spec1") || "Residential";
            if (spec2) spec2.textContent = item.getAttribute("data-spec2") || "4,500 Sq Ft";
            if (spec3) spec3.textContent = item.getAttribute("data-spec3") || "Completed";
            if (spec4) spec4.textContent = item.getAttribute("data-spec4") || "Glass & Steel";
            if (spec5) spec5.textContent = item.getAttribute("data-spec5") || "Metropolitan";

            // Show Popup Stage
            if (previewStage) {
                previewStage.classList.add("stage-active");
            }

            // Clean & Trigger Typewriter
            if (popupDesc) {
                popupDesc.textContent = "";
                let charIndex = 0;
                typeInterval = setInterval(() => {
                    if (charIndex < descText.length) {
                        popupDesc.textContent += descText.charAt(charIndex);
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                    }
                }, 20);
            }
        });
    });

    // Close Stage Overlay when leaving
    if (previewStage) {
        previewStage.addEventListener("mouseleave", () => {
            clearInterval(typeInterval);
            previewStage.classList.remove("stage-active");
        });
    }
});


/*==========ABOUT US COUNTER============*/
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".animate-on-scroll");
  const counters = document.querySelectorAll(".kbs-number");

  const runCounter = (counter) => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
    const speed = target > 1000 ? 80 : 30; 
    const increment = Math.ceil(target / speed);

    const updateCount = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("kbs-media-box")) {
            counters.forEach((counter) => runCounter(counter));
          }
        } else {
          entry.target.classList.remove("visible");
          if (entry.target.classList.contains("kbs-media-box")) {
            counters.forEach((counter) => { counter.innerText = "0"; });
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  scrollElements.forEach((el) => observer.observe(el));
});

/*===========GRAPH============ */
document.addEventListener("DOMContentLoaded", () => {
  const graphContainer = document.getElementById("graph-trigger-box");
  const graphBars = document.querySelectorAll(".bar-fill");

  const triggerGraphAnimation = (isActive) => {
    if (isActive) {
      graphContainer.classList.add("active-graph");
      graphBars.forEach((bar) => {
        const targetHeight = bar.getAttribute("data-percentage");
        bar.style.height = targetHeight;
      });
    } else {
      // Clean Reverse Loop Core
      graphContainer.classList.remove("active-graph");
      graphBars.forEach((bar) => {
        bar.style.height = "0%";
      });
    }
  };

  const graphObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerGraphAnimation(true);
        } else {
          triggerGraphAnimation(false);
        }
      });
    },
    { threshold: 0.15 }
  );

  if (graphContainer) {
    graphObserver.observe(graphContainer);
  }
});

/*===============PRPERTIES BANNER================ */
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".slb-tab-btn");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all banner buttons
      tabButtons.forEach(btn => btn.classList.remove("active"));
      // Add to the clicked one
      button.classList.add("active");
    });
  });
});

// =====================================================================
// 10.2 ZERO-GLITCH COUNTER ENGINE (REVERSE VISIT RESET LOOP)
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
    const statNodes = document.querySelectorAll('.stat-node-box');
    
    const countUp = (element) => {
        const counterBtn = element.querySelector('.stat-counter-number');
        if (!counterBtn) return;

        // Fetch targets explicitly as raw data values safely
        const rawTarget = counterBtn.getAttribute('data-target') || '0';
        const targetValue = parseFloat(rawTarget) || 0;
        const isDecimal = rawTarget.includes('.');
        
        let startValue = 0;
        const duration = 2000; // Animation timing (2 seconds)
        const startTime = performance.now();
        
        // Kill existing loop tracking to override collisions
        if (counterBtn.dataset.animationId) {
            cancelAnimationFrame(parseInt(counterBtn.dataset.animationId));
        }

        const updateNumber = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            
            if (elapsedTime < duration) {
                const progress = elapsedTime / duration;
                const easeOutProgress = progress * (2 - progress); // Standard EaseOut Curve
                const currentValue = startValue + (targetValue * easeOutProgress);
                
                // Pure numeric update onto text block
                counterBtn.innerText = isDecimal ? currentValue.toFixed(1) : Math.floor(currentValue);
                
                counterBtn.dataset.animationId = requestAnimationFrame(updateNumber);
            } else {
                counterBtn.innerText = isDecimal ? targetValue.toFixed(1) : targetValue;
            }
        };
        
        counterBtn.dataset.animationId = requestAnimationFrame(updateNumber);
    };

    const resetCounter = (element) => {
        const counterBtn = element.querySelector('.stat-counter-number');
        if (!counterBtn) return;

        // Clear active animation handle instantly on exit
        if (counterBtn.dataset.animationId) {
            cancelAnimationFrame(parseInt(counterBtn.dataset.animationId));
        }
        
        // Flush structural text parameters back down to clean 0 baseline
        counterBtn.innerText = "0";
    };

    const observerOptions = {
        root: null,
        threshold: 0.15 // Fires precisely when 15% box bounds cross viewports
    };

    // Explicitly scope via window object to bypass old ES5 linting rules in IDEs
    const statsObserver = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
            } else {
                resetCounter(entry.target);
            }
        });
    }, observerOptions);

    statNodes.forEach(node => statsObserver.observe(node));
});

/*SHOWCASE */
document.addEventListener("DOMContentLoaded", () => {
    const typewriterElements = document.querySelectorAll('.typewriter-text');
    typewriterElements.forEach(el => {
        const words = JSON.parse(el.getAttribute('data-words') || '[]');
        let wordIndex = 0; let txt = ''; let isDeleting = false;
        
        const typeAction = () => {
            const currentWord = words[wordIndex];
            txt = isDeleting ? currentWord.substring(0, txt.length - 1) : currentWord.substring(0, txt.length + 1);
            el.innerText = txt;
            
            let typeSpeed = isDeleting ? 40 : 100;
            if (!isDeleting && txt === currentWord) { typeSpeed = 1800; isDeleting = true; }
            else if (isDeleting && txt === '') { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 400; }
            setTimeout(() => typeAction(), typeSpeed);
        };
        if (words.length > 0) typeAction();
    });
});
/*MANIFESTO */
document.addEventListener("DOMContentLoaded", () => {
    const shatterContainer = document.getElementById('shatterWrapper');
    
    if (shatterContainer) {
        // Trigger assembly when 35% of the text block area enters browser context
        const triggerOptions = { threshold: 0.35 };
        
        const runtimeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    shatterContainer.classList.add('assembled');
                } else {
                    // Optional: Remove class if you want the block to re-explode when scrolling away
                    shatterContainer.classList.remove('assembled');
                }
            });
        }, triggerOptions);
        
        runtimeObserver.observe(shatterContainer);
    }
});

/*HAMBURGER MENU */
document.addEventListener("DOMContentLoaded", () => {
    // 1. HAMBURGER CORES (ELEMENTS TARGET)
    const burgerTrigger = document.getElementById('burgerTrigger');
    const menuOverlay = document.getElementById('menuOverlay');
    const desktopLinks = document.querySelectorAll('.nav-item');

    // 2. CLICK ENGINE - HAMBURGER OPEN / CLOSE
    if (burgerTrigger && menuOverlay) {
        burgerTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            burgerTrigger.classList.toggle('menu-is-open');
            menuOverlay.classList.toggle('overlay-open');
        });
    }

    // 3. HYBRID NAVIGATION MECHANISM (Handles both # Anchors and .html Pages)
    const interactiveLinks = document.querySelectorAll('.nav-item, .overlay-nav-item, .nav-mini-cta');
    
    interactiveLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetPath = this.getAttribute('href');
            
            if (!targetPath) return;

            // CASE A: Agar link dusre HTML page ka hai (e.g., about.html)
            if (!targetPath.startsWith('#') && targetPath !== '') {
                e.preventDefault(); // Default boring jump roka
                
                // Pehle curtain slices ko smoothly close kiya
                if (burgerTrigger && menuOverlay) {
                    burgerTrigger.classList.remove('menu-is-open');
                    menuOverlay.classList.remove('overlay-open');
                }
                
                // Slices animation (400ms) khatam hote hi naye page par redirect
                setTimeout(() => {
                    window.location.href = targetPath;
                }, 400);
            } 
            
            // CASE B: Agar link single-page anchor hai (e.g., #home)
            else if (targetPath.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetPath);
                
                if (burgerTrigger && menuOverlay && menuOverlay.classList.contains('overlay-open')) {
                    burgerTrigger.classList.remove('menu-is-open');
                    menuOverlay.classList.remove('overlay-open');
                }
                
                if (targetSection) {
                    setTimeout(() => {
                        window.scrollTo({
                            top: targetSection.offsetTop - 30, // Capsule bar clearance
                            behavior: 'smooth'
                        });
                    }, 400);
                }
            }
        });
    });

    // 4. DESKTOP ACTIVE TRACKER ON SCROLL (Only for anchor pages)
    window.addEventListener('scroll', () => {
        let currentFocusId = '';
        const blocks = document.querySelectorAll('section, header, div[id]');
        
        blocks.forEach(block => {
            const offsetTop = block.offsetTop - 120;
            if (window.scrollY >= offsetTop) {
                currentFocusId = block.getAttribute('id');
            }
        });

        if (currentFocusId) {
            desktopLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentFocusId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});