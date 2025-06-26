const User = require('../models/User');
const Recipe = require('../models/Recipe');

exports.bookmarkRecipe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const recipeId = req.params.id;
    const alreadyBookmarked = user.bookmarkedRecipes.includes(recipeId);

    if (alreadyBookmarked) {
      
      user.bookmarkedRecipes.pull(recipeId);
      await user.save();
      return res.json({ message: "Bookmark removed" });
    } else {
      
      user.bookmarkedRecipes.push(recipeId);
      await user.save();
      return res.json({ message: "Recipe bookmarked" });
    }
  } catch (err) {
    res.status(500).json({ message: "Bookmark failed", error: err.message });
  }
};

exports.getBookmarkedRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('bookmarkedRecipes');
    res.json(user.bookmarkedRecipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookmarks", error: err.message });
  }
};