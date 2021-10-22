var name = 'why'

var num1 = 20
var num2 = 30
var result = num1 + num2

function test() {

}
/*
    1.代码被解析，v8引擎内部会帮我们创建一个对象GlobalObject->go
    从javascript代码->parse->AST抽象语法树这个过程我们会创建一个GlobalObject
    var GlobalObject={
        String:"类",
        Date:'类',
        seTimeout:"函数",
        window:GlobalObject
        你会发现window回去了 可以无限套娃 window.window.window,

        把我们这些属性 name ,num1 ,num2, result等
        挂进全局对象
        name:undefined,
        num1:undefined,
        result:undefined,
        这都是解析阶段 没有运行！！！！！！！！！！！！！
    }
    
    代码解析完后变成AST
    2.第二步 要开始运行代码了
        2.1 v8为了执行代码()，v8引擎内部会有一个执行上下文栈(Execiton Context Stack函数调用栈)
        2.2 
    
*/