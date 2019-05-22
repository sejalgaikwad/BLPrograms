var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');
var stake= read.question("Enter stack: ");
var goal= read.question("Enter goal: ");
var trial= read.question("Enter trial: ");

util.gambler(stake,goal,trial);