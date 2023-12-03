// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

//my solution

function countSheep(arr) {
    // Using reduce method
    return arr.reduce((count, isPresent) => (isPresent ? count + 1 : count), 0);
  }
  
  // Example usage:
  let sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
  
  console.log(countSheep(sheepArray)); // Output: 15