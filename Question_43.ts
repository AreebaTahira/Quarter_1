

let magicians: string[] = ["David Copperfield", "Harry Houdini", "Dynamo", "Penn and Teller", "David Blaine"];


function show_magicians(magicians: string[]) {

    for (let magician of magicians) {
 
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {

    let great_magicians: string[] = [];


    for (let i = 0; i < magicians.length; i++) {

        great_magicians.push(magicians[i] + " the Great");
  }

  return great_magicians;
}

let great_magicians: string[] = make_great([...magicians]);

console.log("The original magicians are:");
show_magicians(magicians);

console.log("The great magicians are:");
show_magicians(great_magicians);
