

  
var read =require('readline-sync');
var util = require('../Outility/CommersialDataManagement');
var file = require('fs');



 var comp = file.readFileSync('Company.json','utf8');
 var cust = file.readFileSync('Customer.json','utf8');
obj1 =JSON.parse(cust);
obj2 = JSON.parse(comp);
var util1 = new util.StockAccount()

 
function Stock()
{
    console.log("*******Stock Account *******");
    console.log("1: To Create New Account");
    console.log("2: To Buy Shares ");
    console.log("3: To Sell Shares");
    console.log("4: To Print Details");
    console.log("5: Exit");

    var ch= read.question("Enter your choies: ")

   switch(parseInt(ch)){
        case 1: 
        util1.createAccount(obj1);
        break;

        case 2:
        util1.buyShares(obj1,obj2);
        break;

        case 3:
        util1.sellShares(obj1,obj2);
        break;

        case 4:
        util1.print(obj1,obj2);
        break;

        case 5:
        console.log("Thank You!!");
        break;

        default:
        console.log("Please enter a valid option!!");
        
    }
}
Stock()
