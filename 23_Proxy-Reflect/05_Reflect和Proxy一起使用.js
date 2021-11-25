/*
 * @Author: your name
 * @Date: 2021-11-24 21:05:16
 * @LastEditTime: 2021-11-25 16:08:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\23_Proxy-Reflect\05_Reflect和Proxy一起使用.js
 */
// const obj = {
//   name: "why",
//   age: 18
// }

// const objProxy = new Proxy(obj, {
//   get: function(target, key, receiver) {
//     console.log("get---------")
//     return Reflect.get(target, key)
//   },
//   set: function(target, key, newValue, receiver) {
//     console.log("set---------")
//     target[key] = newValue

//     const result = Reflect.set(target, key, newValue)
//     if (result) {
//     } else {
//     }
//   }
// })

// objProxy.name = "kobe"
// console.log(objProxy.name)

const obj = {
  name: "why",
  age: 123,
};

const obj_proxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    console.log("get!!!!!!!!!");
    return Reflect.get(target, key);
  },
  set: function (target, key, newvalue, receiver) {
    console.log("set~~~");
    //Reflect.set()整个表达式会返回一个对象
    //是boolean类型的
    const result = Reflect.set(target, key, newvalue);
    if (result) {
      console.log("更新成功");
    } else {
      console.log("更新失败");
    }
  },
});

console.log(obj_proxy.name);
obj_proxy.name = "hdf";
console.log(obj_proxy.name);
console.log(obj.name);
