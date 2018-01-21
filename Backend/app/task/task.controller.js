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
var User = require('../user/user.model');

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

/**
 * Transfer points from creator to chosen if task was just finished
 */
function transferPoints(req) {
  return function(task) {
    if(!task.done && req.body.done) {
      if (!task.chosen) {
        throw "Can't complete a task without a chosen applicant.";
      }
      User.findById(task.creator).exec()
      .then(creator => {
        creator.points -= task.value;
        task.creator.points = creator.points;
        return creator.save();
      })
      .then(() => User.findById(task.chosen))
      .then(chosen => {
        chosen.points += task.value;
        return chosen.save();
      });
    }
    return task;
  }
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
  return Task.find({})
    .populate({
      path: 'creator',
      select: 'username'
    })
    .populate({
      path: 'applicants',
      select: 'username skills'
    })
    .exec()
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
  return Task.findById(req.params.id)
    .populate({
      path: 'creator',
      select: 'username'
    })
    .populate({
      path: 'applicants',
      select: 'username skills'
    })
    .exec()
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
  Task.findById(req.params.id)
    .populate({
      path: 'creator',
      select: 'username'
    })
    .populate({
      path: 'applicants',
      select: 'username skills'
    }).exec()
    .then(handleEntityNotFound(res))
    .then(transferPoints(req))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(validationError(res));
}
