# JAVASCRIPT-NOTES
value of this keyword depends on from where it is called 
if this is called from browser then it will return window object if this is called from nodejs then it will return global object 

function x(){
console.log(this)
}


// if this keyword inside function with 'use strict' mode  then it will return undefined AND without this keyword it will return window object BECAUSE OF
THIS SUBSTITUTION 

DIFFERENCE B/W function and method 
if you'll make a function as a part of an object then it will be called a method 

const obj = {
  a:10,
  x: function x(){
    console.log(this)    
    }
}
  ALWAYS DEPENDS HOW THE FUNCTION IS CALLED
obj.x() // value of this keyword will be an object where it is present


CALL/ APPLY / BIND
 value of this can be override in above methods (i.e we can share the value methods)

const student1 = {
  name: "shishank"
  printName: function x(){
          console.log(this.name);  
          }
}
 const student2 = {
    name : "baghel"
 }

student1.printName.call(student2);


THIS KEYWORD INSIDE ARROW FUNCTION

arrow function does not have their own this 
they take it's value from the lexical environment where they are enclosed

const obj1 = {
a: 10,
x: ()=>{
console.log(this);
  }
}
obj.x(); //enclosing lexical context (where this obj is lexically present in the code)
(value will be global object since it is not in global space but it is enclosed inside lexical space)


const obj2 = {
a: 10,
x: function (){
  const y = ()=>{
    console.log(this)
    }
  y();
  }
}
obj2.x();
// now this is enclosed inside obj2 so this will refer to obj2();

ARROW FUNCTION DON'T PROVIDE THEIR OWN THIS BINDING


// THIS INSIDE DOM FUNCTION
REFERENCE TO THE HTML ELEMENT

// THIS KEYWORD INSIDE JAVASCRIPT CLASSES,CONSTRUCTORS





















