
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."

// Function to check remaining fuel and display message
function checkFuel(remainingFuel) {
    if (remainingFuel < 0.25) {
      alert("Please refill the fuel in your car.");
    } else {
      alert("You have enough fuel. Happy driving!");
    }
  }
  
  // Taking input from the user
  const userInput = prompt("Enter the remaining fuel in your car (in liters):");
  const remainingFuel = parseFloat(userInput);
  
  // Call the function to check fuel level
  checkFuel(remainingFuel);
  
  

// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

let msg="Have a good day";
alert(msg);

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.
// Function to calculate percentage and display grade and remarks
function calculateGradeAndRemarks(subject1Marks, subject2Marks, subject3Marks, totalMarks) {
    const totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
    const percentage = (totalObtainedMarks / totalMarks) * 100;
  
    let grade, remarks;
  
    if (percentage >= 90) {
      grade = "A+";
      remarks = "Excellent";
    } else if (percentage >= 80) {
      grade = "A";
      remarks = "Very Good";
    } else if (percentage >= 70) {
      grade = "B";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "C";
      remarks = "Average";
    } else if (percentage >= 50) {
      grade = "D";
      remarks = "Pass";
    } else {
      grade = "F";
      remarks = "Fail";
    }
  
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    console.log(`Grade: ${grade}`);
    console.log(`Remarks: ${remarks}`);
  }
  
  // Taking input from the user
  const subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
  const subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
  const subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));
  const totalMarks = parseFloat(prompt("Enter total marks:"));
  
  // Call the function to calculate grade and remarks
  calculateGradeAndRemarks(subject1Marks, subject2Marks, subject3Marks, totalMarks);
  

// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).

let literalArr = ["asia", 3,true,3.6,null];
let stringArr = ["pink","blue","green"];
let numberArr = [23,56,89];
let boolArr = [true,false,true];
let mixedArr =["dosta",34,undefined,false,34,6];
let qualificationArr = ["Matric","Fsc",'Bsc',"bachlers/Master","MPhil","PHD"];

console.log(literalArr);
console.log(stringArr);
console.log(numberArr);
console.log(boolArr);
console.log(mixedArr);
console.log(qualificationArr);

// 5)Write a program to store phone manufacturers in an array.

let PhoneManufacturers = ["Apple","Samsung","OPPO","vivo","itels","nokia"];
console.log(PhoneManufacturers);

// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.

let studentScores = [36,78,90,100,69];
studentScores.sort((a,b)=>a-b);
console.log("Sorted Student Scores (Ascending Order):", studentScores);

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].
    let array = ["This", "is", "my", "cat"];
    let signalString = array.join(" ");
    console.log(signalString);


// 8)Implement the FIFO (First In First Out) approach using arrays.

let FIFO =[23,56,90,12];
FIFO.push(22);
console.log(FIFO);


// 9)// Implement the LIFO (Last In First Out) approach using arrays.
let LIFO = [10,20,30,40];
LIFO.pop();
console.log(LIFO);

// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.


var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC bakery! What do you want, sir/ma'am?");

var found = false;
for (var i = 0; i < bakeryItems.length; i++) {
    if (userSearch.toLowerCase() === bakeryItems[i].toLowerCase()) {
        document.write(userSearch + " is available at index " + i + " in our bakery");
        found = true;
        break;
    }
}

if (!found) {
    document.write(userSearch + " is not available in our bakery");
}


// 11)Write a program to identify the largest number in the given array.
let LargeNoArr =[68,10,90,85,20,18];
function findLargestNumber(array){
  if(array.length === 0){
    return "Array is empty";
  }
  let LargeNo = array[0];
  for(i=1;i<array.length;i++){
    if(array[i] > LargeNo){
      LargeNo = array[i];
    }
  }
  return LargeNo;
}
let LargeNo = findLargestNumber(LargeNoArr);
console.log("largest No is ",LargeNo);

// // 12)Write a program to identify the smallest number in the given array.
// // Given array
const numbersArray = [5, 2, 8, 1, 6, 3,0,11];

// Find the smallest number in the array
function findSmallestNumber(arr) {
  if (arr.length === 0) {
    return "Array is empty.";
  }

  let smallestNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }

  return smallestNumber;
}

// Call the function and output the result
const smallestNumber = findSmallestNumber(numbersArray);
console.log("Smallest Number:", smallestNumber);

// 13)Write a program to print multiples of 5 ranging from 1 to 100.
        for(i=1;i<=100;i++){
          if( i % 5 === 0){
            console.log(i);
          }
        }

// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.
//sum
let num1 = parseInt(prompt("Enter no 1"));
let num2 = parseInt(prompt("Enter no 2"));
let num3 = (num1 + num2);

// sub
let num4 = parseInt(prompt("Enter no 1"));
let num5 = parseInt(prompt("Enter no 2"));
let num6 = (num4 - num5);

// mul
let num7 = parseInt(prompt("Enter no 1"));
let num8 = parseInt(prompt("Enter no 2"));
let num9 = (num7 * num8);

// division
let num10 = parseInt(prompt("Enter no 1"));
let num11= parseInt(prompt("Enter no 2"));
let num12 = (num10 / num11);

// moudlus
let num13 = parseInt(prompt("Enter no 1"));
let num14 = parseInt(prompt("Enter no 2"));
let num15 = (num13 % num14);

document.write("<br>");
document.write("Sum of two num is = ",num3);
document.write("<br>");
document.write("Substraction of two num is = ",num6);
document.write("<br>");
document.write("multiplication of two num is = ",num9);
document.write("<br>");
document.write("division of two num is = ",num12);
document.write("<br>");
document.write("modulus of two num is = ",num15);


// 14)Repeat task1 for subtraction, multiplication, division & modulus.

//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

let city = prompt("Enter city name");
if(city=="Karachi"){
  console.log("Welcome to the city of lights.");
}
else{
  console.log("welcome");
}


// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."

let gender = prompt("Enter your gender");
if(gender=="male"){
  console.log("Good Morning Sir");
}
else if(gender=="female"){
  console.log("Good Morning Ma'am");
}
else{
  console.log("other");
}
//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."


let color = prompt("Enter the color");

if(color=="red"){
  console.log("Must Stop");
}
else if(color=="Yellow"){
  console.log("Ready to move");
}
else if(color=="green"){
  console.log("Move now");
}

else{
  console.log("Enter Corect correct");
}