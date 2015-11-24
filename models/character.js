var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://benjamh:sumo1028@ds053954.mongolab.com:53954/heroku_nh9c762n';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

  var characterSchema = new mongoose.Schema({
    characterId: { type: String, unique: true, index: true },
    name: String,
    race: String,
    gender: String,
    bloodline: String,
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    reports: { type: Number, default: 0 },
    random: { type: [Number], index: '2d' },
    voted: { type: Boolean, default: false }
  });

  module.exports = mongoose.model('Character', characterSchema);
}
