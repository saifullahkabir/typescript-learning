// ? : ternary operator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. : optional chaining

//* ternary operator 
const eligibleForMarried = (age: number) => {
    // if(age >= 21) {
    //     console.log('You are eligible');
    // }else{
    //     console.log('You are not eligible!');
    // }

    const result = age >= 21 ? 'You are eligible' : 'You are not eligible!';
    console.log(result);
}

eligibleForMarried(22);

//* nullish coalescing operator

const userTheme = undefined;

const selectedTheme = userTheme ?? 'Light Theme';
console.log(selectedTheme);

// real life example:
const userInfo ={
    name: "Rana",
    age: null,  
};

const userAge = userInfo.age ?? 'Not Provided';
console.log(userAge);


const isAuthenticated = '';

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest!";
const resultWithNullish = isAuthenticated ?? "You are Guest!";

console.log({ resultWithTernary }, { resultWithNullish });


//* optional chaining

const user: {
    address: {
        city: string
        upazila: string,
        postalCode? : string
    }
} = {
    address: {
        city: "Chattogram",
        upazila: "Chandanish",
    },
};

const postalCode = user?.address?.postalCode;
console.log(postalCode);