
const website = 'http://www.sandals.com';
const timeouts = 10000;
const handler = 5;
const Ping = require('../lib/ping');
const http = require('http');
const check = new Ping(website, timeouts, handler);
check.start;


const server = http.createServer((req,res) => {
    res.statusCode = 200;
    
});

server.listen(8000, () => {
    console.log(`Server runing on port : 8000`);
});