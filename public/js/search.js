/* =====================================================
   search.js
   کامل
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector("#searchInput");
    const typeSelect = document.querySelector("#typeSelect");
    const citySelect = document.querySelector("#citySelect");
    const searchButton = document.querySelector("#searchButton");

    const propertyContainer = document.querySelector("#propertiesContainer");
    const carContainer = document.querySelector("#carsContainer");

    /* =========================
       Property Card
    ========================= */

    function propertyCard(item){

        return `
        <div class="card">

            <div class="card-image">
                <img src="${item.image}" alt="${item.title}">
            </div>

            <div class="card-body">

                <span class="card-category">${item.type}</span>

                <h3 class="card-title">
                    ${item.title}
                </h3>

                <p class="card-location">
                    ${item.city} - ${item.area}
                </p>

                <div class="card-info">

                    <span>${item.meter} متر</span>

                    <span>${item.rooms} خواب</span>

                </div>

                <div class="card-footer">

                    <strong class="card-price">
                        ${item.price}
                    </strong>

                    <a href="property.html?id=${item.id}" class="btn">
                        مشاهده
                    </a>

                </div>

            </div>

        </div>
        `;

    }

    /* =========================
       Car Card
    ========================= */

    function carCard(item){

        return `
        <div class="card">

            <div class="card-image">
                <img src="${item.image}" alt="${item.title}">
            </div>

            <div class="card-body">

                <h3 class="card-title">
                    ${item.title}
                </h3>

                <p class="card-location">
                    ${item.year}
                </p>

                <div class="card-info">

                    <span>${item.color}</span>

                    <span>${item.mileage}</span>

                </div>

                <div class="card-footer">

                    <strong class="card-price">
                        ${item.price}
                    </strong>

                    <a href="car.html?id=${item.id}" class="btn">
                        مشاهده
                    </a>

                </div>

            </div>

        </div>
        `;

    }

    /* =========================
       Render Properties
    ========================= */

    function renderProperties(list){

        if(!propertyContainer) return;

        propertyContainer.innerHTML = "";

        if(list.length===0){

            propertyContainer.innerHTML =
            "<p class='empty'>موردی پیدا نشد.</p>";

            return;

        }

        list.forEach(item=>{

            propertyContainer.innerHTML += propertyCard(item);

        });

    }

    /* =========================
       Render Cars
    ========================= */

    function renderCars(list){

        if(!carContainer) return;

        carContainer.innerHTML = "";

        if(list.length===0){

            carContainer.innerHTML =
            "<p class='empty'>موردی پیدا نشد.</p>";

            return;

        }

        list.forEach(item=>{

            carContainer.innerHTML += carCard(item);

        });

    }

    /* =========================
       Search Properties
    ========================= */

    function filterProperties(){

        let result = [...properties];

        if(searchInput){

            const keyword =
            searchInput.value
            .trim()
            .toLowerCase();

            if(keyword){

                result = result.filter(item=>

                    item.title.toLowerCase().includes(keyword) ||

                    item.city.toLowerCase().includes(keyword) ||

                    item.area.toLowerCase().includes(keyword)

                );

            }

        }

        if(typeSelect){

            const type = typeSelect.value;

            if(type){

                result = result.filter(item=>

                    item.type===type

                );

            }

        }

        if(citySelect){

            const city = citySelect.value;

            if(city){

                result = result.filter(item=>

                    item.city===city

                );

            }

        }

        renderProperties(result);

    }

    /* =========================
       Events
    ========================= */

    if(searchButton){

        searchButton.addEventListener(

            "click",

            filterProperties

        );

    }

    if(searchInput){

        searchInput.addEventListener(

            "keyup",

            filterProperties

        );

    }

    if(typeSelect){

        typeSelect.addEventListener(

            "change",

            filterProperties

        );

    }

    if(citySelect){

        citySelect.addEventListener(

            "change",

            filterProperties

        );

    }

    /* =========================
       Initial Render
    ========================= */

    if(typeof properties!=="undefined"){

        renderProperties(properties);

    }

    if(typeof cars!=="undefined"){

        renderCars(cars);

    }

});