function string(){
var read= require('readline-sync');
var util=require('../FunctionalUtility/FUtility');
var name= read.question("Enter User Name : ");
util.strRepalce(name);
return name;
}
module.exports=string();