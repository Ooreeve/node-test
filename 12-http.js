const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("This is the home page!");
    } else if (req.url === "/about") {
        res.end("This is the short history of us!");
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>The page is not found!</p>
            <a href="/">Back home</a>
        `);
    }
});

server.listen(5000);
