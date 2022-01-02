// Define code to pass into the writePassword() function below

//Special characters list
var specialCharsList = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "\'",
    "()",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\"",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~"
];

//Numeric values list
var numbersList = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

//Alpha-only characters list
var alphabetList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]

//Run the password generation with randomly selected values from among given criteria
var generatePassword = function() {
    
    //Select criteria from the lists to include in password

        //Prompt with numbers

        //validate user input

        //prompt again or exit loop

    //prompt the length of the password

    //Add a random character to the password for as long as the length

    //return the password
    
};

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