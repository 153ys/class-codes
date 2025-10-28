// this 代名詞
// 1. 誰呼叫，誰就是this; 沒人呼叫，this->全域變數(window/global)

// function hi() {
//   function hey() {
//     console.log(hi);
//   }
// }

// 2. 是否有使用「箭頭函數」(箭頭函數沒有 this/arguments)
// <--this 得到全域變數

// 3. 是否有使用「new」
// const hi = () => {
//   console.log(this);
// };

// new hi();

// 4. 是否有使用「apply」「call」「blind」

// const hero = {
//   name: "cc",
//   age: 18,
//   attack: function () {
//     console.log(this);
//     console.log(x, y);
//   },
// };

// hero.attack.call([1, 2, 3], "cc", "ee");
// hero.attack.apply([1, 2, 3],["cc", "ee"])

// const hero = {
//   hp: 100,
//   mp: 30,
//   attack: function () {
//     console.log("ATTACK!!");
//   },
// };
// const mage = {
//   hp: 60,
//   mp: 100,
//   attack: function () {
//     console.log("attack~~~");
//   },
//   heal: function () {
//     this.hp += 30;
//   },
// };

// console.log(hero);
// mage.heal.apply(hero);
// console.log(hero);

// const a = [1, 2, 3];
// hero.attack.call(a);

// const hero = {
//   name: "cc",
//   age: 18,
//   attack: () => {
//     console.log(this);
//   },
// };

// hero.attack();

// 5. 是否有開啟「嚴格模式 (Strict Mode)」

"use strict";

function hi() {
  console.log(this);
}

hi();
