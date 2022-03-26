// Here we import the File System Module of Node.js
const fs = require('fs');

// mkdir() is used to create a new folder
// Second paramter is a callback function which compulsory to define.

fs.mkdir("Asynchronous", (err)=>{
    console.log("Folder created successfully");
    console.log(err);
});

// writeFile() is used to create new file and write data in it if file does not exist
// If file exist then it overwrite the data on it.
// Third paramter is a callback function which compulsory to define.

fs.writeFile('Asynchronous/read.txt',"This is a created using writeFile funtion!", (err)=>{
    console.log("File created successfully");
    console.log(err);
});

// appendFile() is used to append(add data at the end) of the file.
// If file does not exist then it will throw an error.
fs.appendFile('Asynchronous/read.txt',"\nAdding a new line",(err)=>{
    console.log("File updated successfully");
    console.log(err);
});

// readFile() is uesd to read the content of file.
// If file does not exist then it will throw an error.
// The second paramter there is the file encodinf type.
// If you don't mention it then it will return a buffer data.
// You can use toString() method to read that buffer data.
// For example
// const data = fs.readFile('Asynchronous/read.txt',(err,data)=>{
//  console.log(data.toString());    
//});
// console.log(data.toString());
fs.readFile('Asynchronous/read.txt',"utf-8",(err,data)=>{
    console.log(data);
});


// rename() is used to rename the file.
// If file does not exist then it will throw an error.
fs.rename('Asynchronous/read.txt',"Asynchronous/AsyncFile.txt",(err)=>{
    console.log("File renamed successfully");
});

// unlink() it used to delete a file in a folder.
// If file does not exist then it will throw an error.
// fs.unlink('Asynchronous/SyncFile');

// rmdir() is used to delete a folder.
// If file does not exist then it will throw an error.
// fs.rmdir('Asynchronous',(err)=>{});
