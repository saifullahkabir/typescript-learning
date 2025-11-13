function logMessage(message: string): void {
    console.log("Message:", message);
}


function add(a: number, b: number): number {
    return a + b;
}

const result = add(10, 20);
console.log(result);

function add1(a: number, b: number): void {
    return a + b;  // Type 'number' is not assignable to type 'void'.
}
