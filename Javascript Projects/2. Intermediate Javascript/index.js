/*pseudo random number generator 
for simulating a die roll*/
//"randomly" creates a random 16-place decimal between 0 - 0.9999999999999999
var decimal = Math.random();
//we multiply by '6' to fit the figure within the parameters of the die (6 outcomes)
var realNumber = decimal * 6;
//we take the floor of the above value to obtain a clean integer
var dieInteger = Math.floor(realNumber) + 1; 
console.log(dieInteger);

//Angela's version of the code above
var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

//The Love Calculator
var person1 = prompt("Write your first name:");
var person2 = prompt("Write your crush's first name:");
var fakePercentage = Math.random();
fakePercentage = fakePercentage * 100;
fakePercentage = Math.floor(fakePercentage) + 1;
alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%.");

//CONTROL FLOW
//The Love Calculator (with specific messages for specific percantages; C)
var person1 = prompt("Write your first name:");
var person2 = prompt("Write your crush's first name:");
var fakePercentage = Math.random();
fakePercentage = fakePercentage * 100;
fakePercentage = Math.floor(fakePercentage) + 1;
if (fakePercentage > 70){
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%. You love each other like Kanye Loves Kanye");
} else {
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%.");
}

//COMPARATORS AND EQUALITY
//The Love Calculator (with added message types based on score ranges)
var person1 = prompt("Write your first name:");
var person2 = prompt("Write your crush's first name:");
var fakePercentage = Math.random();
fakePercentage = fakePercentage * 100;
fakePercentage = Math.floor(fakePercentage) + 1;
if (fakePercentage > 70){
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%. You love each other like Kanye Loves Kanye");
} 
if (fakePercentage > 30 && fakePercentage <= 70) {
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%.");
}
if (fakePercentage <= 30) {
    alert(person1 + "'s love compatibility with " + person2 + " is: " + fakePercentage + "%. You go together like oil & water");
}

//Leap Year determination
function isItALeapYear(year){
    if(year % 4 === 0){
        if(year % 100 !== 0){
            return "Yes, " + year + " is a leap year.";
        } else{
            if(year % 400 ===0){
                return "Yes, " + year + " is a leap year.";
            } else{
                return "No, " + year + " is not a leap year.";
            }
        }
    }else{
        return "No, " + year + " is not a leap year.";
    }
}

while(true){
    var inputYear = prompt("Enter your year");
    alert(isItALeapYear(inputYear));
}

//Collections and Javascript Arrays

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var checkInName = prompt("Could we have your name?");

if(guestList.includes(checkInName)){
    alert("Hello, " + checkInName + "! Welcome to the party :)");
}else{
    alert("Unfortunately, your name isn't on the guest list. Maybe next time.");
}

/*FizzBuzz Challenge (for the iteration to work,
run the "fizzBuzz" function in the Chrome 
console rather that as code in the "sources" file)*/
var items = [];
var item = 0;

function fizzBuzz(){
    item = item + 1;
    items.push(item);
    console.log(items);
}

var items = [];
var item = 0;

function fizzBuzz(){
    item = item + 1;
    if (item % 3 === 0 && item % 5 !== 0){
        items.push("Fizz");
    } else if (item % 3 !== 0 && item % 5 === 0){
        items.push("Buzz");
    } else if (item % 3 === 0 && item % 5 === 0){
        items.push("FizzBuzz");
    } else{
        items.push(item);
    }
    console.log(items);
}

fizzBuzz();

//FizzBuzz with While Loop for easier automation
var items = [];
var item = 1;

function fizzBuzz(){

    while(item <= 100){
        if (item % 3 === 0 && item % 5 !== 0){
        items.push("Fizz");
        } else if (item % 3 !== 0 && item % 5 === 0){
        items.push("Buzz");
        } else if (item % 3 === 0 && item % 5 === 0){
        items.push("FizzBuzz");
        } else{
        items.push(item);
        }
        item = item + 1;
    }
    
    console.log(items);
}

fizzBuzz();

//Who's Buying Lunch Code challenge
var friendGroup = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

function whoIsPayingForLunch(array){
    var index = Math.floor(Math.random()*(array.length));
    return array[index];
}

whoIsPayingForLunch(friendGroup);

//Beer Song
function beerSong(){
    var numberOfBeerBottles = 99;
    while(numberOfBeerBottles>0){
        console.log(numberOfBeerBottles + " bottles of beer on the wall, " + numberOfBeerBottles + " bottles of beer. Take 1 down, pass it around, " + (numberOfBeerBottles - 1) + " bottles of beer on the wall.");
        numberOfBeerBottles--;
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

//FizzBuzz with For Loop for easier automation
var items = [];


function fizzBuzz(){

    for(var item = 1; item < 101; item++){
        if (item % 3 === 0 && item % 5 !== 0){
        items.push("Fizz");
        } else if (item % 3 !== 0 && item % 5 === 0){
        items.push("Buzz");
        } else if (item % 3 === 0 && item % 5 === 0){
        items.push("FizzBuzz");
        } else{
        items.push(item);
        }
        
    }
    
    console.log(items);
}

//first step: Fibonacci sequence n-th term generator
function fibonacciSequence(n){
    if (n=1){
        return 0;
    }else if (n=2){
        return 1;
    }else if (n > 2){
        return fibonacciSequence(n-2) + fibonacciSequence(n-1);
    }
}

/*Second step: nest the above fibonacciSequence() function 
within the main fibonacciGenerator() function which helps
us to return the whole array sequence of n Fibonacci numbers */
function fibonacciGenerator(n){
    function fibonacciSequence(n){
        if (n===1){
            return 0;
        }
        if (n===2){
            return 1;
        }
        if (n > 2){
            return fibonacciSequence(n-2) + fibonacciSequence(n-1);
        }
    }

    var fibonacciArray = [];
    for(var i = 1; i < n+1; i++){
        fibonacciArray.push(fibonacciSequence(i))
    }
    console.log(fibonacciArray);
}

//Angela's Solution Code
function fibonacciGenerator(){
    var output = [];
    if (n === 1){
        output = [0];
    }
    else if (n === 2){
        output = [0, 1];
    }
    else{
        output = [0, 1];

        for(var i = 2; 1 < n; i++){
            output.push(output[output.length - 2] + output[output.length -1]);
        }
    }

    return output;
}
