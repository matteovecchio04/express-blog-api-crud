const express = require("express")
const router = express.Router()

const {
    index,
    show,
    create,
    destroy
} = require("../controllers/controller")

router.get("/", index)

router.get("/:id", show)

router.post("/", create)

router.delete("/:id", destroy)

module.exports = router