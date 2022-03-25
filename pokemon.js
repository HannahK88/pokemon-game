//firstly make pokemon
// name, hit points (health), attack damage, the sound that it makes, and one move.
// CREATE A POKEMON CLASS
class Pokemon {
  constructor(name, hitPoints, attackDamage, move, type = "normal") {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = move;
    this.type = type;
    this.strength = this.strength();
    this.weakness = this.weakness();
    this.useYourMove = this.useYourMove();
  }

  weakness() {
    if (this.type === "normal") return "fighting";
    if (this.type === "fire") return "water";
    if (this.type === "water") return "grass";
    if (this.type === "grass") return "fire";
  }

  strength() {
    if (this.type === "normal") return "none";
    if (this.type === "fire") return "grass";
    if (this.type === "water") return "fire";
    if (this.type === "grass") return "water";
  }

  useYourMove() {
    return this.move;
  }
}

// CREATE A TRAINER CLASS
class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemonBag = [];
    this.maxStorage = 6;
  }

  catchEmAll(pokemon) {
    if (this.pokemonBag.length < this.maxStorage) {
      this.pokemonBag.push(pokemon);
    }
  }
}

// const eevee = new Pokemon("Eevee", 55, 18, "Headbutt");
// const ash = new Trainer("Ash");
// ash.catchEmAll(eevee);
// console.log(ash);
// console.table(eevee);
// console.table(ash);

module.exports = { Pokemon, Trainer };
