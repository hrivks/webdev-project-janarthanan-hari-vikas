/** DO NOT COMMIT THIS FILE : has sensitive api keys
 * environment variables for local development 
 * */

// mongo db connection string
process.env.MONGODB_URI = 'mongodb://localhost:27017/writeme';

// Icon finder app info
process.env.ICONFINDER_API_CLIENT_ID = '<icon finder api key>';
process.env.ICONFINDER_API_CLIENT_SECRET = '<icon finder api secret>';

// Github app info
process.env.GITHUB_CLIENT_ID = '<github api key>';
process.env.GITHUB_CLIENT_SECRET = '<github api key>';
process.env.GITHUB_CALLBACK_URL = 'http://localhost:3100/api/auth/github/callback';