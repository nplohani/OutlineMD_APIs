const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create schema for template


const templateSchema = new Schema({
 semester_id: Schema.Types.ObjectId,
 user_id: Schema.Types.ObjectId,
 creator: String,
 category: Array,
 section: Array
}, {
    timestamps: true
});


module.exports = mongoose.model('Template', templateSchema);

