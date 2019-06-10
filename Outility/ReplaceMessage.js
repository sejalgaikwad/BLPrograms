var read=require('readline-sync')
var filestream=require('fs')

module.exports={

ReplaceRegex(name,fullname,phoneNum,day,filestring)
{
    
filestring=filestring.replace("<<name>>",name);
filestring=filestring.replace("<<full name>>",fullname);
filestring=filestring.replace("xxxxxxxxxx",phoneNum);
filestring=filestring.replace("xx-xx-xxxx",day);
return filestring

}
}