//File: controllers/organizations.js
var mongoose = require('mongoose');
var Organization = mongoose.model('Organization');

//GET - Return all organizations in the DB
exports.getAllOrganization = function(req, res) {
	Organization.find(function(err, organizations) {
    if(err) res.send(500, err.message);

    console.log('GET /organizations')
		res.status(200).jsonp(organizations);
	});
};

// GET - Return selected organization
exports.findById = function(req, res) {
	Organization.findById(req.params.id, function(err, organization) {
    if(err) return res.send(500, err.message);

    console.log('GET /organization/' + req.params.id);
		res.status(200).jsonp(organization);
	});
};

//POST - Insert a new organization in the DB
exports.addOrganization = function(req, res) {
	console.log('POST: addOrganization');
	console.log(req.body);

	var organization = new Organization({
		name: req.body.name,
		id: _id,
		
	});

	organization.save(function(err, organization) {
		if(err) return res.status(500).send( err.message);
    	res.status(200).jsonp(organization);
	});
};