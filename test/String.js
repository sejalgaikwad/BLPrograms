var assert = require('chai').assert;
const data=require('../FunctionalPrograms/ReplaceString');


describe('Repace String testing', function() {
 
    
    it("Checking for data is null or not",function(){
      assert.isNotNull(data)
    })
    it("Checking for data is not number",function(){
        assert.isNotNumber(data)
        
    })
  });
