// Write the program to calculate the discount on the given amount
// store the calculated discount in the "discount" variable
// Please do not alter anything given in the starter code
function calculate(amount) {
    let discount;
      switch (true) {
      case amount < 500:
        discount = "No Discount";
        break;
              
      case (amount >= 500 && amount < 1000):
        // Apply a 10% discount for amounts between 500 and 999
        discount = "10% Discount.";
        break;
      
      case (amount >= 1000 && amount < 2000):
        // Apply a 20% discount for amounts between 1000 and 1999
       discount = "20% Discount.";
        break;
  
      case (amount >= 2000 && amount < 4000):
        // Apply a 30% discount for amounts between 2000 and 3999
       discount = "30% Discount.";
        break;
  
      case (amount >= 4000 && amount < 5000):
        // Apply a 40% discount for amounts between 4000 and 4999
        discount = "40% Discount.";
        break; 
  
      case (amount >= 5000):
        // Apply a 50% discount for amounts of 5000 or more
        discount = "50% Discount.";
        break;
  
      default:
        // No discount for amounts less than 500
       discount = "Invalid Input";
    }
  
    // write your code here
  
   console.log("You Have " + discount);
    return discount;
  }
  