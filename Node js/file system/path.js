const path = require("path");
console.log("Directory name:", path.dirname("/file/system/path.js"));
console.log("Base name:", path.basename("/file/system/path.js"));
console.log("File extension:", path.extname("/file/system/path.js"));


console.log("Joined path:", path.join("/file", "system", "newfile.txt"));
console.log("Resolved path:", path.resolve("file", "system", "newfile.txt"));
console.log("Normalized path:", path.normalize("/file//system/../system/path.js"));

console.log("Path operations completed.");