// 04. 
class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sorted = [...this.data].sort((a, b) => a - b);
      const mid = Math.floor(this.count() / 2);
      return this.count() % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }
  
    mode() {
      const frequency = {};
      this.data.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
      });
  
      let maxCount = 0;
      let mode = null;
  
      for (const key in frequency) {
        if (frequency[key] > maxCount) {
          maxCount = frequency[key];
          mode = Number(key);
        }
      }
  
      return { mode, count: maxCount };
    }
  
    variance() {
      const mean = this.mean();
      return this.data.reduce((acc, val) => acc + (val - mean) ** 2, 0) / this.count();
    }
  
    std() {
      return Math.sqrt(this.variance());
    }
  
    freqDist() {
      const frequency = {};
      this.data.forEach(value => {
        frequency[value] = (frequency[value] || 0) + 1;
      });
  
      const distribution = [];
      for (const key in frequency) {
        distribution.push({ value: Number(key), frequency: frequency[key] });
      }
  
      distribution.sort((a, b) => b.frequency - a.frequency);
  
      return distribution.map(item => [((item.frequency / this.count()) * 100).toFixed(1), item.value]);
    }
  
    describe() {
      console.log('Count:', this.count());
      console.log('Sum: ', this.sum());
      console.log('Min: ', this.min());
      console.log('Max: ', this.max());
      console.log('Range: ', this.range());
      console.log('Mean: ', this.mean());
      console.log('Median: ', this.median());
      console.log('Mode: ', this.mode());
      console.log('Variance: ', this.variance());
      console.log('Standard Deviation: ', this.std());
      console.log('Frequency Distribution: ', this.freqDist());
    }
  }
  
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  statistics.describe();
  



// 05.Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.incomes = [];
      this.expenses = [];
    }
  
    totalIncome() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    }
  
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  
    accountInfo() {
      return `Name: ${this.firstname} ${this.lastname}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
    }
  
    addIncome(description, amount) {
      this.incomes.push({ description, amount });
    }
  
    addExpense(description, amount) {
      this.expenses.push({ description, amount });
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  }
  
  // Example usage:
  const personAccount = new PersonAccount('John', 'Doe');
  
  personAccount.addIncome('Salary', 5000);
  personAccount.addIncome('Freelance', 1500);
  personAccount.addExpense('Rent', 1200);
  personAccount.addExpense('Groceries', 300);
  
  console.log(personAccount.accountInfo());
  
