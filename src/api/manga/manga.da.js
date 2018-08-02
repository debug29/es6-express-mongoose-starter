import Q from 'q';
import Manga from './manga.model';
import Person from './person.model';

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

function create(name, author) {
    const deferred = Q.defer();

    Person.findOrCreate({ name: author }, (err, result) => {
        deferred.resolve(result);
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
