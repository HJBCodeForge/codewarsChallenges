/* Codewards Javascript Kata's */

//Banking number replace with #

// function maskify(cc) {
//     let masked = [];
//     let displayedString = '';
//     for(let i=0; i < cc.length; i++){
//       if(i < (cc.length - 4)){
//         masked[i] = '#';
//       } else {
//         masked[i] = cc[i]
//       }
//     }
//     for(let i=0; i < masked.length; i++){
//         displayedString += masked[i];
//     }
//     console.log(displayedString);
//   }
//   maskify("1")


// function maskify(str){
//     return str
//     .split('')
//     .map((number,index) =>  index >= (str.length - 4) ? number: number[index] = '#')
//     .join('')
// }

// console.log(maskify("1234567890"))

//ARRAY MOTHODS PARCTISE

//1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
    //That is: removes all dashes, each word after dash becomes uppercased.

  // function camelize(str){
  //     return str
  //     .split('-')
  //     .map((item, index) => index == 0 ? item: item[0].toUpperCase() + item.slice(1))
  //     .join('')
  // }
  // console.log(camelize("background-color"))
  // console.log(camelize("list-style-image"))
  // console.log(camelize("-webkit-transition"))

//2. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
    //The function should not modify the array. It should return the new array.

    // let arr = [5, 3, 8, 1];

    // function filterRange(arr, a, b){
    //     return arr.filter(item => item >= a && item <= b);
    // }
    
    // let filtered = filterRange(arr, 1, 4);
    // alert( filtered ); // 3,1 (matching values)
    // alert( arr ); // 5,3,8,1 (not modified)

//3. Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
    //The function should only modify the array. It should not return anything.

    // function filterRangeInPlace(arr, a, b){
    //     for(let i = 0; i < arr.length; i++){
    //         if(arr[i] < a || arr[i] > b){
    //             arr.splice(i, 1);
    //         }
    //     }
    // }

    // let arr = [5, 3, 8, 1, 2, 1, 3, 4, 5];
    // filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
    // alert( arr ); // [3, 1]

//4. Sort in decreasing order

  // let arr = [5, 2, 1, -10, 8];

  // arr = arr.sort().reverse()
  // //arr.sort((a,b) => b - a)

  // alert( arr ); // 8, 5, 2, 1, -10

//5. Copy and sort array
  // We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
  // Create a function copySorted(arr) that returns such a copy.

  // function copySorted(arr){
  //     return arr.slice().sort()
  // }

  // let arr = ["HTML", "JavaScript", "CSS"];

  // let sorted = copySorted(arr);

  // alert( sorted ); // CSS, HTML, JavaScript
  // alert( arr ); // HTML, JavaScript, CSS (no changes)

//6. Create an extendable calculator
  // Create a constructor function Calculator that creates “extendable” calculator objects.
  // The task consists of two parts.
      //1. First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should        
      //   understand plus + and minus -.
      // 2. Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
      //     For instance, let’s add the multiplication *, division / and power **:

  // function Calculator(){

  //     this.methods = {
  //         '+': (a, b) => a + b,
  //         '-': (a, b) => a = b,
  //     }

  //     this.calculate = function(str){
  //         let string = str.split(' '),
  //         a = +string[0],
  //         op = string[1],
  //         b = string[2];

  //         if(!this.methods[op] || isNaN(a) || isNaN(b)){
  //             return NaN;
  //         }
  //         return this.methods[op](a, b)
  //     }

  //     this.addmethods = function(name, func){
  //         return this.methods[name] = func;
  //     }
  // };

  //     let calc = new Calculator;
  //     calc.addmethods('*', (a, b) => a * b)
  //     alert( calc.calculate("3 + 7") ); // 10
  //     alert( calc.calculate("3 * 7") );

//7. Map to names
  //You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

  // let john = { name: "John", age: 25 };
  // let pete = { name: "Pete", age: 30 };
  // let mary = { name: "Mary", age: 28 };

  // let users = [ john, pete, mary ];

  // let names = users.map(user => ' ' + user.name)

  // alert( names ); // John, Pete, Mary

//8. Map to objects
  //You have an array of user objects, each one has name, surname and id.
  //Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

  // let john = { name: "John", surname: "Smith", id: 1 };
  // let pete = { name: "Pete", surname: "Hunt", id: 2 };
  // let mary = { name: "Mary", surname: "Key", id: 3 };

  // let users = [ john, pete, mary ];

  // let usersMapped = users.map(user => ({
  //     fullName: `${user.name} ${user.surname}`,
  //     id: user.id
  // }))

  // alert( usersMapped[0].id ) // 1
  // alert( usersMapped[0].fullName ) // John Smith

