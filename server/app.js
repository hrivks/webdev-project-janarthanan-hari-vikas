// Route: /api
const router = require('express').Router();

//#region: api route definitions

// User route: /api/iconsearch
 router.use('/iconsearch', require('./services/iconSearch.service.server.js').router);

//#endregion

module.exports = router;
