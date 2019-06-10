const assert = require('chai').assert;
const fs = require('fs');
var data = fs.readFileSync("/home/admin1/Desktop/Programs/ObjectOrientedProgram/ClinicManagement.json");

var obj = JSON.parse(data);       //convert JSON file into object


describe(' json input for Clinic Management', function () {

    it("Doctor Name should be string only", function () {

        for (var i = 0; i < obj.Doctor.length; i++) {
            var arr = obj.Doctor[i].name;
            assert.typeOf(arr, 'string'); 
        }
    });

    it("Doctor Id should be number only", function () {

        for (var i = 0; i < obj.Doctor.length; i++) {
            var arr = obj.Doctor[i].Id;
            assert.typeOf(arr, 'number');
        }
    });

   it("Patient name should be string only", function () {
        for (var i = 0; i < obj.Patient.length; i++) {
            var arr = obj.Patient[i].name;
            assert.isString(arr, 'String');
        }
    });

    it("Patient Id should be number only", function () {
        for (var i = 0; i < obj.Patient.length; i++) {
            var arr = obj.Patient[i].Id;
            assert.isNumber(arr, 'Number');
        }
    });

    
    it("Age should be number only", function () {
        for (var i = 0; i < obj.Patient.length; i++) {
            var arr = obj.Patient[i].Age;
            assert.isNumber(arr, 'Number');
        }
    });
    
    it("Check File empty or not", function () {
        assert.isTrue(isNaN(data));
    });
});