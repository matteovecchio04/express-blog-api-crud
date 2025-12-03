const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

const postsRouter = require("./routes/postsRoute")
app.use("/posts", postsRouter)

// middlewares
app.use((req, res, next) => {
    res.status(404).json({ error: "Rotta non esistente" })
})

app.use((err, req, res, next) => {
    console.error("Errore del server", err)

    res.status(500).json({ error: "Errore del server" })
})
// /middlewares

app.listen(port, () => {
    console.log(`server avviato su http://localhost:${port}`)
})