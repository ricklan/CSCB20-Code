// Going over an example about class

class Person {
  constructor(name, age) {
    // this is equivalent to self in Python
    this.name = name;
    this.age = age;
  }

  setAge(age) {
    this.age = age;
  }

  getAge() {
    return this.age;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// Creating a new instance of the Person class
let person = new Person("Rick", 22);
console.log("The age and name is", person.age, person.name);
console.log(person.getName() + " is " + person.getAge() + " years old.");
person.setAge(23);
console.log(person.getName() + " is now " + person.getAge() + " years old.");
person.setName("ABC");
console.log(person.getName() + " is " + person.getAge() + " years old.");
