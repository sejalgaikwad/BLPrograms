var read= require('readline-sync');

module.exports=
{

 /* User Input and Replace String Templet "Hello <<Username>>, How are you?" */

 strRepalce(name)
 {
    var str="Hello,<<User name>> How are you";
    while(name.length<3)
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
         var num=Math.random();
         if(num<0.5)
         {
            console.log("head")
            head++;
             
         }
         else
         {
            console.log("tail")
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
    while(i<=number)
    {
        console.log("2^"+i+"="+power);

        power=power*2;
        i++;

    }
 },

 /* Harmonic Number */
 HarmonicNum(num)
 {
     var strSeries=1;
     var result=0;
     for(var temp=2;temp<=num;temp++)
     {
         strSeries +="+(1/"+temp+")"
     }
     while(num>0)
     {
         result=result + 1/num;
         num--
     }
     console.log(strSeries+" = "+result);
 },
 /* Factor */
 Fact(num)
 {
     while(num%2 == 0)
     {
         console.log(2 + ' ')
         num =num/2;
     }
     for(var i=3;i<=Math.sqrt(num); i=i+2)
     {
         while(num % i==0)
         {
             console.log(i+ '');
             num=num/i;
         }
     }

     if(num > 2)
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
             if(Math.random()<0.5)
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
         console.log("win percentage=" +a);
         

         
         
    
    

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
        for(var i=0;i<row;i++)
        {
            arr[i]=[];
            for(var j=0;j<colm;j++)
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
                     
                    if(parseInt(arr[i])+parseInt(arr[j])+parseInt(arr[k])==0)
                    {
                        console.log("Sum of three integer "+arr[i]+" "+arr[j]+" "+arr[k]+" ")
                    }
                    else
                    {
                        console.log("inavalide Data")
                    }
                 }
             }
         }
     }


 },
 
 /* Calculate Distance */
 point(x,y)
 {
     
     distance=Math.sqrt((x*x)+(y*y));
     console.log("Distance between("+x+","+y+") to origin (0,0)="+distance);
 },
 /* Permutation of a String */

 permutation1(string,first)
 {
    var string=" ";
    
    last =string.length-1;
    if(first==last)
    {
        string=string+str;

    }
    else
    {
        for(var index=first;index<=last;index++)
        {
            str=this.swapString(str,first,index);
            string=this.Permutation1(str,first+1);
            str=this.swapString(str,first,index);

        }

    }
    return string;
 },

 swapString(str,first,index)
 {
     var as =' ';
     var ch=[];
     ch=str.split('');
     var temp=ch[first];
     ch[first]=ch[last];
     ch[last]=temp;

     for(let index=0; index<str.length;index++)
     {
         as=as+ch[index];

     }
     return as;

 },
 
 

 /* Simulate stopwatch Program */
 
 stopwatchmill()
 {
     var time=new Date();
     return time.getMilliseconds();
 },
findTime()
{
  var starttime;
  var stoptime;

  var starttime=read.question("Enter key for Starttime ");
  var start=this.stopwatchmill();
  console.log("Start time: "+ start)

  var starttime=read.question("Enter key for Stoptime");
  var stop=this.stopwatchmill();
  console.log("Stop time: "+ stop)

  var time=stop-start;
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
        r1=(-b+sqrt)/(2*a);
        r1=(-b-sqrt)/(2*a);
        console.log("root 1"+r1);
        console.log("root 2"+r2);
    }
    else if(determine==0) //// Condition for real and equal roots
    {
        r1=r2=-b/(2*a);
        console.log("Root1 and Root2 :"+r1);
    }
    else //If roots are not real
    {
        var real  =-b/(2*a);
        var imginary =Math.sqrt(-determine)/(2*a);
        console.log("Root1 : " + real + "i +" +  imginary )
        console.log("Root2 : " + real + "i -" + imginary)
    }
},
 
 /* WindChill*/
 windchill(v,t)
 {
     if(t>=50 || v>=120 || v<=3)
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
