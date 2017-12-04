// Provides CRUD for markdown model
// Module Route Root: '/api/markdown'

module.exports = (function() {

    const router = require('express').Router();
    const MarkdownModel = require('../models/model.server').Markdown;
    const Utils = require('./service-utils.js');
    const q = require('q');
    
    /** Exported objects */
    const exp = {
        router: router, // router object
        api: { // list of functions supported by this service
            createMarkdown: createMarkdown,
            findMarkdownById: findMarkdownById,
            findMarkdownsByAuthor: findMarkdownsByAuthor,
            updateMarkdown: updateMarkdown,
            deleteMarkdown: deleteMarkdown
        }
    };


    //#region : Create Markdown

    // route: [POST] '/api/markdown'
    router.post('/', function(req, res) {
        Utils.sendResponse(res, createMarkdown, [req.body]);
    });

    /**
     * Create a new markdown
     * @param {MarkdownSchema} markdown markdown object to create
     * @returns {Promise<MarkdownSchema>} promise that resolves to the created markdown object
     */
    function createMarkdown(markdown) {
        return MarkdownModel.createMarkdown(markdown);
    }

    //#endregion: Create Markdown


    //#region : Find Markdown by Id

    // route: [GET] '/api/markdown/:markdownId'
    router.get('/:markdownId', function(req, res) {
        Utils.sendResponse(res, findMarkdownById, [req.params.markdownId]);
    });

    /**
     * Find markdown by markdown id
     * @param {string} markdownId id of the markdown
     * @returns {Promise<MarkdownSchema>} promise that resolves to markdown with the specifed id; null if id doesn't exist
     */
    function findMarkdownById(markdownId) {
        return MarkdownModel.findMarkdownById(markdownId);
    }

    //#endregion Find markdown by id


    //#region: Find markdowns by author

    // route: [GET] '/api/markdown/byAuthor/:authorId'
    router.get('/byAuthor/:authorId', function(req, res) {
        Utils.sendResponse(res, findMarkdownsByAuthor, [req.params.authorId]);
    });

    /**
     * Find markdowns by author id
     * @param {String} authorId id of the author
     * @returns {Promise<MarkdownSchema[]>} promise that resolves to list of markdowns created by the specified author
     */
    function findMarkdownsByAuthor(authorId) {
        return MarkdownModel.findMarkdownsByAuthor(authorId);
    }


    //#endregion: Find markdowns by author


    //#region: Update markdown

    // route: [PUT] '/api/markdown/:markdownId'
    router.put('/:markdownId', function(req, res) {
        Utils.sendResponse(res, updateMarkdown, [req.params.markdownId, req.body]);
    });

    /**
     * Update markdown by markdown id
     * @param {string} markdownId id of the markdown
     * @param {MarkdownSchema} markdown updated markdown object
     * @returns {Promise<MarkdownSchema>} promise that resolves to updated markdown object
     */
    function updateMarkdown(markdownId, markdown) {
        return MarkdownModel.updateMarkdown(markdownId, markdown);
    }

    //#endregion: Update markdown


    //#region : Delete markdown

    // route: [DELETE] '/api/markdown/:markdownId'
    router.delete('/:markdownId', function(req, res) {
        Utils.sendResponse(res, deleteMarkdown, [req.params.markdownId]);
    });

    /**
     * Delete markdown by markdown id
     * @param {string} markdownId id of the markdown
     * @returns {Promise<MarkdownSchema>} promise that resolves to deleted markdown object
     */
    function deleteMarkdown(markdownId) {
        return MarkdownModel.deleteMarkdown(markdownId);
    }

    // #endregion: Delete markdown

    return exp;

})();