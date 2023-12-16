const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title for a stye posting must be provided'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    enum: {
      values: ['red', 'yellow', 'green', 'blue', 'white', 'other'],
      message: '{VALUE} is not supported',
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Syles', styleSchema);
