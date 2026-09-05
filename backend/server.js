
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Routes 
const dateRoutes = require("./routes/dateRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

// Connect MongoDB 
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes 
app.use("/api/dates", dateRoutes);
app.use("/api/admin", adminRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Date Scheduling Backend is running ❤️");
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

