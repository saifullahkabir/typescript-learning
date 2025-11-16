// access modifier

class Bankaccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // public method
  addBalance(balance: number) {
    return (this.userBalance = this.userBalance + balance);
  }
}

// Child class (inherits Bankaccount)
class StudentBankAccount extends Bankaccount {
  test() {
    this.userBalance; // allowed → protected property child class e accessible
  }
}

const ranaAccount = new Bankaccount(111, "Rana", 10);
ranaAccount.addBalance(100);
ranaAccount.addBalance(100);
console.log(ranaAccount);