//9. Sort users by age
  //Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

  // let john = { name: "John", age: 25 };
  // let pete = { name: "Pete", age: 30 };
  // let mary = { name: "Mary", age: 28 };

  // let arr = [ pete, john, mary ];

  // function sortByAge(arr){
  //     arr.sort((a, b) => a.age > b.age ? 1: -1)
  // }

  // sortByAge(arr);

  // // now: [john, mary, pete]
  // alert(arr[0].name); // John
  // alert(arr[1].name); // Mary
  // alert(arr[2].name); // Pete

// 10, Shuffle an array
  // Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
  // Multiple runs of shuffle may lead to different orders of elements. For instance:

  // let arr = [1, 2, 3];

  // function shuffle(arr){
  //     return Array(arr.length).fill(null)
  //     .map((_, i) => [Math.random(), i])
  //     .sort(([a], [b]) => a - b)
  //     .map(([, i]) => arr[i])
  // }

  // console.log(shuffle(arr))
  // // arr = [3, 2, 1]

  // console.log(shuffle(arr))
  // // arr = [2, 1, 3]

  // console.log(shuffle(arr))
  // // arr = [3, 1, 2]
  // // ...

//11. Get average age
  // Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
  // The formula for the average is (age1 + age2 + ... + ageN) / N.

  // function getAverageAge(arr){
  //     return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
  // }

  // let john = { name: "John", age: 25 };
  // let pete = { name: "Pete", age: 30 };
  // let mary = { name: "Mary", age: 29 };

  // let arr = [ john, pete, mary ];

  // alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//12. Filter unique array members
  // Let arr be an array.
  // Create a function unique(arr) that should return an array with unique items of arr.

  // function unique(arr) {
  //     let result = [];

  //     for (str of arr){
  //         if(!result.includes(str)){
  //             result.push(str)
  //         }
  //     }
  //     return result
  //   }
    
  //   let strings = ["Hare", "Krishna", "Hare", "Krishna",
  //     "Krishna", "Krishna", "Hare", "Hare", ":-O"
  //   ];
    
  //   alert( unique(strings) ); // Hare, Krishna, :-O

// 13. Create keyed object from array
  // Let’s say we received an array of users in the form {id:..., name:..., age:... }.
  // Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

  // let users = [
  //     {id: 'john', name: "John Smith", age: 20},
  //     {id: 'ann', name: "Ann Smith", age: 24},
  //     {id: 'pete', name: "Pete Peterson", age: 31},
  //   ];
    
  //   let usersById = groupById(users);
    
    /*
    // after the call we should have:
    
    usersById = {
      john: {id: 'john', name: "John Smith", age: 20},
      ann: {id: 'ann', name: "Ann Smith", age: 24},
      pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    */

  //   function solution(str, ending){
  //     return str.endsWith(ending);
  //   }

  //   console.log(solution('abcde', '')) // returns true

//14. Number of People in the Bus
  // There is a bus moving in the city which takes and drops some people at each bus stop.

  // You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

  // Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

  // Take a look on the test cases.

  // Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

  // The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

  //Solution
  //const number = busStops => busStops.reduce((count, people) => count + (people[0] - people[1]), 0)


  //Sample Tests
  //console.log(number([[10,0],[3,5],[5,8]]));
  // number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
  // number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]);
  // number([[0,0]]);

//15. List Filtering
  //In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

  //Solution
  // function filter_list(l) {
  //   //return l.filter( x => typeof x === 'number')
  //   return l.filter( x => Number.isInteger(x))
  // }

  // console.log(filter_list([1,2,'a','b']))
  // Sample Tests
  // const assert = require('chai').assert;
  // describe("Tests", () => {
  //   it("test", () => {
  //     assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
  //     assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
  //     assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
  //   });
  // });
  // 1
  // const assert = require('chai').assert;
  // 2
  // describe("Tests", () => {
  // 3
  //   it("test", () => {
  // 4
  //     assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
  // 5
  //     assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
  // 6
  //     assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');
  // 7
  //   });
  // 8
  // });

  //16. A square of squares
  // You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

  // However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

  // Task
  // Given an integral number, determine if it's a square number:

  // In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

  // The tests will always use some integral number, so don't worry about that in dynamic typed languages.

  //Solution long
// var isSquare = function(n){
//   let squareTest = Math.round(Math.sqrt(n))
//   console.log(squareTest)
//   if(squareTest * squareTest === n){
//     return true
//   } else {
//     return false
//   }
// }
// console.log(isSquare(41))

//Solution short
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

  //Sample Test
//   const Test = require('@codewars/test-compat');

