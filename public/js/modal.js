/* =====================================================
   modal.js
   کامل
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    const modal = document.querySelector(".modal");

    const overlay = document.querySelector(".modal-overlay");

    const closeButton = document.querySelector(".modal-close");

    const openButtons = document.querySelectorAll("[data-modal]");

    /* =========================
       Open Modal
    ========================= */

    function openModal(){

        if(!modal) return;

        modal.classList.add("active");

        if(overlay){

            overlay.classList.add("active");

        }

        body.style.overflow = "hidden";

    }

    /* =========================
       Close Modal
    ========================= */

    function closeModal(){

        if(!modal) return;

        modal.classList.remove("active");

        if(overlay){

            overlay.classList.remove("active");

        }

        body.style.overflow = "";

    }

    /* =========================
       Button Events
    ========================= */

    openButtons.forEach(button=>{

        button.addEventListener("click",openModal);

    });

    if(closeButton){

        closeButton.addEventListener("click",closeModal);

    }

    if(overlay){

        overlay.addEventListener("click",closeModal);

    }

    /* =========================
       ESC Key
    ========================= */

    document.addEventListener("keydown",(event)=>{

        if(event.key==="Escape"){

            closeModal();

        }

    });

    /* =========================
       Stop Click Bubble
    ========================= */

    if(modal){

        modal.addEventListener("click",(event)=>{

            event.stopPropagation();

        });

    }

});