<?php


header(
"Content-Type: application/json"
);



$file="database.json";


$db=

json_decode(

file_get_contents($file),

true

);



$data=

json_decode(

file_get_contents("php://input"),

true

);



$id=$data["id"];



$rating=$data["rating"];





foreach($db["characters"] as &$item){



if($item["id"]==$id){



$item["votes"]

=

($item["votes"] ?? 0)+1;



$item["rating"]

=

($item["rating"] ?? 0)

+

$rating;



}


}




file_put_contents(

$file,

json_encode(

$db,

JSON_PRETTY_PRINT

)

);



echo json_encode([

"status"=>"success"

]);


?>