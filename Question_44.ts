


function make_sandwich(items: string[]) {


    console.log("Making your sandwich with the following items:");
  
    for (let item of items) {

        console.log(`- ${item}`);
    }
  
    console.log("Your sandwich is ready. Enjoy!");
  }
  
  make_sandwich(["cheese", "ham", "lettuce"]);
  
  make_sandwich(["peanut butter", "jam"]);
  
  make_sandwich(["turkey", "bacon", "tomato", "mayo"]);
  