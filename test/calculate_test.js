const assert = require('assert');
const Calculate =  require('../calculate.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]
      
      const result = Calculate.sum(inputArray)
      
      assert.strictEqual(result, expectedResult);
    });
    
    it('returns the sum of a four item list', ()=>{
      const expectedResult = 22;
      const inputArray = [4,6,5,7];
      
      const result = Calculate.sum(inputArray);
      
      assert.strictEqual(result, expectedResult)
      
    });

    it('returns zero for an empty array',() => {
      const expectedResult = 0;
      const inputArray = [];

      const result = Calculate.sum(inputArray);

      assert.strictEqual(result,expectedResult)
    })
  });
  describe('.factorial', () => {
    it('returns the correct factorial (5=>120)',() => {
      //setup
      const inputNum = 5;
      const expectedResult = 120;
      //execute
      let result = Calculate.factorial(inputNum)
      //verify
      assert.strictEqual(result,expectedResult)
    });
    it('returns the correct factorial(3=>6)',() => {
      //setup
      const inputNum = 3;
      const expectedResult = 6;
      //execute
      let result = Calculate.factorial(inputNum);
      //verify
      assert.strictEqual(result,expectedResult);
    });
    it('if 0 is passed as a value, 1 is returned',() => {
      //setup
      const inputNum = 0;
      const expectedResult = 1;
      //execute
      let result = Calculate.factorial(inputNum);
      //verify
      assert.strictEqual(result,expectedResult);
    })
  });
});
