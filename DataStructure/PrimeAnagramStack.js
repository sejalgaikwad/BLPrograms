
  
var ul = require('../DsUtility/utility');
var dque = require('../DsUtility/Stack');
var rd = require('readline-sync');

//call function
getAnagram();

function getAnagram()
{
    var num;
  try 
  {
    num = rd.question('Enter a number: ');  //call util class method
    ul.primeAnagramStack(num);
  }
  catch (err)
 {
  console.log(err);
 }
}

