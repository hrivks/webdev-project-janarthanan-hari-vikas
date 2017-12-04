/**
 * Project schema
 */
module.exports = (function () {
    var mongoose = require('mongoose');
    var UserSchema = require('../user/user.schema.server');

    var ProjectSchema = new mongoose.Schema({
        name: String,
        gitRepo: String,
        members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
        admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
        dateCreated: { type: Date, default: Date.now }
    }, { collection: 'projects' });

    return ProjectSchema;
})();