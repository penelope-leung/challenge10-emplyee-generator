const Manager = require("../lib/Employee")

describe("Manager", () => {
    it ("should return the name if the name is called", () => {
       
       const newManager = new Manager('Penny', '1', 'aa@bb.com')
       const expectedValue = 'Penny'
        expect(newManager.getName()).toBe(expectedValue);
    })

})