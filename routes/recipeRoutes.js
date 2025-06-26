const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getUserRecipes,
  updateRecipe,
  deleteRecipe
} = require("../controllers/recipeController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createRecipe);
router.get("/", auth, getUserRecipes);
router.put("/:id", auth, updateRecipe);
router.delete("/:id", auth, deleteRecipe);

module.exports = router;
