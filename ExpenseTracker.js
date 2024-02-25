//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
    class ExpenseTracker {
      //Create your private properites here
       #expenses;
       #income;
      //Create a constructor function
        constructor(income){
            this.#expenses = [];
            this.#income = income;
        }
        #calculateTotalExpenses(){
            const totalAmount = this.#expenses.reduce((total,num)=>{return total+num.amount},0);
            return totalAmount;
            
        }
        addExpense(name, amount, date){
            const newExpense = { name, amount, date };
            this.#expenses.push(newExpense);
            
        }
        calculateBalance(){
            const totalExpenses = this.#calculateTotalExpenses();
            return this.#income - totalExpenses;

        }
      //create your private properties to calculate expenses
      //Create your public properties here
    }
    //The class should function accordingly.
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    console.log(tracker.calculateBalance()); // should output 3500
    return ExpenseTracker;
  }
  