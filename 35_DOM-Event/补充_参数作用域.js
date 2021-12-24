var x = 0;

function foo(x, y = function () { x = 3; console.log(x) }) {
    console.log(x)
    var x = 2
    y()
    console.log(x)
}

foo()
console.log(x)