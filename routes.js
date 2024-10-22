const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(
            `<body>
                <form action="/message" method="POST">
                    <input type="text" name="message">
                    <button type="submit">Send</button>
                </form>
            </body>
            `
        );
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
    
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title><head>');
    res.write(
        `<body>
            <h1>Hello from my Node.js Server!</h1>
        </body>
        `
    );
    res.write('</html>');
    res.end();
}

// 1. 단일로 내보낼 때
// module.exports = requestHandler;

// 2-1. 객체로 내보낼 때 직접 지정
// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

// 2-2. 객체로 내보낼 때 module 제거하고 지정
// exports.handler = requestHandler;
// exports.someText = 'some hard coded text';

// 2-3. 객체로 내보낼 때 K-V형식으로 지정
module.exports = {
    handler : requestHandler,
    someText : 'some hard coded text'
};
