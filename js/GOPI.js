
//Write a JavaScript program to calculate Addition,Subtraction,multiplication and division of two numbers (input from user).
function addition()
{
    var a=Number(document.getElementById("f1").value);
    var b=Number(document.getElementById("f2").value);
    
    if(a > 0  && b > 0)
    {
    var c=a+b;
    document.getElementById("para").innerHTML="The Result  Value :"  +c;
    }
    else
    {
    alert("Enter Numbers !!!");
    }
}
function  subtraction()
{
    var a=Number(document.getElementById("f1").value);
    var b=Number(document.getElementById("f2").value);
    
    if(a > 0  &&  b > 0)
    {
    var c=a-b;
    document.getElementById("para").innerHTML="The Result  Value :"  +c;
    }
    else
    {
    alert("Enter Numbers !!!");
    }
}
function  multiplication()
{
    var a=Number(document.getElementById("f1").value);
    var b=Number(document.getElementById("f2").value);

    if(a > 0  && b > 0)
    {
    var c=a*b;
    document.getElementById("para").innerHTML="The Result  Value :"  +c;
    }
    else
    {
    alert("Enter Numbers !!!");
    }
}
function division()
{
    var a=Number(document.getElementById("f1").value);
    var b=Number(document.getElementById("f2").value);
    
    if(a > 0  && b > 0)
    {
    var c=a/b;
    document.getElementById("para").innerHTML="The Result  Value :"  +c;
    }
    else
    {
     alert("Enter Numbers !!!");
    }
}
function reset()
{
    
    document.getElementById("f1").value=" ";
    document.getElementById("f2").value=" ";
    document.getElementById("para").innerHTML=" "; 

}
//Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.  </p>

