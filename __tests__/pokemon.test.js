const { it, expect } = require("@jest/globals");
const { Pokemon } = require("../pokemon");

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
