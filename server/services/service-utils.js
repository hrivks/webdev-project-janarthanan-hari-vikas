/** Common Utilities for Services */
module.exports = (function () {

    /**
     * Invoke a backend model function and send the response
     * @param {*} res Router Response object
     * @param {Function} fn Function to invoke
     * @param {*[]} args Arguments for the function
     */
    function sendResponse(res, fn, args) {
        try {
            fn(...args)
                .then((result) => {
                    res.json(result);
                }, (err) => {
                    res.status(400).json([err.message || err]);
                })
                .catch((err) => {
                    res.status(400).json([err.message || err]);
                });
        } catch (ex) {
            res.status(400).json([ex.message || ex]);
        }
    }

    return {
        sendResponse: sendResponse
    };

})();