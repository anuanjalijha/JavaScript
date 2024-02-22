//Complete the createUserObjects function
//Do not alter the starter Code
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids,names,images){
    let myArray = ids.map((id,index)=>{
        const image = images[index];
        const name = names[index];
        return {id: id, name:name, image:image };
        
        
    })
    return myArray;
    
    //Implement your function here
}