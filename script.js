const dinosaur = document.getElementById("dinosaur");
const cactus = document.getElementById("cactus");

function jump(){
    dinosaur.style.top = "50px";
    setTimeout(function(){
        dinosaur.style.top = "150px";
    }, 500);
}

function checkIfAlive(){
    let dinoTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    console.log(dinoTop);

    if(cactusLeft < 50 && dinoTop >= 140){
        alert("Game over");
    }
}

let isAlive = setInterval(checkIfAlive, 10);

/*document.addEventListener("keydown", function(event){
    jump();
});*/

document.addEventListener("keydown", jump);