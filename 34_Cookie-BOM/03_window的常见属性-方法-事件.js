//1.常见属性
console.log(window.screenX);
console.log(window.screenY);

window.addEventListener("scroll", () => {
  console.log(window.scrollX, window.scrollY);
});

console.log(window.outerHeight);
console.log(window.innerHeight);

//2.常见的方法
const scrollBtn = document.querySelector("#scroll");
scrollBtn.onclick = function () {
  //1.scrollTo
  //可以跳转到下拉框哪里
  // window.scrollTo({ top: 2000 }); //移动跳转至 2000px
  //2.close
  //可以直接关闭
  // window.close();
  //3.open
  // window.open("http://www.baidu.com", "_self");
};
//4.onload
window.onload = function () {
  console.log("window窗口加载完毕");
};

//获取焦点
window.onfocus = function () {
  console.log("window窗口获取焦点~");
};
//onblur
window.onblur = function () {
  console.log("window窗口失去焦点");
};

//看url里面 hash变了
const hashChangeBtn = document.querySelector("#hashchange");
hashChangeBtn.onclick = function () {
  location.hash = "aaaa";
};
