function index(req, res) {
    res.send("lista dei post");
}

function show(req, res) {
    res.send("singolo post");
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