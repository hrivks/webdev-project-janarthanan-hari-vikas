/**
 * User schema
 */
module.exports = (function () {
    var mongoose = require('mongoose');

    var UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        github: {
            id: String,
            token: String
        },
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        dateCreated: { type: Date, default: Date.now }
    }, { collection: 'users' });

    return UserSchema;
})();