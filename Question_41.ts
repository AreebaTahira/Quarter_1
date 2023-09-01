

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Dynamo", "Penn and Teller", "David Blaine"];

function show_magicians(magicians: string[]) {

    for (let magician of magicians) {
    console.log(magician);
  }
}

// Call the function with the array of magician's names
show_magicians(magicians);
