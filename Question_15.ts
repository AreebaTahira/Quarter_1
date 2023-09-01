


let guests: string[] = ["Noor Jahan", "Steven Pinker", "Ariana Grande"];


let reasons: string[] = ["You are the Malika-e-Tarannum (Queen of Melody) and the pride of Pakistan.", " I thank you for your contributions to science and society, and I hope to read more of your books in the future.", "I enjoy your music and creativity"];

for (let i = 0; i < guests.length; i++) {

  console.log("Dear " + guests[i] + ",\nI would like to invite you to dinner at my place. " + reasons[i] + ". I hope you can join me for a pleasant conversation and a delicious meal.");
}
console.log("Unfortunately, Ariana Grande can't make it to the dinner.");


guests[2] = "Emma Watson";


for (let i = 0; i < guests.length; i++) {
 
  console.log("Dear " + guests[i] + ",\nI would like to invite you to dinner at my place. " + reasons[i] + ". I hope you can join me for a pleasant conversation and a delicious meal.");
}
