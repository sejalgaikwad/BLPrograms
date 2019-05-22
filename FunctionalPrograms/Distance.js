var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');

var x=read.question("enter value of X : ")
var y=read.question("enter value of Y : ")

util.point(x,y);