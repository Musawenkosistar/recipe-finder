const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipe');

connectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/recipes', recipe;
app.use(errorHandler);
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
