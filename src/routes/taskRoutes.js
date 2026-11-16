const express = require("express");

const router = express.Router();

const taskController = require("../controllers/taskControllers");

const validationMiddleware = require("../middlewares/validationMiddleware");

router.get("/", taskController.getAllTasks);

router.get("/search", taskController.searchTasks);

router.get("/:id", taskController.getTaskById);

router.post("/", validationMiddleware, taskController.createTask);

router.put("/:id", validationMiddleware, taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
