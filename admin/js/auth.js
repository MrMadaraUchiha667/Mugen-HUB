/* =====================================================
        MUGEN HUB ADMIN AUTH
===================================================== */


const loginForm =
document.querySelector("#loginForm");



loginForm?.addEventListener(
"submit",
(e)=>{


e.preventDefault();



const user =
document.querySelector("#username").value;



const pass =
document.querySelector("#password").value;





/*

LOGIN DEMO

ALTERAR FUTURAMENTE PARA API

*/


if(
user === "admin"
&&
pass === "mugenhub"
){



localStorage.setItem(

"mugen-admin",

"authenticated"

);



window.location.href =
"dashboard.html";




}else{



document.querySelector(
"#loginMessage"
).innerText =

"Usuário ou senha inválidos";



}



});