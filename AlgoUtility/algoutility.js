var read= require('readline-sync');
module.exports={
    
/*Anagaram String*/

isAnagram (str1, str2)
 {

  if (str1.length !=str2.length) // If length of both strings is not same, 
                                // then they cannot be anagram 
  {
     
     console.log("String is not anagarm")
  }
  
  var sortStr1 = str1.split('').sort().join('');   //split, join, sort string
  var sortStr2 = str2.split('').sort().join('');

  if(sortStr1 == sortStr2)                         // //check string is equal or not
  {
     console.log("String is angram")      
  }
  else
  {
      console.log("String is not Anagram")
  }
},


/*Prime Number */

primeNum()
{
 var PrimeNum =" ";
 for(var i=1;i<=1000;i++)
 {
    var temp=0;
    for(var j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            temp= temp+1
        }
    }
    if(temp==2)
    {
       PrimeNum=PrimeNum +i+" ";
    }
    
}
console.log(PrimeNum)
},


/** Check using Stopwatch the Elapsed Time using Static Search and Sorted List **/

/*binarySearch method for integer*/


sortarrayInt(array) 
{
  var sort = array.sort()         //sort array
  console.log(sort)

  var number = read.question("enter the number which you want to search: ")

  var arr = sort;
  var sortedlist = this.binarySearchInt(arr, number);
},

binarySearchInt(arr, number) 
{
  
  var temp = arr.length
  var high = temp - 1;
  var low = 0;
  var mid = 0;

  while (low < high) 
  {
    if (arr[mid] == number)        // If the element is present at the middle itself 
    {
      console.log("number is present in " + (mid + 1) + " position")
    }
    else if (arr[mid] > number) // If element is smaller than mid, then 
                                // it can only be present in left subarray
    {

      high = mid - 1
    }
    else                            // Else the element can only be present 
                                        // in right subarray
    {
      low = mid + 1
      mid = Math.floor((high + low) / 2)
    }
  
    if (low > high)                   // We reach here when element is not present in array 
    { 
      console.log("Number is not found")
    }
  }
},

  /*binarySearch method for String*/
  
  sortarrayString(array) 
  {
    var s1 = array.sort();
    console.log(s1)
    var arr = s1;
    var String = read.question("enter the string which you want to search: ")
    var sortedlist = this.binarySearchString(arr, String);
 },
  
  binarySearchString(arr, string)
  { 
    var temp = arr.length
    var high = temp - 1;
    var low = 0;
    var mid = 0;
  
    while (low < high) 
    {
       if (arr[mid] == string)  // If the element is present at the middle itself 
      {
        console.log("string is present in " + (mid + 1) + "rd position")
        
      }
      else if (arr[mid] > string)        // If element is smaller than mid, then 
                                      // it can only be present in left subarray
       {
            high = mid - 1
       }
      else                                // Else the element can only be present 
                                     // in right subarray
      {
        low = mid + 1
        mid = Math.floor((high + low) / 2)
      }
    
    if (low > high)             // We reach here when element is not present in array 
      {
        console.log("String is not Found")
      }
    }
  },
  
/*insertionSort method for Int */

