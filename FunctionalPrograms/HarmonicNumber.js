function Harmonic(){
var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');
var num= read.question("Enter number: ");
util.HarmonicNum(num);
return num;
}
module.exports=Harmonic();