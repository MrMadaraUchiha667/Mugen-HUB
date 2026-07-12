/* =====================================================
        MUGEN HUB
        THEME SYSTEM
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{


const themeButton =
document.querySelector(".theme-button");

const body =
document.body;



/* =========================
        LOAD SAVED THEME
========================= */


const savedTheme =
localStorage.getItem("mugen-theme");



if(savedTheme === "light"){


    body.classList.add("light");


    updateIcon(true);


}






/* =========================
        TOGGLE THEME
========================= */


themeButton?.addEventListener(
"click",
()=>{


    body.classList.toggle("light");



    const isLight =
    body.classList.contains("light");



    localStorage.setItem(
        "mugen-theme",
        isLight ? "light" : "dark"
    );



    updateIcon(isLight);



});








/* =========================
        UPDATE ICON
========================= */


function updateIcon(light){



    const icon =
    themeButton?.querySelector("i");



    if(!icon)
        return;



    if(light){


        icon.className =
        "fa-solid fa-sun";


    }else{


        icon.className =
        "fa-solid fa-moon";


    }


}







/* =========================
        SMOOTH THEME TRANSITION
========================= */


const style =
document.createElement("style");



style.innerHTML = `


body,
.card,
.content-card,
.stage-card,
.screenpack-card,
.header,
.footer,
.category-card{

transition:

background .4s ease,
color .4s ease,
border .4s ease;

}


`;



document.head.appendChild(style);



});