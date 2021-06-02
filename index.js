const name = "agrawal";

// console.log(name);

// operation with files 

const fs = require("fs")
// creating new files 
fs.writeFileSync("read.txt" , "Hello World!")
// To append new data in file
fs.appendFileSync("read.txt" , "This is second line")
// To read the file
const buf_data = fs.readFileSync("read.txt")
console.log(buf_data)
// to read the the file properly
const buf_data = fs.readFileSync("read.txt" , "utf-8")
console.log(buf_data)