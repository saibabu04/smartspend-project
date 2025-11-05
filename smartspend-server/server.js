const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Allow your frontend domain (and localhost for testing)
app.use(
  cors({
    origin: [
      "https://smartspend-app.onrender.com", // your deployed frontend (Render)
      "http://localhost:3000" // optional: for local development
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ✅ Parse incoming JSON requests
app.use(express.json());

// ✅ Use Render's dynamic port
const PORT = process.env.PORT || 5000;

// ✅ Simple route to verify backend is working
app.get("/", (req, res) => {
  res.send("✅ SmartSpend backend is running successfully!");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
