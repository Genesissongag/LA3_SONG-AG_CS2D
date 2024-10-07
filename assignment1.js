// Get user input for score
const score = parseFloat(prompt("Enter your score: "));

// Use Conditional Ternary statements to assign grades
const grade = score >= 97 ? "1.00" : score >= 94 ? "1.25" : score >= 91 ? "1.50" : score >= 88 ? "1.75" : score >= 85 ? "2.00" : score >= 82 ? "2.25" : score >= 79 ? "2.50" : score >= 76 ? "2.75" : score === 75 ? "3.00" : score >= 72 ? "4.00" : "5.00";

// Implement additional If..else if..else Statements to assign final remarks
let remark;
if (score >= 90) {
  remark = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
  remark = "AVERAGE PASS";
} else if (score >= 75) {
  remark = "LOW PASS";
} else {
  remark = "FAILED, Needs Improvement";
}

// Log the corresponding grade and remark to the console
console.log(`Your equivalent Grade is ${grade}`);
console.log(`Your remark is ${remark}`);
