module.exports = function(app) {
	app.use('/api/users', require('./app/user'));
	app.use('/auth', require('./auth'));
};
