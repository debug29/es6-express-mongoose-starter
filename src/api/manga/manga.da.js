import Q from 'q';
import Manga from './manga.model';

export default {
    getAll,
    update,
    create,
    remove
};

function getAll() {
    const deferred = Q.defer();

    Manga.find({}, (err, mangas) => {
        if (err) deferred.reject(err);
        deferred.resolve(mangas);
    });

    return deferred.promise;
}

function update(id, name, completed) {
    const deferred = Q.defer();
    const query = {};

    if (name) query.name = name;
    if (completed) query.completed = completed;

    if (Object.keys(query).length > 0) {
        Manga.update({ _id: id }, { $set: query }, (err, manga) => {
            if (err) deferred.reject(err);

            deferred.resolve(manga);
        });
    } else {
        // reject promise if name and completed information is missing
        deferred.reject({});
    }

    return deferred.promise;
}

function create(name) {
    const deferred = Q.defer();
    const manga = new Manga({ name });
    manga.save((err, savedManga) => {
        if (err) deferred.reject(err);

        deferred.resolve(savedManga);
    });

    return deferred.promise;
}

function remove(id) {
    const deferred = Q.defer();
    Manga.remove({ _id: id }, (err, manga) => {
        if (err) deferred.reject(err);

        deferred.resolve(manga);
    });

    return deferred.promise;
}
