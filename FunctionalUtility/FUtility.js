var read= require('readline-sync');

module.exports=
{

 /* User Input and Replace String Templet "Hello <<Username>>, How are you?" */

 strRepalce(name)
 {
    var str="Hello,<<User name>> How are you";
    while(name.length<3) //  User_name contain atleast 3 character 
    {
        console.log("User name contain atleast 3 character ");
        var read=require('readline-sync');
        var name=read.question("Enter user name: ")
    }
    var rs=str.replace('<<User name>>',name);
    console.log(rs);
 },


 /* Flip Coin and print percentage of heads and tails */

 Flip(number)
 {
     var head=0;
     var tail=0;

     for(var i=1;i<=number;i++)
     {
         var num=Math.random(); ///Random Function to get value between 0 and 1.
         if(num<0.5)           //If < 0.5
         {
            console.log("head") //getting head
            head++;
             
         }
         else
         {
            console.log("tail")      //getting tail
             tail++;
         }
     }
      console.log("Percentage of head is flipped: "+(head*100)/number);
      console.log("Percentage of tail is flipped: "+(tail*100)/number);
 },


 /* Leap year */

 leapyear(year)
 {
   if(year%400==0 || year%4==0 && year%100!=0) 
   {
       console.log(year+" is a leap year");
   }
   else
   {
       console.log(year+" is not a leap year")
   }
 },


 /* Power of 2 */

 power(number)
 {
    var i=0;
    var power=1;
    while(i<=number)//repeat until i equals N.
    {
        console.log("2^"+i+"="+power);

        power=power*2;
        i++;

    }
 },


 /* Harmonic Number */

 HarmonicNum(num)
 {
     var HarSeries=1;
     var result=0;
     for(var temp=2;temp<=num;temp++)
     {
         HarSeries +="+(1/"+temp+")" ///print 1/1 + 1/2 + 1/3 + ... + 1/N
     }
     while(num>0) //num is not equal to zero
     {
         result=result + 1/num;  //Print the  total Nth Harmonic Value.
         num--
     }
     console.log(HarSeries+" = "+result);
 },


 /* Factor */

 Fact(num)
 {
     while(num%2 == 0)  //num divide by 2 reminder is zero
     {
         console.log(2 + ' ')
         num =num/2;   //num divide by 2
     }
     for(var i=3;i<=Math.sqrt(num); i=i+2)  
     {
         while(num % i==0)
         {
             console.log(i+ '');
             num=num/i;
         }
     }
     if(num > 2)  //num is greter than 2
     console.log(num+'');
 },


 /* Gambler */

 gambler(stake,goal,trial)
 {
     var wins=0;
     var bets=0;
     var cash=stake;
    
         while(cash > 0 && cash < goal) 
         {
           for(var i=0;i<trial;i++)
            {
               bets++
             if(Math.random()<0.5)  ///Random Function to get value between 0 and 1. If<0.5
             {
                 cash++;     // Win 
             }
             else
             {
                 cash--;    //loss
             }
             if(cash==goal)
             {
               wins++;    
             }
           }
         }
         console.log(wins+" wins of "+trial)
         
         var a=(wins*100)/trial;
         console.log("win percentage= " +a);
         var b=(100-a)
         console.log("loss percentage= " +b);
 },

 /* Coupon NUmber */

 CouponNum(number1)
 {
     var arr =[];
     var num=0;
     
     while(number1!=num)
     {
         var x=Math.round(Math.random()*number1)
         if(!arr.includes(x))
         {
             arr.push(x);
             num++;
         }
     }
     console.log(arr)
 },

 /* 2D Arrays */
 
  array(row,colm)
    {
        var arr =[];
        for(var i=0;i<row;i++)   //this for loop use for ROW
        {
            arr[i]=[];
            for(var j=0;j<colm;j++)  ////this for loop use for COLUMN
            {
                var read= require('readline-sync');
                arr[i][j]=read.question("enter the Element of :'row'"+i+" 'column'"+j+" :" )
            }
        }
         console.log(arr);
    
 },

 /* Sum Of three integer adds to ZERO */

 triplet(arr)
 {
     if(arr.length!=0)
     {
         for(var i=0;i<=arr.length-2;i++)
         {
             for(var j=i+1;j<=arr.length-1;j++)
             {
                 for(var k=j+1;k<arr.length;k++)
                 {
                     
                    if(parseInt(arr[i])+parseInt(arr[j])+parseInt(arr[k])==0)//if addition of three integer is equal to 0
                    {
                        console.log("Sum of three integer "+arr[i]+" "+arr[j]+" "+arr[k]+" ")
                    }
                   
                 }
             }
         }

        
     }

     else
     {
         console.log("inavalide Data")
     }
 },
 
 /* Calculate Distance */

 point(x,y)
 {
     
     distance=Math.sqrt((x*x)+(y*y));
     console.log("Distance between("+x+","+y+") to origin (0,0)="+distance);
 },
 

 /* Simulate stopwatch Program */
 
 stopwatchmill()           
 {
     var time=new Date();
     return time.getMilliseconds();
 },
findTime()
{
  var start=this.stopwatchmill(); //Start the Stopwatch 
  console.log("Start time: "+ start)
 
  var stop=this.stopwatchmill();  //End the Stopwatch
  console.log("Stop time: "+ stop)

  var time=stop-start; // Measure the elapsed time between start and end
  console.log(time);
},


 /* Find Quadratic*/

 quadratic(a,b,c)
 {
    var determine =b*b-4*a*c;
    var r1;
    var r2;

    if(determine>0) //// condition for real and different roots
    {
        sqrt=Math.sqrt(determine);
        r1=((-b+sqrt)/(2*a));
        r2=((-b-sqrt)/(2*a));
        console.log("root 1:"+r1);
        console.log("root 2:"+r2);
    }
    else if(determine==0) //// Condition for real and equal roots
    {
        r1=r2=-b/(2*a);
        console.log("Root1 and Root2 :"+r1);
    }
    else //If roots are not real
    {
        var real =-b/(2*a);
        var imginary =Math.sqrt(-determine)/(2*a);
        console.log("Root1 : " + real + "+ i" +  imginary )
        console.log("Root2 : " + real + "- i" + imginary)
    }
},
 
 /* WindChill*/
 
 windchill(v,t)
 {
     if(t>=50 || v>=120 || v<=3)//if t is larger than 50 in absolute value or if v is larger
                                   //than 120 or less than 3
     {
         console.log("invalid input")
     }
     else
     {
         var wc=35.74+0.6215*t+(0.4275*t-35.75)*Math.pow(v,0.16);
         console.log("temprature : "+t);
         console.log("wind speed : "+v);
         console.log("windchill : "+wc);
     }
 },

 
 
}
