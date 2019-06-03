var assert = require('chai').assert;
const lpath=require('../FunctionalPrograms/LeapYear');


describe('Leap year testing', function() {
 
    it('Year should be of four digit', function() {
      assert.equal(lpath.length,4)
    });
    it("Checking for data is null or not",function(){
      assert.isNotNull(lpath)
    })
  });
