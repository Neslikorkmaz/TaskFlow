const express = require("express");

const taskRoutes = require("./routes/taskRoutes");

const loggerMiddleware = require("./middlewares/loggerMiddleware");

const app = express();

app.use(express.json());

app.use(loggerMiddleware);

app.get("/", (req, res) => {
    res.send("Welcome to TaskFlow API!");
});

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "TaskFlow API is running!"
    });
});

app.use("/api/tasks", taskRoutes);


module.exports = app;