function diff()
{
   var a=Number(document.getElementById("a1").value);
   var b=Number(document.getElementById("a2").value);
   if(a > 0  && b > 0)
   {
   if(b <= a)
   {
   var c=a-b;
   document.getElementById("para2").innerHTML="The Result :"+c;
   }
   else
   {
   var d=(b-a)*2;
   document.getElementById("para2").innerHTML="The Result :"+d;
   }
   }
   else
   {
   alert("Enter Numbers !!!");
   }
}
function reset1()
{
    
    document.getElementById("a1").value=" ";
    document.getElementById("a2").value=" ";
    document.getElementById("para2").innerHTML=" "; 
  
}
//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function sum()
{
    var a=Number(document.getElementById("b1").value);
    var b=Number(document.getElementById("b2").value);
    if(a > 0  && b > 0)
    {
    if(a==b)
    {
    var c=(a+b)*3;
    document.getElementById("para3").innerHTML="The Result :"+c;
    }
    else
    {
    var d=a+b;
    document.getElementById("para3").innerHTML="The Result :"+d;
    }
    }
    else
    {
     alert("Enter Numbers !!!");
     }
}
function reset2()
{
    
    document.getElementById("b1").value=" ";
    document.getElementById("b2").value=" ";
    document.getElementById("para3").innerHTML=" "; 
}
// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function sub()
{
    var a=Number(document.getElementById("c1").value);
    var b=Number(document.getElementById("c2").value);
    if(a > 0  && b > 0)
    {
    if(a < b)
    {
        var c=(b-a)*3;
        document.getElementById("para1").innerHTML="The Result :"+c;
    }
    else
    {
        var d=a-b;
        document.getElementById("para1").innerHTML="The Result :"+d;
    }
    }
    else
    {
    alert("Enter Numbers !!!");
    }
}
function reset3()
{
    
    document.getElementById("c1").value=" ";
    document.getElementById("c2").value=" ";
    document.getElementById("para1").innerHTML=" "; 
}
function trueorfalse()
{
    var a=Number(document.getElementById("d1").value);
    var b=Number(document.getElementById("d2").value);

    if(a > 0  && b > 0)
    {
    if((a == 50 || b == 50) || (a + b == 50))
    {
        alert("true");
    }
    else{
        alert("false");
    }
    }
    else
    {
     alert("Enter Numbers !!!");
    }

}
function reset4()
{
    
    document.getElementById("d1").value=" ";
    document.getElementById("d2").value=" ";
   
}
//Write a JavaScript program to check from two given integers, if one is positive and one is negative.
function positive_negative()
{
    
    var a=Number(document.getElementById("a").value);
    var b=Number(document.getElementById("b").value);
    
    
      if ((a < 0 && b > 0) || a > 0 && b < 0) 
      {
        alert(" true");
      }
      else 
      {
        alert("false");
      }
}
function reset5()
{
    
    document.getElementById("a").value=" ";
    document.getElementById("b").value=" ";
   
}
//Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
function check37()
{
    var a=Number(document.getElementById("c").value);
    if(a > 0)
    {
    if(a%3==0 || a%7==0)
    {
        alert("true");
    }
    else
    {
        alert("false");
    }
    }
    else
    {
     alert("Enter Numbers !!!");
    }

}
function reset6()
{
    
    document.getElementById("c").value=" ";
  
   
}
//Write a JavaScript program to find the largest of three given integers.
function largest()
{
    var a=Number(document.getElementById("e1").value);
    var b=Number(document.getElementById("e2").value);
    var c=Number(document.getElementById("e3").value);
    if(a > 0  && b > 0)
    {
    if(a > b && a > c)
    {
        document.getElementById("para4").innerHTML=a +" is the largest number";
    }
    else if( b > a && b > c)
    {
        document.getElementById("para4").innerHTML=b +" is the largest number";
    }
    else if(c > a && c > b)
    {  
        document.getElementById("para4").innerHTML=c +" is the largest number";
    }
    }
    else
    {
     alert("Enter Numbers !!!");
    }

}
function reset7()
{
    
    document.getElementById("e1").value=" ";
    document.getElementById("e2").value=" ";
    document.getElementById("e3").value=" ";
    document.getElementById("para4").innerHTML=" ";
  
   
}
//Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.
function eight()
{
    var a=Number(document.getElementById("g1").value);
    var b=Number(document.getElementById("g2").value);

    if(a > 0  && b > 0)
    {
    if( a==8 || b==8 )
    {
          alert("true");
    }
    if ( (a+b)==8 || (x-y)== 8)
    {
       alert("true");
    }
    else
    {
        alert("false");
    }
    }
    else
    {
     alert("Enter Numbers !!!");
    }
}
function reset8()
{
    
    document.getElementById("g1").value=" ";
    document.getElementById("g2").value=" ";
 
  
   
}
//Write a JavaScript function that accepts a string as a counts the number of vowels within the string.
function vowels()
{
    var a=document.getElementById("d").value;
    var count=0;
     if(a.length > 0)
     {
     if(typeof a=='string')
     {
    for(var i=0; i<a.length; i++)
    {
      var vowels=a.charAt(i);
    if(vowels=='a' ||vowels=='e' ||vowels=='i' ||vowels=='o' ||vowels=='u' ||vowels=='A' ||vowels=='E' ||vowels=='I' ||vowels=='O' ||vowels=='u') 
    {
     count++;
    document.getElementById("para5").innerHTML="vowels count:"+count;
    }
    }
    }
    else
    {
     alert("no string");
    }
    }
    else
    {
     alert("no value");
    }

}
function reset9()
{
    
    document.getElementById("d").value=" ";
    document.getElementById("para5").innerHTML=" ";
 
  
 
  
   
}
//Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the .
function orignal() 
{
    var text=document.getElementById("h1").value;
    var text1=document.getElementById("h2").value;
    
    if (text === null || text === undefined || text.substring(0, 2) === 'Py') 
    {
        var a=text;   
    }
    else
    {
      alert("no Py")   
    }
    if(text==a)
    {
    var text3=a.concat("",text1);
    document.getElementById("para6").innerHTML="original string is "+text3;
    }
    
    


}

function reset10()
{
    
    document.getElementById("h1").value=" ";
    document.getElementById("h2").value=" ";
    document.getElementById("para6").innerHTML=" ";
   
  
   
}
//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
function premove()
{
    var a=document.getElementById("j1").value;
    var b=Number(document.getElementById("j2").value);
    if(a.length > 0 && b > 0)
     {
      var c=a.slice(0,b);
      var d=a.slice(b+1,a.length);
      var e=c+d;
      document.getElementById("para7").innerHTML="Get New String:"+ e;
     }
     else
     {
      alert("no value");
     }

}
function reset11()
{
    
    document.getElementById("j1").value=" ";
    document.getElementById("j2").value=" ";
    document.getElementById("para7").innerHTML=" ";
  
 
  
   
}
// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
function firstend()
{
    var a=document.getElementById("e").value;
    if(a.length > 0)
     {
       var c=a.slice(0,1);
       var b=c+a+c
       document.getElementById("para8").innerHTML="Get New String:"+ b;
     }
     else
     {
          alert("no value");
     }

}
function reset12()
{
    
    document.getElementById("e").value=" ";
    document.getElementById("para8").innerHTML=" ";
  
   
 
  
   
}
//Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
function java()
{
    var a=document.getElementById("f").value;
    var b=a.slice(0,4)
    if(a.length > 0)
    {
    if(b=="Java"){
        alert("true");
    }
    else{
        alert("false");
    }
    }
    else
    {
         alert("no value");
    }

}
function reset13()
{
    
    document.getElementById("f").value=" ";
  
    
  
}
// Write a JavaScript program to reverse a given string.
function reverse()
{
    var a=document.getElementById("g").value;
    if(a.length > 0)
    {
    var b=a.split("").reverse().join("");
    document.getElementById("para9").innerHTML=" Get Reverse string is : "+b;
    }
    else
    {
         alert("no value");
    }
    
 
 }
 function reset14()
{
    
    document.getElementById("g").value=" ";
    document.getElementById("para9").innerHTML=" ";
  
  
}
// Write a JavaScript program to capitalize the first letter of each word of a given string.
function capitalize()
{
    var a=document.getElementById("h").value;
    var b=a.split(" ");
    if(a.length > 0)
    {
   for (let i = 0, x = b.length; i < x; i++) {
       b[i] = b[i][0].toUpperCase()+b[i].substr(1);
   }
   var c=b.join(" ");
   document.getElementById("para10").innerHTML=" Get capitalize the first letter of each word : "+c;
  }
  else
    {
    alert("no value");
    }
}
function reset15()
{
    
    document.getElementById("h").value=" ";
    document.getElementById("para10").innerHTML=" ";
  
   
}
// Write a JavaScript program to check if a given string contains equal number of p's and t's present.

