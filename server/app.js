// server/app.js

import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/hello", (req, res) => {
  res.send("Welcome to the Users API!");
});

// Hardcoded user route
app.get("/users", async (req, res) => {
try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const randomUser = data.results[0];
     res.json(randomUser);
} catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
}

 
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

