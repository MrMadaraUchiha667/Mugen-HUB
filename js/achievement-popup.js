/* =====================================
    MUGEN HUB ACHIEVEMENT POPUP
===================================== */


function showAchievement(data){



const popup =

document.querySelector(

"#achievement-popup"

);



if(!popup)
return;





document.querySelector(

"#achievement-name"

).innerText =

data.name;





document.querySelector(

"#achievement-description"

).innerText =

data.description || 
"Nova conquista desbloqueada!";





document.querySelector(

"#achievement-xp"

).innerText =

"+" + data.xp + " XP";






popup.classList.add(

"show"

);







const sound =

new Audio(

"assets/sounds/achievement.mp3"

);



sound.volume = 0.5;


sound.play();







setTimeout(()=>{


popup.classList.remove(

"show"

);


},6000);



}