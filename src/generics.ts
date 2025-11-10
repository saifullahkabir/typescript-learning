//* dynamically generalize

// It can hold any data type (string, number, boolean, object etc.)
type GenericArray<T> = Array<T>;

// const friends : string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
// const friends: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
//* same as: string[] or Array<string>
const friends: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

// const rollNumbers : number[] = [10, 20, 22];
const rollNumbers: GenericArray<number> = [10, 20, 22];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];


// Each element must have 'name' and 'age' property
const useList: GenericArray<{ name: string, age: number }> = [
    {
        name: 'Mr. R',
        age: 22,
    },
    {
        name: 'Ms. A',
        age: 21,
    },
];


//* generic tuple type with 2 values

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30'];



