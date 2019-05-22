var util =require("../AlgoUtility/algoutility")

var read = require('readline-sync');

var amt=read.question("Enter the Amount: ")

var arr=[1000, 500, 100, 50, 100, 5, 2,1]
util.vendingMachine(arr,amt);
