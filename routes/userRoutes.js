const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  bookmarkRecipe,
  getBookmarkedRecipes
} = require('../controllers/userController');

router.post('/bookmark/:id', auth, bookmarkRecipe);
router.get('/bookmarks', auth, getBookmarkedRecipes);

module.exports = router;