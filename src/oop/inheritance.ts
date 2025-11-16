
// common 
class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, addres: string) {
        this.name = name;
        this.age = age;
        this.address = addres;
    };

    getSleep(numOfHours: number) {
        console.log(`${this.name} ${numOfHours} gonta gumay`);
    }
}

// Child Class (Student → inherits Person)
class Student extends Person { };

const student1 = new Student('Mr. Fakibaz', 20, 'Bangladesh');

student1.getSleep(10);

// teacher
class Teacher extends Person {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {

        super(name, age, address);

        this.designation = designation;  // own property
    };

    // own method
    getClass(numOfClass: number) {
        console.log(`${this.name} ${numOfClass} gonta class neei`);
    }
}

const teacher1 = new Teacher('Mr. Teacher', 35, 'Bangladesh', 'Senior Teacher');
teacher1.getClass(4);
