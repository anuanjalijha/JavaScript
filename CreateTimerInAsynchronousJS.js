// Write a program to print 1 after 1 sec, 2 after 2 sec till 5.
function timer() {
    let time =0
  for (let i = 1; i <= 5; i++) {
    setTimeout(
      function () {
          console.log(i);
          
        //Write your code here...
      },i*1000//write your code here...);
    );
    console.log("Hello ninjas!");
  }
}
timer();

// Do not edit the rest of the code
