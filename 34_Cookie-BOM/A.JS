let n = 0;
(async function a(num) {
  console.log("1-", num);
  b(num++);
  console.log("2-", num);
})(n);
async function b(num) {
  console.log("3-", num++);
  await c(num++);
  console.log("4-", ++num);
}

b();