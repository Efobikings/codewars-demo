// return the smallest integer in an array

solution one
findSmallestInt(args) {
    let min = args.reduce((acc, val) => (val < acc ? val : acc ), args[0])
    return min
}


solution two
function findSmallestNumber(numbers) {
    if (numbers.length === 0) {
      // Handle empty array case
      return undefined;
    }
  
    let smallest = numbers[0];  // Assume the first element is the smallest
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
  
    return smallest;
  }
  
  // Example usage:
  let numbersArray = [5, 2, 8, 1, 3];
  let smallestNumber = findSmallestNumber(numbersArray);
  console.log(smallestNumber); // Output: 1