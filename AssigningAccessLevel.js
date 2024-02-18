//Write the program here to get the access level of the user depending upon the jobTitle and yearsOfExperience.
//Store your final result in the "accessLevel" variable.
//Please do not alter anything else in the starter code

function main(jobTitle, yearsOfExperience) {
  let accessLevel;
    if (jobTitle === "Manager") {
    accessLevel = "Full Access";
  } else if (jobTitle === "Supervisor" && yearsOfExperience >= 5) {
    accessLevel = "Full Access";
  } else if (jobTitle === "Supervisor") {
    accessLevel = "Partial Access";
  } else if (jobTitle === "Associate" && yearsOfExperience >= 3) {
    accessLevel = "Partial Access";
  } else if (jobTitle === "Associate") {
    accessLevel = "Limited Access";
  } else if (yearsOfExperience >= 2) {
    accessLevel = "Limited Access";
  } else {
    accessLevel = "Trainee Access";
  }

  //write your code here

  return accessLevel;
}
