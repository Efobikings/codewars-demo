//use reduce method to find the maximum number in an array

//my solution
let values = [10,5,8,20,15]
let max = values.reduce((acc, val)  => (val > acc ? val : acc), values[0])
console.log(max);// Output : 20
