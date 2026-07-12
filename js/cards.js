/* =====================================================
        MUGEN HUB
        DYNAMIC CARDS SYSTEM
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{



if(!window.MugenDatabase)
    return;





/* =========================
        CONTAINERS
========================= */


const characterContainer =
document.querySelector(
"#characters-container"
);



const stageContainer =
document.querySelector(
"#stages-container"
);



const screenpackContainer =
document.querySelector(
"#screenpacks-container"
);








/* =========================
        LOAD CHARACTERS
========================= */


if(characterContainer){



MugenDatabase.characters
.forEach(item=>{


characterContainer.appendChild(

createCard(item)

);


});


}







/* =========================
        LOAD STAGES
========================= */


if(stageContainer){



MugenDatabase.stages
.forEach(item=>{


stageContainer.appendChild(

createCard(item)

);


});


}







/* =========================
        LOAD SCREENPACKS
========================= */


if(screenpackContainer){



MugenDatabase.screenpacks
.forEach(item=>{


screenpackContainer.appendChild(

createCard(item)

);


});


}







/* =========================
        CARD CREATOR
========================= */


function createCard(item){



const card =
document.createElement("article");



card.className =
"content-card reveal";





card.innerHTML = `



<div class="card-image">


<img

src="${item.image}"

alt="${item.name}">


<div class="card-overlay">


<a href="#">

Ver detalhes

</a>


</div>


</div>






<div class="card-content">



<div class="card-top">


<button

class="favorite-btn"

data-id="${item.id}">


<i class="fa-regular fa-heart"></i>


</button>



</div>





<h3>

${item.name}

</h3>





<p>

${item.franchise || item.category}

</p>






<div class="rating">


<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>

<i class="fa-solid fa-star"></i>


</div>






<div class="card-footer">



<span>

${item.version}

</span>




<button

class="download-btn"

data-file="${item.download}">


<i class="fa-solid fa-download"></i>


Download


</button>




</div>



</div>



`;





return card;



}






});