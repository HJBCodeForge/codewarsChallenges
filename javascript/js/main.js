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

function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b) => a -b)
  return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))