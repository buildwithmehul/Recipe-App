const Recipe = require("../models/Recipe");

exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({
      title: req.body.title,
      description: req.body.description,
      ingredients: req.body.ingredients,
      steps: req.body.steps,
      imageUrl: req.body.imageUrl,
      isVeg: req.body.isVeg,
      category: req.body.category,
      createdBy: req.user.id,
    });
  
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: "Error creating recipe", error: err.message });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate('createdBy', 'name')       
      .sort({ createdAt: -1 });            
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch all recipes", error: err.message });
  }
};

exports.getUserRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ createdBy: req.user.id });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recipes", error: err.message });
  }
};
exports.getVegRecipes = async (req, res) => {
  try {
    const isVeg = req.params.isVeg === 'true'; 
    const recipes = await Recipe.find({
      createdBy: req.user.id,
      isVeg: isVeg
    });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch veg/non-veg recipes", error: err.message });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe)
      return res.status(404).json({ message: "Recipe not found" });

    if (recipe.createdBy.toString() !== req.user.id)
      return res.status(403).json({ message: "You are not allowed to update this recipe" });

    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe)
      return res.status(404).json({ message: "Recipe not found" });

    if (!recipe.createdBy || recipe.createdBy.toString() !== req.user.id)
      return res.status(403).json({ message: "You are not authorized to delete this recipe" });

    await recipe.deleteOne();
    res.json({ message: "Recipe deleted successfully" });

  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
exports.getRecipesByCategory = async (req, res) => {
  try {
    const recipes = await Recipe.find({
      createdBy: req.user.id,
      category: req.params.category
    });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch recipes", error: err.message });
  }
};
exports.filterRecipes = async (req, res) => {
  const { category, isVeg } = req.query;
  const filter = { createdBy: req.user.id };

  if (category) filter.category = category;
  if (isVeg !== undefined) filter.isVeg = isVeg === 'true';

  try {
    const recipes = await Recipe.find(filter);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Filter failed', error: err.message });
  }
};