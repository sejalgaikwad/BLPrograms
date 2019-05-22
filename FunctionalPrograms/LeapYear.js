var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');
var year= read.question("Enter Year : ");
util.leapyear(year);