function psts()
{
    var a=document.getElementById("j").value;
    var pcount=0;
    var tcount=0;
    for(var i=0;i<=a.length;i++)
    {
     var character=a.charAt(i);
     if(character=="p")
     {
         pcount++;
     } 
    }  
   for(var i=0;i<=a.length;i++)
   {
    var t=a.charAt(i);
    if(t=="t")
    {
    tcount++;
    }
   }
    if(pcount==tcount){
        alert("true");
    } 
    else{
        alert("p's and t's count is not equal");
    }  
}
function reset16()
{
    
    document.getElementById("j").value=" ";


  
    
}
//Write a JavaScript program to create a new string without the first and last character of a given string.
function without_first_end()
{
    var a=document.getElementById("k").value;
    if(a.length > 0)
    {
    var l= a.substring(1, a.length-1);
    document.getElementById("para11").innerHTML="Get New String is :"+l;
    }
    else
    {
     alert("no value");    
    }

}
function reset17()
{
    
    document.getElementById("k").value=" ";
    document.getElementById("para11").innerHTML=" ";

    
}
//Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three
function moveltf(){
    var a=document.getElementById("l").value;
    if(a.length > 0)
    {
    if (a.length >= 3)
    {
    var b=a.substring(a.length-3);
    var d=a.slice(0,a.length-3);
    var c=(b+d);
    document.getElementById("para12").innerHTML="Get New String :"+c;
    }
    else
    {
    alert("string length is 3 so enter word length greater 3");
    }
    }
    else
    {
     alert("no value");
    }
}
function reset18()
{
    
    document.getElementById("l").value=" ";
    document.getElementById("para12").innerHTML=" ";
 
    
}
//Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.
function script()
{
    var a=document.getElementById("m").value;
    if(a.length >0)
    {
    if(a.length>=6)
    {
        var b=a.substring(a.length-6);
        var c="Script"
        if(b==c)
        {
             alert("true")
        }
        else
        {
            alert("false");
        }
    }
    else
    {
        alert("number is less than 6")
    }
    }
    else
    {
        alert("no value");
    }
}
function reset19()
{
    
    document.getElementById("m").value=" ";

 

    
}
//Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.
function nposremove()
{
    var a=document.getElementById("k1").value;
    var b=Number(document.getElementById("k2").value);
    if(a.length > 0 && b > 0 )
    {
    if(a.length>=b)
    {
    var c=a.substring(0,b);
    var d=a.substring(a.length-b);
    var e=c+d;
    document.getElementById("para13").innerHTML="Get New string :"+e;
    }
    else
    {
        alert("given string lenght is lesser than n value");
    }
    }
    else
    {
        alert( "no value");
    }
}
function reset20()
{
    
    document.getElementById("k1").value=" ";
    document.getElementById("k2").value=" ";
    document.getElementById("para13").value=" ";

  

  

    
}
//Write a JavaScript program to reverse the elements of a given array of integers length 3.
function aryreverse()
{
    var a=document.getElementById("n").value;
    if( a.length > 0 )
    {
    if(a.length==3)
    {
        var c=a.split("");  
       var b=c.reverse();
       document.getElementById("para14").innerHTML="Reverse  Array :"+b;
    }
    else
    {
        alert("array length is greater so enter 3 length number")
    }
    }
    else
    {
        alert("no value")
    }
}
function reset21()
{
    
    document.getElementById("n").value=" ";

    document.getElementById("para14").innerHTML=" ";

 
    
}
//  Write a JavaScript to find the longest string from an given array of strings
function findLongestWord() 
{
    var a=document.getElementById("o").value;
    var arr=a.split(" ")
    var lgth = 0;
     var longest;

     for(var i=0; i < arr.length; i++)
     {
    if(arr[i].length > lgth)
    {
        var lgth = arr[i].length;
        longest = arr[i];
        document.getElementById("para15").innerHTML=" longest string :"+longest
    }      
    } 


} 
function reset22()
{
    
    document.getElementById("o").value=" ";

    document.getElementById("para15").innerHTML=" ";

 
    
}
    

