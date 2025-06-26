const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  bookmarkedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
});

module.exports = mongoose.model('User', userSchema);

