const fs = require("fs");

fs.writeFile("async_read.txt" , "hello from async file" , (err) =>{
    console.log("file created")
});