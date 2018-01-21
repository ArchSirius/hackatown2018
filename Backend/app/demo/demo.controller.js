/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/demo              ->  getDemoUser
 */

var User = require('../user/user.model');

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
  return User.findOne({ email: 'patrick@example.com' }, '_id').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
