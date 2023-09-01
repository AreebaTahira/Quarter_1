

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
  }
  
  function createCar(manufacturer: string, model: string): Car {
    // Create an empty car object
    let car: Car = {
        manufacturer: "",
        model: ""
    };
    
    car.manufacturer = manufacturer;
    car.model = model;
   
    for (let i = 2; i < arguments.length; i += 2) {
     
      if (typeof arguments[i] === "string" && i + 1 < arguments.length) {
        
        car[arguments[i]] = arguments[i + 1];
      }
    }

    return car;
  }
  