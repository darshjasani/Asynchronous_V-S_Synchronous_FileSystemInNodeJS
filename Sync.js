// Here we import the File System Module of Node.js
const fs = require('fs');

// mkdirSync() is used to create a new folder
fs.mkdirSync("Synchronous");
console.log("Folder created successfully");

// writeFileSync() is used to create new file and write data in it if file does not exist
// If file exist then it overwrite the data on it.
fs.writeFileSync('Synchronous/read.txt',"This is a created using writeFileSync funtion!");
console.log("File created successfully");

// appendFileSync() is used to append(add data at the end) of the file.
// If file does not exist then it will throw an error.
fs.appendFileSync('Synchronous/read.txt',"\nAdding a new line");
console.log("File updated successfully");

// readFileSync() is uesd to read the content of file.
// If file does not exist then it will throw an error.
// The second paramter there is the file encodinf type.
// If you don't mention it then it will return a buffer data.
// You can use toString() method to read that buffer data.
// For example
// const data = fs.readFileSync('Synchronous/read.txt');
// console.log(data.toString());
const data = fs.readFileSync('Synchronous/read.txt',"utf-8");
console.log(data);

// renameSync() is used to rename the file.
// If file does not exist then it will throw an error.
fs.renameSync('Synchronous/read.txt',"Synchronous/SyncFile.txt");
console.log("File renamed successfully");

// unlink() it used to delete a file in a folder.
// If file does not exist then it will throw an error.
// fs.unlink('Synchronous/SyncFile');

// rmdirSync() is used to delete a folder.
// If file does not exist then it will throw an error.
// fs.rmdirSync('Synchronous');
