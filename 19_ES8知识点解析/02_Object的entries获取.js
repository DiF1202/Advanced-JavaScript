const obj = {
  name: "why",
  age: 18,
};

// console.log(Object.entries(obj))
// const objEntries = Object.entries(obj)
// objEntries.forEach(item => {
//   console.log(item[0], item[1])
// })

// console.log(Object.entries(["abc", "cba", "nba"]))
// console.log(Object.entries("abc"))

console.log(Object.entries(obj));
for (const item of Object.entries(obj)) {
  console.log(item[0], item[1]);
}
