var assert = require('chai').assert;
const data=require('../FunctionalPrograms/FlipCoin');


describe('Repace String testing', function() {
 
    
    it("Checking for data is null or not",function(){
      assert.isNotNull(data)
    })
    it("Checking for data is not String",function(){
        assert.isNotString(data,'Replace String is done')
    })

  });