function getName() {
    let name;
    while (true) {
        name = prompt("What is your name?");
        if (!name) {
            alert("Name cannot be empty. Please enter a valid name.");
            continue;
        }
        // Check if the input contains only letters
        if (/^[a-zA-Z]+$/.test(name)) {
            break;
        } else {
            alert("Invalid input. Please use only letters.");
        }
    }
    // Capitalize the first letter
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return name;
}

function getNumber(promptText) {
    let num;
    while (true) {
        num = prompt(promptText);
        // Check if the input is a valid number
        if (!isNaN(num) && num.trim() !== "") {
            return Number(num);
        } else {
            alert("Invalid input. Please enter a valid number.");
        }
    }
}

var name = getName();
alert("Hello " + name + ", nice to meet you. My name is Website.");

alert("OK, " + name + ", now I would like you to give me two numbers I can add together.");

var a = getNumber("What is your first number?");
var b = getNumber("What is your second number?");

alert("Calculating..........");
var c = a + b;
let message;

if (c <= 100) {
    message = "Why did you calculate that even a 5 year old could do it.";
} else if (c <= 1000) {
    message = "That wasn't that hard do it yourself next time.";
} else if (c <= 100000) {
    message = "You could've done it still you seem lazy.";
} else {
    message = "The answer is an example of one of the only reason why you should use a calculator.";
}

alert(a + " + " + b + " = " + c.toLocaleString() + ". " + message);