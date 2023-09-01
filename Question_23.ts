


let car = "subaru";

console.log("Is car == 'subaru'? I predict true.");
console.log(car == "subaru");

console.log("Is car != 'audi'? I predict true.");
console.log(car != "audi");

console.log("Is car == 'Subaru'? I predict false.");
console.log(car == "Subaru");

console.log("Is car == 'subaru' || car == 'toyota'? I predict true.");
console.log(car == "subaru" || car == "toyota");

console.log("Is car == 'subaru' && car == 'toyota'? I predict false.");
console.log(car == "subaru" && car == 'toyota');

console.log("Is car.length > 5? I predict false.");
console.log(car.length > 5);

console.log("Is car.length <= 6? I predict true.");
console.log(car.length <= 6);

console.log("Is car[0] == 's'? I predict true.");
console.log(car[0] == "s");

console.log("Is car[car.length - 1] == 'u'? I predict true.");
console.log(car[car.length - 1] == "u");

console.log("Is car.includes('a')? I predict true.");
console.log(car.includes("a"));
