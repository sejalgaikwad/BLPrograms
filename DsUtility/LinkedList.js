
var readlineSync = require('readline-sync');
var util1 = require('../DsUtility/utility');

class Node  
{
 constructor(data)      // node class constructor
 {           
    this.data = data;
    this.next = null;
 }
}

class LinkedList  
{
 constructor() //linklist constructor
  {  
    this.head = null;
    this.size = 0;
  }

 add(data) //it will add data to the linklist 
  {
    var node = new Node(data);//creating node whenever the user want to add data
    if (this.head == null) //if the user adding data for 1st time
    {
        this.head = node;
        this.size++;
    }
    else //if the user adding data for the more than 1 time
    {
        var temp = this.head;
        while (temp.next) 
        {
            temp = temp.next;
        }
        this.size++;//inc size
        temp.next = node;//assighning node address to the prev node
    }
  }

 search(element) //to search the element given by user
  {
     if (this.head == null)
      {
        return false;
      }

     var temp = this.head;
     while (temp) 
     {
        if (temp.data == element) //checking is user given data is equal to the temp pointing to the node 
        {
            return true;
        }
        temp = temp.next;
     }
      return false;
  }

 addToPos(data) //adding data to the position where the data can fit
 {
    var temp = this.head;
    var prev = temp;

    if (data < temp.data) //checking for the 1st data
    {
        this.insertFirst(data);
        return
    }
    var node = new Node(data);//creating new node
    while (temp.next) 
    {
        if (temp.data < data) 
        {
            prev = temp;
            temp = temp.next;
        }
        else
        {
            prev.next = node
            node.next = temp
            break;
        }
    }
    if (!temp.next) //if the data is adding at the last
    {
        temp.next = node;
    }
    this.size++;
 }

 remove(data) 
 {

    var temp = this.head;
    if (temp.data == data)
    {
        this.deleteFirst();//deleting first element
        return;
    }
    var prev = temp;
    while (temp) 
    {
        if (temp.data == data) 
        {
            prev.next = temp.next;
            this.size--;
            return temp.data;
        }
        prev = temp;
        temp = temp.next;
    }
    return null;
 }

 display()
 {
    var temp = this.head;
    var str = "";
    while (temp) 
    {
        str = str + " " + temp.data;//concating all the data in the list 
        temp = temp.next;
    }
    return str;
 }

 insertFirst(data) //inserting data for the first time
 {
    var node = new Node(data);
    if (this.head == null) 
    {
        this.head = node;
        this.size++;
        return;
    }
    else 
    {
        node.next = this.firsthead;
        this.head = node;
        this.size++;
        return;
    }
 }

 insert(index, data) //inserting data into the exaxt position
  {
    if (index == 1)  
    {
        this.insertFirst(data);//adding data at the fisrt
        return;
    }
    if (this.head == null)
    {
        return;
    }
    var node = new Node(data);//creating new node
    var count = 0, prev = this.head, temp = this.head;
    try
    {
        while (temp) //if the add in data is not 1st element
         {
            if (count == index - 1)
             {
                prev.next = node;
                node.next = temp;
                this.size++;
                return;
              }
            count++;//incrementing the count
            prev = temp;
            temp = temp.next;
         }
        return false;
    }
    catch (exception) 
    {
        console.log(exception + "Enter correct index");
    }
 }

 deleteFirst() //to delete the first value
 {
        if (this.head == null) 
        {
        console.log("Linked List empty");
        return;
        }
    var n = this.head.data;
    this.head = this.head.next;//pointing fist to the next elment in that list
    this.size--;//decrementing size
    return n;
 }

 show()  
 {
    var temp = this.head;
    var str = "";
    while (temp) 
    {
        str = str + temp.data + " ";
        if (temp.next != null) 
        {
            str = str + "  ";
        }
        temp = temp.next;
    }
    console.log(str);
    return str;
 }

 getData()
  {
    var temp = this.head;
    var str = "";
    while (temp) 
    {
        str = str + temp.data;
        if (temp.next != null) 
        {
            str = str + " ";
        }
        temp = temp.next;
    }
    return str;
  }

}


module.exports =
{
LinkedList
}
     

