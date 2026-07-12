<?php


header(
"Content-Type: application/json"
);



$data =
json_decode(
file_get_contents("php://input"),
true
);



if(!$data){


echo json_encode([

"status"=>"error"

]);


exit;


}





$file =
"database.json";





$db =
json_decode(

file_get_contents($file),

true

);






$type =
$data["category"];





if(!isset($db[$type])){


$db[$type]=[];


}





$db[$type][]=$data;







file_put_contents(

$file,

json_encode(

$db,

JSON_PRETTY_PRINT |
JSON_UNESCAPED_UNICODE

)

);





echo json_encode([


"status"=>"success"


]);


?>