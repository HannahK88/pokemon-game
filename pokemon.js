//firstly make pokemon
// name, hit points (health), attack damage, the sound that it makes, and one move.
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

const eevee = new Pokemon("Eevee");
// console.table(eevee);

module.exports = { Pokemon };
