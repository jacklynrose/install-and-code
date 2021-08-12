import http from 'http';
import url from 'url';
import { randomNumber } from '@packages/random-number';
const port = 3000;
const host = 'localhost';

const server = http.createServer(function (req, res) {
    const parsedURL = url.parse(req.url ?? '', true);
    if (parsedURL.pathname == '/echo' && parsedURL.query['message']) {
        res.end(`${parsedURL.query['message']} - ${randomNumber(1000)}`);
    } else {
        res.end("Page not found");
    }
});

server.listen(port, host, function () {
    console.log('Web server is running on port 1337');
});