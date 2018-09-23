var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var organization = new Schema({
  name:         { type: String },
  id:           { type: Number },
  parentId:       { type: Number },
  year:         { type: Number },
  country:      { type: String },
  language:     { type: Number },
  logo:       { type: String },
  description:  { type: String },
  status:    { type: String, enum:
    ['A', 'H', 'D']
    }
});

module.exports = mongoose.model('Organization', organization);