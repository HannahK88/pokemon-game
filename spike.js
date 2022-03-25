const inquirer = require("inquirer");

console.log("Do you wanna catch em all?");

const questions = [
  {
    type: "confirm",
    name: "startGame",
    message: "Start game?",
    default: false,
  },
  {
    type: "input",
    name: "trainer1",
    message: "What's Trainer 1's name?",
  },
  {
    type: "input",
    name: "trainer2",
    message: "What's Trainer 2's name?",
  },
  {
    type: "list",
    name: "size",
    message: "What size do you need?",
    choices: ["Large", "Medium", "Small"],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "quantity",
    message: "How many do you need?",
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number,
  },
  {
    type: "expand",
    name: "toppings",
    message: "What about the toppings?",
    choices: [
      {
        key: "p",
        name: "Pepperoni and cheese",
        value: "PepperoniCheese",
      },
      {
        key: "a",
        name: "All dressed",
        value: "alldressed",
      },
      {
        key: "w",
        name: "Hawaiian",
        value: "hawaiian",
      },
    ],
  },
  {
    type: "rawlist",
    name: "beverage",
    message: "You also get a free 2L beverage",
    choices: ["Pepsi", "7up", "Coke"],
  },
  {
    type: "input",
    name: "comments",
    message: "Any comments on your purchase experience?",
    default: "Nope, all good!",
  },
  {
    type: "list",
    name: "prize",
    message: "For leaving a comment, you get a freebie",
    choices: ["cake", "fries"],
    when(answers) {
      return answers.comments !== "Nope, all good!";
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log("\nOrder receipt:");
  console.log(JSON.stringify(answers, null, "  "));
});
