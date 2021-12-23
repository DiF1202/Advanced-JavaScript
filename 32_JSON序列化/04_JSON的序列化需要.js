const obj1 = {
  name: "why",
  age: 18,
  friends: {
    name: "kobe",
  },
  hobbies: ["篮球", "足球"],
};

//将obj转成JSON格式的字符串
const objString = JSON.stringify(obj);

console.log(objString);
//对象存储在localStorage
localStorage.setItem("obj", objString);

const jsonString = localStorage.getItem("obj");
console.log(jsonString);

//将JSON格式字符串转回对象
const info = JSON.parse(jsonString);
console.log(info);
