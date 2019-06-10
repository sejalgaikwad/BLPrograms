const assert = require('chai').assert;
const fs = require('fs');
var data = fs.readFileSync("/home/admin1/Desktop/Programs/ObjectOrientedProgram/Company.json");

var obj = JSON.parse(data);       //convert JSON file into object


describe(' json input for Commertial Data Management ', function () {

    it("Name should be string only", function () {

        for (var i = 0; i < obj.company.length; i++) {
            var arr = obj.company[i].name;
            assert.isString(arr, 'string'); 
        }
    });

    it("Share value should be number only", function () {

        for (var i = 0; i < obj.company.length; i++) {
            var arr = obj.company[i].Shares;
            assert.isNumber(arr, 'number');
        }
    });

   it("Price  value should be number only", function () {
        for (var i = 0; i < obj.company.length; i++) {
            var arr = obj.company[i].Price;
            assert.typeOf(arr, 'number');
        }
    });
    
    it("Check File empty or not", function () {
        assert.isTrue(isNaN(data));
    });
});