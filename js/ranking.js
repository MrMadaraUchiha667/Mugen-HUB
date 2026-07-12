fetch(
"api/ranking.php"
)

.then(

r=>r.json()

)

.then(

data=>{


console.log(

"Ranking MUGEN",

data

);


});