const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/recipes', recipeRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('🔥 MongoDB connected');
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running at http://localhost:${process.env.PORT}`)
  );
}).catch(err => console.error('❌ DB connection failed', err));
