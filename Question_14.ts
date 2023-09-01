


let guests: string[] = ["Noor Jahan", "Steven Pinker", "Ariana Grande"];

// Define an array of strings called reasons
let reasons: string[] = ["You are the Malika-e-Tarannum (Queen of Melody) and the pride of Pakistan.", " I thank you for your contributions to science and society, and I hope to read more of your books in the future.", "I enjoy your music and creativity"];

// Use a for loop to iterate over the guests array
for (let i = 0; i < guests.length; i++) {
  // Print a message using the guest and the corresponding reason at the same index
  console.log("Dear " + guests[i] + ",\nI would like to invite you to dinner at my place. " + reasons[i] + ". I hope you can join me for a pleasant conversation and a delicious meal.");
}
