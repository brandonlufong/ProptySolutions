var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var stateSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('States', stateSchema);