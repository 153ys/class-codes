const blockout = document.querySelector("#out")
const blockin = document.querySelector("#in")

blockout.addEventListener("click", (e) => {
  console.log("out", e.currentTarget)
})

blockin.addEventListener("click", (e) =>{
  console.log("in", e.currentTarget)
})