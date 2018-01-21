module.exports = function(app) {
	app.use('/api/users', require('./app/user'));
	app.use('/api/tasks', require('./app/task'));
	app.use('/auth', require('./auth'));
};
