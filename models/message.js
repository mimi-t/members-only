const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MessageSchema = new Schema({
    title: { type: String, required: true },
    time: { type: Date, default: new Date(), required: true },
    text: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});


module.exports = mongoose.model('Message', MessageSchema);