// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [],
    expenses: [],

    totalIncome: function() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    totalExpense: function() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()}, Balance: ${this.accountBalance()}`;
    },

    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Example usage:
personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Freelance", 1500);
personAccount.addExpense("Rent", 1200);
personAccount.addExpense("Groceries", 300);

console.log(personAccount.accountInfo()); // Logs account information
