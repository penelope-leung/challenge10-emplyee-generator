const Employee = require("./Employee");

class Engineer extends Employee {
    @Override
    constructor(github) {

    super(name,id,email);
    this.github = github;

    }
    getRole () {
        return  "Engineer"
    }
}

module.exports = Engineer;