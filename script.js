// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function  writePassword() {
  var password = generatePassward();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}
//initalizing number of characters
function generatePassward() {
  

  var capitals = 0;
  var small = 0;
  var number = 0;
  var special =0;
  
// selecting the criteria
    window.alert("choose in the series the password criteria");
    
  // taking the lenghth of the password.
 
    var lenghth = window.prompt("what is the length of the Password should be >8 and <128");

// taking user preffrences
    
     var capitals = window.prompt("Number of uppercase letters to be included");
     var  small = window.prompt("Number of lowercase letters to be included");
     var numbers  = window.prompt("Number of numbers  to be included");
     var speicial  = window.prompt("Number of special charaters letters to be included");
// total character 
var total = (capitals+ small + number+special);

  // getting the values we want 

 var  Capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var   Small =  "abcdefghijklmnaogrtstuvwxwz";
 var   Numbers ="1234567890";
 var   Special = "!@$%&*?";


// creating loops for each choice
var CAPITALS ="";

for(var i = 0; i <= capitals; i++){
    CAPITALS = CAPITALS + Capitals.charAt(Math.floor(Math.random() * Math.floor(Capitals.length - 1)));
}
//window.alert(CAPITALS);
var SMALL ="";
for(var i = 0; i <= small; i++){
    SMALL= SMALL + Small.charAt(Math.floor(Math.random() * Math.floor(Small.length - 1)));
}
//window.alert(SMALL);
var NUMBERS ="";
for(var i = 0; i <= number; i++){
    NUMBERS= NUMBERS+ Numbers.charAt(Math.floor(Math.random() * Math.floor(Numbers.length - 1)));
}
//window.alert(NUMBERS)
var SPECIAL= "";
for(var i = 0; i <= special; i++){
    SPECIAL= SPECIAL+ Special.charAt(Math.floor(Math.random() * Math.floor(Special.length - 1)));
}
//window.alert(SPECIAL);
//joinning the password
var PASSWORD = (CAPITALS+SMALL+NUMBERS+SPECIAL)
window.alert(PASSWORD);
var password = "";
for(var i = 0; i <= length; i++){
    password= password + PASSWORD.charAt(Math.floor(Math.random() * Math.floor(PASSWORD.length - 1)));
}
  return PASSWORD
}
// Passworld filed
  

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);
