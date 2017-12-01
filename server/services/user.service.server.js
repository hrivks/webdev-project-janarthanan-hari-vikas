// Provides CRUD for user model
// Module Route Root: '/api/user'

module.exports = (function() {

    const router = require('express').Router();
    const UserModel = require('../models/model.server').User;
    const Utils = require('./service-utils.js');
    const q = require('q');
    const passport = require('passport');
    const bcrypt = require('bcrypt-nodejs');

    /** Exported objects */
    const exp = {
        router: router, // router object
        api: { // list of functions supported by this service
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            findUserById: findUserById,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser
        }
    };

    //#region: Login User

    // route: [POST] '/api/user/login'
    router.post('/login', passport.authenticate('local'), (req, res) => {
        res.json(req.user);
    });

    //#endregion: Login User


    //#region: Logout User

    // route: [POST] '/api/user/logout'
    router.post('/logout', (req, res) => {
        req.logOut();
        res.json({
            result: 'logout successful'
        });
    });

    //#endregion: Logout User


    //#region: LoggedIn User

    // route: [POST] '/api/user/loggedIn'
    router.post('/loggedIn', (req, res) => {
        if (req.isAuthenticated()) {
            res.json(req.user);
        } else {
            res.json(false);
        }
    });

    //#endregion: LoggedIn User


    //#region: Register User

    // route: [POST] '/api/user/register'
    router.post('/register', function(req, res) {
        Utils.sendResponse(res, register, [req.body, req]);
    });

    function register(user, req) {
        var def = q.defer();

        // check if username already exists
        findUserByUsername(user.username)
            .then((userExists) => {
                if (userExists) {
                    def.reject('user with userid "' + userExists.username + '" already exists');
                } else {
                    user.password = bcrypt.hashSync(user.password);
                    // create new user
                    createUser(user)
                        .then((createdUser) => {
                            // login created user
                            req.login(createdUser, (err) => {
                                def.resolve(createdUser);
                            });
                        }, (err) => {
                            def.reject(err);
                        });
                }
            });

        return def.promise;
    }

    //#endregion: Register User


    //#region : Create User

    // route: [POST] '/api/user'
    router.post('/', function(req, res) {
        Utils.sendResponse(res, createUser, [req.body]);
    });

    /**
     * Create a new user
     * @param {UserSchema} user user object to be added to the user list
     * @returns {Promise<UserSchema>} promise that resolves to the created user object
     */
    function createUser(user) {
        return UserModel.createUser(user);
    }

    //#endregion: Create User


    //#region : Find user by Id

    // route: [GET] '/api/user/:userId'
    router.get('/:userId', function(req, res) {
        Utils.sendResponse(res, findUserById, [req.params.userId]);
    });

    /**
     * Find user by user id
     * @param {string} userId id of the user
     * @returns {Promise<UserSchema>} promise that resolves to user with the specifed id; null if id doesn't exist
     */
    function findUserById(userId) {
        return UserModel.findUserById(userId);
    }

    //#endregion Find user by id


    //#region : Find user username & credentials

    // route: [GET] '/api/user?username=username'
    // route: [GET] '/api/user?username=username&password=password'
    router.get('/', function(req, res) {
        if (req.query.username && req.query.password) {
            Utils.sendResponse(res, findUserByCredentials, [req.query.username, req.query.password]);
        } else {
            Utils.sendResponse(res, findUserByUsername, [req.query.username]);
        }
    });

    /**
     * Find user by user name
     * @param {String} username username of the user
     * @returns {Promise<UserSchema>} promise that resolves to user with the specifed username; null if id doesn't exist
     */
    function findUserByUsername(username) {
        return UserModel.findUserByUsername(username);
    }

    /**
     * Find user by credentials
     * @param {String} username username of the user
     * @param {String} password password of the user
     * @returns {User} user with the specifed username; null if id doesn't exist
     */
    function findUserByCredentials(username, password) {
        return UserModel.findUserByCredentials(username, password);
    }
    //#endregion


    //#region : Update User

    // route: [PUT] '/api/user/:userId'
    router.put('/:userId', function(req, res) {
        Utils.sendResponse(res, updateUser, [req.params.userId, req.body]);
    });

    /**
     * Update user by user id
     * @param {string} userId id of the user
     * @param {UserSchema} user updated user object
     * @returns {Promise<UserSchema>} promise that resolves to updated user object
     */
    function updateUser(userId, user) {
        return UserModel.updateUser(userId, user);
    }

    //#endregion: Update User


    //#region : Delete User

    // route: [DELETE] '/api/user/:userId'
    router.delete('/:userId', function(req, res) {
        Utils.sendResponse(res, deleteUser, [req.params.userId]);
    });

    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns {Promise<UserSchema>} promise that resolves to deleted user object
     */
    function deleteUser(userId) {
        return UserModel.deleteUser(userId);
    }

    // #endregion: Delete User

    //#region : Link User Github Account

    // route: [PUT] '/api/user/:userId/linkGithub/:gitProfileId'
    router.put('/:userId/linkGithub/:gitProfileId', function(req, res) {
        Utils.sendResponse(res, linkGithub, [req.params.userId, req.params.gitProfileId]);
    });

    /**
     * Link User id with Git Profile Id
     * @param {string} userId id of the user
     * @param {string} gitProfileId id of the user git hub profile
     * @returns {Promise<UserSchema>} promise that resolves to linked user object
     */
    function linkGithub(userId, gitProfileId) {

        var def = q.defer();

        UserModel
            .findUserByGithubId(gitProfileId)
            .then((gitUser) => {

                if (!gitUser) {
                    def.reject('Specified Git Profile ID does not exist. Id: ' + gitProfileId);
                } else {

                    UserModel
                        .findUserById(userId)
                        .then((user) => {

                            // update user object with git info
                            user.github = gitUser.github;
                            UserModel.updateUser(userId, user).then((updatedUser) => {

                                // TODO: update all referenced objects: Saved markdown, followers etc
                                // remove redundant git profile
                                UserModel.deleteUser(userId).then(() => {
                                    def.resolve(updatedUser);
                                }, (err) => {
                                    def.reject(err);
                                });

                            }, (err) => {
                                def.reject(err);
                            });

                        }, (err) => {
                            def.reject(err);
                        });

                }

            }, (err) => {
                def.reject(err);
            });

        UserModel.deleteUser(userId);

        return def.promise;

    }

    // #endregion: Delete User

    return exp;

})();