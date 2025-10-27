const fs = require("fs")

fs.writeFileSync("example.txt", "Hello, World!", "utf8")
const content = fs.readFileSync("example.txt", "utf8")
console.log(content)