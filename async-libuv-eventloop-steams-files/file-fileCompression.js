//@ts-check
const fs = require("fs")
const tenKB = 1024 * 10
const zlib = require("zlib")

const reader = fs.createReadStream(`${__dirname}/greet.txt`, {
  highWaterMark: tenKB
})
const writer = fs.createWriteStream(`${__dirname}/greet-writer.txt`)
const compressed = fs.createWriteStream(`${__dirname}/greet.txt.gz`)

writer.on("pipe", function() {
  console.log("done!")
})
const gzip = zlib.createGzip()

reader.pipe(writer)

// gzip compression for files
reader.pipe(gzip).pipe(compressed)
