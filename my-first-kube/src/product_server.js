import os from 'os';
import http from 'http'

const handleRequest = function(request, response) {
    response.writeHead(200);
    response.end("Hello World! I'm a product server "+os.hostname());
    console.log("["+
        Date(Date.now()).toLocaleString()+
        "] "+os.hostname());
}

const www = http.createServer(handleRequest);

www.listen(8080);