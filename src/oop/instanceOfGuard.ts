//* oop: instance of type guard / type narrowing

// parent class
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfhours: number) {
    console.log(`${this.name} daily ${numOfhours} ghonta  ghumay.`);
  }
}

// Student class (inherits Person)
class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfhours: number) {
    console.log(`${this.name} daily ${numOfhours} ghonta study kore.`);
  }
}

// Teacher class (inherits Person)
class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  doClass(numOfhours: number) {
    console.log(`${this.name} daily ${numOfhours} ghonta class neei.`);
  }
}

// Custom type guard (instanceof)
const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher
};

// Main function: Type narrowing using instanceof guard
const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.doClass(6);
  } else {
    user.getSleep(12);
  }
};

// Instances of classes
const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teaher");
const person1 = new Person("Mr. Person");
getUserInfo(student1);
