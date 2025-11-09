//* array, object

let bazarList: string[] = ['eggs', 'milk', 'sugar', '7up'];

bazarList.push('tomato');

console.log(bazarList);

let mixedArr: (string | number)[] = ['eggs', 12, 'milk', 1, '7up', 2];

mixedArr.push('tomato', 1)


//* ts - tuple
let coordinates: [number, number] = [10, 20];

let couple: [string, string] = ['husband', 'wife'];

let ranaNameAndRoll: [string, number] = ["Rana", 10];

ranaNameAndRoll[0] = 'Saifullah'


let destination: [string, string, number] = ["Chittagong", "Dhaka", 2];


// reference type : object

// const user: {
//     organization: "To To Company";  // value => type : Literal types
//     firstName: string;
//     middleName?: string;  // optional type
//     lastName: string;
//     isMarried: boolean;
// } = {
//     organization: 'To To Company',
//     firstName: "Saifullah",
//     lastName: "Rana",
//     isMarried: false,
// }

const user: {
    readonly organization: string;  // access modifier
    firstName: string;
    middleName?: string;  // optional type
    lastName: string;
    isMarried: boolean;
} = {
    organization: 'To To Company',
    firstName: "Saifullah",
    lastName: "Rana",
    isMarried: false,
}

// user.organization = 'To To Company Manager';

console.log(user);

