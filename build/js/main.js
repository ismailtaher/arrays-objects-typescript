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
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Ismail",
    prop2: true,
};
//exampleObj.prop2 = 42
exampleObj.prop2 = false;
let evh = {
    name: "Eddie",
    active: false,
    album: [1984, 5150, "OU812"],
};
let JP = {
    name: "Jimmy",
    active: true,
    album: ["I", "II", "IV"],
};
evh = JP;
const greetGuitarist = (Guitarsist) => {
    return `Hello ${Guitarsist.name}!`;
};
console.log(greetGuitarist(JP));
