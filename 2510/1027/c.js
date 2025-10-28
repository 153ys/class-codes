// function heroCreator(name, age) {
//   const hero = {
//     name: name,
//     age: age,
//     // attack: function () {
//     //   console.log("ATTACK!");
//     // },
//   };

//   hero.__proto__ = {
//     attack: function () {
//       console.log()
//     }
//   }
//   return hero;
// }

function heroCreator(name, age) {
  // 1. this --> { }
  this.name = name;
  this.age = age;
  // 2. return this
}

heroCreator.prototype.attack = {
  function() {
    console.log("ATTACK!!");
  },
};
const h1 = new heroCreator("cc", 18);

// const h1 = heroCreator("cc", 18);
// const h2 = heroCreator("ee", 20);

// 所有的東西(物件)都有 .__proto__屬性
// h1.xyz
// h1.__proto__?? xyz

String.prototype.hello = function () {
  console.log("hi");
};
