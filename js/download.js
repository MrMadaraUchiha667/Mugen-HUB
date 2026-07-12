/* =====================================================
        MUGEN HUB
        DOWNLOAD SYSTEM
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{



const downloadButtons =
document.querySelectorAll(".download-btn");



const DOWNLOAD_KEY =
"mugen-download-count";





/* =========================
        INIT DOWNLOADS
========================= */


downloadButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


startDownload(button);


});


});







/* =========================
        START DOWNLOAD
========================= */


function startDownload(button){



const file =
button.dataset.file;



const originalText =
button.innerHTML;



let timer = 5;



button.disabled = true;



button.innerHTML = `

<i class="fa-solid fa-clock"></i>

Aguarde ${timer}s

`;





const countdown =
setInterval(()=>{


timer--;



button.innerHTML = `

<i class="fa-solid fa-clock"></i>

Aguarde ${timer}s

`;





if(timer <= 0){


clearInterval(countdown);



finishDownload(
button,
file,
originalText
);



}



},1000);



}







/* =========================
        FINISH
========================= */


function finishDownload(
button,
file,
originalText
){



const link =
document.createElement("a");



link.href =
file;



link.download =
"";



document.body.appendChild(
link
);



link.click();



link.remove();






updateDownloadCount(
file
);





button.disabled=false;



button.innerHTML = `

<i class="fa-solid fa-check"></i>

Download iniciado

`;





setTimeout(()=>{


button.innerHTML =
originalText;



},3000);




}







/* =========================
        DOWNLOAD COUNTER
========================= */


function updateDownloadCount(file){



let downloads =
JSON.parse(

localStorage.getItem(
DOWNLOAD_KEY
)

)
||
{};





if(!downloads[file]){


downloads[file]=0;


}




downloads[file]++;





localStorage.setItem(

DOWNLOAD_KEY,

JSON.stringify(
downloads
)

);



}








/* =========================
        PUBLIC API
========================= */


window.MugenDownloads = {



get(file){


const data =
JSON.parse(

localStorage.getItem(
DOWNLOAD_KEY
)

)
||
{};



return data[file] || 0;


},



reset(){


localStorage.removeItem(
DOWNLOAD_KEY
);


}



};






});