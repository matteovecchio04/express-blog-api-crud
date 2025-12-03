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
    const data = req.body;

    let newId;
    if (posts.length > 0) {
        newId = posts[posts.length - 1].id + 1;
    } else {
        newId = 1;
    }

    const newPost = {
        id: newId,
        ...data
    };

    posts.push(newPost);

    res.status(201).json(newPost);
}

function destroy(req, res) {
    const id = Number(req.params.id)

    posts = posts.filter(p => p.id !== id)

    console.log("Lista aggiornata", posts)

    res.status(204).send()

}

function update(req, res) {
    const id = Number(req.params.id);
    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    post.title = req.body.title !== undefined ? req.body.title : post.title;
    post.content = req.body.content !== undefined ? req.body.content : post.content;

    res.json(post);
}

module.exports = {
    index,
    show,
    create,
    destroy,
    update
};