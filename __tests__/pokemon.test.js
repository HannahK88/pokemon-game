const { Pokemon, Trainer } = require("../pokemon");

// POKEMON
describe("Pokemon", () => {
  describe("PROPERTIES", () => {
    it("Name property returns the name of passed argument", () => {
      const testPokemon = new Pokemon("Eevee");
      expect(testPokemon.name).toBe("Eevee");
    });
    it("hit points returns a value", () => {
      const testPokemon = new Pokemon("Eevee", 55);
      expect(testPokemon.hitPoints).toBe(55);
    });
    it("returns the pokemon's weakness when type is passed", () => {
      const testPokemon = new Pokemon("Eevee", 55, 18, "Headbutt");
      expect(testPokemon.weakness).toBe("fighting");
    });
    it("returns the pokemon's strength when type is passed", () => {
      const testPokemon = new Pokemon("Eevee", 55, 18, "Headbutt");
      expect(testPokemon.strength).toBe("none");
    });
  });
  describe("METHODS", () => {
    it("when move method is invoked return the pokemon's move", () => {
      const testPokemon = new Pokemon("Eevee", 55, 18, "Headbutt");
      expect(testPokemon.useYourMove).toBe("Headbutt");
    });
  });
});

// TRAINER
describe("TRAINER", () => {
  describe("PROPERTIES", () => {
    it("Name property returns the name of passed argument", () => {
      const testTrainer = new Trainer("Ash");
      expect(testTrainer.name).toBe("Ash");
    });
    it("pokemonBag returns an empty array when it is empty", () => {
      const testTrainer = new Trainer("Ash");
      expect(testTrainer.pokemonBag).toEqual([]);
    });
  });
  describe("METHODS", () => {
    it("trainer is able to catch a pokemon", () => {
      const testTrainer = new Trainer("Ash");
      const testPokemon = new Pokemon("Eevee", 55, 18, "Headbutt");
      testTrainer.catchEmAll(testPokemon);
      expect(testTrainer.pokemonBag.length).toBe(1);
    });
    it("trainer is able to catch multiple pokemon", () => {
      const testTrainer = new Trainer("Ash");
      const testPokemon1 = new Pokemon("Eevee", 55, 18, "Headbutt");
      const testPokemon2 = new Pokemon("Jeff", 12, 500, "Swan Kick");
      testTrainer.catchEmAll(testPokemon1);
      testTrainer.catchEmAll(testPokemon2);
      expect(testTrainer.pokemonBag.length).toBe(2);
    });
    it("trainer is only allowed 6 pokemon at max", () => {
      const testTrainer = new Trainer("Ash");
      const testPokemon1 = new Pokemon("Eevee", 55, 18, "Headbutt");
      const testPokemon2 = new Pokemon("Jeff", 12, 500, "Swan Kick");
      const testPokemon3 = new Pokemon("Beff", 12, 500, "Swan Kick");
      const testPokemon4 = new Pokemon("Queff", 12, 500, "Swan Kick");
      const testPokemon5 = new Pokemon("Neff", 12, 500, "Swan Kick");
      const testPokemon6 = new Pokemon("Meff", 12, 500, "Swan Kick");
      const testPokemon7 = new Pokemon("Steff", 12, 500, "Swan Kick");

      testTrainer.catchEmAll(testPokemon1);
      testTrainer.catchEmAll(testPokemon2);
      testTrainer.catchEmAll(testPokemon3);
      testTrainer.catchEmAll(testPokemon4);
      testTrainer.catchEmAll(testPokemon5);
      testTrainer.catchEmAll(testPokemon6);
      testTrainer.catchEmAll(testPokemon7);
      expect(testTrainer.pokemonBag.length).toBe(6);
    });
  });
});
