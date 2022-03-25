const inquirer = require("inquirer");
const { Trainer, Pokemon, newBattle } = require("./pokemon");
const eevee = new Pokemon("eevee", 55, 18, "headbutt");
const falreon = new Pokemon("flareon", 65, 20, "fireblast", "fire");
const charmander = new Pokemon("charmander", 44, 17, "flamethrower", "fire");
const squirtle = new Pokemon("squirtle", 44, 16, "surf", "water");

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
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const trainer1Name = answers.trainer1;
    const trainer2Name = answers.trainer2;
    const trainer1 = new Trainer(trainer1Name);
    const trainer2 = new Trainer(trainer2Name);
    trainer1.catchEmAll(eevee);
    trainer1.catchEmAll(squirtle);
    trainer2.catchEmAll(charmander);
    trainer2.catchEmAll(falreon);

    // console.log(trainer1);
    // console.log(trainer2);
    // console.log(trainer1Name, trainer2Name);
    // console.log(JSON.stringify(answers, null, "  "));
    return { trainer1, trainer2 };
  })
  .then((trainers) => {
    const { trainer1, trainer2 } = trainers;
    const questions2 = [
      {
        type: "list",
        name: "choosePokemon1",
        message: `Which pokemon does ${trainer1.name} want?`,
        choices: trainer1.pokemonBag,
        filter(val) {
          return val.toLowerCase();
        },
      },
      {
        type: "list",
        name: "choosePokemon2",
        message: `Which pokemon does ${trainer2.name} want?`,
        choices: trainer2.pokemonBag,
        filter(val) {
          return val.toLowerCase();
        },
      },
    ];

    inquirer
      .prompt(questions2)
      .then((answers) => {
        const trainer1ChosenPokemon = answers.choosePokemon1;
        const trainer2ChosenPokemon = answers.choosePokemon2;
        return {
          trainer1ChosenPokemon,
          trainer2ChosenPokemon,
          trainer1,
          trainer2,
        };

        // console.log(answers.choosePokemon1);
        // console.log(JSON.stringify(answers, null, "  "));
      })
      .then((chosenPokemon) => {
        const {
          trainer1ChosenPokemon,
          trainer2ChosenPokemon,
          trainer1,
          trainer2,
        } = chosenPokemon;
        console.log(trainer1);
        const filteredPokemon1 = trainer1.filter(
          (pokemon) => pokemon.name === trainer1ChosenPokemon
        );
        const filteredPokemon2 = trainer2.filter(
          (pokemon) => pokemon.name === trainer2ChosenPokemon
        );
        const questions3 = [
          {
            type: "list",
            name: "choosePokemon1Move",
            message: `${trainer1.name}, choose your move for ${trainer1ChosenPokemon}`,
            choices: filteredPokemon1,
            filter(val) {
              return val.toLowerCase();
            },
          },
          {
            type: "list",
            name: "choosePokemon2Move",
            message: `${trainer2.name}, choose your move for ${trainer2ChosenPokemon}`,
            choices: filteredPokemon2,
            filter(val) {
              return val.toLowerCase();
            },
          },
        ];

        inquirer.prompt(questions3).then((answers) => {
          console.log(answers.choosePokemon1Move);
          console.log(answers.choosePokemon2Move);
          // console.log(answers.choosePokemon1);
          // console.log(JSON.stringify(answers, null, "  "));
        });
      });
  });
