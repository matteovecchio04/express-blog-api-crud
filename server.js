const express = require("express")
const app = express()
const port = 3000

const postsRouter = require("./routes/posts")
app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log(`server avviato su http://localhost:${port}`)
})