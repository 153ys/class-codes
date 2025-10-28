// let num = 123

// if (num % 2 != 0){
//   console.log("單數")
// } else {
//   console.log("雙數")
// }


// let i = 1

// for (i = 0; i < 10; i = i + 1) {
//   console.log("hello");
// }

// for (let i = 0; i < 10; i = i + 1) {
//   // // 印出偶數
//   if (i > 5) {
//     continue
//   }
//   console.log(i)
//   // if (i % 2 == 0){
//   //   console.log(i)
//   // }
// }

// let i = 0
// while (i < 10) {
//   console.log(i)

//   i =  i + 1
// }

//提示：雙層 for 迴圈

// for (let i = 1; i < 10; i = i + 1) {
//   for (let j = 1; j < 10; j = j + 1) {
//     // const result = i + " X " + j + " = " + i * j
//     const result = `${i} x ${j} = ${i * j}`
//     console.log(result)
//   }
// }

// for (let i = 1; i < 6; i++){
//   let stars = ""; //每一行要印的星星字串
//   for (let j = 1; j < 5; j++){
//     stars += "*"; //每跑一次內圈就多一顆星星
//   }
//   console.log(stars); //印出這一行的結果
// }

// for (let i = 1; i < 6; i++){
//   console.log("*".repeat(i))
// }

for (let i = 1; i < 6; i++){
  let stars = "";
  for (let j = 1; j <= i; j++){
    stars += "*";
  }
  console.log(stars);
}

//     *      --空5
//    ***     --空4
//   *****    --空3
//  *******   --空2
// *********  --空1

// for (let i = 1; i <= 5; i += 1){
//   const stars = "*".repeat(i * 2 - 1)
//   const spaces = " ".repeat(5 - i)

//   const txt = `${spaces}${stars}`
//   console.log(txt)
// }

// function sayHelloTo(someone = "john") {
//   console.log(someone)
// }

// sayHelloTo()
// sayHelloTo("cc")

// function 付款(n) {
// 	const price = 50
// 	const change = n - price
	
// 	return change
// }

// const m = 付款(100)
// console.log(m)

//計算BMI
function calcBMI(height, weight) {
  // 體重 / 身高^2
  const h = height / 100;
  const bmi = weight / (h ** 2);
  return bmi;
}

const bmi = calcBMI(170, 64); 
console.log(bmi)