// Define code to pass into the writePassword() function below

//Prompts that will generate when the generateBtn is clicked
var prompts = [];

//Select criteria from the list to include in password

//prompt the length of the password

//prompt whether to include special chars, capitalization, numeric values

//Run the password generation with randomly selected values from among given criteria

//Display password in alert or write to page


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