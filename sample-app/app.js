const express = require("express")
const app = express()
const port = 4545
const parser = require("body-parser")
app.listen(port)

// middleware example for static assets
app.use("/assets", express.static(`${__dirname}/public`))
app.use(parser.json())
app.use("/:id", (req, res, next) => {
  if (req.params.hasOwnProperty("id")) {
    next()
  }
})

app.get("/:id", (req, res) => res.send("hello"))
app.get("/person/:id", (req, res) => res.send(`person is: ${req.params.id}`))
app.post("/person", (req, res) =>
  res.send(`person is: ${JSON.stringify(req.body)}`)
)

app.get("/api", (req, res) => {
  res.json({ name: "jere" })
})
