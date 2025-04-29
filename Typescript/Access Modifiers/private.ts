class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  showBalance(){
    console.log(`Balance : ${this.balance}`);
  }
}

const account = new BankAccount(1000)
account.showBalance()
// console.log(account.balance);

