const checkCanDrive = require('../scripts/ejercicio_01.js')

describe("check if someone can drive according to age", () => {
    test("it should verify if person under 18 can drive ", () => {
       expect(checkCanDrive(16)).toEqual('No puede conducir');
    });

    test("it should verify if person over 18 can drive ", () => {
      expect(checkCanDrive(22)).toEqual('Puede conducir');
    });
});