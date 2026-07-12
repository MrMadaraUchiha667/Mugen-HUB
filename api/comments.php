<?php


header(
"Content-Type: application/json"
);



$file="comments.json";



$db=

json_decode(

file_get_contents($file),

true

);





if($_SERVER["REQUEST_METHOD"]=="POST"){



$data=

json_decode(

file_get_contents("php://input"),

true

);




$data["id"]=time();


$data["likes"]=0;




$db["comments"][]=$data;



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

exit;


}







$id=$_GET["character"] ?? "";




$result=[];



foreach($db["comments"] as $comment){



if($comment["character"]==$id){


$result[]=$comment;


}


}




echo json_encode($result);


?>