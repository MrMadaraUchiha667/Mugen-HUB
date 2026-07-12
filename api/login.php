<?php

header("Content-Type: application/json");


$data =
json_decode(
file_get_contents("php://input"),
true
);



$db =
json_decode(

file_get_contents("users.json"),

true

);




foreach($db["users"] as $user){



if(

$user["email"]==$data["email"]

&&

password_verify(

$data["password"],

$user["password"]

)

){



unset(
$user["password"]
);



echo json_encode([


"status"=>"success",


"user"=>$user


]);



exit;


}



}




echo json_encode([

"status"=>"error"

]);

?>