


//**************** test-1 ***************//

// Tests for equality and inequality with strings


let name: string = "Ali";
let city: string = "Lahore";

console.log("Is name == 'Ali'? I predict true.");
console.log(name == "Ali");

console.log("Is name != 'Ahmed'? I predict true.");
console.log(name != "Ahmed");

console.log("Is city == 'Karachi'? I predict false.");
console.log(city == "Karachi");

console.log("Is city != 'Lahore'? I predict false.");
console.log(city != "Lahore");

//**************** test-2 ***************//

//  Tests using the lower case function


let country: string = "Pakistan";

console.log("Is country.toLowerCase() == 'pakistan'? I predict true.");
console.log(country.toLowerCase() == "pakistan");

console.log("Is country.toLowerCase() != 'PAKISTAN'? I predict true.");
console.log(country.toLowerCase() != "PAKISTAN");


console.log("Is country.toLowerCase() == 'Pakistan'? I predict false.");
console.log(country.toLowerCase() == "Pakistan");

console.log("Is country.toLowerCase() != 'pakistan'? I predict false.");
console.log(country.toLowerCase() != "pakistan");


//**************** test-3 ***************//

//Numerical tests involving equality and inequality, 
//greater than and less than, greater than or equal to, and less than or equal to


let age: number = 25;
let score: number = 80;

console.log("Is age == 25? I predict true.");
console.log(age == 25);

console.log("Is age != 30? I predict true.");
console.log(age != 30);

console.log("Is score > 70? I predict true.");
console.log(score > 70);

console.log("Is score < 90? I predict true.");
console.log(score < 90);

console.log("Is age >= 26? I predict false.");
console.log(age >= 26);

console.log("Is age <= 24? I predict false.");
console.log(age <= 24);

console.log("Is score >= 80? I predict true.");
console.log(score >= 80);

console.log("Is score <= 80? I predict true.");
console.log(score <= 80);



//**************** test-4 ***************//

//   Tests using "and" and "or" operators


let x: number = 10;
let y: number = 20;
let z: number = 30;


console.log("Is x > y && x > z? I predict false.");
console.log(x > y && x > z);


console.log("Is x < y && x < z? I predict true.");
console.log(x < y && x < z);

console.log("Is y > x || y > z? I predict false.");
console.log(y > x || y > z);

console.log("Is y < x || y < z? I predict true.");
console.log(y < x || y < z);


//**************** test-5 ***************//


// Test whether an item is in a array


let colors: string[] = ["red", "green", "blue", "yellow"];

console.log("Is 'red' in colors? I predict true.");
console.log(colors.includes("red"));

console.log("Is 'purple' in colors? I predict false.");
console.log(colors.includes("purple"));

//**************** test-6 ***************//

// Test whether an item is not in a array


let animals: string[] = ["cat", "dog", "cow", "lion"];

console.log("Is 'bird' not in animals? I predict true.");
console.log(!animals.includes("bird"));

console.log("Is 'dog' not in animals? I predict false.");
console.log(!animals.includes("dog"));
