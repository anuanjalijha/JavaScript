// function main(){
//     class Car {
//     constructor(make, model, year, color, mileage) {
//       this.make = make;
//       this.model = model;
//       this.year = year;
//       this.color = color;
//       this.mileage = mileage;
//       this.getMake = function(){
//         return this.make;
//       }
//     }
  
//     getModel() {
//       return this.model;
//     }
  
//     getYear() {
//       return this.year;
//     }
  
//     getColor() {
//       return this.color;
//     }
  
//     getMileage() {
//       return this.mileage;
//     }
//   }
//     const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
//         console.log(myCar.getMake());
//         console.log(myCar.getModel());
//         console.log(myCar.getYear());
//         console.log(myCar.getColor());
//         console.log(myCar.getMileage());
//         console.log(myCar.drive());
//       //Do not modify the return statement;
//         return Car;
//       }
//       main();
function main(){
    
    function Car(make, model, year, color, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
      this.getMake = function(){
        return this.make;
      }
    }
    
  
    Car.prototype.getModel = function () {
        return this.model;
    };
  
    Car.prototype.getYear = function () {
        return this.year;
    };
  
    Car.prototype.getColor = function () {
        return this.color;
    };

  
    Car.prototype.getMileage = function () {
        return this.mileage;
    };
  
    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
        console.log(myCar.getMake());
        console.log(myCar.getModel());
        console.log(myCar.getYear());
        console.log(myCar.getColor());
        console.log(myCar.getMileage());
        // console.log(myCar.drive());
      //Do not modify the return statement;
        return Car;
      }
      main();