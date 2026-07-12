/* =====================================================
        MUGEN HUB
        MODAL SYSTEM
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{



const modal =
document.querySelector(".modal");

const modalContent =
document.querySelector(".modal-content");

const closeModal =
document.querySelector(".modal-close");





if(!modal)
    return;






/* =========================
        OPEN MODAL
========================= */


document.querySelectorAll(
"[data-modal]"
)
.forEach(button=>{


button.addEventListener(
"click",
()=>{


const type =
button.dataset.modal;



const content =
button.dataset.content;





openModal(
type,
content
);



});



});








function openModal(type,content){



modal.classList.add(
"active"
);



document.body.style.overflow =
"hidden";



switch(type){



case "image":



modalContent.innerHTML = `

<img 
src="${content}"
class="modal-image">

`;

break;






case "video":



modalContent.innerHTML = `

<video 
controls
autoplay
class="modal-video">

<source src="${content}">

</video>

`;

break;







case "download":



modalContent.innerHTML = `

<div class="download-modal">


<i class="fa-solid fa-download"></i>


<h2>

Download iniciado

</h2>


<p>

Obrigado por utilizar o MUGEN HUB.

</p>


<a href="${content}"
download
class="btn primary">

Baixar arquivo

</a>


</div>

`;

break;






default:



modalContent.innerHTML = content;



}



}








/* =========================
        CLOSE MODAL
========================= */


function close(){



modal.classList.remove(
"active"
);



modalContent.innerHTML="";


document.body.style.overflow =
"auto";



}





closeModal?.addEventListener(
"click",
close
);





modal.addEventListener(
"click",
(e)=>{


if(e.target === modal){


close();


}


});







/* =========================
        ESC KEY
========================= */


document.addEventListener(
"keydown",
(e)=>{


if(
e.key === "Escape"
&&
modal.classList.contains("active")

){


close();


}



});






});