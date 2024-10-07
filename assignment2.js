// Prompt the user to input the Max Limit of the Loops
const maxLimit = parseInt(prompt("Enter the Max Limit of the Loops: "));

// Initialize counters to 0
let i = 0;
let j = 0;

// Create a variable to store the sum of counters
let sum = 0;

// Use double Loop Statement to print out the map of iterations
for (; i < maxLimit; i++) {
  for (; j < maxLimit; j++) {
    // Calculate the sum of counters
    sum = i + j;
    
    // Log the corresponding Loop Points and added Value per iteration to the console
    console.log(`Iteration: i = ${i}, j = ${j}, Sum = ${sum}`);
  }
  // Reset j to 0 for the next iteration of the outer loop
  j = 0;
}
