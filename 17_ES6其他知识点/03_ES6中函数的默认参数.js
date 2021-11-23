function foo(m, n) {
  m = m || "aaa";
  n = n || "bbb";
  console.log(m, n);
}

// foo(10, 2909);

// 1.ES6可以给函数提供默认值

// function foo1(m = "aaa", n = "bbbb") {
//   console.log(m, n);
// }

// foo1();
// foo1(123, 123);

//2.对象参数和默认值及解构
function foo2({ name, age } = { name: "why", age: 19 }) {
  console.log(name);
  console.log(age);
}
foo2({ name: "hdf", age: 20 });

function bar(x, y, z = 30) {
  console.log(x, y, z);
}

bar(10, 20, 40);


function baz(x, y, z, m, n = 30) {
  console.log(x, y, z, m, n);
}

console.log(baz.length);
