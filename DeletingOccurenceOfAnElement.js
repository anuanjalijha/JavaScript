//Complete the deleteOccur function
//Do not alter the starter Code.
let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let ele = 56;
function deleteOccur(arr,ele){
    for(let i = 0;i<arr.length;i++){
        if (arr[i]===ele){
            arr.splice(i,1);
            i--;
        }
    }
   return arr;
   //Implement Your function here
};

console.log(deleteOccur(arr,ele));
//Output: [23,4,78,5,63,45,210];