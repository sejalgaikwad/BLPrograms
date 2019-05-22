var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');

var v=read.question("Enter value of v")
var t=read.question("Enter value of t")

util.windchill(v,t)