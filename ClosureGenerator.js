// Complete the genrateID function
//Do not alter the starter code
function generateID(start){
    let count = start;
      return function id() {
        let value =  `A_2023_${count}`;
        count+=1;
        return value;
      };
//Implement Your function here
}

const func = generateID(99);
console.log(func());//Output : A_2023_99
console.log(func()); // Output: A_2023_100