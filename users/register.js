async function register(){



let data={


name:

name.value,


email:

email.value,


password:

password.value


};




let response =

await fetch(

"../api/register.php",

{


method:"POST",

headers:{


"Content-Type":

"application/json"

},

body:

JSON.stringify(data)


}

);




let result =

await response.json();




if(result.status=="success"){


location.href="login.html";


}

else{


document.querySelector("#result")

.innerHTML=

"Erro ao criar conta";


}



}