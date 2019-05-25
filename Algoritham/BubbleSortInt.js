var util =require("../AlgoUtility/algoutility")

var read = require('readline-sync');


var arr=[]
var n =read.question("Enter size of array: ");
console.log("enter element which will sort : ");

for(var i=0;i < n;i++) 
{

arr[i]=read.question( );
}

util.bubbleSortInt(arr);
console.log("sorted array: ")
console.log(arr)


var util =require("../AlgoUtility/algoutility")

var read = require('readline-sync');


var arr=[]
var n =read.question("Enter size of array: ");
console.log("enter element which will sort : ");
for(var i=0;i < n;i++) 
{

arr[i]=read.question( );
}

util.bubbleSortInt(arr) ;
console.log("sorted array: ")
console.log(arr)

