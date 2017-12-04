/**
 * Markdown Model
 */
module.exports = (function() {
    const q = require('q');
    const mongoose = require('mongoose');
    const MarkdownSchema = require('./markdown.schema.server');

    var MarkdownModel = mongoose.model('MarkdownModel', MarkdownSchema);
    var UserModel = require('../user/user.model.server');

    // API
    MarkdownModel.createMarkdown = createMarkdown;
    MarkdownModel.findMarkdownById = findMarkdownById;
    MarkdownModel.findMarkdownsByAuthor = findMarkdownsByAuthor;
    MarkdownModel.updateMarkdown = updateMarkdown;
    MarkdownModel.deleteMarkdown = deleteMarkdown;

    // Implimentation

    /**
     * Validate a markdown object
     * @param {MarkdownSchema} markdown markdown object to validate
     * @throws {String[]} list of errors encountered
     */
    function validate(markdown) {
        var errors = [];

        if (!markdown || Object.keys(markdown).length == 0) {
            throw ['Markdown object expected'];
        }

        if (!markdown.author) {
            errors.push('Author is required');
        }

        if (!markdown.title) {
            errors.push('Title is required');
        }

        if (errors.length > 0) {
            throw errors;
        }
    }

    /**
     * Create a new Markdown
     * @param {MarkdownSchema} markdown 
     * @returns {Promise<MarkdownSchema>} promise that resolves to the created markdown
     */
    function createMarkdown(markdown) {
        var def = q.defer();

        validate(markdown);
        UserModel.findById(markdown.author, (err, authorExists) => {
            if (authorExists) {
                MarkdownModel.create(markdown, (err, createdMarkdown) => {
                    if (err) {
                        def.reject(err.message);
                    } else {
                        def.resolve(createdMarkdown);
                    }
                });
            } else {
                def.reject({
                    message: 'Author with id ' + markdown.author + ' does not exists'
                });

            }
        });

        return def.promise;
    }

    /**
     * Find markdown by markdown id
     * @param {string} markdownId 
     * @returns {DocumentQuery<MarkdownSchema>} query that resolves to the markdown object
     */
    function findMarkdownById(markdownId) {
        return MarkdownModel.findById(markdownId);
    }

    /**
     * Find all markdowns of user
     * @param {string} userId 
     * @returns {DocumentQuery<MarkdownSchema[]>} query that resolves to the list of markdowns of the specified user
     */
    function findMarkdownsByAuthor(userId) {
        return MarkdownModel.find({
            author: author
        });
    }

    /**
     * Update markdown by  id
     * @param {string} markdownId 
     * @param {UserSchema} markdown 
     * @returns {DocumentQuery<MarkdownSchema>} query that resolves to the updated markdown object
     */
    function updateMarkdown(markdownId, markdown) {
        validate(markdown);
        return MarkdownModel.findByIdAndUpdate(markdownId, markdown, {
            new: true
        });
    }

    /**
     * Delete markdown by markdown id
     * @param {string} markdownId 
     * @returns {DocumentQuery<MarkdownSchema>} query that resolves successfully when the markdown is removed
     */
    function deleteMarkdown(markdownId) {
        return MarkdownModel.findByIdAndRemove(markdownId);
    }

    return MarkdownModel;
})();