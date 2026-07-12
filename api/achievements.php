<?php

header(
    "Content-Type: application/json"
);


$method = $_SERVER["REQUEST_METHOD"];


$achievementsFile = "achievements.json";
$usersFile = "users.json";



$achievements = json_decode(

    file_get_contents($achievementsFile),

    true

);



$users = json_decode(

    file_get_contents($usersFile),

    true

);





/*
=====================================================
GET
Retorna lista de conquistas
=====================================================
*/


if($method === "GET"){



    $userId = $_GET["user"] ?? null;



    // Sem usuário retorna todas

    if(!$userId){


        echo json_encode(

            $achievements

        );


        exit;


    }





    foreach($users["users"] as $user){



        if($user["id"] == $userId){



            echo json_encode([


                "available" => 
                $achievements["achievements"],



                "unlocked" =>

                $user["achievements"] ?? []



            ]);



            exit;


        }


    }



    echo json_encode([

        "status"=>"user_not_found"

    ]);



    exit;


}









/*
=====================================================
POST
Desbloquear conquista
=====================================================
*/


if($method === "POST"){



    $data = json_decode(

        file_get_contents("php://input"),

        true

    );





    $userId = $data["user"];

    $achievementId = $data["achievement"];







    foreach($users["users"] as &$user){



        if($user["id"] == $userId){





            if(!isset($user["achievements"])){

                $user["achievements"] = [];

            }







            /*
            Evita duplicar conquista
            */


            foreach($user["achievements"] as $item){


                if($item["id"] == $achievementId){


                    echo json_encode([

                        "status"=>"already_unlocked"

                    ]);


                    exit;


                }


            }








            foreach($achievements["achievements"] as $achievement){



                if($achievement["id"] == $achievementId){





                    $user["achievements"][] = [

                    "id"=>$achievement["id"],

                    "name"=>$achievement["name"],

                    "description"=>$achievement["description"],

                    "icon"=>$achievement["icon"],

                    "xp"=>$achievement["xp"]

];







                    $user["xp"] =

                    ($user["xp"] ?? 0)

                    +

                    $achievement["xp"];






                    $user["level"] =

                    floor(

                        $user["xp"] / 1000

                    )

                    +1;







                    file_put_contents(

                        $usersFile,

                        json_encode(

                            $users,

                            JSON_PRETTY_PRINT |

                            JSON_UNESCAPED_UNICODE

                        )

                    );






                    echo json_encode([


                        "status"=>"unlocked",


                        "achievement"=>$achievement,


                        "xp"=>$user["xp"],


                        "level"=>$user["level"]



                    ]);



                    exit;


                }



            }

        }

    }



    echo json_encode([

        "status"=>"error"

    ]);


}


?>