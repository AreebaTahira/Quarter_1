

// array of strings of names
let names: string[] = ["Ali", "Sara", "Zohaib", "Fatima", "Hajra"];


const message: string = "Hello, {name}! I hope you are having a great day!";


for (let i = 0; i < names.length; i++) {
 
  let personalizedMessage: string = message.replace("{name}", names[i]);
  
  console.log(personalizedMessage);
}
