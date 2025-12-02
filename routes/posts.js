const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("lista dei post")
})

router.get("/:id", (req, res) => {
    res.send("singolo post")
})