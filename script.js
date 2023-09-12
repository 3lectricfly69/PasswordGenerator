// Assignment code here

var lowercaseChar = false;
var upperCaseChar = false;
var numericChar = false;
var specialChar = false;

var upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
var numericValues = "0123456789";
var specialValues = "!@#$%^&*()_+-=?><,./{}[]:|~//\\";


var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  
]

function setLowercaseChar(){
  lowercaseChar = !lowercaseChar;
  console.log(lowercaseChar);
};

function setUppercaseChar(){
  uppercaseChar = !uppercaseChar;
};

function setNumericChar(){
  numericChar = !numericChar;
};

function setSpecialChar(){
  specialChar = !specialChar;
};

var upperCase;
var lowerCase;
var numericCharacters;
var specialCharacters;
var howLong;

function generatePassword(){
    upperCase = prompt("Do you want uppercase letters in your password? Type 'Yes' or 'No' " ).toLowerCase() == "yes";
    lowerCase = prompt("Do you want lowercase letters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
    numericCharacters = prompt("Do you want numeric characters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
    specialCharacters = prompt("Do you want special characters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
    howLong = parseInt(prompt("How many characters long would you like your password to be? Type a number value between 8 and 128"));
var values = "";

if(upperCase){
  values += upperCaseValues
}

if(lowerCase){
  values += lowerCaseValues
}

if(numericCharacters){
  values += numericValues
}

if(specialCharacters){
  values += specialValues
}

let password = "";

for (var i = 0 ; i < howLong; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  
}
};


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







