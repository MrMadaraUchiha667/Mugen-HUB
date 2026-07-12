/* =====================================================
        MUGEN HUB
        DETAILS PAGE SYSTEM
===================================================== */


document.addEventListener("DOMContentLoaded",()=>{



if(!window.MugenDatabase)
    return;





/* =========================
        GET URL ID
========================= */


const params =
new URLSearchParams(
window.location.search
);



const id =
params.get("id");





if(!id)
    return;








/* =========================
        FIND ITEM
========================= */


const item =
MugenDatabase.find(id);





if(!item)
    return;








/* =========================
        ELEMENTS
========================= */


const image =
document.querySelector(
"#detail-image"
);



const title =
document.querySelector(
"#detail-title"
);



const description =
document.querySelector(
"#detail-description"
);



const category =
document.querySelector(
"#detail-category"
);



const version =
document.querySelector(
"#detail-version"
);



const author =
document.querySelector(
"#detail-author"
);



const download =
document.querySelector(
"#detail-download"
);









/* =========================
        LOAD DATA
========================= */



if(image)
image.src =
item.image;



if(title)
title.innerHTML =
item.name;



if(description)
description.innerHTML =
item.description;



if(category)
category.innerHTML =
item.category;



if(version)
version.innerHTML =
item.version;



if(author)
author.innerHTML =
item.author || 
"Comunidade";





if(download){



download.dataset.file =
item.download;



download.innerHTML = `


<i class="fa-solid fa-download"></i>


Baixar ${item.name}


`;



}








/* =========================
        FAVORITE
========================= */


const favorite =
document.querySelector(
"#detail-favorite"
);



if(favorite){



favorite.dataset.id =
item.id;



}





});