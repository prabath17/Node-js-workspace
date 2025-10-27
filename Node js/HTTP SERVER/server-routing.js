// Server Routing based on URL
    const http = require('http');
    const url = require('url');

    const server = http.createServer((req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const path = parsedUrl.pathname;
        const query = parsedUrl.query;  
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (path === '/') {
            res.end('Welcome to the Home Page!\n');
        } else if (path === '/about') {
            res.end('This is the About Page.\n');
        } else if (path === '/greet' && query.name) {
            res.end(`Hello, ${query.name}!\n`);
        } else {
            res.end('404 Not Found\n');
        }                       
    });

    server.listen(6000, () => {
        console.log('Server is listening on http://localhost:6000');
    });