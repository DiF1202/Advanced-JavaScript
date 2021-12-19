function getDatas(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url == "hdf") {
        resolve("请求成功");
      } else {
        reject("请求失败");
      }
    }, 3000);
  });
}

const promise = getDatas("hdf");
promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
