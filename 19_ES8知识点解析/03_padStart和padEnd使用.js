// const message = "Hello World"

// const newMessage = message.padStart(15, "*").padEnd(20, "-")
// console.log(newMessage)

// // 案例
// const cardNumber = "321324234242342342341312"
// const lastFourCard = cardNumber.slice(-4)
// const finalCard = lastFourCard.padStart(cardNumber.length, "*")
// console.log(finalCard)

const message = "hello world";

console.log(message.padStart(15, "a"));
console.log(message.padEnd(15, "b"));

//对身份证
const numbers = "350122200012026532";
console.log(numbers);
console.log(numbers.slice(-4));
console.log(numbers.slice(-4).padStart(15, "*"));
