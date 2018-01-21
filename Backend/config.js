// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI
    || 'mongodb://localhost/hackatown2018'
  },
  secret: process.env.SECRET || 'hackatown2018-secret'
};
