/* =====================================================
        MUGEN HUB
        SEARCH SYSTEM
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{



const searchInput =
document.querySelector("#searchInput");

const searchResults =
document.querySelector(".search-results");



if(!searchInput)
    return;





/* =========================
        DATABASE MOCK
========================= */


const mugenDatabase = [


{
name:"Scorpion",
category:"Character",
type:"Mortal Kombat",
link:"personagem.html"
},


{
name:"Sub Zero",
category:"Character",
type:"Mortal Kombat",
link:"personagem.html"
},


{
name:"Goku",
category:"Character",
type:"Dragon Ball",
link:"personagem.html"
},


{
name:"Naruto",
category:"Character",
type:"Naruto",
link:"personagem.html"
},


{
name:"Night City",
category:"Stage",
type:"Cyberpunk",
link:"stage.html"
},


{
name:"Ancient Temple",
category:"Stage",
type:"Arena",
link:"stage.html"
},


{
name:"Future Battle",
category:"Screenpack",
type:"Interface",
link:"screenpack.html"
},


{
name:"Classic Arcade",
category:"Screenpack",
type:"Interface",
link:"screenpack.html"
}



];







/* =========================
        SEARCH EVENT
========================= */


searchInput.addEventListener(
"input",
()=>{


const value =
searchInput.value
.toLowerCase()
.trim();



searchResults.innerHTML="";



if(value.length < 2){


    searchResults.classList.remove(
        "active"
    );


    return;


}




const results =
mugenDatabase.filter(item=>{


return (

item.name
.toLowerCase()
.includes(value)

||

item.type
.toLowerCase()
.includes(value)

);


});





displayResults(results);



});









/* =========================
        DISPLAY RESULTS
========================= */


function displayResults(results){



if(results.length === 0){


searchResults.innerHTML = `

<div class="no-result">

Nenhum conteúdo encontrado.

</div>

`;



searchResults.classList.add(
"active"
);


return;


}






results.forEach(item=>{



const result =
document.createElement("a");



result.href =
item.link;



result.className =
"search-item";



result.innerHTML = `


<div>

<strong>

${item.name}

</strong>


<span>

${item.category}

• ${item.type}

</span>


</div>


<i class="fa-solid fa-arrow-right"></i>


`;



searchResults.appendChild(
result
);



});



searchResults.classList.add(
"active"
);



}









/* =========================
        CLOSE SEARCH
========================= */


document.addEventListener(
"click",
(e)=>{


if(
!searchInput.contains(e.target)
&&
!searchResults.contains(e.target)

){


searchResults.classList.remove(
"active"
);


}


});







});