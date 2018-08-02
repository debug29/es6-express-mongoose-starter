import MangaDa from './manga.da';

export default {
    getAll,
    update,
    create,
    remove
};

function getAll(req, res) {
    MangaDa.getAll()
        .then((mangas) => { res.status(200).json(mangas); })
        .catch(() => { res.sendStatus(422); });
}

function update(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    const completed = req.body.completed;

    MangaDa.update(id, name, completed)
        .then(() => { res.sendStatus(200); })
        .catch(() => { res.sendStatus(422); });
}

function create(req, res) {
    const name = req.body.name;
    const resume = req.body.resume;
    const author = req.body.author;
    const artist = req.body.artist;
    const genre = req.body.genre;
    const type = req.body.type;

    MangaDa.create(name, author, artist, genre, type, resume)
        .then((manga) => { res.status(200).json(manga); })
        .catch(() => { res.sendStatus(422); });
}

function remove(req, res) {
    const id = req.params.id;

    MangaDa.remove(id)
        .then(() => { res.sendStatus(200); })
        .catch(() => { res.sendStatus(422); });
}
