// Variables
var port = 3000;
var ipAddress = "127.0.0.1";

// Web framework to Nodejs application
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"), // JSON parser
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/organizations', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  else {
      console.log('DEBUG: Database connected');
  }
});

// Imports models
var organizationModel = require('./models/organization');


// Routes defined by Express v.4
var OrganizationsController = require('./controllers/organizations');

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Application started!");
});

app.use(router);

// API Routes

var organizations = express.Router();

organizations.route('/organizations')
.get(OrganizationsController.getAllOrganization)
.post(OrganizationsController.addOrganization);

app.use('/api', organizations);

app.listen(port, function() {
  console.log("Node server running on http://localhost:" + port);
});
