/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
	'projects': [
		{ 	'name': 'Waiting in Line',
		    'image': 'lorempixel.people.1.jpeg',
		    'id': 'project1'
		},
		{ 	'name': 'Needfinding',
			'image': 'lorempixel.city.1.jpeg',
			'id': 'project2'
		},
		{ 	'name': 'Prototyping',
			'image': 'lorempixel.technics.1.jpeg',
			'id': 'project3'
		},
		{ 	'name': 'Heuristic Evaluation',
			'image': 'lorempixel.abstract.1.jpeg',
			'id': 'project4'
		},
		{ 	'name': 'Skeleton and a Plan',
			'image': 'lorempixel.abstract.8.jpeg',
			'id': 'project5'
		},
		{ 	'name': 'Meat on the Bones',
			'image': 'lorempixel.people.2.jpeg',
			'id': 'project6'
		},
		{ 	'name': 'Ready for Testing',
			'image': 'lorempixel.technics.2.jpeg',
			'id': 'project7'
		},
		{ 	'name': 'User Test Results and Online Test Proposal',
			'image': 'lorempixel.city.2.jpeg',
			'id': 'project8'
		}    	
	]
  });
};
