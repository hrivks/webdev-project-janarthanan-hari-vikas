// Provides Authentication mechanism
// Module Route Root: '/auth'

module.exports = (function() {

    const router = require('express').Router({
        mergeParams: true
    });
    const passport = require('passport');
    const GithubPassportStrategy = require('passport-github').Strategy;
    const Utils = require('./service-utils.js');
    const UserModel = require('../models/user/user.model.server.js');


    /** Exported object */
    const exp = {
        router: router, // router object
    };

    function githubStrategy(token, refreshToken, profile, done) {
        if (!profile) {
            done(null, false);
        } else {
            // get user by facebook id
            UserModel.findUserByGithubId(profile.id)
                .then((user) => {
                    if (user) {
                        done(null, user);
                    } else {
                        // user does not exist. create user

                        const newGitUser = {
                            firstName: profile.name.givenName || profile.displayName,
                            lastName: profile.name.familyName,
                            github: {
                                id: profile.id,
                                token: token
                            }
                        };

                        UserModel.create(newGitUser, (err, createdUser) => {
                            if (err) {
                                done(err, null);
                            } else {
                                done(null, createdUser);
                            }
                        });
                    }
                }, (err) => {
                    done(err, null);
                });
        }
    }

    //#region: Facebook Authentication

    var githubConfig = {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://localhost:3100/api/auth/github/callback'
    };

    passport.use(new GithubPassportStrategy(githubConfig, githubStrategy));



    // route: [GET] '/api/auth/github'
    router.get('/github', passport.authenticate('github', {
        scope: 'email'
    }));

    // route: [GET] '/api/auth/github/callback'
    router.get('/github/callback', passport.authenticate('github', {
        successRedirect: process.env.IS_SERVER ? '/profile' : 'http://localhost:4200/profile',
        failureRedirect: process.env.IS_SERVER ? '/login' : 'http://localhost:4200/login'
    }));

    //#endregion : Facebook Authentication

    return exp;

})();