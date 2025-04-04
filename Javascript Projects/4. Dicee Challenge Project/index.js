var randomNumberDieOne = (Math.floor(Math.random()*6)) + 1;

if(randomNumberDieOne === 1){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice1.png");
}else if(randomNumberDieOne === 2){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice2.png");
}else if(randomNumberDieOne === 3){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice3.png");
}else if(randomNumberDieOne === 4){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice4.png");
}else if(randomNumberDieOne === 5){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice5.png");
}else if(randomNumberDieOne === 6){
    document.querySelector(".dice > .img1").setAttribute("src", "./images/dice6.png");
}

var randomNumberDieTwo = (Math.floor(Math.random()*6)) + 1;

if(randomNumberDieTwo === 1){
    document.querySelector(".dice > .img2").setAttribute("src", "./images/dice1.png");
}else if(randomNumberDieTwo === 2){
    document.querySelector(".dice > .img2").setAttribute("src", "./images/dice2.png");
}else if(randomNumberDieTwo === 3){
    document.querySelector(".dice > .img2").setAttribute("src", "./images/dice3.png");
}else if(randomNumberDieTwo === 4){
    document.querySelector(".dice > .img2").setAttribute("src", "./images/dice4.png");
}else if(randomNumberDieTwo === 5){
    document.querySelector(".dice > .img2").setAttribute("src", "./images/dice5.png");
}else if(randomNumberDieTwo === 6){
    document.querySelector(".dice > .img2").setAttribute("src", "./images/dice6.png");
}

if(randomNumberDieOne > randomNumberDieTwo){
    document.querySelector("h1").textContent = "🚩Player One Wins!";
}else if(randomNumberDieTwo > randomNumberDieOne){
    document.querySelector("h1").textContent = "Player Two Wins!🚩";
}else if(randomNumberDieOne === randomNumberDieTwo){
    document.querySelector("h1").textContent = "Draw!";
}