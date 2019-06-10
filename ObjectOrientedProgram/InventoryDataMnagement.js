var util= require('../Outility/InventoryDataMnagement')
var read= require('readline-sync')
const filestrem=require('fs')
const InventoryData =filestrem.readFileSync('InventoryDataMnagement.json','utf8')
var obj=JSON.parse(InventoryData)
function inventory(){
try
{
    for(var i=0;i<obj.Rice.length;i++)
    {
    var n=obj.Rice[i].Name;
    var w=obj.Rice[i].Weight;
    var p=obj.Rice[i].Price;
    

    let add= new util.Rice(n,w,p)
    var total=add.total();
    console.log((i+1)+") Name of Rice is : " + n + " || Weight is :"+ w+"kg  || Price is : "+p+" per kg")
    console.log()
    console.log("Total price of Rice is : "+total)
    console.log("---------------------------------------------------------------")
    console.log()
    }
    console.log("===================================================================")

    for(var i=0;i<obj.Pulses.length;i++)
    {
    var n=obj.Pulses[i].Name;
    var w=obj.Pulses[i].Weight;
    var p=obj.Pulses[i].Price;

    let add= new util.Pulses(n,w,p)
    var total=add.total();
    console.log((i+1)+") Name of Pulses is : " +n + " || Weight is : "+ w+"kg  || Price is : "+p+" per kg")
    console.log()
    console.log("Total price of Pulses is : "+total)
    console.log("-----------------------------------------------------------------------")
    console.log()
    }
    console.log("===============================================================================")



    for(var i=0;i<obj.Wheats.length;i++)
    {
    var n=obj.Wheats[i].Name;
    var w=obj.Wheats[i].Weight;
    var p=obj.Wheats[i].Price;

    let add= new util.Wheats(n,w,p)
    var total=add.total();
    console.log((i+1)+") Name of Wheats is : " +n + " || Weight is : "+ w+"kg  || Price is : "+p+" per kg")
    console.log()
    console.log("Total price of Wheats is : "+total)
    console.log("--------------------------------------------------------------------------------")
    console.log()
    }
    console.log("===============================================================================")
}
catch(e)
{
    console.log(e.message)
}
}
module.exports=inventory()