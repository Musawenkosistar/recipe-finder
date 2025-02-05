const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipes");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
require('dotenv').config();

const axios = require('axios');

app.get('/api/recipes', async (req, res) => {
  try {
    const { query } = req.query;
    const API_KEY = process.env.RECIPE_API_KEY;
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching recipes' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
