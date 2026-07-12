<?php

header("Content-Type: application/json");


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



$file="users.json";


$db =
json_decode(
file_get_contents($file),
true
);



foreach($db["users"] as $user){


if($user["email"] == $data["email"]){


echo json_encode([

"status"=>"exists"

]);


exit;


}


}



$newUser=[


"id"=>time(),


"name"=>$data["name"],


"email"=>$data["email"],


"password"=>password_hash(

$data["password"],

PASSWORD_DEFAULT

),


"avatar"=>"uploads/avatars/default.png",


"favorites"=>[],


"downloads"=>[]


];





$db["users"][]=$newUser;





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