// This function takes a name as an input parameter and
// returns an array. The array contains either the 
//original name or the original name and its first 
//two letters, depending on the length of the name.


function WhoIsPaying(name) {
    return (name.length > 2 ) ? [name, name.substr(0,2)] : [name]
}


// examples
// console.log(whoIsPaying("John"));    // Output: ["John", "Jo"]
// console.log(whoIsPaying("Al"));      // Output: ["Al"]
// console.log(whoIsPaying("Samuel"));  // Output: ["Samuel", "Sa"]
