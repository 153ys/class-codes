// const nums = ['A', 'B', 'C','D', 'E']

// console.log(nums[4])
// console.log(nums[nums.length -1])

// 用for迴圈，印出每個元素

//高階函數 

// function aa() {
//   function bb(){

//   }

//   return bb
// }

// function a(x) {
//   //
// }

// function cc() {

// }

// a(cc)

// forEach

// nums.forEach(function (x) {
//   console.log(x)
// })

// const nums = [1, 2, 3, 4, 5]
// for (let i = 0; i < 5; i += 1) {
//   console.log(nums[i])
// }

// [1, 2, 3, 4, 5] -> [2, 4, 6, 8, 10]

// const nums = [1, 2, 3, 4, 5]
// const result =[]

// for (let i = 0; i < nums.length; i += 1) {
//   const n = nums[i]
//   result.push(n * 2)  
// }

// console.log(result)


//map = 收集成陣列
// const num = [1, 2, 3, 4, 5]

// console.result = nums.map(function (n) {
//   return n * 2
// })

// console.log(result)



// const chars = ["a", "b", "c", "d", "e"]

// //用map寫 => ["aa", "bb", "cc", "dd", "ee"]

// const double = chars.map(function(n) {
//   return n.repeat(2)
// })

// console.log(double)

// const nums = [1, 2, 3, 4, 5]


// const nums2 = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]
// //留下偶數

// const result = nums2.filter(function (n) {
//   return n % 2 == 0
// })

// console.log(result)

// Reduce 歸納

// const nums = [1, 2, 3, 4, 5]

// const result = nums.reduce(function(x, y){

// })

// callback function
// 回呼

// const nums = [1, 2, 3, 4, 5]
// const result = nums.reduce(function (acc, cv){
//   reture acc + cv
// }, 0)

//forEach, map, filter, reduce
//練習：1~10的偶數的平方的總和

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const 偶數 = n => n % 2 === 0
const 平方 = n => n * n
const 加 = (acc, cv) => acc + cv

const total = nums
  .filter(偶數).map(平方).reduce(加, 0)

  console.log(total)
// function 偶數(n){
//   return n % 2 == 0
// }

// function 平方(n){
//   return n * n
// }

// function 加(acc, cv){
//   return acc + cv
// }

// const total = nums.filter(偶數).map(平方).reduce(加)

// //偶數
// const evens = nums.filter (function (n) {
//   return n % 2 === 0
// })

// //平方
// const square = evens.map(function(n){
//   return n * n
// })

// //總和
// const total = square.reduce(function (acc, cv){
//   return acc + cv 
// })

// console.log(total)


//函數宣告


//匿名函數
// const a = function (x, y) {}

// 箭頭函數 v1
// const a = (x, y) =>{
//   return 123
// }

//箭頭函數v2
// const a = (x,y) => 123

//箭頭函數v2
// const a = x => 123

