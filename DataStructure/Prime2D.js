var ul = require('../DsUtility/utility');
var dque = require('../DsUtility/Queue');
var rd = require('readline-sync');

try
{
 getPrime(); //call function

 function getPrime()
 {
  var num;
  try 
  {
    num = rd.question('Enter a number ::');  //call util class method
    ul.prime(num);
  }
  catch (err) 
  {
   console.log(err);
  }
 }
}
catch (err) 
{
    console.error(err);
}
