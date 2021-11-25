/*
 * @Author: your name
 * @Date: 2021-11-24 19:02:35
 * @LastEditTime: 2021-11-24 19:19:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \邂逅js高级\21_ES11知识点解析\01_大整数BigInt的使用.js
 */
// ES11之前 max_safe_integer
const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt); // 9007199254740991
console.log(maxInt + 1);
console.log(maxInt + 2);

// ES11之后: BigInt
const bigInt = 900719925474099100n;
// console.log(bigInt + 10n);

const num = 100
console.log(bigInt + BigInt(num))

// const smallNum = Number(bigInt)
// console.log(smallNum)
