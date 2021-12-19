//1.第一种方式:export 声明语句
// export const name = "why";
// export const age = 18;
// export function foo() {
//   console.log("foo");
// }
// export class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

//2.第二种导出和声明分开
// const name1 = "why";
// const age = 19;
// function foo() {
//   console.log("foo function");
// }

//这里面是一个语法 可不是一个对象
// export { name1, age, foo };

//3.第三种方式:第二种导出时起别名
export { name1 as fname, age as fAge, foo as fFoo };
