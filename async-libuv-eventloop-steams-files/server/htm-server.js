const http = require("http")
const fs = require("fs")
const reader = fs.createReadStream(`${__dirname}/index.html`)

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    reader.pipe(res)
  })
  .listen(4545, "localhost")
