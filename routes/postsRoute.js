const express = require("express")
const router = express.Router()

const {
    index,
    show,
    create,
    destroy,
    update
} = require("../controllers/controller")

router.get("/", index)

router.get("/:id", show)

router.post("/", create)

router.delete("/:id", destroy)

router.put("/:id", update)

module.exports = router