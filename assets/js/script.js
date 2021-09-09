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
    confirmLowerCase = confirm(
      "Would you like lower case alphabet characters in your password?"
    );
    console.log("Lower case " + confirmLowerCase);
    confirmUpperCase = confirm(
      "Would you like upper case alphabet characters in your password?"
    );
    console.log("Upper case " + confirmUpperCase);
    confirmNumbers = confirm("Would you like numbers in your password?");
    console.log("Numbers " + confirmNumbers);
    confirmSymbols = confirm("Would you like symbols in your password?");
    console.log("Symbols " + confirmSymbols);
  }

  // 0 confirm options chosen
  if (
    !confirmLowerCase &&
    !confirmUpperCase &&
    !confirmNumbers &&
    !confirmSymbols
  ) {
    userChoices = alert(
      "You must have characters to create a password. Please start again."
    );
  }
  // 4 options chosen
  else if (
    confirmLowerCase &&
    confirmUpperCase &&
    confirmNumbers &&
    confirmSymbols
  ) {
    userChoices = lowerCase.concat(upperCase, numbers, symbols);
    console.log(userChoices);
  }
  // 3 options chosen
  else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  } else if (confirmLowerCase && confirmUpperCase && confirmSymbols) {
    userChoices = lowerCase.concat(upperCase, symbols);
    console.log(userChoices);
  } else if (confirmLowerCase && confirmNumbers && confirmSymbols) {
    userChoices = lowerCase.concat(numbers, symbols);
    console.log(userChoices);
  } else if (confirmUpperCase && confirmNumbers && confirmSymbols) {
    userChoices = upperCase.concat(numbers, symbols);
    console.log(userChoices);
  }
  // 2 options chosen
  else if (confirmLowerCase && confirmUpperCase) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  } else if (confirmLowerCase && confirmNumbers) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  } else if (confirmLowerCase && confirmSymbols) {
    userChoices = lowerCase.concat(symbols);
    console.log(userChoices);
  } else if (confirmUpperCase && confirmNumbers) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  } else if (confirmUpperCase && confirmSymbols) {
    userChoices = upperCase.concat(symbols);
    console.log(userChoices);
  } else if (confirmNumbers && confirmSymbols) {
    userChoices = numbers.concat(symbols);
    console.log(userChoices);
  }
  // 1 option chosen
  else if (confirmLowerCase) {
    userChoices = lowerCase;
    console.log(userChoices);
  } else if (confirmUpperCase) {
    userChoices = upperCase;
    console.log(userChoices);
  } else if (confirmNumbers) {
    userChoices = numbers;
    console.log(userChoices);
  } else if (confirmSymbols) {
    userChoices = symbols;
    console.log(userChoices);
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
