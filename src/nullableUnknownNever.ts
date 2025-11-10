//* nullable types

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB: ${input}`);
    } else {
        console.log('From DB: All User');
    }
}

getUser(null);

//* unknown

const discountCalculator = (input: unknown) => {
    if (typeof input === 'number') {
        const discountedPrice = input * 0.1;
        console.log(discountedPrice);
    } else if (typeof input === 'string') {
        const splittedInput = input.split(' ');
        const [discountedPrice] = splittedInput;

        console.log(Number(discountedPrice) * 0.1);
    } else {
        console.log('Wrong Input');
    }

}
discountCalculator(100);
discountCalculator('100 tk');
discountCalculator(null);


// void 
//* never

const throwError = (message: string): never => {
    throw new Error(message);
};
throwError('Error');

function getUserInfo(id: number) {
    if (id <= 0) {
        throw new Error("Invalid ID!");
    }
    return { id, name: "Rana" };
}

console.log(getUserInfo(-5));; // Error: Invalid ID!

