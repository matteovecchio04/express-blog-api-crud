let posts = require("../data/posts");

function index(req, res) {
    res.json(posts);
}
// gives back the whole array from (posts)

function show(req, res) {
    const id = Number(req.params.id)
    const post = posts.find(p => p.id === id)

    if (!post) {
        return res.status(404).json({ error: "ERROR 404 POST NOT FOUND" })
    }

    res.json(post)
}

function create(req, res) {
    res.send("creo il post");
}

function destroy(req, res) {
    res.send("elimino il post");
}

module.exports = {
    index,
    show,
    create,
    destroy
};