// prod.js - production keys here
module.exports = {
  mongoURI: process.env.MONGO_URI,
  oauth: {
    domain: process.env.OAUTH_DOMAIN,
    clientID: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET
  },
  secret: process.env.SECRET
};
