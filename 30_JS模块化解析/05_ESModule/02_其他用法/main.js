// 1.导入方式一: 普通的导入
// import { name, age, foo, Person } from "./foo.js";
// import { fname, fAge, fFoo } from "./foo";

//2.导入方式二:导入时，起别名
import { name as fName, age as fAge, foo as fFoo } from "./foo.js";

//3.导入方式三:将导出的所有内容放到一个标识符中
import * as foo from "./foo.js";

console.log(foo.name);
console.log(foo.age);
foo.foo();

const name = "main";

console.log(name);
console.log(age);
