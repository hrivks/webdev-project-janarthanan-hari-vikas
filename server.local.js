/** DO NOT COMMIT THIS FILE : has sensitive api keys
* environment variables for local development 
* */
// cookie session enc key
process.env.SESSION_SECRET = 'ABCDED';
// mongo db connection string
process.env.MONGODB_URI = 'mongodb://localhost:27017/writeme';
// Icon finder app info
process.env.ICONFINDER_API_CLIENT_ID = 'ssckMfWKPCd1IddzuZ8SOXIZHuRgHehsy1c1HecmYh1ePP8QD5pUepP1UPIwSLPR';
process.env.ICONFINDER_API_CLIENT_SECRET = 'jkdNot6rqIZmKPXtujS83qxq7hVGYngkhLzuD02qA9oLt5cgcIwSEA0RFPL1dLjy';
// Github app info
process.env.GITHUB_CLIENT_ID = '56b2448af249740c1910';
process.env.GITHUB_CLIENT_SECRET = '063cd7fb7dabf9dd9ec252f5ae743e9f64896442';
process.env.GITHUB_CALLBACK_URL = 'http://localhost:3100/api/auth/github/callback';
