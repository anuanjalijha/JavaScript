function main() {
    const userAuth = (function () {
      const registeredUser = [];
  
      function registerUser(username, password) {
        if (checkCredentials(username, password)) {
          return `The user is already registered`;
        } else {
          registeredUser.push({ username, password });
          return `The user have been added to the registeredUser array`;
        }
      }
  
      function checkCredentials(username, password) {
        for (const user of registeredUser) {
      if (user.username === username && user.password === password) {
        return true; // User found
      }
    }
    return false; 
      }
  
      return {
        registerUser:registerUser
      };
    })();
  
    console.log(userAuth.registerUser("user1", "password123"));
    // Output: The user has been added to the registeredUser array
  
    console.log(userAuth.registerUser("user1", "password123"));
    // Output: The user is already registered
  
    return userAuth;
  }
  
  main();
  