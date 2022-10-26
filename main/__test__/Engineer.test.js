const Engineer = require("../lib/Employee")

describe("Engineer", () => {
    it ("should return the name if the name is called", () => {
       
       const newEngineer = new Engineer('Penny', '1', 'aa@bb.com')
       const expectedValue = 'Penny'
        expect(newEngineer.getName()).toBe(expectedValue);
    })

})