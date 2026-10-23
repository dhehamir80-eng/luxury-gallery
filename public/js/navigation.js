/* =====================================================
   navigation.js
   بخش ۱ از ۱ (کامل)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuButton = document.querySelector(".mobile-menu-button");
    const menuClose = document.querySelector(".mobile-menu-close");
    const overlay = document.querySelector(".overlay");

    /* =========================
       Header Scroll
    ========================= */

    function handleHeader(){

        if(!header) return;

        if(window.scrollY > 40){

            header.classList.add("header-scroll");

        }else{

            header.classList.remove("header-scroll");

        }

    }

    window.addEventListener("scroll", handleHeader);

    handleHeader();

    /* =========================
       Open Mobile Menu
    ========================= */

    function openMenu(){

        if(!mobileMenu) return;

        mobileMenu.classList.add("active");

        if(overlay){

            overlay.classList.add("active");

        }

        document.body.style.overflow = "hidden";

    }

    /* =========================
       Close Mobile Menu
    ========================= */

    function closeMenu(){

        if(!mobileMenu) return;

        mobileMenu.classList.remove("active");

        if(overlay){

            overlay.classList.remove("active");

        }

        document.body.style.overflow = "";

    }

    if(menuButton){

        menuButton.addEventListener("click", openMenu);

    }

    if(menuClose){

        menuClose.addEventListener("click", closeMenu);

    }

    if(overlay){

        overlay.addEventListener("click", closeMenu);

    }

    /* =========================
       Close On Link Click
    ========================= */

    document.querySelectorAll(".mobile-menu a").forEach(link=>{

        link.addEventListener("click", closeMenu);

    });

    /* =========================
       Active Menu Item
    ========================= */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link=>{

        const href = link.getAttribute("href");

        if(href === currentPage){

            link.classList.add("active");

        }

    });

    /* =========================
       Smooth Scroll
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            window.scrollTo({

                top:target.offsetTop-80,

                behavior:"smooth"

            });

        });

    });

});