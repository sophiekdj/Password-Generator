// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables
var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSymbols;
var userChoices;

var lowerCase = [
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
  "z",
];
// Use lowerCase array to create upperCase array
var upperCase = lowerCase.map(function (toUpper) {
  return toUpper.toUpperCase();
});
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = [
  "!",
  " ",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
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
  ":",
  ";",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Generate password function start
function generatePassword() {
  passwordLength = window.prompt(
    // Length of password prompt; user input
    "Please choose a password length between 8 and 128"
  );
  console.log("Password length of " + passwordLength);
  if (!passwordLength) {
    ("You must choose a password length between 8 and 128");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "The password length chosen must be between 8 and 128"
    );
    console.log("Password length of " + passwordLength);
  } else {
    // Confirmation messages for use of lower case, upper case, numbers and symbols
    confirmLowerCase = prompt(
      "Would you like lower case alphabet characters in your password?"
    );
    console.log("Lower case " + confirmLowerCase);
    confirmUpperCase = prompt(
      "Would you like upper case alphabet characters in your password?"
    );
    console.log("Upper case " + confirmUpperCase);
    confirmNumbers = prompt("Would you like numbers in your password?");
    console.log("Numbers " + confirmNumbers);
    confirmSymbols = prompt("Would you like symbols in your password?");
    console.log("Symbols " + confirmSymbols);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
