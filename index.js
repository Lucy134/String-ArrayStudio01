const input = require('readline-sync');
let str = input.question("Please enter a string: ");
let x = input.question("How many letters would you like to move? ")
let snark = '';
if(x > str.length){
  x=3;
  snark = "I'm sure you thought you were being very clever putting in a number bigger than the word, too bad I changed your number.";
}


let newStr = str.substring(x,str.length);
let str1 = newStr.concat(str.substring(0,x));
//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.



//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original: ${str}, modified: ${str1} \n${snark}`)
//console.log(sStr);
//console.log(newStr);
//onsole.log(str1);

//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
