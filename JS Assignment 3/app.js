//Practice exercise 6.1

// See if you can write a function for yourself. We want to write a function that adds 
// two numbers.
// 1. Create a function that takes two parameters, adds the parameters together, 
// and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using 
// console.log.
// 4. Create a second call to the function using two more numbers as arguments 
// sent to the function.

function sum(a, b) {
    return a + b;
  }
  
let num1 = 5;
let num2 = 3;
  
console.log(sum(num1, num2)); 
console.log(sum(7, 2)); 


//Practice exercise 6.2

// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array  value.
// 5. Invoke the function

let descriptive_words = ['nice', 'cool', 'rude', 'cute', 'ugly']
function describeName() {
    let name = prompt('What is your name?')
    let random_word = Math.floor(Math.random() * descriptive_words.length);
    let randomDescriptive = descriptive_words[random_word];
    alert(name + ' is ' + randomDescriptive)
}
describeName()


// Practice exercise 6.3

// Create a basic calculator that takes two numbers and one string value indicating an operation. If the operation equals add, the two numbers should be added. If the operation equals subtract, the two numbers should be subtracted from one another. If there is no option specified, the value of the option should be add.The result of this function needs to be logged. Test your function by invoking it with different operators and no operator specified.
// 1. Set up two variables containing number values.
// 2. Set up a variable to hold an operator, either + or -.
// 3. Create a function that retrieves the two values and the operator string value within its parameters. Use those values with a condition to check if the operator is + or -, and add or subtract the values accordingly (remember if  not presented with a valid operator, the function should default to addition).
// 4. Within console.log(), call the function using your variables and output the response to the console.
// 5. Update the operator value to be the other operator type—either plus or minus—and call to the function again with the new updated argument


let number1 = 5;
let number2 = 3;
let operator = '+';

function calculator(a, b, operation) {
    if (operation === '+' || operation === undefined) {
        return a + b;}
    else if (operation === '-') {
        return a - b; }
    else {
        console.log('Invalid operator. Defaulting to addition.');
        return a + b;}
}

console.log(calculator(num1, num2, operator)); 
operator = '-';
console.log(calculator(num1, num2, operator));
console.log(calculator(num1, num2));


//Practice exercise 4.5

//Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
// 1. Create a variable called prize and use a prompt to ask the user to set the value
let prize = prompt("Select a number between 0 and 10 to win a prize!");
prize = parseInt(prize);
let outputMessage = "";

switch (prize) {
  case 0:
    outputMessage += "You won a candy!";
    break;
  case 1:
    outputMessage += "You won a pencil!";
    break;
  case 2:
    outputMessage += "You won Super hero stickers!";
    break;
  case 3:
    outputMessage += "You won a pencil case!";
    break;
  case 4:
    outputMessage += "You won a lollipop!";
    break;
  case 5:
    outputMessage += "You won a large chocolate bar!";
    break;
  case 6:
    outputMessage += "You won a chips packet!";
    break;
  case 7:
    outputMessage += "You won a Key-chain!";
    break;
  case 8:
    outputMessage += "You won a surprise box!";
    break;
  case 9:
    outputMessage += "You won a brand new book!";
    break;
  case 10:
    outputMessage += "You won a GRAND PRIZE: A ticket to cinema!";
    break;
  default:
    outputMessage += "Sorry, that's not a valid selection.";
}
alert(outputMessage + ' on ' + prize);

//Chapter projects
//Evaluating a number game Ask the user to enter a number and check whether it's greater than, equal to, or less than a dynamic number value in your code. Output the result to the user.


let dynamicNumber = Math.floor(Math.random() * 100); 
let userInput = prompt("Please enter a number:");
let userNumber = parseInt(userInput);

if (userNumber > dynamicNumber) {
  alert('Your number ' + userNumber + ' is greater than the dynamic number ' + dynamicNumber);
} else if (userNumber === dynamicNumber) {
  alert('Your number ' + userNumber + ' is equal to the dynamic number ' + dynamicNumber);
} else {
  alert('Your number '+ userNumber+ ' is less than the dynamic number '+ dynamicNumber);
}

// Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation that the user is a friend if the name selected is known in the case statements. You can add a default response that you don't know the person if it's an unknown name. Output the result into the console



const friend_name = prompt("Please enter a name: ");

switch (friend_name) {
  case "Tony":
  case "Peter":
  case "Natasha":
  case "Thor":
  case 'Steve':
    console.log('Hello', friend_name, "! You're a friend!");
    break;
  default:
    console.log("Sorry, I don't know", friend_name);
}







let choices = ['Rock', 'Paper', 'Scissors'];
let playerChoiceIndex = Math.floor(Math.random() * 3);
let computerChoiceIndex = Math.floor(Math.random() * 3);
let playerChoice = choices[playerChoiceIndex];
let computerChoice = choices[computerChoiceIndex];
let responseMessage = '';

if (playerChoice === computerChoice) {
  responseMessage = 'It\'s a tie!';
} else {
  if (playerChoice === 'Rock') {
    if (computerChoice === 'Scissors') {
      responseMessage = 'You win! Rock beats Scissors.';
    } else {
      responseMessage = 'You lose! Paper beats Rock.';
    }
  } else if (playerChoice === 'Paper') {
    if (computerChoice === 'Rock') {
      responseMessage = 'You win! Paper beats Rock.';
    } else {
      responseMessage = 'You lose! Scissors beats Paper.';
    }
  } else if (playerChoice === 'Scissors') {
    if (computerChoice === 'Paper') {
      responseMessage = 'You win! Scissors beats Paper.';
    } else {
      responseMessage = 'You lose! Rock beats Scissors.';
    }
  }
}

alert('You chose: ' + playerChoice + '\nComputer chose: ' + computerChoice + '\n' + responseMessage);