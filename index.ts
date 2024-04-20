#! /usr/bin/env node   
// SHABANG ^
import inquirer from "inquirer";


const answer = await inquirer.prompt([
    {
        message : "enter first number :",
        type : "number",
        name : "FirstNumber",

    },
    {
        message : "enter second number :",
        type : "number",
        name : "SecondNumber",

    },
    {
        message : "Select operator :",
        type : "list",
        name : "operator",
        choices: ["addition","subtraction","multiplication","division"],
    },
]);

if(answer.operator=== 'addition'){
    console.log(answer.FirstNumber + answer.SecondNumber)
}else if(answer.operator=== 'subtraction'){
    console.log(answer.FirstNumber - answer.SecondNumber)
}else if(answer.operator=== 'multiplication'){
    console.log(answer.FirstNumber * answer.SecondNumber)
}
else if(answer.operator=== 'division'){
    console.log(answer.FirstNumber / answer.SecondNumber)
}else{
    console.log("select valid operator!")
}