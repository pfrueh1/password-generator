// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var characters = ["!","\"","\#","\$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","\{","\|","}","~"];
// Write password to the #password input
function writePassword() {
  var length = parseInt(window.prompt("How long would you like your password to be? Must be between 8 and 128 characters."));
  //determine parameters for password
    if (length <= 128 && length >= 8) {
      window.alert("Your password will be " + length + " characters long");
    }
    else {
      window.alert("Please enter a valid length");
      return writePassword();
    }
  var lowerCase = window.confirm("Would you like to include lowercase letters?");
    if (lowerCase){
      alert("Your password will include lowercase letters");
    }else {
      alert("Your password will not include lowercase letters");
    }

  var upperCase = window.confirm("Would you like to include uppercase letters?");
    if (upperCase){
      alert("Your password will include uppercase letters");
    }else {
      alert("Your password will not include uppercase letters");
    }

  var numeric = window.confirm("Would you like to include numbers?")
    if (numeric){
      alert("Your password will include numbers");
    }else {
      alert("Your password will not include numbers");
    }
  var specialChars = window.confirm("Would you like to include special characters?")
    if (specialChars){
      alert("Your password will include special characters");
    }else {
      alert("Your password will not include special characters");
    }
    //restart process if no valid input
  if (!lowerCase && !upperCase && !numeric && !specialChars) {
   alert( "At least one character set must be selected!");
   return writePassword();
  }
  //create array for password based on user input
  var passwordArray = [];
  var createArray = function(){
  if (lowerCase){
    passwordArray.push(...lowerCaseLetters)
  }
  if (upperCase){
    passwordArray.push(...upperCaseLetters);      
  }
  if (numeric){
    passwordArray.push(...numbers);
  }
  if (specialChars){
    passwordArray.push(...characters);
  }
  }
  createArray();
  var finalPassword = [];
   for(var i=0;i < length;i++ ){
          
     var password = Math.floor(Math.random() * passwordArray.length);
     finalPassword.push(passwordArray[password]);   
   }

  console.log(finalPassword);
    alert("your password is " + finalPassword.join(""));
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword.join("");
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
