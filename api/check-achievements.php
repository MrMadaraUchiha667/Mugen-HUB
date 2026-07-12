<?php


header(
"Content-Type: application/json"
);



$user = json_decode(

file_get_contents("php://input"),

true

);



$achievements = json_decode(

file_get_contents("achievements.json"),

true

);



$result=[];




if(count($user["downloads"])>=1){


$result[]="first-download";


}



if(count($user["downloads"])>=100){


$result[]="collector";


}




if(count($user["uploads"])>=1){


$result[]="creator";


}




echo json_encode($result);


?>