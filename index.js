#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one off the operators to perform operation action",
        type: "list",
        name: "operators",
        choices: ["Addtion", "Subtraction", "Multiplicnpm ion", "Division"],
    },
]);
console.log(answer);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondnumber);
}
else {
    console.log("please select a valid operatorno");
}
