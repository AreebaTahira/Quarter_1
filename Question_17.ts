

let guests: string[] = ["Nelson Mandela",  "Ellen DeGeneres", "Noor Jahan", "Ariana Grande", "Tom Hanks","Emma Watson"];

let reasons: string[] = ["I honor your leadership and legacy for peace and justice","I love your humor and generosity", "You are the Malika-e-Tarannum (Queen of Melody) and the pride of Pakistan.", "I enjoy your music and creativity.","I appreciate your acting skills and humanitarian work.", "I enjoy your movies and personality"];


for (let i = 0; i < guests.length; i++) {

  console.log("Dear " + guests[i] + ",\nI would like to invite you to dinner at my place. " + reasons[i] + ". I hope you can join me for a pleasant conversation and a delicious meal.\nSincerely,\nBing");
}


console.log("Good news! I have found a bigger dinner table, so I can invite more guests.");


guests.unshift("Barack Obama");

guests.splice(4, 0, "Oprah Winfrey");


guests.push("Bill Gates");


reasons.unshift("I admire your charisma and leadership");
reasons.splice(4, 0, "I admire your success and philanthropy");
reasons.push("I admire your innovation and vision");


for (let i = 0; i < guests.length; i++) {

  console.log("Dear " + guests[i] + ",\nI would like to invite you to dinner at my place. " + reasons[i] + ". I hope you can join me for a pleasant conversation and a delicious meal.\nSincerely,\nBing");
}

console.log("Bad news! My new dinner table won't arrive in time for the dinner, and I have space for only two guests.");

while (guests.length > 2) {
  let removedGuest: string = guests.pop();
  console.log("Dear " + removedGuest + ",\nI'm sorry to inform you that I can't invite you to dinner anymore. There was a problem with my new dinner table, and I have limited space now. I hope you understand and forgive me.");
}

for (let i = 0; i < guests.length; i++) {

  console.log("Dear " + guests[i] + ",\nYou are still invited to dinner at my place. I'm looking forward to seeing you soon.");
}

guests = [];

console.log(guests);
