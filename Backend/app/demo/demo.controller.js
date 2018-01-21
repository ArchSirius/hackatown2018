/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/demo/user         ->  getDemoUser
 * POST    /api/demo/reset        ->  resetDatabase
 */

var User = require('../user/user.model');
var seed = require('../../seed');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).json({
        message: 'Task not found.'
      });
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Get the demo's main user
 */
exports.getDemoUser = function(req, res) {
  return User.findOne({ email: 'patrick@example.com' }).exec()
    .then(handleEntityNotFound(res))
    .then(user => {
      return user.profile;
    })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Reset the database
 */
exports.resetDatabase = function(req, res) {
  return seed(true)
  .then(() => {
    return {};
  })
  .then(respondWithResult(res, 204))
  .catch(handleError(res));
}
