const promise = new Promise((resolve, reject) => {
  reject("reject message");
});

promise
  .then(() => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally code");
  });
