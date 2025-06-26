const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,      
  getUserRecipes,
  searchRecipes,
  searchMyRecipes,
  updateRecipe,
  deleteRecipe,
  getVegRecipes,
  getRecipesByCategory,
  filterRecipes
} = require("../controllers/recipeController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createRecipe);
router.get("/", getAllRecipes);          
router.get("/my", auth, getUserRecipes);
router.get('/search', searchRecipes);
router.get('/my/search', auth, searchMyRecipes);
router.put("/:id", auth, updateRecipe);
router.delete("/:id", auth, deleteRecipe);
router.get('/veg/:isVeg', auth, getVegRecipes);
router.get('/category/:category', auth, getRecipesByCategory);
router.get('/filter', auth, filterRecipes);

module.exports = router;
