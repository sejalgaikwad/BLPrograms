
  
var read = require('readline-sync');
var util = require('../DsUtility/DeQueue');

try
{
 function DeQueue() 
 {
    var deque = new util.DeQueue(); 
    var str = read.question(" Enter the String : ");
    var str1 = deque.palindromeChecker(str);
    if (str1 == false)
    {
        console.log("String is not a palindrome")
    }
    else
    {
        console.log("String is a Palindrome")
    }
 }
 DeQueue()
}
catch (err) 
{
    console.error(err);
}
