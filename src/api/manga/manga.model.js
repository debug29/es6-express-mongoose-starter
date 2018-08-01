import mongoose from 'mongoose';

const MangaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    alternativeName: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: false
    },
    genre: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre',
        required: false
    }],
    rating: {
        type: Float,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Manga', MangaSchema);
