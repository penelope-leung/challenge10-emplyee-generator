const Employee = require("./Employee")

class Intern extends Employee{
  @Override  
  constructor(school) {
     super(name, id, email);
      this.school = school;
    
    }
    getRole () {
      return  "Intern"
  }
  }
  
  module.exports = Intern