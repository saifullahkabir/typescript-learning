class Bankaccount {
  public readonly userId: number;
  public userName: string;
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // completely hidden method
  private addBalance(balance: number) {
    return (this.userBalance = this.userBalance + balance);
  }

  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentBankAccount extends Bankaccount {
  test() {
    this.userBalance;
  }
}

const ranaAccount = new Bankaccount(111, "Rana", 10);
ranaAccount.callHiddenMethod(10);  // allowed
// ranaAccount.addBalance()  // not allowed (private)
console.log(ranaAccount);
