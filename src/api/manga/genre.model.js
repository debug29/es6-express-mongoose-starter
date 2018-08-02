import mongoose from 'mongoose';
import findOrCreate from 'mongoose-find-or-create';

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

GenreSchema.plugin(findOrCreate);

export default mongoose.model('Genre', GenreSchema);
