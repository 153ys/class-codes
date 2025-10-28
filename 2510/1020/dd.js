// const d = document.querySelector("#hi")
// console.log(d)

// 事件監聽器 event listerner

// document.addEventListener("DOMContentLoaded", () => {
//   const d = document.querySelector("#hi")
//   console.log(d)
// })

// 寫上面太長， 在script + defer就可解決
// <script src="dd.js" defer></script>

// const btn = document.querySelector("#btn")

// btn.addEventListener("click", () => {
//   const div = document.querySelector("#hi")
//   const currentText = div.textContent

//   if (currentText == "Hello"){
//     div.textContent = "World"
//   } else{
//     div.textContent = "Hello"
//   }
// })

//--------------------------------

const btnUp = document.querySelector("#btnUp")
const btnDown = document.querySelector("#btnDown")
const quantity = document.querySelector("#quantity")

btnUp.addEventListener("click", () =>{
  const currentValue = Number(quantity.value)
  quantity.value = currentValue + 1
})

btnDown.addEventListener("click", () => {
  const currentValue = Number(quantity.value)
  // Early Return
  if (currentValue <= 1) {
    return
  }
  quantity.value = currentValue - 1
})

// btnDown.addEventListener("click",() =>{
//   const currentValue = Number(quantity.value)
//   // 減少，不能是0或負的
//   if (currentValue > 1){
//     quantity.value = currentValue - 1
//   }
// })