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

const eevee = new Pokemon("eevee", 55, 18, "headbutt");
const falreon = new Pokemon("flareon", 65, 20, "fireblast", "fire");
const charmander = new Pokemon("charmander", 44, 17, "flamethrower", "fire");
const squirtle = new Pokemon("squirtle", 44, 16, "surf", "water");
const trainer1 = new Trainer("Dane");
const trainer2 = new Trainer("Hannah");
trainer1.catchEmAll(eevee);
trainer1.catchEmAll(squirtle);
trainer2.catchEmAll(charmander);
trainer2.catchEmAll(falreon);

//CREATE A BATTLE CLASS
class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  trainer1Fight() {
    let trainer2health = this.trainer2.pokemonBag[0].hitPoints;
    let trainer1Damage = this.trainer1.pokemonBag[0].attackDamage;

    if (trainer2health >= 0) {
      trainer2health -= trainer1Damage;
    }
    return trainer2health;
  }

  trainer2Fight() {
    let trainer1health = this.trainer1.pokemonBag[0].hitPoints;
    let trainer2Damage = this.trainer2.pokemonBag[0].attackDamage;

    if (trainer1health >= 0) {
      trainer1health -= trainer2Damage;
    }
    return trainer1health;
  }
}
const newBattle = new Battle(trainer1, trainer2);

// const eevee = new Pokemon("Eevee", 55, 18, "Headbutt");
// const ash = new Trainer("Ash");
// ash.catchEmAll(eevee);
// console.log(ash);
// console.table(eevee);
// console.table(ash);

module.exports = { Pokemon, Trainer, newBattle };
