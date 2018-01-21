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
			username: 'Alice Carroll',
			email: 'alice@example.com',
      password: 'foobar',
      points: 30,
      skills: [{
				name: 'animal care',
				value: '1'
			}, {
				name: 'driving',
				value: '3'
			}, {
				name: 'painting',
				value: '3'
			}]
		}, {
			username: 'Bob Gratton',
			email: 'bob@example.com',
			password: 'foobaz',
			points: 50,
			skills: [{
				name: 'animal care',
				value: '1'
			},{
				name: 'strong',
				value: '0'
			},{
				name: 'plumbing',
				value: '5'
			},{
				name: 'driving',
				value: '2'
			}]
		}, {
			username: 'Linda Fitzgerald',
			email: 'linda@example.com',
			password: 'foobaz',
			points: 50,
			skills: [{
				name: 'driving',
				value: '6'
			},{
				name: 'carpentry',
				value: '2'
			}]
		}, {
			username: 'Carole	Mccoy',
			email: 'carole@example.com',
			password: 'foobaz',
			points: 50,
			skills: [{
				name: 'painting',
				value: '3'
			}]
		}, {
			username: 'Gary Jones',
			email: 'gary@example.com',
			password: 'foobaz',
			points: 50,
			skills: [{
				name: 'cooking',
				value: '3'
			}, {
				name: 'driving',
				value: '3'
			}]
		}, {
			username: 'Bethany Baldwin',
			email: 'beth@example.com',
			password: 'foobaz',
			points: 50,
			skills: [{
				name: 'plumbing',
				value: '2'
			},{
				name: 'driving',
				value: '4'
			},{
				name: 'strong',
				value: '4'
			}]
		}, {
			username: 'Kirk	Yates',
			email: 'kirk@example.com',
			password: 'foobaz',
			points: 50,
			skills: [{
				name: 'animal care',
				value: '1'
			}, {
				name: 'writing',
				value: '2'
			}]
		}, {
			username: 'Manuel Murphy',
			email: 'manuel@example.com',
			password: 'foobaz',
			points: 50,
			skills: [{
				name: 'driving',
				value: '2'
			},{
				name: 'cleaning',
				value: '3'
			}]
		}, {
			username: 'Naomi Harris',
			email: 'naomi@example.com',
			password: 'foobaz',
			points: 50,
			skills: [{
				name: 'painting',
				value: '3'
			}]
		}, {
      username: 'Patrick Williams',
			email: 'patrick@example.com',
			password: 'foobarbaz',
			points: 25,
			skills: [{
				name: 'cleaning',
				value: '4'
			}, {
				name: 'driving',
				value: '2'
			}, {
				name: 'spellcraft',
				value: '0'
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
			relevantSkills: ['animal care'],
			creator: users[0],
			applicants: [users[1]]
		}, {
			name: 'Paint my garage',
			description: 'My garage is my pride and joy. Help me take good care of it. I provide beer.',
			value: 20,
      creator: users[1],
      relevantSkills: ['painting'],
		}, {
      name: 'Shovel my parking',
      description: 'I need this done by next Monday.',
			value: 10,
      creator: users[2],
      relevantSkills: ['strong'],
      applicants: [users[4], users[3]],
		}, {
      name: 'Make me a sandwich',
      description: 'I need a sandwich.',
			value: 5,
      creator: users[2],
      relevantSkills: ['cooking'],
      applicants: [users[4], users[5], users[6]],
      chosen: users[5],
      done: true
		}, {
      name: '',
      description: '',
			value: 0,
      creator: users[0],
      relevantSkills: [],
      applicants: [],
      chosen: users[1],
      done: true
		}, {
      name: '',
      description: '',
			value: 0,
      creator: users[0],
      relevantSkills: [],
      applicants: [],
      chosen: users[1],
      done: true
		}, {
      name: '',
      description: '',
			value: 0,
      creator: users[0],
      relevantSkills: [],
      applicants: [],
      chosen: users[1],
      done: true
		}, {
      name: '',
      description: '',
			value: 0,
      creator: users[0],
      relevantSkills: [],
      applicants: [],
      chosen: users[1],
      done: true
		}, {
      name: '',
      description: '',
			value: 0,
      creator: users[0],
      relevantSkills: [],
      applicants: [],
      chosen: users[1],
      done: true
		}, {
      name: '',
      description: '',
			value: 0,
      creator: users[0],
      relevantSkills: [],
      applicants: [],
      chosen: users[1],
      done: true
		}, {
      name: '',
      description: '',
			value: 0,
      creator: users[0],
      relevantSkills: [],
      applicants: [],
      chosen: users[1],
      done: true
		}, {
      name: '',
      description: '',
			value: 0,
      creator: users[0],
      relevantSkills: [],
      applicants: [],
      chosen: users[1],
      done: true
		}]))
		.then(tasks => {
			console.log(`${tasks.length} tasks created`);
		});
	}
};
