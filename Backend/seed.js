var Task = require('./app/task/task.model');
var User = require('./app/user/user.model');

module.exports = function(override) {
	if(process.env.SEED || override) {
		// Clear tasks
		return Task.remove({})
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
			"username": "Alice Carroll",
			"email": "alice@example.com",
			"password": "foobar",
			"points": 30,
			"skills": [{
				"name": "animal care",
				"value": "1"
			}, {
				"name": "driving",
				"value": "3"
			}, {
				"name": "painting",
				"value": "3"
			}]
		}, {
			"username": "Bob Gratton",
			"email": "bob@example.com",
			"password": "foobar",
			"points": 50,
			"skills": [{
				"name": "animal care",
				"value": "1"
			},{
				"name": "strong",
				"value": "0"
			},{
				"name": "plumbing",
				"value": "5"
			},{
				"name": "driving",
				"value": "2"
			}]
		}, {
			"username": "Linda Fitzgerald",
			"email": "linda@example.com",
			"password": "foobar",
			"points": 50,
			"skills": [{
				"name": "driving",
				"value": "6"
			},{
				"name": "carpentry",
				"value": "2"
			}]
		}, {
			"username": "Carole	Mccoy",
			"email": "carole@example.com",
			"password": "foobar",
			"points": 50,
			"skills": [{
				"name": "painting",
				"value": "3"
			}]
		}, {
			"username": "Gary Jones",
			"email": "gary@example.com",
			"password": "foobar",
			"points": 50,
			"skills": [{
				"name": "cooking",
				"value": "3"
			}, {
				"name": "driving",
				"value": "3"
			}]
		}, {
			"username": "Bethany Baldwin",
			"email": "beth@example.com",
			"password": "foobar",
			"points": 50,
			"skills": [{
				"name": "plumbing",
				"value": "2"
			},{
				"name": "driving",
				"value": "4"
			},{
				"name": "strong",
				"value": "4"
			}]
		}, {
			"username": "Kirk Yates",
			"email": "kirk@example.com",
			"password": "foobar",
			"points": 50,
			"skills": [{
				"name": "animal care",
				"value": "1"
			}, {
				"name": "writing",
				"value": "2"
			}]
		}, {
			"username": "Manuel Murphy",
			"email": "manuel@example.com",
			"password": "foobar",
			"points": 50,
			"skills": [{
				"name": "driving",
				"value": "2"
			},{
				"name": "cleaning",
				"value": "3"
			}]
		}, {
			"username": "Naomi Harris",
			"email": "naomi@example.com",
			"password": "foobar",
			"points": 50,
			"skills": [{
				"name": "painting",
				"value": "3"
			}]
		}, {
			"username": "Patrick Williams",
			"email": "patrick@example.com",
			"password": "foobarbaz",
			"points": 50,
			"skills": [{
				"name": "cleaning",
				"value": "4"
			}, {
				"name": "driving",
				"value": "2"
			}, {
				"name": "spellcraft",
				"value": "0"
			}]
		}]))
		.tap(users => {
			console.log(`${users.length} users created`);
		})
		// Seed tasks
		.then(users => Task.create([{
			"name": 'Walk my dogs',
			"description": 'Fido requires daily walks, but I cannot go with him tomorrow. Help us!',
			"value": 10,
			"relevantSkills": ['animal care'],
			"address": "148 Rue Jean-Talon Ouest, Montreal, QC H2R 2X1",
			"creator": users[0],
			"applicants": [users[1]]
		}, {
			"name": 'Paint my garage',
			"description": 'My garage is my pride and joy. Help me take good care of it. I provide beer.',
			"value": 20,
			"address": "4433 Avenue Papineau, Montreal, QC H2H 1T7",
			"creator": users[1],
			"relevantSkills": ['painting'],
		}, {
			"name": 'Shovel my parking',
			"description": 'I need this "done" by next Monday.',
			"value": 10,
			"address": "7077 Park Ave, Montreal, QC H3N 1X7",
			"creator": users[2],
			"relevantSkills": ['strong'],
			"applicants": [users[4], users[3]],
		}, {
			"name": 'Make me a sandwich',
			"description": 'I need a sandwich.',
			"value": 5,
			"address": "152 Avenue Laurier O, Montréal, QC H2T 2N7",
			"creator": users[2],
			"relevantSkills": ['cooking'],
			"applicants": [users[4], users[5], users[6]],
			"chosen": users[5]
		}, {
			"name": 'Sewing lessons',
			"description": 'I would like to learn how to sew. Can you teach me?',
			"value": 15,
			"address": "7609 St Hubert St, Montreal, QC H2R 2N7",
			"creator": users[9],
			"relevantSkills": ['sewing', 'patience'],
			"applicants": [users[2], users[1]],
			"chosen": users[1],
			"done": true
		}, {
			"name": 'Show me how to whistle',
			"description": 'I\'ve been trying for a long time and I need an expert :(',
			"value": 5,
			"address": "2900 Edouard Montpetit Blvd, Montreal, QC H3T 1J4",
			"creator": users[1],
			"applicants": [users[9], users[7]],
			"chosen": users[9],
			"done": true
		}, {
			"name": 'Moving furniture',
			"description": 'I\'m moving out and my back is killing me. I need your muscles.',
			"value": 25,
			"address": "202 St Zotique, Montréal, QC H2V 4S9",
			"creator": users[0],
			"relevantSkills": ['strong'],
			"applicants": [users[4], users[9], users[6]],
			"chosen": users[1]
		}, {
			"name": 'Jog with me',
			"description": 'Jogging is hard to do alone. I need company.',
			"value": 10,
			"address": "5100 Sherbrooke St E, Montreal, QC H1V 3R9",
			"creator": users[0],
			"relevantSkills": ['physical'],
			"applicants": [users[1], users[9]],
			"done": true
		}, {
			"name": 'Park cleaning',
			"description": 'Join us to clean local parks :)',
			"value": 40,
			"address": "4101 Rue Sherbrooke E, Montréal, QC H1X 2B2",
			"creator": users[5],
			"chosen": users[1]
		}, {
			"name": 'TV setup',
			"description": 'I bought a new TV but I would like help for the setup.',
			"value": 5,
			"address": "2313 Rue Sainte-Catherine Ouest #101, Montréal, QC H3H 1N2",
			"creator": users[4],
			"relevantSkills": ['geek', 'electronics']
		}, {
			"name": 'Pool cleaning',
			"description": 'Come help me clean my pool and enjoy the water!',
			"value": 0,
			"address": "2100 Edouard Montpetit Blvd, Montreal, QC H3T 1J4",
			"creator": users[8],
			"applicants": [users[1]],
			"chosen": users[1],
			"done": true
		}, {
			"name": 'Financial advice',
			"description": 'I am a total noob in financial stuff and need some help with my taxes.',
			"value": 30,
			"address": "200-1111 Boulevard Dr.-Frederik-Philips, Saint-Laurent, QC H4M 2X6",
			"creator": users[9],
			"relevantSkills": ['finance'],
			"applicants": [users[0], users[7]]
		}]))
		.then(tasks => {
			console.log(`${tasks.length} tasks created`);
		});
	}
};
