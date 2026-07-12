/* =====================================================
        MUGEN HUB PROFILE
===================================================== */


const user =

JSON.parse(

localStorage.getItem(

"mugen-user"

)

);





if(user){



document.querySelector(

"#username"

)

.innerHTML=user.name;




document.querySelector(

"#avatar"

)

.src="../"+user.avatar;





document.querySelector(

"#banner"

)

.src="../"+user.banner;





document.querySelector(

"#level"

)

.innerHTML=user.level || 1;






let xp=

user.xp || 0;




document.querySelector(

"#xp"

)

.style.width=

xp+"%";





let badges=

document.querySelector(

"#badges"

);





(user.badges || [])

.forEach(b=>{


badges.innerHTML += `


<span class="badge">

🏆 ${b}

</span>


`;


});



}