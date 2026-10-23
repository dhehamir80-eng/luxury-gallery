/* =====================================================
   app.js
   بخش ۱ از ۲
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Loader
    ========================================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if (!loader) return;

        loader.classList.add("hide");

        setTimeout(() => {

            loader.remove();

        }, 600);

    });

    /* ==========================================
       Back To Top
    ========================================== */

    const backTop = document.querySelector(".back-to-top");

    function toggleBackTop() {

        if (!backTop) return;

        if (window.scrollY > 400) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", toggleBackTop);

    if (backTop) {

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
       Counter
    ========================================== */

    const counters = document.querySelectorAll("[data-counter]");

    function runCounter(counter) {

        const target = Number(counter.dataset.counter);

        let current = 0;

        const step = Math.ceil(target / 120);

        const timer = setInterval(() => {

            current += step;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current.toLocaleString("fa-IR");

        }, 20);

    }

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /* ==========================================
       Scroll Animation
    ========================================== */

    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.15

    });

    reveals.forEach(item => {

        revealObserver.observe(item);

    });

    /* ==========================================
       Image Lazy Loading
    ========================================== */

    const lazyImages = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const image = entry.target;

            image.src = image.dataset.src;

            image.removeAttribute("data-src");

            imageObserver.unobserve(image);

        });

    });

    lazyImages.forEach(image => {

        imageObserver.observe(image);

    });

    /* ==========================================
       Copy Phone
    ========================================== */

    document.querySelectorAll("[data-copy]").forEach(button => {

        button.addEventListener("click", () => {

            navigator.clipboard.writeText(

                button.dataset.copy

            );

            button.innerText = "کپی شد";

            setTimeout(() => {

                button.innerText = "کپی";

            }, 1500);

        });

    });
    /* =====================================================
   app.js
   بخش ۲ از ۲ (پایانی)
===================================================== */

    /* ==========================================
       Active Card Hover
    ========================================== */

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.classList.add("hover");

        });

        card.addEventListener("mouseleave", () => {

            card.classList.remove("hover");

        });

    });

    /* ==========================================
       Gallery
    ========================================== */

    const galleryImages = document.querySelectorAll(".gallery img");
    const preview = document.querySelector(".gallery-preview img");

    if (preview && galleryImages.length > 0) {

        galleryImages.forEach(image => {

            image.addEventListener("click", () => {

                preview.src = image.src;

                preview.alt = image.alt;

                galleryImages.forEach(item => {

                    item.classList.remove("active");

                });

                image.classList.add("active");

            });

        });

    }

    /* ==========================================
       Contact Form
    ========================================== */

    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name = contactForm.querySelector("[name=name]");
            const phone = contactForm.querySelector("[name=phone]");
            const message = contactForm.querySelector("[name=message]");

            if (
                !name.value.trim() ||
                !phone.value.trim() ||
                !message.value.trim()
            ) {

                alert("تمام فیلدها را تکمیل کنید.");

                return;

            }

            alert("فرم هنوز به سامانه دریافت پیام متصل نشده است. پیام شما ارسال نشد؛ لطفاً فعلاً از راه تماس تأییدشده استفاده کنید.");

        });

    }

    /* ==========================================
       Current Year
    ========================================== */

    const year = document.querySelector("#year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /* ==========================================
       Disable Empty Links
    ========================================== */

    document.querySelectorAll("a[href='#']").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

        });

    });

    /* ==========================================
       Horizontal Scroll
    ========================================== */

    document.querySelectorAll(".horizontal-scroll").forEach(container => {

        container.addEventListener("wheel", event => {

            event.preventDefault();

            container.scrollLeft += event.deltaY;

        }, {

            passive: false

        });

    });

    /* ==========================================
       Navbar Shadow
    ========================================== */

    const header = document.querySelector(".header");

    function headerShadow() {

        if (!header) return;

        if (window.scrollY > 15) {

            header.classList.add("shadow");

        } else {

            header.classList.remove("shadow");

        }

    }

    window.addEventListener("scroll", headerShadow);

    headerShadow();

    /* ==========================================
       End
    ========================================== */

});