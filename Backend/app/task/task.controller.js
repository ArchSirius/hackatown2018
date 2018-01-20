/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/tasks              ->  index
 * POST    /api/tasks              ->  create
 * GET     /api/tasks/:id          ->  show
 * PUT     /api/tasks/:id          ->  update
 * DELETE  /api/tasks/:id          ->  destroy
 */

var _    = require('lodash');
var Task = require('./task.model');

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
        message: 'Task not found.'
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
 * Get list of tasks
 */
exports.index = function(req, res) {
  return Task.find({}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Creates a new task
 */
exports.create = function(req, res) {
  return Task.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(validationError(res));
}

/**
 * Get a single task
 */
exports.show = function(req, res) {
  return Task.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Deletes a task
 */
exports.destroy = function(req, res) {
  return Task.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

/**
 * Update task info
 */
exports.update = function(req, res) {
  if (req.body.hasOwnProperty('_id')) {
    delete req.body._id;
  }
  Task.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(validationError(res));
}
