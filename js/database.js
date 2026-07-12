/* =====================================================
        MUGEN HUB
        DATABASE SYSTEM
===================================================== */



const MugenDatabase = {


/* =========================
        CHARACTERS
========================= */


characters:[


{
id:"scorpion-mk",

name:"Scorpion",

category:"Character",

franchise:"Mortal Kombat",

version:"MUGEN 1.1",

author:"Community",

image:
"assets/images/characters/scorpion.jpg",

download:
"downloads/scorpion.zip",

description:
"O lendário ninja do Mortal Kombat pronto para batalhas."


},



{
id:"goku-db",

name:"Goku",

category:"Character",

franchise:"Dragon Ball",

version:"IKEMEN GO",

author:"Community",

image:
"assets/images/characters/goku.jpg",

download:
"downloads/goku.zip",

description:
"O guerreiro Saiyajin mais famoso dos animes."


},



{
id:"naruto-uzumaki",

name:"Naruto",

category:"Character",

franchise:"Naruto",

version:"MUGEN 1.0",

author:"Community",

image:
"assets/images/characters/naruto.jpg",

download:
"downloads/naruto.zip",

description:
"O ninja da Vila da Folha entra no mundo MUGEN."

}



],







/* =========================
        STAGES
========================= */


stages:[


{

id:"night-city",

name:"Night City",

category:"Stage",

version:"MUGEN 1.1",

image:
"assets/images/stages/city.jpg",

download:
"downloads/night-city.zip",

description:
"Uma arena futurista iluminada por neon."

},



{

id:"ancient-temple",

name:"Ancient Temple",

category:"Stage",

version:"MUGEN 1.1",

image:
"assets/images/stages/temple.jpg",

download:
"downloads/temple.zip",

description:
"Um templo antigo para batalhas lendárias."

}



],







/* =========================
        SCREENPACKS
========================= */


screenpacks:[


{

id:"future-battle",

name:"Future Battle",

category:"Screenpack",

version:"MUGEN 1.1",

image:
"assets/images/screenpacks/future.jpg",

download:
"downloads/future-battle.zip",

description:
"Interface futurista para seu jogo de luta."

},



{

id:"classic-arcade",

name:"Classic Arcade",

category:"Screenpack",

version:"MUGEN 1.0",

image:
"assets/images/screenpacks/arcade.jpg",

download:
"downloads/classic.zip",

description:
"Visual inspirado nos fliperamas clássicos."

}


]





};









/* =====================================================
        DATABASE FUNCTIONS
===================================================== */



MugenDatabase.getAll = function(){


return [

...this.characters,

...this.stages,

...this.screenpacks

];


};






MugenDatabase.find = function(id){



return this.getAll()

.find(

item => item.id === id

);


};







MugenDatabase.search = function(term){



term =
term.toLowerCase();



return this.getAll()

.filter(item=>{


return (

item.name
.toLowerCase()
.includes(term)


||

item.category
.toLowerCase()
.includes(term)


||

item.version
.toLowerCase()
.includes(term)


);


});


};








MugenDatabase.category = function(type){



return this.getAll()

.filter(item=>{


return item.category === type;


});


};








/* =========================
        EXPORT
========================= */


window.MugenDatabase =
MugenDatabase;