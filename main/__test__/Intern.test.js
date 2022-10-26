const Intern = require("../lib/Employee")

describe("Intern", () => {
    it ("should return the name if the name is called", () => {
       
       const newIntern = new Intern('Penny', '1', 'aa@bb.com')
       const expectedValue = 'Penny'
        expect(newIntern.getName()).toBe(expectedValue);
    })

})