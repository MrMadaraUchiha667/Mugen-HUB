 =====================================================
        MUGEN HUB
        DATABASE LOADER
===================================================== 


(function(){



if(!window.MugenDatabase)
return;






const customContent =

JSON.parse(

localStorage.getItem(
mugen-content
)

)


[];








    CONVERTE CONTEÚDO DO ADMIN



customContent.forEach(item={





let formatted = {


iditem.id,


nameitem.name,


category
item.category,


version
item.version,


author
item.author  Comunidade,


image
item.image  assetsimagesdefault.jpg,


download
item.download  #,


description
item.description  Sem descrição.


};






switch(item.category){



case characters


MugenDatabase.characters.push(formatted);


break;




case stages


MugenDatabase.stages.push(formatted);


break;




case screenpacks


MugenDatabase.screenpacks.push(formatted);


break;



}





});








})();

/* =====================================================
        API DATABASE LOADER
===================================================== */


fetch(
"api/get-content.php"
)

.then(

response=>

response.json()

)

.then(

data=>{


if(!window.MugenDatabase)
return;




MugenDatabase.characters.push(

...data.characters

);



MugenDatabase.stages.push(

...data.stages

);



MugenDatabase.screenpacks.push(

...data.screenpacks

);



});