insertionSortInt(arr) 
{
  for (var i = 1; i < arr.length; i++) 
  {
    var temp = parseInt(arr[i]);      
    var j = i - 1;
     /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */

    while (j >= 0 && parseInt(arr[j]) > temp) 
    {
      arr[j + 1] = parseInt(arr[j]);
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
},

/*insertionSort method for String*/


insertionSortString(arr)    /*Function to sort array using insertion sort*/
{
  for (var i = 1; i < arr.length; i++) 
  {
    var temp = arr[i];
    var j = i - 1;

     /* Move elements of arr[0..i-1], that are  
        greater than key, to one position ahead  
        of their current position */
    while (j >= 0 && arr[j] > temp) 
    {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
},

/*bubbleSort method for integer*/

bubbleSortInt(arr) 
{
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) 
  {
    for (var j = 0; j < n - i - 1; j++) 
    {
      if (parseInt(arr[j]) > parseInt(arr[j + 1]))  //check 1st element is greater or not if yes then swap
      {
        var temp = parseInt(arr[j]);                 //  swap arr[j+1] and arr[i] 
        arr[j] = parseInt(arr[j + 1]);
        arr[j + 1] = temp;
      }
    }
  }
  return arr; 
},

/*bubbleSort method for String */

bubbleSortString(arr) 
{
  var n = arr.length;
  for (var i = 0; i < n - 1; i++) 
  {
    for (var j = 0; j < n - i - 1; j++) 
    {
      if ((arr[j]) > (arr[j + 1]))           //check 1st element is greater or not if yes then swap
      {
        var temp = (arr[j]);                       // swap arr[j+1] and arr[i] 
        arr[j] = (arr[j + 1]);
        arr[j + 1] = temp;
      }

    }
  }
  return arr;
},


/**  Stopwatch using sorting search method*/

StopwatchSearchAndSort(arr) {

  //binary search

  var start = this.stopwatchmill()      //start time
  var temp = this.sortarrayInt(arr)
  var stop = this.stopwatchmill()        //stop time
  var totaltime1 = stop - start; //Measure the elapsed time between start and end
  console.log("Binary Search take " + totaltime1 + " millsecond to exicute the code");
  console.log();


  //bubble Sort
  
  var start = this.stopwatchmill()
  var temp = this.bubbleSortInt(arr)
  var stop = this.stopwatchmill()
  var totaltime2 = stop - start; //Measure the elapsed time between start and end
  console.log("Bubble Sort take " + totaltime2 + " millsecond  to exicute the code");
  console.log();

  //insertion sort

  var start = this.stopwatchmill()
  var temp = this.insertionSortInt(arr)
  var stop = this.stopwatchmill()
  var totaltime3 = stop - start; //Measure the elapsed time between start and end
  console.log("Insertion Sort take " + totaltime3 + " millsecond  to exicutethe code");
},

stopwatchmill() 
{
  var time;
  var date = new Date();
  time = date.getMilliseconds();
  console.log(time)
  return time
},



/** Find the Fewest Notes to be returned for Vending Machine **/

vendingMachine(arr, amount) 
{
  var notes = 0
  for (var i = 0; i < arr.length; i++) 
  {
    if (amount / arr[i] >= 1)               
    {
      var c = Math.floor(amount / arr[i])
      notes = notes + c
      console.log(arr[i] + " notes are :" + c)
      amount = amount % arr[i]
      
    }
  }
  console.log("total number of notes :" + notes)
},



/** Find day in a week using formula **/

dayOfWeek(d, m, y) //m (month), d (day), and y (year)
{
  var y0 = y - parseInt((14 - m)) / 12;
  var x = y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt((y0 / 400));
  var m0 = m + 12 * parseInt(((14 - m) / 12)) - 2;
  var day = (d + x + 31 * parseInt(m0 / 12)) % 7;
  console.log(Math.floor(day))

  return Math.floor(day);
},


/**add temperaturConversion static function and find temperature in Celsius or viceversa */

convertToF(celsius) 
{
  var fahrenheit = (celsius * (9 / 5)) + 32; //Celsius to Fahrenheit
  console.log("temperature in Fahrenheit = "+fahrenheit)
},

convertToC(fahrenheit) 
{
  var celsius = (fahrenheit - 32) * 5 / 9; //Fahrenheit to Celsius
  console.log("temperature in Celsius = " +celsius)
},



/**Monthly payment */

monthlyPayment(Y,R,P)
{
    var n=12*Y;
    var r=R/(12*100);
    var d=1 -(1+r)** (-n);
    var mp=(P*r)/d;
    console.log("Monthly Payment is "+mp)
},

/** To find square using Newton method **/

findSquare(c) 
{
  var epsilon = 1e-15;
  var t = c;
  while (Math.abs(t - c / t) > epsilon * t)
  {
    t = (c / t + t) / 2.0;
  }
  console.log("estimated of the square root :" + t);
  return t;
},
}