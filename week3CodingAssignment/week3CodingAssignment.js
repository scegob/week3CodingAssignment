/* 1) create an array called ages that contains
the following values: 3, 9, 23, 64, 2, 8, 28,
 93. */

 let ages = [3, 9, 23, 64, 2, 8, 28, 93, 55];
function firstLast() {
    console.log(ages[ages.length -1] - ages[0]);
}
firstLast();

 /* 2) create an array called names that contains the
 the following values: 'Sam', 'Tommy', 'Tim', 'Sally',
 'Buck', 'Bob'. */

 var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

 // sum up all the names lengths
 const totalNamesLength = names.reduce(function (sum, names) {
    return sum + names.length;
 }, 0);

 // calculate avg length of the quotes
 const avgNamesLength = (
    totalNamesLength / names.length);

 for (let i = 0; i < names.length; i++) {
    console.log(avgNamesLength);
 }

 for (let j = 0; j < names.length; j++) {
    console.log(names.join(' '));
 }

 /* 3-4 ) how do you access the last element
 of any array and how do you access the 
 first element of any array*/
 var anyArray = [5, 6, true, 'false', 9, 'hi'];

 var lastElement = anyArray.length - 1;
 var firstElement = anyArray[0];

 /* 5) create a new array called nameLength. Write
 a loop to iterate over the previously create names array
 and add the length of each names to the 
 nameLengths array */
var nameLengths = []


 for (let i = 0; i < names.length; i++) {

    nameLengths.push(names[i].length);
}

console.log(nameLengths);

/* 6) Write a loop to callculate the sum of all the
elements in nameLengths array*/

var singleVal = 0;

for (let j = 0; j < nameLengths.length; j++) {
   var singleVal = singleVal += nameLengths[j]
}

console.log(singleVal);

/* 7 write a function that takes two parameters and concatenated
to itself n number of times */

function repeatStringNumTimes(word, n) {
   var repeatedString = "";
   while (n > 0) {
     repeatedString += word;
     n--;
   }
   return repeatedString;
 }
 console.log(repeatStringNumTimes("Hello", 3));

 /* 8 write a function that will two parameters firstName and lastName */

 function callName (firstName, lastName) {
   var fullName = "";
   fullName = firstName + " " + lastName;
   return fullName;
 }

 console.log(callName("John", "Smith"));

 /* 9) write an array that takes numbers and returns true
 if the sum of all the number is greater than 100 */

 const sumOfArr = (arr) => {

   let sum = 0
   for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
   }
   if (sum > 100) {
       return true
   } else {
       return false
   }
}

console.log(sumOfArr(ages));

 

 /* 10 write a function that takes an array of numbers
  and returns the average of all the elements in the array */
 
  function average (arr) {
  var averageVal = 0;

for (let j = 0; j < arr.length; j++) {
   var averageVal = averageVal += arr[j]
   if (averageVal > 100) {
      return true
   }
}
}
console.log('hi')
console.log(average(ages));

/*11.	Write a function that takes two arrays of numbers and returns true 
if the average of the elements in the first array is greater than the 
average of the elements in the second array. */

let arr1 = [12, 4, 6, 30, 44];
let arr2 = [3, 55, 23, 45, 56];

function compareTo(a,b){
   return average(a) > average(b);
}
console.log(compareTo(arr1, arr2));



/* 11) write a function called willBuyDirnk that takes a boolean
isHotOutside and a number moneyInPocket and return true if
it is hot outside and if money is greater than 10.50 */

function willBuyDrink (isHotOutside, moneyInPocket) {
   return isHotOutside = true && moneyInPocket > 10.5
}

console.log(willBuyDrink(true, 9));

/* 12) I need a function that will let me know if it 
raining outside*/

let rainOutSide = false;

function isRaining () {
   if (rainOutSide == true) {
      return 'Bring an umbrella'
   } else {
      return "It is nice out, go on a walk"
   }
}
console.log(isRaining());