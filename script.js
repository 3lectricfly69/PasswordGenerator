// generate password
var upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";
var numericValues = "0123456789";
var specialValues = "!@#$%^&*()_+-=?><,./{}[]:|~//\\";


var generateBtn = document.querySelector("#generate");
// choose pass criteria
var upperCase;
var lowerCase;
var numericCharacters;
var specialCharacters;
var howLong;

function generatePassword(){
    upperCase = prompt("Would you like uppercase letters in your password? Type 'Yes' or 'No' " ).toLowerCase() == "yes";
    lowerCase = prompt("Would you like lowercase letters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
    numericCharacters = prompt("Would you like numeric characters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
    specialCharacters = prompt("Would you like special characters in your password? Type 'Yes' or 'No' ").toLowerCase() == "yes";
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
document.getElementById("password").value = password;

return password;
};

// get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);