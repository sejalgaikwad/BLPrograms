var assert = require('chai').assert;
const data=require('../DataStructure/Unorder.js');


describe('Unorder testing', function(){
          it("Checking for data is null or not",function(){
          assert.isNotNull(data);
          })
    it("Checking for data is not number",function(){
        assert.isNotNumber(data)
    })
  });
