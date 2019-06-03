//var util =require("../AlgoUtility/algoutility")

var read = require('readline-sync');

var dec =read.question("Enter the num ");

function ConvertToBinary(dec)
{
    var bits = [];
    var dividend = dec;  
    var remainder = 0;
    while (dividend >= 2) 
    {
        remainder = dividend % 2;  //dividend divide 2 and store reminder
        bits.push(remainder);     //push reminder
        dividend = (dividend - remainder) / 2;
    }
    bits.push(dividend);  //push dividend
    bits.reverse();       //reverse bits
    return bits.join("") 
}
console.log(ConvertToBinary(dec))


