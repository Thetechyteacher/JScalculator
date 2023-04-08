const numberButtons = document.getElementsByClassName("button");
 const operators= document.getElementsByClassName("operators");
 let operatorValue= operators.innerText
 const reset= document.querySelector('.reset');
 const screenNumbers= document.querySelector('.screen');
 let equalSign= document.querySelector('#equal');
const openingBracket= document.querySelector('.opening');
const closingBracket= document.querySelector('.closing');
const percentage= document.querySelector("#percentage");

percentage.addEventListener('click', getPercentage);

function getPercentage(){
  let num= Number(screenNumbers.textContent)
  let percentageResult= num/100;
  screenNumbers.innerHTML= percentageResult
};


equalSign.addEventListener('click', getResult);
/* get the numbers to show in the screen*/

 for (const numberButton of numberButtons) {
   numberButton.addEventListener('click', function() {
     addNumberToScreen(numberButton.textContent);
   });
 }
 
 function addNumberToScreen(number) {
  screenNumbers.innerHTML += number;
 }

 for (const operator of operators) {
   operator.addEventListener('click', function() {
     addOperatorToScreen(operator.value);
   });
 }

 
 function addOperatorToScreen(operator) {
  screenNumbers.innerHTML += operator;
   
 };




 
   openingBracket.addEventListener('click', function() {
     addOpeningBracketToScreen(openingBracket.value);
   });
 

 
 function addOpeningBracketToScreen(openingBracket) {
  screenNumbers.innerHTML += openingBracket;
   
 };



   closingBracket.addEventListener('click', function() {
     addClosingBracketToScreen(closingBracket.value);
   });
 

 
 function addClosingBracketToScreen(closingBracket) {
  screenNumbers.innerHTML += closingBracket;
   
 };


reset.addEventListener("click", clearScreen);

function clearScreen(){
  screenNumbers.innerHTML= "";
};


function getResult () {
  let screenNumbersValue= screenNumbers.innerHTML;
  let result= Number('');
  try {
    
    result = Function(`"use strict";
    return (${screenNumbersValue})`)();
    console.log(result);
  }
  catch (error) {
    result = error;
  };

  

  screenNumbers.innerHTML = result;
 
};



