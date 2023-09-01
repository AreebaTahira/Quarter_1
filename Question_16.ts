


let guests: string[] = ["Noor Jahan", "Steven Pinker", "Ariana Grande"];

let reasons: string[] = ["You are the Malika-e-Tarannum (Queen of Melody) and the pride of Pakistan.", " I thank you for your contributions to science and society, and I hope to read more of your books in the future.", "I enjoy your music and creativity"];


for (let i = 0; i < guests.length; i++) {
 
  console.log("Dear " + guests[i] + ",\nI would like to invite you to dinner at my place. " + reasons[i] + ". I hope you can join me for a pleasant conversation and a delicious meal.");
}
console.log("Good news! I have found a bigger dinner table, so I can invite more guests.");

guests.unshift("Nelson Mandela");

guests.splice(2, 0, "Ellen DeGeneres");

guests.push("Tom Hanks");

reasons.unshift("I honor your leadership and legacy for peace and justice");
reasons.splice(2, 0, "I love your humor and generosity");
reasons.push("I enjoy your movies and personality");

for (let i = 0; i < guests.length; i++) {

  console.log("Dear " + guests[i] + ",\nI would like to invite you to dinner at my place. " + reasons[i] + ". I hope you can join me for a pleasant conversation and a delicious meal.");
}
