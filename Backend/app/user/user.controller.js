/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/users              ->  index
 * POST    /api/users              ->  create
 * GET     /api/users/me           ->  me
 * GET     /api/users/:id          ->  show
 * PUT     /api/users/:id          ->  update
 * DELETE  /api/users/:id          ->  destroy
 * PUT     /api/users/:id/password ->  password
 */

var _    = require('lodash');
var User = require('./user.model');
var auth = require('../../auth/auth.service')

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.extend(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.sendStatus(204);
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).json({
        message: 'User not found.'
      });
      return null;
    }
    return entity;
  };
}

function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    res.status(statusCode).json(err);
  }
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Get list of users
 * restriction: authenticated
 */
exports.index = function(req, res) {
  return User.find({}, '-salt -password').exec()
    .then(users => {
      users.forEach((user, index) => {
        users[index] = user.profile;
      });
      return users;
    })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Creates a new user
 */
exports.create = function(req, res) {
  return User.create(req.body)
    .then(user => {
      user.salt = undefined;
      user.password = undefined;
      var token = auth.signToken(user);
      return { user: user, token: token };
    })
    .then(respondWithResult(res, 201))
    .catch(validationError(res));
}

/**
 * Get a single user
 * restriction: authenticated
 */
exports.show = function(req, res) {
  return User.findById(req.params.id, '-salt -password').exec()
    .then(handleEntityNotFound(res))
    .then(user => {
      if (user) {
        const points = user.points;
        user = user.profile;
        // Add points
        user.points = points;
      }
      return user;
    })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Deletes a user
 * restriction: authenticated
 */
exports.destroy = function(req, res) {
  return User.findById(req.params.id, '-salt -password').exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

/**
 * Change a users password
 * restriction: authenticated
 */
exports.changePassword = function(req, res) {
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  return User.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(user => {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        return user.save()
          .then(() => {
            res.sendStatus(200);
          })
          .catch(validationError(res));
      }
      else {
        return res.status(403).json({
          message: 'Authentication failed.'
        });
      }
    })
    .catch(handleError(res));
}

/**
 * Update user info
 * restriction: authenticated
 */
exports.update = function(req, res) {
  if (req.body.hasOwnProperty('_id')) {
    delete req.body._id;
  }
  User.findById(req.params.id, '-salt -password').exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(validationError(res));
}

/**
 * Get my info
 * restriction: authenticated
 */
exports.me = function(req, res) {
  return User.findById(req.decoded._id, '-salt -password').populate('friends', '-salt -password -friends').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(validationError(res));
}

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
}
