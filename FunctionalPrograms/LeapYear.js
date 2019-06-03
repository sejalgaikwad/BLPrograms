function leap(){
var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');
var year= read.question("Enter Year : ");
if(year.length<4)
{
    console.log("Enter valid year");
}
util.leapyear(year);
return year;
}
module.exports=leap();