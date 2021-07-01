
//1
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
var modifiedFood= foods.slice(1,4);
console.log(modifiedFood);

// 2
const foods = [pizza, burger, fingerShips, donuts, springRoll];
var modifiedFood=[];
modifiedFood=foods;
modifiedFood.splice(2,0,"noodles", "icecream");
console.log(modifiedFood);

//3
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray){
    var num=numberArray.filter(function(item){
        if(item%2==0){           
             return(item);       
             }  
      });   
         return(num);
     }
console.log(isEven());


function isPrime(item)
{    var isPrime=1;   
     for(var i=2;i<=item/2;i++)
     {    
      if(item%i==0){      
            isPrime=0;    
          }    
        }    
    if(isPrime==1&&item>1)
    {     
         return(item);   
    }   
  else{     
       return(false);   
 }  
}
console.log(numberArray.filter(isPrime));

//4
function nonPrime(item)
{    var isPrime=1;   
     for(var i=2;i<=item/2;i++)
     {     
          if(item%i==0)
        {        
            isPrime=0;    
          }   
     }   
 if(isPrime==1&&item>1)
 {     
      return(false);  
  }   
   else
   {      return(item);    
} 
 } 
 console.log(numberArray.filter(nonPrime));

 //5
 console.log(numberArray.filter(item => item%2==0));

 //6

 const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{    let sq=myArray.map(function(item)
     {        let a=item*item;    
              return a;   
           });    
return(sq);}console.log(findSquareOfNumbers());

//7
const myArray=[2,3,5,10];
function multiply(myArray){  
     
     var product=myArray.reduce(function(initial,item){       
           return initial*item;  
            },1);    
          return product;}console.log(multiply());
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){   
      let sq=myArray.map(function(item){    
               let a=item*item;       
                return a;
                   }).reduce(function(initial,item){       
                         return initial*item;   
                },1);  
  return(sq);}console.log(findSquareOfNumbers());