// describe("isSquare", function(){
//   it("should work for some examples", function(){
//     Test.assertEquals(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
//     Test.assertEquals(isSquare( 0), true, "0 is a square number (0 * 0)");
//     Test.assertEquals(isSquare( 3), false, "3 is not a square number");
//     Test.assertEquals(isSquare( 4), true, "4 is a square number (2 * 2)");
//     Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
//     Test.assertEquals(isSquare(26), false, "26 is not a square number");
//   });
// });

// 17. Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//Solution:
// function boolToWord( bool ){
//   return bool ? 'Yes' : 'No'
// }

// console.log(boolToWord(false))
//Sample Tests:
// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for basic tests", () => {
//     assert.strictEqual(boolToWord(true), 'Yes')
//     assert.strictEqual(boolToWord(false), 'No')
//     });
//   });

//18. Task
// You get an array of numbers, return the sum of all of the positives ones.
// Example
// [1, -4, 7, 12] => 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let sumOfPossNums = 0
//   for (let i = 0; arr.length >= i; i++) {
//     if(arr[i] >= 0){
//       sumOfPossNums += arr[i]
//     }
//   }
//   return sumOfPossNums
// }
// function positiveSum(arr) {
//   return arr.reduce((acc,val) => acc + (val > 0 ? b : 0), 0)
// }

// console.log(positiveSum([1, -4, 7, 12]))

//19.Create a function that returns the sum of the two lowest positive numbers given an 
//array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a,b) => a -b)
//   return numbers[0] + numbers[1]
// }

// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))

//20. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//   if(names.length > 3) {
//     return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
//   } else if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   } else if (names.length < 3 && names.length >= 2) {
//     return `${names[0]} and ${names[1]} like this`
//   } else if (names.length < 2 && names.length > 0) {
//     return `${names[0]} likes this`
//   } else {
//     return 'no one likes this'
//   }
// }

// console.log(likes([]))

//21. Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade (s1, s2, s3) {
//   let grade = ""
//   let totalAverage = (s1 + s2 + s3) / 3
//   if(totalAverage >= 90 && totalAverage <= 100) {
//     return grade = 'A'
//   } else if(totalAverage >= 80 && totalAverage < 90) {
//     return grade = 'B'
//   } else if(totalAverage >= 70 && totalAverage < 80) {
//     return grade = 'C'
//   } else if(totalAverage >= 60 && totalAverage < 70) {
//     return grade = 'D'
//   } else if(totalAverage >= 0 && totalAverage < 60) {
//     return grade = 'F'
//   }
// }

// function getGrade (s1, s2, s3) {
//   avg = (s1+s2+s3)/3
//   if (avg < 60) return 'F'
//   else if (avg < 70) return 'D'
//   else if (avg < 80) return 'C'
//   else if (avg < 90) return 'B'
//   else return 'A'
// }

// console.log(getGrade(45,60,53))

//22. Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// function toJadenCase(str) {
//   let upperCaseStr = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
//   return upperCaseStr
// }

// console.log(toJadenCase("How Can Mirrors Be Real If Our Eyes Aren't Real"))

//23. Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('')
//   }).join(' ')
// }
// function reverseWords(str) {
//   return str.split('').reverse().join('').split(' ').reverse().join(' ')
// }
// console.log(reverseWords('double  spaces'))

//24. A Needle in the Haystack
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.findIndex(x => x === "needle")}`
// }
// console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']))

//25. DNA to RNA Conversion
//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//Medthod1
// function DNAtoRNA(dna) {
//   return dna.split('').map(x => x === 'T' ? x = 'U' : x).join('')
// }
// //Method2
// function DNAtoRNA(dna) {
//   return dna.replaceAll('T','U');
// }
// console.log(DNAtoRNA("GCAT"))

//26. In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//   let lowestNum = numbers.split(' ').sort(((a,b) => a-b)).shift()
//   let highestNum = numbers.split(' ').sort(((a,b) => a-b)).pop()
//   let highandLow = `${highestNum} ${lowestNum}`
//   return highandLow
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

//27. Returning Strings. 
// Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".
//[Make sure you type the exact thing I wrote or the program may not execute properly]

// function greet(name){
//   return `Hello, ${name} how are you doing today?`
// }

// console.log(greet("Ryan"))

//28. Find the next perfect square!
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples ( Input --> Output )
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

// function findNextSquare(sq) {
//   let prefectSqr = Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1) : -1
//   return prefectSqr
// }

// console.log(findNextSquare(121))

//29. Grasshopper - Check for factor
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.
function checkForFactor (base, factor) {
  return base % factor === 0
}
console.log(checkForFactor(10,2))