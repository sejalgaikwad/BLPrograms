const assert = require('chai').assert;

const fs = require('fs');
var data = fs.readFileSync("/home/admin1/Desktop/Programs/ObjectOrientedProgram/AddressBook.json");

var obj = JSON.parse(data);       //convert JSON file into object


describe(' AddressBook Testing ', function () {

    it("Name should be string only", function () {

        for (var i = 0; i < obj.Person.length; i++) {
            var arr = obj.Person[i].Name;
            assert.isString(arr, 'string'); 
        }
    });

    it("Share value should be number only", function () {

        for (var i = 0; i < obj.Person.length; i++) {
            var arr = obj.Person[i].LastName;
            assert.isNotString(arr, 'number');
        }
    });

   it("Street should be String only", function () {
        for (var i = 0; i < obj.Address.length; i++) {
            var arr = obj.Address[i].Street;
            assert.isString(arr, 'string');
        }
    });

    it("Phone Number should be number only", function () {
        for (var i = 0; i < obj.Address.length; i++) {
            var arr = obj.Address[i].PhoneNum;
            assert.isNumber(arr, 'number');
        }
    });
    
    it("Check File empty or not", function () {
        assert.isTrue(isNaN(data));
    });
});