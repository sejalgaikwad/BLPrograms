const assert = require('chai').assert;
const result = require('../Outility/Stock');
const fs = require('fs');
var data = fs.readFileSync("/home/admin1/Desktop/Programs/ObjectOrientedProgram/Stock.json");

var obj = JSON.parse(data);       //convert JSON file into object


describe(' json input for Stock ', function () {

    it("Name should be string only", function () {

        for (var i = 0; i < obj.Stock1.length; i++) {
            var arr = obj.Stock1[i].StockNames;
            assert.typeOf(arr, 'string'); 
        }
    });

    it("Share value should be number only", function () {

        for (var i = 0; i < obj.Stock1.length; i++) {
            var arr = obj.Stock1[i].NumberofShare;
            assert.typeOf(arr, 'number');
        }
    });

   it("Price  value should be number only", function () {
        for (var i = 0; i < obj.Stock1.length; i++) {
            var arr = obj.Stock1[i].Share;
            assert.typeOf(arr, 'number');
        }
    });
    
    it("Check File empty or not", function () {
        assert.isTrue(isNaN(data));
    });
});