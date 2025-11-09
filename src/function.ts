//* Function 
//* normal function, arrow function

function addNormal(num1: number, num2: number): number {
    const sum = num1 + num2;
    return sum;

}

const addArrow = (num1: number, num2: number): number => num1 + num2;

// console.log(addArrow(2, 2));

//* object => function => method

const lifelessUser = {
    name: "Rana",
    balance: 0,
    addBalance(newBalance: number): number {
        const totalBalance = this.balance + newBalance;
        return totalBalance;
    },
}

console.log(lifelessUser.addBalance(1000000));


const arr: number[] = [1, 4, 6];

const sqrArray = arr.map((e: number): number => e * e);
console.log(sqrArray);