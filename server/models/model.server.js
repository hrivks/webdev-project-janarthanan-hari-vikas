module.exports = (function() {

    const UserModel = require('./user/user.model.server.js');
    const MarkdownModel = require('./markdown/markdown.model.server.js');

    var model = {
        User: UserModel,
        Markdown: MarkdownModel
    };

    return model;
})();