var assert = require('chai').assert;
const data=require('../FunctionalPrograms/SumOfInteger');


describe('Sum of Three Integer testing', function() {
 
    
    it("Checking for data is null or not",function(){
      assert.isNotNull(data)
    })
    it("Checking for data is not string",function(){
        assert.isNotString(data)
        
    })
  });
