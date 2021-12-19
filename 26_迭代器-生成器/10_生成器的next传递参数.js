/*
 * @Author: your name
 * @Date: 2021-11-27 20:49:06
 * @LastEditTime: 2021-11-28 10:35:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\26_迭代器-生成器\10_生成器的next传递参数.js
 */
function* foo(num) {
  console.log("函数开始执行~");
  const value1 = 100 * num;
  console.log("第一段代码:", value1);

  const n = yield value1;

  const value2 = 10 * n;
  console.log("第二段代码:", value2);

  const count = yield value2;

  const value3 = count * 10;
  console.log("第三段代码:", value3);
  yield value3;
  console.log("函数执行结束~");
  return "123";
}

const generator = foo(10);
console.log(generator.next());
console.log(generator.next(100000000000));
console.log(generator.next(10));
console.log(generator.next(10));
