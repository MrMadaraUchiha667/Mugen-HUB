/* =====================================================
        MUGEN HUB
        FAVORITES SYSTEM
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{



const favoriteButtons =
document.querySelectorAll(".favorite-btn");



const FAVORITES_KEY =
"mugen-hub-favorites";





/* =========================
        LOAD FAVORITES
========================= */


let favorites =
JSON.parse(
localStorage.getItem(FAVORITES_KEY)
)
||
[];






/* =========================
        INIT BUTTONS
========================= */


favoriteButtons.forEach(button=>{


const id =
button.dataset.id;



updateButton(
button,
id
);





button.addEventListener(
"click",
()=>{


toggleFavorite(
id,
button
);



});


});








/* =========================
        ADD / REMOVE
========================= */


function toggleFavorite(id,button){



if(favorites.includes(id)){



favorites =
favorites.filter(
item=>item !== id
);



}else{



favorites.push(id);



}




saveFavorites();



updateButton(
button,
id
);



}





/* =========================
        UPDATE ICON
========================= */


function updateButton(button,id){



const icon =
button.querySelector("i");



if(
favorites.includes(id)
){


button.classList.add(
"active"
);



if(icon){


icon.className =
"fa-solid fa-heart";


}



}else{



button.classList.remove(
"active"
);



if(icon){


icon.className =
"fa-regular fa-heart";


}



}



}







/* =========================
        SAVE
========================= */


function saveFavorites(){



localStorage.setItem(

FAVORITES_KEY,

JSON.stringify(
favorites
)

);



}






/* =========================
        PUBLIC FUNCTION
========================= */


window.MugenFavorites = {


getAll(){


return favorites;


},



clear(){


favorites=[];


saveFavorites();


}



};







});