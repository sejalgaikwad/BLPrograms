const assert = require('chai').assert;
const result = require('../Outility/InventoryDataMnagement')
const fs = require('fs');
var data = fs.readFileSync('/home/admin1/Desktop/Programs/ObjectOrientedProgram/InventoryDataMnagement.json','utf8');
var obj = JSON.parse(data);     //convert JSON file into object

describe(' json input for Rice ', function () {

    it("Name should be string only", function () {

        for (let i = 0; i < obj.Rice.length; i++) {
            var arr = obj.Rice[i].Name;
            assert.typeOf(arr, 'string');
            

        }
    });


    it("Name is not a number ", function () {

        for (let i = 0; i < obj.Rice.length; i++) {
            var arr = obj.Rice[i].Name;
           
            assert.isNotNumber(arr,'string')

        }
    });

    it("price value should be number only", function () {

        for (let i = 0; i < obj.Rice.length; i++) {
            var arr = obj.Rice[i].Price;
            assert.typeOf(arr, 'number');
        }
    });

});


describe('jsonInput For Wheats ', function () {
    it("price value should be number only", function () {

        for (let i = 0; i < obj.Wheats.length; i++) {
            var arr = obj.Wheats[i].Price;
            assert.typeOf(arr, 'number');
        }
    });

    it("Name should be string only", function () {

        for (let i = 0; i < obj.Wheats.length; i++) {
            var arr = obj.Wheats[i].Name;
            assert.typeOf(arr, 'string');

        }
    });

});
describe('jsonInput For Pulse ', function () {
    it("price value should be number only", function () {

        for (let i = 0; i < obj.Pulses.length; i++) {
            var arr = obj.Pulses[i].Price;
            assert.typeOf(arr, 'number');
        }
    });

    it("Name should be string only", function () {

        for (let i = 0; i < obj.Pulses.length; i++) {
            var arr = obj.Pulses[i].Name;
            assert.typeOf(arr, 'string');

        }
    });

});