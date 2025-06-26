# 🍲 Recipe App Backend

> A clean, feature-rich **Node.js + Express.js** backend for a community-driven recipe sharing platform. Built as part of a backend internship to demonstrate real-world REST API design, authentication, user-based content, and social features like bookmarks and reviews.

---

## 🚀 Features

- 🔐 **User Authentication** (Register/Login with JWT)
- 🍽️ **Create / Read / Update / Delete Recipes**
- 🏷️ **Categorize Recipes** (veg/non-veg + category/tag support)
- 🔍 **Search Recipes** (by title or ingredients, optional category)
- 👤 **View Personal Recipes**
- 🌐 **Public Recipe Feed**
- 📌 **Bookmark Recipes** (save/unsave functionality)
- 💬 **Review & Rating System** (comment + star rating)
- ✅ **Secure Routes** with Middleware

---

## 🛠️ Tech Stack

- **Backend:** Node.js + Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT (JSON Web Tokens)
- **Image URLs:** Stored as string (upload feature can be added)
- **Tested with:** Postman

---

## 📁 Folder Structure

```
recipe-app-backend
├── controllers/
│   ├── authController.js
│   ├── recipeController.js
│   └── userController.js
├── models/
│   ├── User.js
│   └── Recipe.js
├── routes/
│   ├── authRoutes.js
│   ├── recipeRoutes.js
│   └── userRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── server.js
└── .env
```

---

## 🔐 Authentication

- Register and login routes return a **JWT token**
- Protected routes use `Authorization: Bearer <token>`
- Middleware verifies the token and attaches `req.user`

---

## 📦 API Endpoints (Highlights)

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login & get JWT |
| POST | `/api/recipes` | Create recipe (auth) |
| GET | `/api/recipes` | View all recipes |
| GET | `/api/recipes/my` | View user’s recipes (auth) |
| GET | `/api/recipes/search?q=paneer&category=Snack` | Search |
| PUT | `/api/recipes/:id` | Update recipe (auth + owner only) |
| DELETE | `/api/recipes/:id` | Delete recipe (auth + owner only) |
| POST | `/api/users/bookmark/:id` | Toggle bookmark (auth) |
| GET | `/api/users/bookmarks` | View saved recipes |
| POST | `/api/recipes/:id/reviews` | Add review + rating |

---

## 🔧 Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/buildwithmehul/Recipe-App.git
cd Recipe-App
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/recipe-app
JWT_SECRET=your_jwt_secret
```

4. **Start the server**
```bash
npm start
```

---

## 💡 Future Extensions

- Draft / Archived Recipes
- Admin panel (moderate users/recipes)
- Image upload to Cloudinary
- Trending / top-rated recipes
- Full Android frontend (in development)

---

## 🤝 Credits

Built by [**Mehul Khanna**](https://github.com/buildwithmehul)  

Part of a backend internship project — not just for completion, but for **mastery** 💪

---

## 🧠 Tips for Reviewers 

This project is:
- Authenticated ✅
- Token-protected ✅
- Well-structured REST API ✅
- Fully documented ✅
- Ready to integrate with Android frontend ✅

---

## ⭐ If you liked this project…

Star it ⭐  
Fork it 🍴  
Or DM me to collaborate 🤝
