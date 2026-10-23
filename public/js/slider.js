/* =====================================================
   slider.js
   کامل
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const sliders = document.querySelectorAll(".slider");

    if(sliders.length === 0) return;

    sliders.forEach(slider => {

        const track = slider.querySelector(".slider-track");
        const slides = slider.querySelectorAll(".slide");
        const prev = slider.querySelector(".slider-prev");
        const next = slider.querySelector(".slider-next");
        const dotsContainer = slider.querySelector(".slider-dots");

        if(!track || slides.length === 0) return;

        let index = 0;
        let interval;

        /* =========================
           Create Dots
        ========================= */

        slides.forEach((_, i) => {

            if(!dotsContainer) return;

            const dot = document.createElement("button");

            dot.className = "slider-dot";

            if(i === 0){

                dot.classList.add("active");

            }

            dot.addEventListener("click", () => {

                index = i;

                update();

                restart();

            });

            dotsContainer.appendChild(dot);

        });

        const dots = slider.querySelectorAll(".slider-dot");

        /* =========================
           Update
        ========================= */

        function update(){

            track.style.transform =
            `translateX(-${index * 100}%)`;

            dots.forEach(dot=>{

                dot.classList.remove("active");

            });

            if(dots[index]){

                dots[index].classList.add("active");

            }

        }

        /* =========================
           Next
        ========================= */

        function nextSlide(){

            index++;

            if(index >= slides.length){

                index = 0;

            }

            update();

        }

        /* =========================
           Prev
        ========================= */

        function prevSlide(){

            index--;

            if(index < 0){

                index = slides.length - 1;

            }

            update();

        }

        /* =========================
           Auto Play
        ========================= */

        function start(){

            interval = setInterval(nextSlide,5000);

        }

        function stop(){

            clearInterval(interval);

        }

        function restart(){

            stop();

            start();

        }

        /* =========================
           Buttons
        ========================= */

        if(next){

            next.addEventListener("click",()=>{

                nextSlide();

                restart();

            });

        }

        if(prev){

            prev.addEventListener("click",()=>{

                prevSlide();

                restart();

            });

        }

        /* =========================
           Hover Pause
        ========================= */

        slider.addEventListener("mouseenter",stop);

        slider.addEventListener("mouseleave",start);

        /* =========================
           Swipe
        ========================= */

        let startX = 0;

        slider.addEventListener("touchstart",(e)=>{

            startX = e.touches[0].clientX;

        });

        slider.addEventListener("touchend",(e)=>{

            const endX = e.changedTouches[0].clientX;

            const diff = startX - endX;

            if(Math.abs(diff) < 50) return;

            if(diff > 0){

                nextSlide();

            }else{

                prevSlide();

            }

            restart();

        });

        update();

        start();

    });

});