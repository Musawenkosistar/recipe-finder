import React from "react";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-5">
      {/* Header */}
      <h1 className="header text-3xl">🍽️ Recipe Finder</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="border border-gray-300 p-2 mt-5 rounded w-80 text-lg"
      />

      {/* Recipe Cards Example */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        <div className="recipe-card">
          <h2 className="text-xl font-bold">Spaghetti Bolognese</h2>
          <p className="text-gray-600">Pasta, Meat, Tomato Sauce</p>
          <button className="button mt-3">View Recipe</button>
        </div>

        <div className="recipe-card">
          <h2 className="text-xl font-bold">Chicken Curry</h2>
          <p className="text-gray-600">Chicken, Curry, Coconut Milk</p>
          <button className="button mt-3">View Recipe</button>
        </div>
      </div>
    </div>
  );
}

export default App;