//84. Write a JavaScript to replace each character of a given string by the next one in the English alphabet.  
//Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function LetterChanges() 
{
   var str=document.getElementById('p').value;
  
    var result = " ";

    for (var i = 0; i < str.length; i++)
     {
       
        if (122 == str.charCodeAt(i))
         {
            result += "a";
       
        } 
        else if (90 == str.charCodeAt(i))
         {
            result += "A";
    
        }
         else if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) || (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121))
                    
                   
        {

            result += String.fromCharCode(str.charCodeAt(i) + 1);
        } 
        
        else
        {
            result += str.charAt(i);
        }
    }
  document.getElementById("para16").innerHTML="The Result :"+result;
}
function reset23()
{
    
    document.getElementById("p").value=" ";

    document.getElementById("para16").innerHTML=" ";

 
    
}

//Array

//Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
//Sample array : myColor = ["Red", "Green", "White", "Black"];
//Expected Output :
//"Red,Green,White,Black"
//"Red,Green,White,Black"
//"Red+Green+White+Black"

function join()
{   
    
    var a=document.getElementById("l1").value;
    var n=document.getElementById("l2").value;
    var b=a.split(" ");
    var c=b.join(n);
    document.getElementById("para17").innerHTML="The Result :"+c;
   
}
function reset24()
{
    
    document.getElementById("l1").value=" ";
    document.getElementById("l2").value=" ";

    document.getElementById("para17").innerHTML=" ";

 
    
}


//Write a JavaScript program to find the most frequent item of an array. Go to the editor
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//Sample Output : a ( 5 times )

function mfrequent(){
    var a = document.getElementById("q").value;
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<a.length; i++)
    {
            for (var j=i; j<a.length; j++)
            {
                    if (a[i] == a[j])
                     m++;
                    if (mf<m)
                    {
                      mf=m; 
                      item = a[i];
                    }
            }
            m=0;
    }
    document.getElementById("para18").innerHTML=item +" " +" is: " +  mf  + " "+ "times "  ;
}





function reset25()
{
    
    document.getElementById("q").value=" ";
   

    document.getElementById("para18").innerHTML=" ";

 
    
}



// Write a JavaScript program to compute the sum and product of an array of integers.

function aam(){
    var a = [1,2,3,4,5,6,7,8]
    var sum = 0;
    var pro = 1;

    for(i=0;i<a.length;i++)
    {
    var pro = pro * a[i];
    }

    for(i=0;i<a.length;i++)
    {
    var sum = sum + a[i];
    }
    
    document.getElementById("para19").innerHTML="Array is"+" "+a+"<br>the sum of the array is :"+ sum + " <br>the product of the array is :"+pro;
}


function reset26()
{
    

   

    document.getElementById("para19").innerHTML=" ";

 
    
}


// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity)

function duplicate()
{
    var a = (document.getElementById("r").value);
    var sep =a.split("");
    var uniqueitems = [];

    for(i=0; i < sep.length; i++)
    {
        if(uniqueitems.indexOf(sep[i]) === -1)
        {
            uniqueitems.push(sep[i]);
        }
    }
    document.getElementById("para20").innerHTML=" The Result:"+" "+uniqueitems;
}
function reset27()
{
    

   
    document.getElementById("r").value=" ";
   
    document.getElementById("para20").innerHTML=" ";

 
    
}
//Write a JavaScript program to find duplicate values in a JavaScript array.
function findduplicate()
{
var a = document.getElementById("s").value;
var b=a.split("");
var sorted_arr = b.sort(); 

var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++)
{
    if (sorted_arr[i + 1] == sorted_arr[i])
     {
        results.push(sorted_arr[i]);
     }
}

document.getElementById("para21").innerHTML="duplicate values is :"+" "+ results;
}
function reset28()
{
    

   
    document.getElementById("s").value=" ";
   
    document.getElementById("para21").innerHTML=" ";

 
    
}