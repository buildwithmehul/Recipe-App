const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getUserRecipes,
  updateRecipe,
  deleteRecipe,
  getVegRecipes,
  getRecipesByCategory,
  filterRecipes
} = require("../controllers/recipeController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createRecipe);
router.get("/", auth, getUserRecipes);
router.put("/:id", auth, updateRecipe);
router.delete("/:id", auth, deleteRecipe);
router.get('/veg/:isVeg', auth, getVegRecipes);
router.get('/category/:category', auth, getRecipesByCategory);
router.get('/filter', auth, filterRecipes);

module.exports = router;
