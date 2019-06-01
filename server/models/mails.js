const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Mail = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        validate: function (v) {
            var re =/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Name is invalid.'
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
    subject: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Subject Format is invalid.'
    },
    message: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 500,
        validate: function (v) {
            var re = /^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Message Format is invalid.'
    },
})


module.exports = mongoose.model("Mail", Mail);