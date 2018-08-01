import mongoose from 'mongoose';
import findOrCreate from 'mongoose-find-or-create';

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

PersonSchema.plugin(findOrCreate);

export default mongoose.model('Person', PersonSchema);
