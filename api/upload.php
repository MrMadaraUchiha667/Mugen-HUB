<?php


header(
"Content-Type: application/json"
);



if(!isset($_FILES["file"])){


echo json_encode([

"status"=>"error"

]);


exit;


}





$type =
$_POST["type"];






$folder =
"../uploads/".$type."/";






if(!is_dir($folder)){


mkdir(

$folder,

0777,

true

);


}







$name =

time()
."_"
.$_FILES["file"]["name"];







$path =

$folder.$name;







move_uploaded_file(

$_FILES["file"]["tmp_name"],

$path

);







echo json_encode([


"status"=>"success",


"path"=>str_replace(

"../",

"",

$path

)



]);


?>