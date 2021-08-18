//importing methods
import {calcArea,calcCircumference} from "./mathFunctions.js";

//assigning input values to global variables

let calcButton = document.getElementById('calculate') ;
let clearButton = document.getElementById('clearBtn');
let resultField = document.getElementById('resultInput');


//adding click events to buttons
calcButton.addEventListener('click',calculate);
clearButton.addEventListener('click',clearResult);

//function to calculate result
function calculate(){

    //reading current input values
    let radius = document.getElementById('valueInput').value;
    let operation = document.getElementById('selectBox').value;
    resultField.innerHTML = "";

    //invoking validateInput function to validate the inputs
   let test = validateInput(radius,operation);
   if(test){
       operation = document.getElementById('selectBox').value;
       if(operation == "Area"){
               let area = calcArea(radius);//calling predefined method from mathFunctions.js module
               let result = document.createTextNode(area);
               resultField.appendChild(result);
           }
        else if(operation == "Circumference"){
           
               let circumference = calcCircumference(radius);//calling predefined method from mathFunctions.js module
               let result = document.createTextNode(circumference);
               resultField.appendChild(result);
       }

   }
}


//function to validate the inputs 
function validateInput(radius,operation) {
    if(isNaN(radius)){
        return false;
    }
    else if((operation == "Area")||(operation == "Circumference")){
        return true;
    }
    else{
        return false;
    }
}

//function to clear result
function clearResult(){
    resultField.innerHTML = "";
}