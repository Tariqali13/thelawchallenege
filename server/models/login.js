const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: function (v) {
            var re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Email Adress is invalid.'
    },
    password: {
        type: String,
        required: true,
        validate: function (v) {
            var re =/^[a-zA-Z0-9_]*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Email Adress is invalid.'
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;