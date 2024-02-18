function reverseString(str){
    let str1 = str.split("").reverse();
    let reversedStr = str1.join("");
    
    return reversedStr;
//Implement Your function here
}
console.log(reverseString("Hello"));
//Output : "olleH"