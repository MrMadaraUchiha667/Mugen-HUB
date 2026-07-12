/* =====================================================
        MUGEN HUB
        CONTENT MANAGER
===================================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{



const form =
document.querySelector(
"#contentForm"
);




form?.addEventListener(
"submit",
(e)=>{


e.preventDefault();





const item = {



id:

Date.now().toString(),



name:

document.querySelector("#name").value,



category:

document.querySelector("#type").value,



version:

document.querySelector("#version").value,



author:

document.querySelector("#author").value,



image:

document.querySelector("#image").value,



download:

document.querySelector("#download").value,



description:

document.querySelector("#description").value


};






let database =

JSON.parse(

localStorage.getItem(
"mugen-content"
)

)

||

[];





database.push(item);





localStorage.setItem(

"mugen-content",

JSON.stringify(database)

);







document.querySelector(
"#result"
).innerHTML =


"Conteúdo salvo com sucesso!";





form.reset();




});



});

/* =====================================================
        MUGEN HUB
        REAL CMS SYSTEM
===================================================== */


document

.querySelector("#contentForm")

.addEventListener(

"submit",

async(e)=>{


e.preventDefault();






const item = {


id:
Date.now().toString(),



name:

name.value,



category:

type.value,



version:

version.value,



author:

author.value,



image:

image.value,



download:

download.value,



description:

description.value


};






const response =

await fetch(

"../api/add-content.php",

{


method:"POST",


headers:{


"Content-Type":

"application/json"


},


body:

JSON.stringify(item)


}



);






const result =

await response.json();






if(result.status==="success"){


document.querySelector("#result")

.innerHTML =

"✅ Conteúdo publicado no MUGEN HUB!";


}



});