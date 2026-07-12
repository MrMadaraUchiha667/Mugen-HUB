/* =====================================================
        MUGEN HUB COMMENTS
===================================================== */



const characterID =

new URLSearchParams(

location.search

)

.get("id");






async function loadComments(){



let response=

await fetch(

`api/comments.php?character=${characterID}`

);



let comments=

await response.json();




let box=

document.querySelector(

"#commentsList"

);



box.innerHTML="";





comments.forEach(c=>{


box.innerHTML += `


<div class="comment">


<h3>

${c.user}

</h3>



<p>

${c.text}

</p>


<div>

❤️ ${c.likes}

</div>



</div>


`;



});


}








document

.querySelector("#sendComment")

.onclick=

async()=>{



let user=

JSON.parse(

localStorage.getItem(

"mugen-user"

)

);




await fetch(

"api/comments.php",

{


method:"POST",


headers:{


"Content-Type":

"application/json"

},


body:

JSON.stringify({


character:characterID,


user:user.name,


text:

commentText.value


})


}

);



commentText.value="";


loadComments();


};





loadComments();