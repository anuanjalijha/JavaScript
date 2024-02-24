// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
    // Implement the code here
  }
  
  function freezeProfile(user) {
    // Implement the code here
  }
  function updateProfile(user, updates) {
    const updatedUser = Object.assign({},user, updates);
    return updatedUser;
    // Implement the code here
  }

  
  function freezeProfile(user) {
      const frozenUser = Object.freeze(user);
    return frozenUser;
    // Implement the code here
  }


