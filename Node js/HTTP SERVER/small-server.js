const http = require('http');

const server = http.createServer((req, res) => {
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send response body
    res.end('Hello, this is a small HTTP server!\n');
});

server.listen(5000, () => {
    console.log('Server is listening on http://localhost:5000');
});

console.log('HTTP server operations completed.');


//Server code to create a small HTTP server that responds with a simple text message.


