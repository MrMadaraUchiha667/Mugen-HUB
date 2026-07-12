/* =====================================================
        MUGEN HUB ACHIEVEMENTS
===================================================== */


async function loadAchievements(){



let response=

await fetch(

"../api/achievements.json"

);



let data=

await response.json();





let box=

document.querySelector(

"#achievement-list"

);





data.achievements.forEach(a=>{


box.innerHTML += `


<div class="achievement">


<div class="icon">

${a.icon}

</div>



<h3>

${a.name}

</h3>


<p>

${a.description}

</p>



<span>

+${a.xp} XP

</span>


</div>


`;


});


}



loadAchievements();