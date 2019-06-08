const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserReg = new Schema({
    Member1_First_Name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided First Name is invalid.'
    },
    Member1_Last_Name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided  Last Name is invalid.'
    },
    Member1_Email: {
        type: String,
        required: true,
        validate: function (v) {
            var re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Email Adress is invalid.'
    },
    Member1_StudyYear: {
        type: Number,
        require: true,
        minlength: 3,
        maxlength: 10,
    },
    Member1_Faculty: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Faculty Format is invalid.'
    },
    Member1_StudentIdNumber: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Student Id Number Format is invalid.'
    },
    Member1_TelephoneNumber: {
        type: Number,
        require: true,
        minlength: 3,
        maxlength: 20,
      
    },
    Member1_NameofStudyProgram: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 150,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Name of Study Program Format is invalid.'
    },

    Member2_First_Name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided First Name is invalid.'
    },
    Member2_Last_Name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided  Last Name is invalid.'
    },
    Member2_Email: {
        type: String,
        required: true,
        validate: function (v) {
            var re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Email Adress is invalid.'
    },
    Member2_StudyYear: {
        type: Number,
        require: true,
        minlength: 3,
        maxlength: 10,
       
    },
    Member2_Faculty: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Faculty Format is invalid.'
    },
    Member2_StudentIdNumber: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Student Id Number Format is invalid.'
    },
    Member2_TelephoneNumber: {
        type: Number,
        require: true,
        minlength: 3,
        maxlength: 20,
      
    },
    Member2_NameofStudyProgram: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 150,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Name of Study Program Format is invalid.'
    },
 
    Member3_First_Name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided First Name is invalid.'
    },
    Member3_Last_Name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^([a-zA-Z])[a-zA-Z_-]*[\w_-]*[\S]$|^([a-zA-Z])[0-9_-]*[\S]$|^[a-zA-Z]*[\S]$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided  Last Name is invalid.'
    },
    Member3_Email: {
        type: String,
        required: true,
        validate: function (v) {
            var re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Email Adress is invalid.'
    },
    Member3_StudyYear: {
        type: Number,
        require: true,
        minlength: 3,
        maxlength: 10,
      
    },
    Member3_Faculty: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Faculty Format is invalid.'
    },
    Member3_StudentIdNumber: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Student Id Number Format is invalid.'
    },
    Member3_TelephoneNumber: {
        type: Number,
        require: true,
        minlength: 3,
        maxlength: 20,
       
    },
    Member3_NameofStudyProgram: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 150,
        validate: function (v) {
            var re =/^[a-zA-Z0-9]+(([\'\,\.\- ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/;
            return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Provided Name of Study Program Format is invalid.'
    },
})

module.exports = mongoose.model("UserReg", UserReg);