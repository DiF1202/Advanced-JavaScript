/*
 * @Author: your name
 * @Date: 2021-10-28 17:13:05
 * @LastEditTime: 2021-10-29 18:52:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \邂逅js高级\05_闭包内存泄露\01_js闭包内存泄露案例.js
 */
function createFnArray() {
  // var arr = [1, 1, 1, 1, 1, 1, 1, 1,1, 1,1, 1,1 ]
  // 占据的空间是4M x 100 + 其他的内存 = 400M+
  // 1 -> number -> 8byte -> 8M
  // js: 10 3.14 -> number -> 8byte ? js引擎
  // 8byte => 2的64次方 => 4byte
  // 小的数字类型, 在v8中成为Sim, 小数字 2的32次方
  var arr = new Array(1024 * 1024).fill(1)
  return function () {
    console.log(arr.length)
  }
}

// var arrayFn = createFnArray()
// arrayFn = null

// 100 * 100 = 10000 = 10s
var arrayFns = []
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray())
  }, i * q100);
}

// arrayFns = null
setTimeout(() => {
  for (var i = 0; i < 50; i++) {
    setTimeout(() => {
      arrayFns.pop()
    }, 100 * i);
  }
}, 10000);
