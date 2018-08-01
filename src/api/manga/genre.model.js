import mongoose from 'mongoose';

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Genre', GenreSchema);
