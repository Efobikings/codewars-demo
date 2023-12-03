//reduce this array into a single array

let nestedArray = [[1,2],[3,4],[5,6]]
let flatArray = nestedArray.reduce((acc, current) => acc.concat(current), [])
console.log(flatArray); //[1,2,3,4,5,6]


//expanantiaon
// Certainly! Let's break down Examples 3, 4, and 5 using the reduce method:

// Example 3: Flattening an Array
// javascript
// Copy code
// let nestedArray = [[1, 2], [3, 4], [5, 6]];

// let flatArray = nestedArray.reduce((acc, current) => acc.concat(current), []);

// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
// nestedArray.reduce((acc, current) => acc.concat(current), []);

// The callback function takes two parameters:

// acc: The accumulator, which is initially an empty array ([]).
// current: The current element being processed in nestedArray.
// acc.concat(current) concatenates the current array (current) to the accumulator array (acc). This operation is performed for each element in nestedArray.

// Iteration 1: acc = [], current = [1, 2]

// Concatenating [1, 2] to [] results in [1, 2].
// Iteration 2: acc = [1, 2], current = [3, 4]

// Concatenating [3, 4] to [1, 2] results in [1, 2, 3, 4].
// Iteration 3: acc = [1, 2, 3, 4], current = [5, 6]

// Concatenating [5, 6] to [1, 2, 3, 4] results in [1, 2, 3, 4, 5, 6].
// The final result is [1, 2, 3, 4, 5, 6], which is a flattened array.