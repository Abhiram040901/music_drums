var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        makeItSound(this.innerHTML);
        animation(this.innerHTML);
    });
}
 document.addEventListener("keydown",function (event){
    makeItSound(event.key);
    animation(event.key);
 });

function makeItSound(key){
    switch(key){
        case 'A':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'b':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'h':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'i':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'R':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'a':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 'm':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    }
}
function animation(key){
    document.querySelector('.'+key).classList.add("pressed");

    setTimeout(function (){
        document.querySelector('.'+key).classList.remove("pressed");
    },100);

}
