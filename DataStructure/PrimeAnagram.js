
var ul = require('../DsUtility/utility');
var que = require('../DsUtility/Queue');
var rd = require('readline-sync');

//call function
getAnagram();

function getAnagram() 
{
 var num;
 try 
 {
 //num = rd.question('Enter a number ::');
 //call util class method
 ul.primeAnagram();
 }
 catch (err)
 {
 console.log(err);
 }
}
