var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //Variables
  var password = "";
  var LowerCase = false;
  var UpperCase = false;
  var Number = false;
  var Specialcharacter = false;
  var doubleCheckFailed = true;
  var passwordLength = 0;
 
  //Password length portion
  while(doubleCheckFailed) {
    
    passwordLength = window.prompt("How long do you want your password to be? Choose a number in the range of 8-128.");
    passwordLength = parseInt(passwordLength, 10);
    
    if (passwordLength >= 8 && passwordLength <= 128) {
      doubleCheckFailed = false;
    } else {
      window.alert("Please enter a number from 8 to 128.");
    }

  }
  
  //This was reassigned to permit the value to be reused for the assignment of the passwordLength
  doubleCheckFailed = true;


//4 different options for the password (special character, uppercase, lowercase, and number)
  while (doubleCheckFailed) {

    LowerCase = window.confirm("Would you like lowercase letters?");
    UpperCase = window.confirm("Would you like uppercase letters?");
    Number = window.confirm("Would you like numbers?");
    Specialcharacter = window.confirm("Would you like special characters?");
    
    if (LowerCase === false && UpperCase === false && Number === false && Specialcharacter === false) {
      window.alert("Please choose at least one option.");
    } else {
      doubleCheckFailed = false;
    }

  }
  //Genereates a password based on passwordLength and the characters accepted
  for (var i = 0; i < passwordLength; i++) {
    password += randomCharacterGenerator(LowerCase, UpperCase, Number, Specialcharacter);
  }
  
  window.alert("Password has been generated based on you input.\nYour password is:\n\n" + password + "\n\nWhen you press the 'OK' button in this window your password will be transfered to the box above the 'Generate Password' button in the main window.");
  return password;
};
function randomCharacterGenerator (LowerCase, UpperCase, Number, Specialcharacter) {
  var numberHasNotBeenSelected = true;
  var randomNumber = 0;
  while (numberHasNotBeenSelected) {
    randomNumber = Math.floor(Math.random() * 95) + 32;
    if (LowerCase && randomNumber >= 97 && randomNumber <= 122) {
      return String.fromCharCode(randomNumber);
    } else if (UpperCase && randomNumber >= 65 && randomNumber <= 90) {
      return String.fromCharCode(randomNumber);
    } else if (Number && randomNumber >= 48 && randomNumber <= 57) {
      return String.fromCharCode(randomNumber);
    } else if (Specialcharacter && ((randomNumber >= 32 && randomNumber <= 47)||(randomNumber >= 58 && randomNumber <= 64)||(randomNumber >= 91 && randomNumber <= 96)||(randomNumber >= 123 && randomNumber <= 126))){
      return String.fromCharCode(randomNumber);
    } else {
      //this else statement though redundant helps with legibility.
      numberHasNotBeenSelected = true;
    }
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);