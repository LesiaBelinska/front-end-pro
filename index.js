"use strict";

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    };

  getBalance() {
    return this.balance;
    };

  deposit(depositSum) {
    if (depositSum <= 0) {
      console.log("Deposit amount must be greater than zero.");
      return;
    }

    this.balance = this.balance + depositSum;
    };

  withdraw(withdrawSum) {
    if (withdrawSum <= 0) {
      console.log("Withdrawal amount must be greater than zero.");
      return;
    }

    if (withdrawSum > this.balance) {
      console.log("Insufficient funds for this withdrawal.");
      return;
    }

    this.balance = this.balance - withdrawSum;
    };
}

const account1 = new BankAccount(1000);

console.log("Your balance: ", account1.getBalance());

account1.deposit(500);

console.log("Your balance: ", account1.getBalance());

account1.withdraw(200);

console.log("Your balance: ", account1.getBalance());
