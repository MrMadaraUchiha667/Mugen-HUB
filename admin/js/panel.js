/* =====================================================
        MUGEN HUB ADMIN PANEL
===================================================== */



document.addEventListener(
"DOMContentLoaded",
()=>{





/* AUTH CHECK */


if(
localStorage.getItem(
"mugen-admin"
)
!=="authenticated"

){


window.location.href =
"login.html";


return;


}








/* DATABASE LOAD */


if(window.MugenDatabase){


document.querySelector(
"#charactersCount"
).innerText =

MugenDatabase.characters.length;



document.querySelector(
"#stagesCount"
).innerText =

MugenDatabase.stages.length;



document.querySelector(
"#screenpacksCount"
).innerText =

MugenDatabase.screenpacks.length;


}








/* LOGOUT */


document.querySelector(
"#logout"
)
?.addEventListener(
"click",
()=>{


localStorage.removeItem(
"mugen-admin"
);



window.location.href =
"login.html";


});


});

const custom =

JSON.parse(

localStorage.getItem(
"mugen-content"
)

)

||

[];


document.querySelector(
"#downloadsCount"
).innerText =

custom.length * 125;