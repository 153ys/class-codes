// for (var i = 5; i > 0; i = i - 2) {
//   // console.log("你好"+ i)
//   console.log(`你好${i}`)
// }

// for (let i = 1; i < 6; i ++){
//   let stars = "";
//   for (let j = 1; j <= 5; j ++){
//     stars += "*";
//   }
//   console.log(stars);
// }

// for (let i = 1; i <= 5; i += 1){
//   const stars = "*".repeat(i * 2 - 1)
//   const spaces = " ".repeat(5 - i)

//   const txt = `${spaces}${stars}`
//   console.log(txt)

// for (let i = 1; i <= 9; i ++) {
//   for(let j = 1; j <= 9; j ++){
//     console.log(`${i} x ${j} = ${i * j}`)
//   }
// }

function bmiCalculation(height, weight) {
  let h = height / 100
  let bmi = weight / (h * h)
  // let result = Math.round(bmi * 100) / 100
  let result = bmi.toFixed(2)

  return result
}

console.log(bmiCalculation(170, 70))