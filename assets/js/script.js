// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables
var passwordLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSymbols;
var userChoices = [];

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
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [
  "!",
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

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("You haven't chosen a password length between 8 & 128");
    console.log("Password length of " + passwordLength);
    return "";
  } else if (!passwordLength) {
    window.alert("You must choose a password length between 8 and 128");
    return "";
  }

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

  // 0 confirm options chosen
  if (
    !confirmLowerCase &&
    !confirmUpperCase &&
    !confirmNumbers &&
    !confirmSymbols
  ) {
    alert("You must have characters to create a password. Please start again.");
    generatePassword();
  }

  if (confirmLowerCase) {
    userChoices = userChoices.concat(lowerCase);
  }
  if (confirmUpperCase) {
    userChoices = userChoices.concat(upperCase);
  }
  if (confirmNumbers) {
    userChoices = userChoices.concat(numbers);
  }
  if (confirmSymbols) {
    userChoices = userChoices.concat(symbols);
  }

  // Empty variable
  var passwordBlank = [];

  // Random selection loop
  for (var i = 0; i < passwordLength; i++) {
    var allChoices =
      userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return password
  var password = passwordBlank.join("");
  console.log("Your password is " + password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
