async function login(){



let response=

await fetch(

"../api/login.php",

{


method:"POST",


headers:{


"Content-Type":

"application/json"

},


body:

JSON.stringify({


email:

email.value,


password:

password.value


})


}

);



let data=

await response.json();



if(data.status=="success"){



localStorage.setItem(

"mugen-user",

JSON.stringify(

data.user

)

);



location.href="profile.html";


}

else{


alert(

"Login inválido"

);


}


}