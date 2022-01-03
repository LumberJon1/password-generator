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

//Criteria list
var criteriaList = [
    "1. Special Characters",
    "2. Numbers",
    "3. Capital Letters"
]

//Run the password generation with randomly selected values from among given criteria
var generatePassword = function() {
    
    //Select criteria from the lists to include in password

    //Alert with the general task at hand
    window.alert("Select criteria to include in your randomly generated password.");

    /*Loop through the criteriaPrompt until the user has:
    1. Selected all 3 inclusions for their password
    2. Has selected "Done"
    - Ensure user cannot enter unexpected values
    */

    //Array that holds the criteria that the user selects in the prompt below
    chosenPrompts = [];

    //Prompt with numbers
    //variables to correspond with cases and be displayed in the window prompt
    var criteriaOne = "1. Special Characters";
    var criteriaTwo = "2. Numbers";
    var criteriaThree = "3. Capital Letters";

    //Check that there are still criteria to choose from
    while (criteriaOne != "" | criteriaTwo != "" | criteriaThree != "") {

        var criteriaPrompt = window.prompt("Type the corresponding number for each of the following criteria you would like your password to include.\n"+
        "Type \"Done\" when you are finished.\n\n"+criteriaOne+"\n"+criteriaTwo+"\n"+criteriaThree);

        switch (criteriaPrompt) {

            //Cases for special characters (be sure to capture typing the words)
            case "1":
            case "special characters":
            case "Special Characters":

                //Set the corresponding variable to a blank string.
                criteriaOne = "";
                //Add the user's choice to the array
                chosenPrompts.push("Special Characters");

                break;

            //Cases for numerical values
            case "2":
            case "numbers":
            case "Numbers":
                criteriaTwo = "";
                chosenPrompts.push("Numeric Values");

                break;

            //Cases for capital letters
            case "3":
            case "capital letters":
            case "Capital Letters":
                criteriaThree = "";
                chosenPrompts.push("Capital Letters");

                break;

            //Cases to handle "Done"
            case "Done":
            case "done":
                //Empty the strings so that the loop will close
                criteriaOne = "";
                criteriaTwo = "";
                criteriaThree = "";

                break;

            //Default case
            default:
                window.alert("Invalid input. Enter from the given list of criteria to include.");

        }
    }

    window.alert("Chosen criteria for inclusion in password:\n"+chosenPrompts.slice(0));
    console.log(chosenPrompts);


    //Set the password length
    //set minimum and maximum character values
    var minChars = 8;
    var maxChars = 128;

    //set flag for while loop
    var passwordFlag = true;

    while (passwordFlag) {
        //prompt the length of the password
        var lengthPrompt = window.prompt("Choose a password length between "+minChars+" and "+maxChars+" characters long.");

        //validate user input to constrain to range
        if (minChars < parseInt(lengthPrompt) && parseInt(lengthPrompt) < maxChars) {
            console.log("minChars:", minChars);
            console.log("maxChars: ", maxChars);
            console.log("lengthPrompt: ",lengthPrompt);
            console.log("parsed to int: ", parseInt(lengthPrompt));
            window.alert("Password length will be "+lengthPrompt+" characters.");
            //set flag to false and exit loop
            passwordFlag = false;
        }
        else {
            window.alert("Invalid input.")
        }
    }

    //Generate random password
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