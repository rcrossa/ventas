const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name is required']
    },
    lastName: {
        type: String,
        required: [true, 'The lastname is required'],
        trim:true
    },
    email: {
        type: String,
        require:[true, 'The email is required'],
        unique:true,
        lowercase: true,
        validate:{
            validator: function(value) {
                return validator.isEmail(value);
            },
            message: 'Invalid email address'
        }
    },
    roles: {
        type: String,
        enum: ['regularuser', 'compania', 'admin']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 7,
        bcrypt: true
    },
    image: {
        url: String,
        public_id: String
    },
    flagGoogle: {
        type: String
    },
    tokens: [{
        token:{
            type: String,
            require: true
        }
    }]
},
{ timestamps: true });

userSchema.plugin(require('mongoose-bcrypt'));
module.exports = mongoose.model('User', userSchema)