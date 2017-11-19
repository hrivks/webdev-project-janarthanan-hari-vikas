/**
 * User Model
 */
module.exports = (function () {
    const q = require('q');
    const mongoose = require('mongoose');
    const UserSchema = require('./user.schema.server');

    var UserModel = mongoose.model('UserModel', UserSchema);

    // API
    UserModel.createUser = createUser;
    UserModel.findUserById = findUserById;
    UserModel.findUserByUsername = findUserByUsername;
    UserModel.findUserByCredentials = findUserByCredentials;
    UserModel.findUserByGithubId = findUserByGithubId;
    UserModel.updateUser = updateUser;
    UserModel.deleteUser = deleteUser;

    // Implimentation

    /**
     * Validate a user object
     * @param {UserSchema} user user object to validate
     * @throws {String[]} list of errors encountered
     */
    function validate(user) {
        var errors = [];

        if (!user || Object.keys(user).length == 0) {
            throw ['User object expected'];
        }
        if (!user.username) {
            errors.push('Username is required');
        }
        if (!user.password) {
            errors.push('Password is required');
        }

        if (errors.length > 0) {
            throw errors;
        }
    }

    /**
     * Create a new User
     * @param {UserSchema} user 
     * @returns {Promise<UserSchema>} promise that resolves to the created user
     */
    function createUser(user) {
        var def = q.defer();

        validate(user);
        UserModel.findOne({ username: user.username }, (err, alreadyExists) => {
            if (alreadyExists) {
                def.reject({ message: 'User with username ' + user.username + ' already exists' });
            } else {
                UserModel.create(user, (err, createdUser) => {
                    if (err) {
                        def.reject(err.message);
                    } else {
                        def.resolve(createdUser);
                    }
                });
            }
        });

        return def.promise;
    }

    /**
     * Find user by user id
     * @param {string} userId 
     * @returns {DocumentQuery<UserSchema>} query that resolves to the user object
     */
    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    /**
     * Find user by username
     * @param {string} username 
     * @returns {DocumentQuery<UserSchema>} query that resolves to the user object
     */
    function findUserByUsername(username) {
        return UserModel.findOne({ username: username });
    }

    /**
     * Find user by username and password
     * @param {string} username 
     * @param {string} password 
     * @returns {Promise<UserSchema>} promise that resolves to the user object
     */
    function findUserByCredentials(username, password) {
        const def = q.defer();
        UserModel
            .findOne({ username: username, password: password }, (err, user) => {
                if (err) {
                    def.reject(err);
                } else if (!user) {
                    def.reject('Invalid Credentails');
                } else {
                    def.resolve(user);
                }
            });
        return def.promise;
    }

    /**
     * Find user by facebookId
     * @param {string} githubId
     * @returns {DocumentQuery<UserSchema>} query that resolves to the user with the specified facebook id
     */
    function findUserByGithubId(githubId) {
        return UserModel.findOne({ 'github.id': githubId });
    }

    /**
     * Update user by user id
     * @param {string} userId 
     * @param {UserSchema} user 
     * @returns {DocumentQuery<UserSchema>} query that resolves to the updated user object
     */
    function updateUser(userId, user) {
        validate(user);
        return UserModel.findByIdAndUpdate(userId, user, { new: true });
    }

    /**
     * Delete user by user id
     * @param {string} userId 
     * @returns {DocumentQuery<UserSchema>} query that resolves successfully when the user is removed
     */
    function deleteUser(userId) {
        return UserModel.findByIdAndRemove(userId);
    }

    return UserModel;
})();