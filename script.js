//initialising variables for numbers and operators
let firstNumber = "";
let currentOperator = "";
let secondNumber = "";

//adding event listener for numbers
let numberButton = document.querySelectorAll(".num");

numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        if (!currentOperator) {
            firstNumber += button.textContent;
            document.querySelector(".display").textContent = firstNumber;
        } else {
            secondNumber += button.textContent;
            document.querySelector(".display").textContent = firstNumber + currentOperator + secondNumber;
        }
    });
});

//adding event listeners to operators
let operatorButton = document.querySelectorAll(".opr");

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstNumber && !secondNumber) {
            currentOperator = button.textContent;
            document.querySelector(".display").textContent = firstNumber + currentOperator;
        }
    });
});

//functions for operators
function addNumbers(a,b){
    return (a+b);
}

function subNumbers(a,b){
    return (a-b);
}

function multiplyNumbers(a,b){
    return (a*b);
}

function divideNumbers(a,b){
    return(a/b);
}

//operator function to give result
function operator(firstNumber, currentOperator, secondNumber){
    if(currentOperator==="+"){
        return addNumbers(Number(firstNumber),Number(secondNumber));
    }
   else if(currentOperator==="-"){
       return subNumbers(Number(firstNumber),Number(secondNumber));
    }
    else if(currentOperator==="x"){
        return multiplyNumbers(Number(firstNumber),Number(secondNumber));
    }
    else if(currentOperator==="/"){
        return divideNumbers(Number(firstNumber),Number(secondNumber));
    }
}

//event listener to equal and clear
let clearEqualButton=document.querySelectorAll(".opr")

clearEqualButton.forEach((button)=>{
{
        button.addEventListener("click",()=>{ 
            if(button.textContent==="="){
                if(firstNumber && currentOperator && secondNumber){
            let result=operator(firstNumber, currentOperator, secondNumber);
            document.querySelector(".display").textContent=String(result);
            firstNumber=String(result);
            secondNumber="";
            currentOperator="";
                }
}
else if(button.textContent==="clear"){
    firstNumber="";
    secondNumber="";
    currentOperator="";
    document.querySelector(".display").textContent="";
}
})  }
})