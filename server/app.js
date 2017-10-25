// Route: /api
const router = require('express').Router();

//#region: api route definitions

// User route: /api/user
router.use('/user', require('./services/user.service.server.js').router);

//#endregion

module.exports = router;
