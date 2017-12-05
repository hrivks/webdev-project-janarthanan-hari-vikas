// Provides CRUD for project model
// Module Route Root: '/api/project'

module.exports = (function() {

    const router = require('express').Router();
    const ProjectModel = require('../models/model.server').Project;
    const Utils = require('./service-utils.js');
    const q = require('q');
    const passport = require('passport');

    /** Exported objects */
    const exp = {
        router: router, // router object
        api: { // list of functions supported by this service
            createProject: createProject,
            findProjectById: findProjectById,
            findProjectsByMembership: findProjectsByMembership,
            updateProject: updateProject,
            deleteProject: deleteProject
        }
    };


    //#region : Create Project

    // route: [POST] '/api/project'
    router.post('/', Utils.checkAuth, function(req, res) {
        Utils.sendResponse(res, createProject, [req.body, req.user]);
    });

    /**
     * Create a new project
     * @param {ProjectSchema} project project object to create
     * @param {UserSchema} admin admin who created the project
     * @returns {Promise<ProjectSchema>} promise that resolves to the created project object
     */
    function createProject(project, admin) {
        if (project.admins) {
            project.admins.push(admin._id.toString());
        } else {
            project.admins = [admin._id.toString()];
        }

        // add all admins to members
        if (project.members && project.members.length) {
            project.admins.forEach((i) => {
                if (project.members.indexOf(i) === -1) {
                    project.members.push(i);
                }
            });
        } else {
            project.members = [admin._id.toString()];
        }



        return ProjectModel.createProject(project);
    }

    //#endregion: Create Project


    //#region : Find Project by Id

    // route: [GET] '/api/project/:projectId'
    router.get('/:projectId', function(req, res) {
        Utils.sendResponse(res, findProjectById, [req.params.projectId]);
    });

    /**
     * Find project by project id
     * @param {string} projectId id of the project
     * @returns {Promise<ProjectSchema>} promise that resolves to project with the specifed id; null if id doesn't exist
     */
    function findProjectById(projectId) {
        return ProjectModel.findProjectById(projectId);
    }

    //#endregion Find project by id


    //#region: Find projects by author

    // route: [GET] '/api/project/byMembership/:userId'
    router.get('/byMembership/:userId', function(req, res) {
        Utils.sendResponse(res, findProjectsByMembership, [req.params.userId]);
    });

    /**
     * Find projects by author id
     * @param {String} authorId id of the author
     * @returns {Promise<ProjectSchema[]>} promise that resolves to list of projects created by the specified author
     */
    function findProjectsByMembership(userId) {
        return ProjectModel.findProjectsByMembership(userId);
    }

    //#endregion: Find projects by author


    //#region: Update project

    // route: [PUT] '/api/project/:projectId'
    router.put('/:projectId', function(req, res) {
        Utils.sendResponse(res, updateProject, [req.params.projectId, req.body]);
    });

    /**
     * Update project by project id
     * @param {string} projectId id of the project
     * @param {ProjectSchema} project updated project object
     * @returns {Promise<ProjectSchema>} promise that resolves to updated project object
     */
    function updateProject(projectId, project) {
        return ProjectModel.updateProject(projectId, project);
    }

    //#endregion: Update project


    //#region : Delete project

    // route: [DELETE] '/api/project/:projectId'
    router.delete('/:projectId', function(req, res) {
        Utils.sendResponse(res, deleteProject, [req.params.projectId]);
    });

    /**
     * Delete project by project id
     * @param {string} projectId id of the project
     * @returns {Promise<ProjectSchema>} promise that resolves to deleted project object
     */
    function deleteProject(projectId) {
        return ProjectModel.deleteProject(projectId);
    }

    // #endregion: Delete project

    return exp;

})();