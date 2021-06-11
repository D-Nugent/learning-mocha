const assert = require('assert')
const fs = require('fs');

describe('appendFileSync', () => {
  const path = './message.txt';
    afterEach(() => {
    // Teardown: delete path
    fs.unlinkSync(path);
  })
  it('writes a string to text file at given path name', () => {
    // Setup
    const str = 'Hello Node.js';
    // Exercise: write to file
    fs.appendFileSync(path, str);
    // Verify: compare file contents to string
    const contents = fs.readFileSync(path);
    assert.ok(contents.toString() === str);
  });
});

describe('objMatch', () => {
  it('checks if objects/arrays are identical', () => {
    // Setup
    const a = {relation: 'twin', age: '17'};
    const b = {relation: 'twin', age: '17'};

    // Exercise
		// N/a

    // Verify 
    assert.deepStrictEqual(a, b);
  });
});

describe('Math', () => {
  describe('.min', () => {
    //setup
    const a = 3;
    const b = 6;
    const c = 12;
    it('returns the argument with the lowest value', () => {
      const expected = a;
      //execute
      let result = Math.min(a,b,c)
      assert.strictEqual(expected,result)
    });
    it('returns Infinity when no arguments are provided',()=> {
      const expectedNoArgs = Infinity;
      let result = Math.min();
      assert.strictEqual(expectedNoArgs,result);
    })
  })
})

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const evalResult = 'apple';
    const arr = ['google','microsoft',evalResult];

    // Exercise
    const popped = arr.pop()

    // Verify
    assert.ok(popped === evalResult);
  });
});
