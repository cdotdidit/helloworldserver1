// write your code here
const http = require('http');
const name = 'node-hello-world';
const port = '8080';

const app = new http.Server();

app.on('request' , (req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World');
});

app.listen(port, () => {
    console.log(`${name} is listening on port ${port}`);
});