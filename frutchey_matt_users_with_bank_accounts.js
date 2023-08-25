//? Update the User constructor method:
class User {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email
    this.account = new BankAccount()
  }
//? Update the User class makeDeposit method:
  makeDeposit(amount) {
    this.account.deposit(amount);
    return this
  }
//? Update the User class makeWithdrawal method:
  makeWithdrawal(amount) {
    this.account.withdraw(amount);
    return this
  }
//? Update the User class displayUserBalance method:
  displayUserBalance() {
    this.account.displayAccountInfo(this.userName);
    return this
  }
}

class BankAccount {
  constructor(intRate = 0.04, balance = 0) {
    this.intRate = intRate;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount
    return this
  }
  withdraw(amount) {
    this.balance -= amount
    return this
  }
  displayAccountInfo(userName) {
    console.log(`${userName}'s account has $${this.balance}`)
    return this
  }
  yieldInterest() {
    this.balance += this.balance * this.intRate
    return this
  }
}

const Tom = new User("Thomas", "tom@gmail.com")
Tom.makeDeposit(150).makeWithdrawal(36).displayUserBalance();