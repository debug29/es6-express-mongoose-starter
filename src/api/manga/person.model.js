import mongoose from 'mongoose';

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

export default mongoose.model('Person', PersonSchema);
