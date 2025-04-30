"use strict";
//
// Arrays
//
let stringArr = ["one", "hey", "Ismail"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
//stringArr[0] = 42;
stringArr[0] = "John";
//stringArr.push(42);
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
//stringArr = guitars;
guitars = stringArr;
let test = [];
let bands = [];
bands.push("van halen");
//bands.push(false);
//
//Tuple
//
let myTuple = ["Ismail", 42, true];
let mixed = ["Mirza", 1, false];
mixed = myTuple;
//myTuple = mixed;
//myTuple[3] = 42;
//myTuple[2] = 42
//
// Objects
//
let myObj;
myObj = [];
console.log(typeof myObj);
