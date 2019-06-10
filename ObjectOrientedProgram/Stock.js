
  
var read = require('readline-sync')
var util = require('../Outility/Stock')
const fileStream = require('fs')
const StockReport = fileStream.readFileSync('Stock.json', 'utf8');
var obj = JSON.parse(StockReport)
function Stock(){
try {
    for (var i = 0; i < obj.Stock1.length; i++) {
        var name = obj.Stock1[i].StockNames;
        var share = obj.Stock1[i].NumberofShare;
        var price = obj.Stock1[i].Share;

        let data = new util.Stock(name, share, price)

        var total = data.total()
        console.log("name : " + name + ": " + "share : " + share);
        console.log("value of one stock is: " + price)
        console.log("total values is :" + total);
        console.log("*************************************");
        console.log()

    }
}
catch (e) {
    console.log(e.message)
}
}
module.exports=Stock()
