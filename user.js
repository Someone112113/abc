export default class User {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  display() {
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
    console.log("Occupation: ", this.occupation);
  }
}
