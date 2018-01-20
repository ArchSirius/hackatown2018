var jwt    = require('jsonwebtoken');
var secret = require('../config.js').secret;
var User   = require('../app/user/user.model.js');

exports.authenticate = function(req, res) {
	// find the user
	User.findOne({ username: req.body.username }, function(err, user) {
		if (err) {
			return res.status(500).json({
				message: 'An error has occured.',
				err: err
			});
		}

		if (!user) {
			return res.status(404).json({
				message: 'Authentication failed. User not found.'
			});
		}

		// check if password matches
		if (!user.authenticate(req.body.password)) {
			return res.status(401).json({
				message: 'Authentication failed. Wrong password.'
			});
		}

		// if user is found and password is right
		// create a token
		var token = exports.signToken(user);
		// return the token as JSON
		return res.status(200).json({ token });
	});
};

exports.isAuthenticated = function(req, res, next) {
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, secret, function(err, decoded) {
			if (err) {
				return res.status(403).json({
					message: 'Failed to authenticate token.'
				});
			}
			else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;
				next();
			}
		});
	}
	else {
		// if there is no token
		// return an error
		return res.status(403).json({
			message: 'No token provided.'
		});
	}
};

exports.signToken = function(user) {
	return jwt.sign(user.token, secret, {
		expiresIn: '60d'
	});
};
