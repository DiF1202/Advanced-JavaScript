class Person {}

function minxinRunner(baseclass) {
  class NewClass extends Baseclass {
    running() {
      console.log("running");
    }
  }

  return NewClass;
}

function minxinEater(Baseclass) {
  return class extends Baseclass {
    eating() {
      console.log("eating");
    }
  };
}
