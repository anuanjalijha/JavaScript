//Write the program to convert tempF to into celcius and also to detect fever.
//Assign the final answer in result variable.
//Do not alter anything else given in the starter code

function main(tempF) {
    let result;
      
      let tempC = (tempF - 32) * (5/9);
  
    // Round the converted temperature to one decimal place
    tempC = tempC.toFixed(1);
  
    // Check if the converted temperature is greater than or equal to 37
    if (tempC >= 37) {
      result = `You have got a fever. Temperature: ${tempC}°C`;
    } else {
      result = `You don't have a fever. Temperature: ${tempC}°C`;
    }
  
  
    // write your code here
  
    return result;
  }
  