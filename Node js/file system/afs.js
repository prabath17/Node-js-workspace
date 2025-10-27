const fs = require("fs")

fs.writeFile("asynchronous.txt", "Hello, World!", (err) => {
    if (err) throw err;
    console.log("File written asynchronously" )

    fs.readFile("asynchronous.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("File read asynchronously:", data);
    });
});

//const content = fs.readFileSync("example.txt", "utf8")
//console.log(content);

console.log("File operations initiated.");

