#! /usr/bin/env node

import inquirer from"inquirer";
const answer = await inquirer.prompt([
  {message:"Enter firstNumber", type:"number",name:"firstNumber"},
  {message:"Enter secondNumber",type:"number",name:"secondNumber"},
  {message:"select a one of the operator to perform operation",
   type:"list",
   name:"operator",
   choices:["addition","subtraction","multiplication","division"]},
]);


// Conditional Statement
if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Please select your valid opertor");
}