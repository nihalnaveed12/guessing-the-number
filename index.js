#! /usr/bin/env node
import inquirer from "inquirer";
const random = Math.floor(Math.random() * 10 + 1);
let condition = false;
while (!condition) {
    const answer = await inquirer.prompt([
        {
            message: "Please guess the number between 1 to 10 : ",
            name: "userNum",
            type: "number",
        },
    ]);
    if (answer.userNum === random) {
        console.log("Congratulations you have guessed the correct number");
        condition = true;
    }
    else {
        console.log("You guessed the wrong number, please guess again");
    }
}
