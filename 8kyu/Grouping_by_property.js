//use reduce method to group items

let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
  ];
  
  let groupedByAge = people.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person);
    return acc;
  }, {});
  
  console.log(groupedByAge);
  // Output: { '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ], '30': [ { name: 'Bob', age: 30 } ] }

  
//   people.reduce((acc, person) => {...}, {});

// The callback function takes two parameters:

// acc: The accumulator, which is initially an empty object ({}).
// person: The current person object being processed in people.
// acc[person.age] = acc[person.age] || []; initializes an array for each age in the accumulator.

// acc[person.age].push(person); adds the current person to the corresponding age group.

// Iteration 1: acc = {}, person = { name: 'Alice', age: 25 }

// acc[25] is undefined, so it becomes an empty array. The accumulator is now { 25: [ { name: 'Alice', age: 25 } ] }.
// Iteration 2: acc = { 25: [ { name: 'Alice', age: 25 } ] }, person = { name: 'Bob', age: 30 }

// acc[30] is undefined, so it becomes an empty array. The accumulator is now { 25: [ { name: 'Alice', age: 25 } ], 30: [ { name: 'Bob', age: 30 } ] }.
// Iteration 3: acc = { 25: [ { name: 'Alice', age: 25 } ], 30: [ { name: 'Bob', age: 30 } ] }, person = { name: 'Charlie', age: 25 }

// acc[25] is defined, so { name: 'Charlie', age: 25 } is added to the array. The accumulator is now { 25: [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ], 30: [ { name: 'Bob', age: 30 } ] }.
// The final result is { 25: [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ], 30: [ { name: 'Bob', age: 30 } ] }, which represents people grouped by age.