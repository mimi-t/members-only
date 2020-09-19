const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    member: { type: Boolean, default: false, required: true }
});


UserSchema.virtual('fullname').get(function () {
    return `${this.fname} ${this.lname}`;
});

module.exports = mongoose.model('User', UserSchema);