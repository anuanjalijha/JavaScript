//Output : [1,2,4,5,7,3,6,9,0]arr1 = [1,2,4,5,7];
arr2 = [3,4,6,7,9,0];
function mergeArray(arr1,arr2){
    let arr3 = new Set(arr1+arr2);
    let newArray = [...arr3];
    //Implemet your function here
    return newArray;
}
console.log(mergeArray(arr1,arr2));