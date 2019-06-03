
  
var utilds = require("../DsUtility/LinkedList")
var take = require('util');
var ref = require('readline-sync')
var util = require('../DsUtility/calender')

try
{
 function calender() 
 {
    var month = ref.questionInt('enter the month: ');

    while (month > 12 || month <=0) 
    {
        console.log('enter month within 12 and greter than 0')
        var month = ref.questionInt('enter the month: ');
    }
    var year = ref.questionInt('enter the year: ')
    while (year < 0) 
    {
        console.log('enter year greater then 0')
        var year = ref.questionInt('enter the year: ');
    }
    util.calender(month, year);
 }    
 calender();
}
catch (err) 
{
    console.error(err);
}






