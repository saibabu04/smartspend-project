const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use Render's dynamic port
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("✅ SmartSpend backend is running successfully!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
