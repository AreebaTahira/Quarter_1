


let current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Eric"];

let new_users: string[] = ["Frank", "Grace", "Eric", "Helen", "BOB"];


for (let new_user of new_users) {
  
  let lower_new_user: string = new_user.toLowerCase();

  
  let is_used: boolean = false; 
  for (let current_user of current_users) {
    
    let lower_current_user: string = current_user.toLowerCase();


    if (lower_new_user == lower_current_user) {
      is_used = true;
      break;
    }
  }

  if (is_used) {

    console.log(`The username ${new_user} is already taken. Please enter a new username.`);
  } else {

    console.log(`The username ${new_user} is available. You can use it.`);
  }
}
