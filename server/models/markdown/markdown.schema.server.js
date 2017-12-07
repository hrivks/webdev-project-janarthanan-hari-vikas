/**
 * Markdown schema
 */
module.exports = (function() {
    var mongoose = require('mongoose');

    var MarkdownSchema = new mongoose.Schema({
        content: String,
        editedBy: String,
        fileName: String,
        editedOn: {
            type: Date,
            default: Date.now
        }
    }, {
        collection: 'markdowns'
    });

    return MarkdownSchema;
})();