const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  author: { type: String, default: 'Quentin Mourrier' },
  body: String,
  creationDate: { type: Date, default: Date.now() }
});

mongoose.model('posts', postSchema);
