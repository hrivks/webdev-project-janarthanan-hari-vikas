const router = require('express').Router({ mergeParams: true });
/** Exported objects */
const exp = {
    router: router, // router object
    api: {} // list of functions supported by this service
};

// #region: Get Flickr API key

// Route: [GET] 'api/iconsearch/iconfinder/ApiKey'
router.get('/iconfinder/ApiKey', function (req, res) {
    try {
        var iconFinderApiClientId = process.env.ICONFINDER_API_CLIENT_ID || ''; 
        var iconFinderApiClientSecret =  process.env.ICONFINDER_API_CLIENT_SECRET || ''; 
        res.json({ key: flickrApiKey });
    }
    catch (ex) {
        res.status(400).json(ex);
    }
});

//#endregion: Get Flickr API key

