var a = "3";
var b = "8";

///execute a swap using only three lines of code below

var temp = a;
var a = b;
var b = temp;

console.log("a is " + a);
console.log("b is " + b);

//string lengths (twitter character counter)
var input = prompt("write in your text");
console.log("you have written " + input.length + " characters, you have " + (140 - input.length) + " characters left");

//string slicing
var givenName = "Angela";
givenName.slice(0,1); //output is "A"
givenName.slice(0,2); //output is "An"
givenName.slice(0,3); //output is "Ang"
givenName.slice(0,4); //output is "Ange"
givenName.slice(0,5); //output is "Angel"
givenName.slice(0,6); //output is "Angela"
givenName.slice(1,6); //output is "ngela"
givenName.slice(2,6); //output is "gela"
givenName.slice(3,6); //output is "ela"
givenName.slice(4,6); //output is "la"
givenName.slice(5,6); //output is "a"

//string slicing [twitter implementation]
var input = prompt("write in your text");
var tweet = input.slice(0,139); //this is wrong, should be (0, 140)
alert("Your tweet is: " + tweet + ". " + (input.length - tweet.length) + " characters were removed from your tweet.");

//instructors solution code
var tweet2 = prompt("Compose your tweet: ");
var tweetUnder140 = tweet2.slice(0, 140);
alert(tweetUnder140);

//instructor's solution code, condensed into a single line
alert(prompt("Compose your tweet: ").slice(0, 140));

//string conversion to uppercase
var myName = "Angela";
myName = myName.toUpperCase();
console.log(myName);//ANGELA

//String conversion to lowercase
myName = myName.toLowerCase();
console.log(myName);//angela

/*Challenge: Write JS code that asks user to input 
their name, and returns to the user (via alert) a 
capitalised name regardless of the casing of the input*/
var usersName = prompt("What is your name?");
var firstLetter = (usersName.slice(0,1)).toUpperCase();
var restOfTheLetters = (usersName.slice(1,Infinity)).toLowerCase();
var capitalisedUsername = firstLetter + restOfTheLetters;
alert("Hello, " + capitalisedUsername + "!");

/*dog age to human age converter 
(combining operations; applying parentheses)*/
var dogAge = prompt("What is the age of your dog?");
var humanAge = ((dogAge - 2) * 4) + 21; 
/*note the use of parenthesis above to highlight the 
order of operations, for better code clarity*/
alert("Your doggo is " + humanAge + " years old, in human years :)");

//creating and applying parameterized functions
function buyJarsOfMilk(cashAtHand){
    console.log("bought " + Math.floor(cashAtHand / 1.5) + " bottles of milk");
}

buyJarsOfMilk(7);

/*Life in Weeks Coding Exercise
Create a function that tells us 
how many days, weeks and months 
we have left if we live until 90 years
It will take your current age as 
the input and console logs a message with our time left in the format:
You have x days, y weeks, and z months left
For this challenge, assume theer are 365 days 
in a year, 52 weeks in a year, and 12 months in a year*/

function lifeInWeeks(age){
    var daysLeft = 32850 - (age * 365);
    var weeksLeft = 4680 - (age * 52);
    var monthsLeft = 1080 - (age * 12);
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left")
}

//calling functions within other functions
function getMilk(money, costPerBottle){
    console.log("buy " + calcNumberOfBottles(money, costPerBottle) + " bottles of milk.");
    return calculateChange(money,costPerBottle);
}

function calcNumberOfBottles(cashAtHand, costPerBottle){
    return Math.floor(cashAtHand / costPerBottle);
}

function calculateChange(cashAtHand, costPerBottle){
    return "Your change is: $ " + cashAtHand % costPerBottle;
}