class HeroCreator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  attack() {
    console.log("ATTACK!");
  }
}
const h1 = new HeroCreator("cc", 18);
console.log(h1);
