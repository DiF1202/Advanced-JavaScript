function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
}

Person.prototype.running = function () {
  console.log(this.name + "在吃东西~")
}

Person.prototype.eating = function () {
  console.log(this.name + "在跑步")
}

var p1 = new Person("why", 19, 1.77, "福州")
p1.eating()
p1.running()