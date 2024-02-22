const employees = [
    { id: 1, name: "Alice", department: "sales", salary: 40000 },
    { id: 2, name: "Bob", department: "engineering", salary: 50000 },
    { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
    { id: 4, name: "David", department: "sales", salary: 35000 },
    { id: 5, name: "Emily", department: "engineering", salary: 55000 }
  ];
  
  function increaseSalaries(employees) {
    // Use map to iterate over each employee object
    const updatedSalaries = employees.map((employee) => {
      // Check the department and increase the salary accordingly
      if (employee.department === "sales") {
        // Increase salary by 10% for sales department
        employee.salary = (employee.salary + employee.salary * 0.10).toFixed(1);
      } else if (employee.department === "engineering") {
        // Increase salary by 15% for engineering department
        employee.salary = (employee.salary + employee.salary * 0.15).toFixed(1);
      } else {
        // Increase salary by 5% for other departments
        employee.salary = (employee.salary + employee.salary * 0.05).toFixed(1);
      }
  
      // Return the updated employee object
      return employee;
    });
  
    return updatedSalaries;
  }
  
  // Example usage:
  // const updatedEmployees = increaseSalaries(employees);
  // console.log(updatedEmployees);
  