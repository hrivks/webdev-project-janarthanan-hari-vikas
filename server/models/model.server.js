module.exports = (function() {

    const UserModel = require('./user/user.model.server.js');

    var model = {
        User: UserModel,
    };

    return model;
})();