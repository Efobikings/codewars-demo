// use reduce method to add numbers in an array

let numbers = [1,2,3,4,5]

let sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum);//output: 15