/* =====================================================
        MUGEN HUB
        MAIN JAVASCRIPT
===================================================== */


document.addEventListener("DOMContentLoaded", () => {



/* =========================
        LOADER
========================= */


const loader = document.querySelector(".loader");


if(loader){


    setTimeout(()=>{


        loader.classList.add("hide");


    },2000);


}






/* =========================
        MOBILE MENU
========================= */


const menuButton = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-links");



if(menuButton){


    menuButton.addEventListener("click",()=>{


        navMenu.classList.toggle("active");


        menuButton.classList.toggle("open");


    });


}






/* =========================
        CLOSE MENU
========================= */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});







/* =========================
        HEADER SCROLL
========================= */


const header = document.querySelector(".header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        header.classList.add("scrolled");


    }else{


        header.classList.remove("scrolled");


    }


});








/* =========================
        BACK TO TOP
========================= */


const backTop =
document.querySelector(".back-top");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop?.classList.add("active");


    }else{


        backTop?.classList.remove("active");


    }


});




backTop?.addEventListener("click",()=>{


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


});







/* =========================
        COUNTER ANIMATION
========================= */


const counters =
document.querySelectorAll("[data-count]");



const startCounter = (counter)=>{


    const target =
    Number(counter.dataset.count);



    let current = 0;



    const increment =
    target / 150;



    const update = ()=>{


        current += increment;



        if(current < target){


            counter.innerText =
            Math.floor(current)
            .toLocaleString();



            requestAnimationFrame(update);


        }else{


            counter.innerText =
            target.toLocaleString();


        }


    };


    update();


};






const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            startCounter(entry.target);


            observer.unobserve(entry.target);


        }


    });


},{


    threshold:.5


});





counters.forEach(counter=>{


    observer.observe(counter);


});








/* =========================
        FAQ
========================= */


const faqItems =
document.querySelectorAll(".faq-item");



faqItems.forEach(item=>{


    item.addEventListener("click",()=>{


        item.classList.toggle("active");



        const icon =
        item.querySelector("i");



        if(icon){


            icon.classList.toggle(
                "fa-minus"
            );


            icon.classList.toggle(
                "fa-plus"
            );


        }


    });


});








/* =========================
        SCROLL REVEAL
========================= */


const revealElements =
document.querySelectorAll(
".content-card, .stage-card, .screenpack-card, .stat-card"
);





const revealObserver =
new IntersectionObserver((items)=>{


    items.forEach(item=>{


        if(item.isIntersecting){


            item.target.classList.add(
                "reveal",
                "active"
            );


        }


    });


},{


    threshold:.15


});






revealElements.forEach(element=>{


    revealObserver.observe(element);


});








/* =========================
        SMOOTH ANCHORS
========================= */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


    anchor.addEventListener(
    "click",
    function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();



            target.scrollIntoView({


                behavior:"smooth"


            });


        }


    });


});






/* =========================
        IMAGE ERROR HANDLER
========================= */


document.querySelectorAll("img")
.forEach(img=>{


    img.addEventListener(
    "error",
    ()=>{


        img.src =
        "assets/images/default.jpg";


    });


});







});