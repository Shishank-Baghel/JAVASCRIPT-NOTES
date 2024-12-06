# JAVASCRIPT-NOTES
value of this keyword depends on from where it is called 
if this is called from browser then it will return window object if this is called from nodejs then it will return global object 

function x(){
console.log(this)
}
// if this keyword inside function with 'use strict' mode  then it will return undefined AND without this keyword it will return window object

DIFFERENCE B/W function and method 
if you'll make a function as a part of an object then it will be called a method 

const obj = {
  a:10,
  x: function x(){
    console.log(this)    
    }
}
  </h1> ALWAYS DEPENDS HOW THE FUNCTION IS CALLED</h1>
