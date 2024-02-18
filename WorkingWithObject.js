//Complete the findClassTopper function
//Do not alter alter the starter code. 
    //The object on which you will be working will be of this format.
    const studentMarks = {
        John: [85, 90, 92, 88, 87],
        Jane: [92, 95, 89, 91, 94],
        David: [78, 85, 90, 92, 84],
        Emily: [90, 88, 92, 87, 91],
        Michael: [86, 92, 90, 89, 94]
        };
    function calculateAverage(marks) {
              let sum = 0;
              for (let i of marks) {
                sum += i;
              }
              return sum / marks.length;
            }
          
        function findClassTopper(studentMarks){
            let highestAverage = 0;
              let classTopper;
          
              for (let student in studentMarks) {
                const average = calculateAverage(studentMarks[student]);
                if (average > highestAverage) {
                  highestAverage = average;
                  classTopper = student;
                }
              }
              return classTopper;
            //Implement your function here
        }
        console.log(findClassTopper(studentMarks));
        //Output : "Jane";