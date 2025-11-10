//* Type Assertion Example in TypeScript
//* Type assertion helps the compiler understand what type a value should be.

let anything: any;

anything = "Rana";


const kgToGmConverter = (input: string | number): string | number | undefined => {
    if (typeof input === 'number') {
        const gmConverted = input * 1000;
        return `Converted Output is: ${gmConverted}`;
    }
    // If input is a string like "2 kg", split it and take the numeric part
    else if (typeof input === 'string') {
        const splittedInput = input.split(" ");
        const [firstIndex] = splittedInput;
        const gmConverted = Number(firstIndex) * 1000;
        return `Converted Output is: ${gmConverted}`;
    }
}

//* Using 'as' keyword for Type Assertion
//* 'as' tells TypeScript — “Trust me, I know the type of this value.”

const result1 = kgToGmConverter(2) as number;
console.log({ result1 });
const result2 = kgToGmConverter('2 kg') as string;
console.log({ result2 });


// Define a custom error type
type CustomError = {
    message: string;
}

try {

}
catch (err) {
    console.log((err as CustomError).message);
}