const moongoose = require('mongoose');


const noteSchema = moongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add title']
  },
  tagline: {
    type: String,
    required: [true, "Please Add tagline"]
  },
  body: {
    type: String,
    required: [true, "Please Add a Body"]
  },
  pinned: {
    type: Boolean,
    required: [false]
  }

})

module.exports = moongoose.model('Notes', noteSchema);