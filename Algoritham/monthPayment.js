var read= require('readline-sync');
var util=require('../AlgoUtility/algoutility');

var Y=read.question("Enter Year : " );
var R=read.question("Enter Loan : " );
var P=read.question("Enter Interest: " );

util.monthlyPayment(Y,R,P);