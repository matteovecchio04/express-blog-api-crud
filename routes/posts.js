const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("lista dei post")
})

router.get("/:id", (req, res) => {
    res.send("singolo post")
})

router.post("/", (req, res) => {
    res.send("creo il post")
})

router.delete("/:id", (req, res) => {
    res.send("elimino il post")
})

module.exports = router