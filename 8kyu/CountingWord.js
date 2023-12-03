//using reduce method to count words 

let words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(wordCount);
// Output: { apple: 3, banana: 2, orange: 1 }


//explanantion
// words.reduce((acc, word) => {...}, {});

// The callback function takes two parameters:

// acc: The accumulator, which is initially an empty object ({}).
// word: The current word being processed in words.
// acc[word] = (acc[word] || 0) + 1; increments the count of the current word in the accumulator.

// Iteration 1: acc = {}, word = 'apple'

// acc['apple'] is undefined, so it becomes 1. The accumulator is now { apple: 1 }.
// Iteration 2: acc = { apple: 1 }, word = 'banana'

// acc['banana'] is undefined, so it becomes 1. The accumulator is now { apple: 1, banana: 1 }.
// Iteration 3: acc = { apple: 1, banana: 1 }, word = 'apple'

// acc['apple'] is defined as 1, so it becomes 2. The accumulator is now { apple: 2, banana: 1 }.
// Iterations continue for the remaining words.

// The final result is { apple: 3, banana: 2, orange: 1 }, which represents the count of each word.