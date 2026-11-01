const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express()

app.disable("x-powered-by")

app.use(helmet())

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
)

app.use(express.json({limit: "100kb"}))

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TeamOS AI API is running",
    timestamp: new Date().toISOString(),
  })
})

app.use((req, res) =>{
    res.status(404).json({
        message: "Route not found",
        success: false,
        timestamp: new Date().toISOString()
    })
})

module.exports = app