function aa() {
  console.log("AA");
}

function xyz() {}

const name = "nancy";

// named export
export { aa, xyz, name };

//default export
export default aa;
