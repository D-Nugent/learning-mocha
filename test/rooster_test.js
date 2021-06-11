const assert = require('assert');
const Rooster = require('../rooster')

describe('Rooster',() => {
  describe('.announceDawn',() => {
    it('returns a rooster call',() => {
      //setup
      const expected = 'cock-a-doodle-doo!';
      //execute
      let result = Rooster.announceDawn();
      //verify
      assert.equal(expected,result);
    })
  });
  describe('.timeAtDawn',() => {
    it('returns its argument as a string',() => {
      assert.strictEqual(typeof Rooster.timeAtDawn(4),'string')
    });
    it('throws an error if passed a number less than 0',() => {
      //setup
      const expectedErr = RangeError;
      const hour = -1;
      //verify
      assert.throws(() => {
      //execute
        Rooster.timeAtDawn(hour);
        },expectedErr);
    });
    it('throws an error if passed a number greater than 23',() => {
      //setup
      const expectedErr = RangeError;
      const hour = 34;
      //verify
      assert.throws(()=> {
        //execute
        Rooster.timeAtDawn(hour);
      },expectedErr);
    })
  });
})