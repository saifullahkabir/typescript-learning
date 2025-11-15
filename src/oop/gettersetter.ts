//* getter and setter


class Bankaccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    };

    // set balance
    // addBalance(balance: number) {
    //     return this.userBalance = this.userBalance + balance;
    // };

    //* using setter for add balance
    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }

    // get balance
    // getBalance() {
    //     return this.userBalance;
    // }

    //* using getter for get balance
    get getBalance() {
        return this.userBalance
    }

}


const ranaAccount = new Bankaccount(111, 'Rana', 10);
// ranaAccount.addBalance(100); // have to call function
// ranaAccount.addBalance(200);

// console.log(ranaAccount.getBalance()); // have to call function

ranaAccount.addBalance = 100; // don't have to call bcz using setter
ranaAccount.addBalance = 200;
console.log(ranaAccount.getBalance); // don't have to call bcz using getter

