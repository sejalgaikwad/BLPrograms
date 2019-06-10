var read=require('readline-sync')
var util=require('../Outility/ReplaceMessage')

var filestream=require('fs')

const string=filestream.readFileSync('String.txt','utf8')

function Replace()
{
    try
       {
        var name=read.question("Enter the name : ")
        console.log();
        while(!isNaN(name))
        {
            console.log("plzz enter the valid name and alphabets only");
           
            var name=read.question("Enter the name : ");
            return (name)
           
        }

        
            var fullname=read.question("Enter the Full name : ");
            console.log();
            while(!isNaN(fullname))
            {
                console.log("plzz enter the valid full name and alphabets only");
                
                var fullname=read.question("Enter the Full name : ");
                return(fullname)
            
            }
       

       
            var phoneNum = read.questionInt('Enter the Phone Number :')
            while (phoneNum > 9999999999 || phoneNum < 999999999) 
            {
            console.log("Number should be of 10 Digit")
            phoneNum = read.questionInt('Enter Different Phone Number : ' )
            return (phoneNum)    
        }

            var date =new Date();
            var day=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
            
            
            var result=util.ReplaceRegex(name,fullname,phoneNum ,day,string)
            console.log(result);
   
   }
   

  catch(e)
  {
    console.log(e.message)
  }
}
    module.exports=Replace();

