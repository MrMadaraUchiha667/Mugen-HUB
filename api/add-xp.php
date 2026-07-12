<?php


header(
"Content-Type: application/json"
);



$data = json_decode(

file_get_contents("php://input"),

true

);



$db = json_decode(

file_get_contents("users.json"),

true

);



foreach($db["users"] as &$user){


if($user["id"]==$data["id"]){



$user["xp"]

+=

$data["xp"];





$user["level"]

=

floor(

$user["xp"]/1000

)+1;



}



}



file_put_contents(

"users.json",

json_encode(

$db,

JSON_PRETTY_PRINT

)

);



echo json_encode([

"status"=>"success"

]);


?>