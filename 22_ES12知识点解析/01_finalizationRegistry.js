/*
 * @Author: your name
 * @Date: 2021-11-24 19:53:55
 * @LastEditTime: 2021-11-24 20:14:00
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\22_ES12知识点解析\01_finalizationRegistry.js
 */
// ES12: FinalizationRegistry类
const finalRegistry = new FinalizationRegistry((value) => {
  console.log("注册在finalRegistry的对象, 某一个被销毁", value);
});

let obj = { name: "why" };
let info = { age: 18 };

// finalRegistry.register(obj, "obj")
finalRegistry.register(info, "value");

obj = null;
info = null;
