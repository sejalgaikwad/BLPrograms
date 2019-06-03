var assert = require('chai').assert;
const data=require('../FunctionalPrograms/HarmonicNumber');


describe('Harmonic Number testing', function() {
 
    
    it("Checking for data is null or not",function(){
      assert.isNotNull(data)
    })
    it("Checking for data is not string",function(){
        assert.isNumber(data)
        
    })
  });