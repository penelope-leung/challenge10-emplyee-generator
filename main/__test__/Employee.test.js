const Employee = require("../lib/Employee")

describe("Employee", () => {
    it ("should return the name if the name is called", () => {
       
       const newEmployee = new Employee('Penny', '1', 'aa@bb.com')
       const expectedValue = 'Penny'
        expect(newEmployee.getName()).toBe(expectedValue);
    })

})