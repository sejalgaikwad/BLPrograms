var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');
var row= read.question("Enter row number: ");
var colm= read.question("Enter colm number: ");
util.array(row,colm);