var util =require("../AlgoUtility/algoutility")

var read = require('readline-sync');

var dec =read.question("Enter the num ");

function ConvertToBinary(dec)
{
    var bits = [];
    var dividend = dec;
    var remainder = 0;
    while (dividend >= 2) 
    {
        remainder = dividend % 2;
        bits.push(remainder);
        dividend = (dividend - remainder) / 2;
    }
    bits.push(dividend);
    bits.reverse();
    return bits.join("")

   
}
console.log(ConvertToBinary(dec))


