var read = require('readline-sync');
var util = require('../DsUtility/Stack');

try
{
 function Stack()
  {
    var stack = new util.Stack; // stack object
    var str = read.question("Enter your mathematical expression with parantheses : ");
    var ch, i;
   
    for (i = 0; i < str.length; i++)
     {
        ch = str.charAt(i);
         if (ch == '(' || ch == '[' || ch == '{') 
         {
            stack.push(ch);//push ch to the stack
            //stack.peek();
         }
        else
         {
            switch (ch) 
            {
                case ')': if (stack.pop() != '(') //if the pop is not equal to the char then return false hence it is unbalnced
                {
                        return false;
                }
                    break;
                case ']': if (stack.pop() != '[') 
                {
                    return false;
                }
                    break;
                case '}': if (stack.pop() != '{') 
                {
                    return false;
                } break;
            }
         }
    }
    if (stack.isEmpty()) //if the char is false return true
    {
      return true;
    }
      return false;
 } 
 var result = Stack();
 console.log(result);

 if (result) 
 {
    console.log(" Expression is balanced");
 }
 else 
 {
    console.log("Expression is Not balanced");
 }
}
catch (err) 
{
    console.error(err);
}
