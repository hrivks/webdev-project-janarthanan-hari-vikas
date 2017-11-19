/**
 * environment variables for local development 
 * */

// mongo db connection string
process.env.MONGODB_URI = 'mongodb://localhost:27017/writeme';

// Icon finder app info
process.env.ICONFINDER_API_CLIENT_ID = '<icon finder app id here>';
process.env.ICONFINDER_API_CLIENT_SECRET = '<icon finder client secret here>';

// Github app info
process.env.GITHUB_CLIENT_ID = '<git hub app id here>';
process.env.GITHUB_CLIENT_SECRET = '<git hub client secret here>';
process.env.GITHUB_CALLBACK_URL = 'http://localhost:3100/api/auth/github/callback';