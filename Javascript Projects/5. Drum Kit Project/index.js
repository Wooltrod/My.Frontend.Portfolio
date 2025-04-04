function handleClick(){
    alert("I got clicked!");
}

function play(){
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}

for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", play);
}

//alternative implementation:
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    });
}

//Higher order functions
function multiply(num1, num2){return num1 * num2;}
function divide(num1, num2){return num1 / num2;}
function subtract(num1, num2){return num1 - num2;}
function add(num1, num2){return num1 + num2;}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

//applying DOM to change the text color of pressed buttons
// for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//         this.classList.add("clicked");
//     });
// }

//alternative solution
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        this.style.color = "white";
    });
}



//Javascript Objects
var housekeeper1 = {
    name: "ghette",
    age: 23,
    languages: ["English", "Swahili"],
    yearsOfExperience: 12
}

/*Javascript Objects using Constructor Function
note capitalization*/
function Housekeeper(name, age, languages, yearsOfExperience){
    this.name = name;
    this.age = age;
    this.languages = languages;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaning = function (){
        alert("cleaning in progress");
    }
}

var housekeeper1 = new Housekeeper("ghette", 23, ["English", "Swahili"], 12);

function makeSound(key){
    switch (key){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("./sounds/tom-1.mp3");
            tom4.play();
        break;

        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case "k":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        default: console.log(buttonPressed);
    };
}

//playing sound by clicking on-screen buttons
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//playing sounds by pressing keyboard keys
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function (event){
        var buttonPressed = event.key;
        makeSound(buttonPressed);
        buttonAnimation(buttonPressed);
    });
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}