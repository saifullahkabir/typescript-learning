//* polymorphism - bohurupi

// kono ekta class er same name er kono ekta method jdi class bede different different behaviour kore setay holo polymorphism.

class Person {
  getSleep() {
    console.log(`I am a Normal Person. I sleep for 10 hours`);
  }
}

class Student extends Person {
  getSleep() {
    console.log(`I am a Student. I sleep for 9 hours`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log(`I am a Next Level Developer. I sleep for 8 hours`);
  }
}

const getSleepingHours = (params: Person) => {
  params.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person2);

//

class Shape {
  getArea(): number {
    return 0;
  }
}

class Cirle extends Shape {
  // area = pi*r*r
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  length: number;
  width: number;

  constructor(length: number, width: number) {
    super();
    this.length = length;
    this.width = width;
  }
  getArea(): number {
    return this.length * this.width;
  }
}

const getResult = (param: Shape) => {
    console.log(param.getArea());
}

const shape1 = new Shape();
const shape2 = new Cirle(10);
const shape3 = new Rectangle(5, 5);

getResult(shape3);
