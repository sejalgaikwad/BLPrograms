var util =require("../AlgoUtility/algoutility")

var read = require('readline-sync');

var array=[]
var n =read.question("Enter size of array: ");
console.log("enter element which will sort: ");

for(var i=0;i<n;i++) 
{
array[i]=read.question( );
}

util.sortarrayInt(array);
