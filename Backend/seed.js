var Task = require('./app/task/task.model');
var User = require('./app/user/user.model');

module.exports = function() {
	if(process.env.SEED) {
		// Clear tasks
		Task.remove({})
		.then(() => {
			console.log('Tasks cleared');
		})
		// Clear users
		.then(() => User.remove({}))
		.then(() => {
			console.log('Users cleared');
		})
		// Seed users
		.then(() => User.create([{
			username: 'alice',
			email: 'alice@example.com',
			password: 'foobar'
		}, {
			username: 'bob',
			email: 'bob@example.com',
			password: 'foobaz',
			points: 10,
			skills: [{
				name: 'animals',
				value: '1'
			}]
		}]))
		.tap(users => {
			console.log(`${users.length} users created`);
		})
		// Seed tasks
		.then(users => Task.create([{
			name: 'Walk my dogs',
			description: 'Fido requires daily walks, but I cannot go with him tomorrow. Help us!',
			value: 10,
			relevantSkills: ['animals'],
			creator: users[0],
			applicants: [users[1]],
			chosen: users[1],
			done: true
		}, {
			name: 'Paint my garage',
			description: 'My garage is my pride and joy. Help me take good care of it. I provide beer.',
			value: 20,
			creator: users[1]
		}]))
		.then(tasks => {
			console.log(`${tasks.length} tasks created`);
		});
	}
};
