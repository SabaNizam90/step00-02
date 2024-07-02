//let message = "Hello World";// Infering Types, 
                            //take your cursor on the variable name
//console.log(message);




                     ////////////////STEP 00a JSON OBJECT ////////////////////////////

/*
==> JSON stands for Javascript Object Notation.
==> JSON is a text-based data format that is used to store and transfer data.
==> JSON syntax | ==> it is like object syntax
{
 "name": "Vipin",
 "age": 21,
 "gender": "male",
}
==> But wait, Is JSON is similar to javaScript objects? The Answer is No.
1) JavaScript objects can contain functions but JSON not.
2) JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.
================== JSON Data ============================
1) JSON data consists of key/value pairs similar to JavaScript object properties.
2) The key and values are written in double quotes separated by a :.
3) Example :
// JSON data
    "name": "Vipin"
4) JSON data requires double quotes for the key.
================== JSON Object ==========================
1) The JSON object is written inside curly braces { }.
2) JSON objects can contain multiple key/value pairs.
3) Example :
 // JSON object
 { "name": "Vipin", "age": 21 }
================= JSON Array =============================
1) JSON array is written inside square brackets [ ].
2) Example :
 // JSON array
 [ "Vipin", "Ankit", "Raj"]
=================== Accessing JSON Data ===================
1) We can access JSON data using the dot notation.
2) Example :
 // JSON object
 const detail = { "name": "Vipin", "age": 21 }
 // accessing JSON object
 console.log(detail. name); // Vipin
 3) We can also use square bracket syntax [] to access JSON data.
4) Example :
 // JSON object
 const detail = {
     "name": "Vipin",
     "age": 21
 }
// accessing JSON object
console.log(detail["age"]); // Vipin
================= Use of JSON =============================
1) JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa.
2) JSON data are very easy to parse and use.
3) JSON is language independent(We can create and use JSON in other programming languages too).
*/

                                //STEP 00b Syntax Error 
//lett message = "Hello World";//syntax error ==> see let spelling
//console.log(message);

                    ////////////// STEP 00c Type Error ///////////////////

let messages = "Hello World";
// console.loger(messages); // Type error ==> check log spelling


                         ///////////// STEP 00d Assignability Error /////////////

let message1 = "Hello World"; //variable declare as string type
//message1 = 6; // ==> type number is not assigned to type string
console.log(message1);



                       /////////////////////step01//////////////////////
//strongly typed syntax
let a : string = "Pakistan";
a = "USA";
let b : number = 9;
let c : boolean = true;
console.log(a,b,c);


//type inference
//let e = "Pakistan";
//let f = 10.9;
//f = 22;
//let g = false;
//g = true;
//console.log(e, f, g);



                          /////////////////////step02//////////////////////
 //let let myName = "Saba nizam"; ////can not redeclare the same variable but can resign the value
 //let myName = "Saba nizam";
  //myName = "SABA";

  //const
  //const myAccount = 2345   ////can not reasign the value it will be constant
  // myAccount = 1234
