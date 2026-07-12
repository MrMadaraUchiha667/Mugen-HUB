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