let arr = [1, 3, 67, 40, 400];
arr.sayHello = () => {
    console.log(`Hi , i am arr`);
}


// Factory function

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`hi  my name is ${name} `);
//         },
//     };
//     return person;

// }

// let p1 = PersonMaker("Abhisekh", "21");
// console.log(p1.name , p1.age , p1.talk());


// constructor function
// and new keyword

// function Person(name , age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function () {
//     console.log(`hi , my name is ${this.name }`);
// }


// let p1 = new Person("Abhisekh", 21);

// Classes in js

// class person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi , my name is ${this.name}`);
//     }
// }

// let p1 = new person("Abhisekh", 21);

// inheritence

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi , my name is ${this.name}`);
    }
}

class student extends person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}


class teacher extends person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

let p1 = new student("Abhisekh", 21, 89);

let t1 = new teacher("Setve", 40, "Programming");


