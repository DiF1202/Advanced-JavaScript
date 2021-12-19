
let temp = 1

function fn() {
    console.log(temp) //因为有暂时性死区， 这里的temp无法被访问 访问会报错
    let temp = 2
    console.log(temp)
}

fn()