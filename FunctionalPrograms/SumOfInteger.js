function tripl(){
var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');
var arr=[]

var n= read.question("Enter the size of array: ");
for(var i=0;i<n;i++)
{
    arr[i]=read.question("Enter the  element on"+i+"Position :");
}

util.triplet(arr);
}
module.export=
    tripl();
