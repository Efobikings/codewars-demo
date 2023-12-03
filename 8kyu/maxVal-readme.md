values.reduce((acc, val) => (val > acc ? val : acc), values[0]);

reduce takes a callback function as its first argument. This callback function is executed for each element in the array and has two parameters:

acc: The accumulator, which holds the running total or the result of the previous iterations.
val: The current element being processed.
(val > acc ? val : acc) is a ternary operator that checks if the current element (val) is greater than the accumulator (acc). If true, it returns the current element (val), otherwise, it returns the accumulator (acc). This ensures that we always keep the maximum value.

, values[0] is the second argument to reduce, specifying the initial value of the accumulator. In this case, it's set to the first element of the array (values[0]).

Iteration 1: acc = 10, val = 5

Since 5 is not greater than 10, the accumulator remains 10.
Iteration 2: acc = 10, val = 8

Since 8 is not greater than 10, the accumulator remains 10.
Iteration 3: acc = 10, val = 20

20 is greater than 10, so the accumulator becomes 20.
Iteration 4: acc = 20, val = 15

15 is not greater than 20, so the accumulator remains 20.
The final result is 20, which is the maximum value in the array.