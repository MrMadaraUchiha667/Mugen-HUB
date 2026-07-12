<?php


header(
"Content-Type: application/json"
);



if(!isset($_FILES["avatar"])){

echo json_encode([
"status"=>"error"
]);

exit;

}



$folder="../uploads/avatars/";



if(!is_dir($folder)){

mkdir(
$folder,
0777,
true
);

}





$name=

time()
."_"
.$_FILES["avatar"]["name"];




$path=

$folder.$name;





move_uploaded_file(

$_FILES["avatar"]["tmp_name"],

$path

);





echo json_encode([

"status"=>"success",

"path"=>"uploads/avatars/".$name

]);


?>