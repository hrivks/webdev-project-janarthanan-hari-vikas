/**
 * Markdown schema
 */
module.exports = (function () {
    var mongoose = require('mongoose');

    var MarkdownSchema = new mongoose.Schema({
        content: String,
        author:{ type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        fileName: String,
        title: String,
        description: String,
        dateCreated: { type: Date, default: Date.now }
    }, { collection: 'markdowns' });

    return MarkdownSchema;
})();