// Preliminaries
if (5 > 3) {
    console.log("is greater than")
}

var cat = {
    length: 3,
    name: "Whiskers"
}
var dog = {
    length: 8,
    name: "Spot"
}

if (cat.length = 3) {
    console.log("is the length")
}
if (dog.length !== cat.length) {
    console.log("not the same")
}
// Bronze medal
var person = {
    name: "Bobby",
    age: 12,
    namestartswith: "B"
}
if (person.age >= 18) {
    console.log("Bobby can enter") }
else {console.log ("Bobby cannot enter")
}

if (person.namestartswith = "B") {
    console.log("Only they can enter")
}
if (person.namestartswith = "B" && person.age >= 18) {
    console.log("Bobby is allowed")
}
else {console.log("Bobby is not allowed")}

//Silver Medal
 if ("1" === 1 || "1" == 1 )  {
     console.log("abstract")
 }
else {
    console.log("strict")
}
if (1 <= 2 && 2 == 4) {
    console.log("yes")
}
else { console.log("no")
}

//Gold Medal
var datatypes ={
    dog: "string",
    true: "boolean"
}
if (datatypes.dog ==="string") {
    console.log("dog is a string")
}
if (datatypes.true === "boolean") {
    console.log("true is a boolean")
}
if (typeof variableName != "undefined") {
    console.log("defined")
}
else { console.log("undefined")}

if ("s" > 12) {
    console.log("true")
}
else {console.log("doesn't make sense")}

var myNum = 12;
if (myNum % 2 === 0) {
    console.log("my number is even")
}
else {console.log("my number is odd")}
