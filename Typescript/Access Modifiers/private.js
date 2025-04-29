var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.showBalance = function () {
        console.log("Balance : ".concat(this.balance));
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
account.showBalance();
// console.log(account.balance);
