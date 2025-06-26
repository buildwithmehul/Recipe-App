const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  ingredients: [String],
  steps: [String],
  imageUrl: String,
  isVeg: { type: Boolean, default: false },
  category: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: String,
      rating: { type: Number, min: 1, max: 5 }
    }
  ],
  averageRating: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Recipe", recipeSchema);

