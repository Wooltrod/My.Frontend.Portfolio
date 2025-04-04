document; //selects entire HTML Page
document.firstElementChild; //selects the <html>...</html> element and everything within it
document.firstElementChild.firstElementChild; //usually returns the Head Element + its contents
document.firstElementChild.lastElementChild; //usually returns the body element + its contents

document.firstElementChild.lastElementChild.firstElementChild; //let's say this brings us to a H1

//...we can save it in a Javascript variable:
var heading = document.firstElementChild.lastElementChild.firstElementChild;

//we can then target the heading variable with functions to modify our H1 as we wish:
heading.innerHTML = "Good Bye"; //"innerHTML" denotes the part between the given HTML tags

//we can also modify the STYLING of HTML elements:
heading.style.color = "red";

//selecting elements and performing actions on them:
document.querySelector("input").click();

//select the 3rd li list element, and edit its contents from "Third" to your name:
//my solution:
document.querySelector("ul").lastElementChild.innerHTML = "Ian Peter Otieno Adoyo";

//Challenge: change the first list element (anchor) to green/a color of your choice:
document.querySelector("li a").style.color = "green"; //note we have narrowed down by using "descendance"

//Challenge: changing the value of the background-color property of the button to yellow:
document.querySelector("button").style.backgroundColor = "yellow";

/*separation of concerns: using javascript to simply select 
snippets of styling from stylesheet to apply to elements*/
document.querySelector("h1").classList.add("huge");
