const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

const postsRouter = require("./routes/postsRoute")
app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log(`server avviato su http://localhost:${port}`)
})