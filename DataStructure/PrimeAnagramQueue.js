
  
var ul = require('../DsUtility/utility');
var dque = require('../DsUtility/Queue');
var rd = require('readline-sync');

//call function
getAnagram();

function getAnagram() 
{
 var num;
 try
  {
  num = rd.question('Enter a number :');   //call util class method
  ul.primeAnagramQueue(num);
  }
 catch (err)
  {
  console.log(err);
  }
}

