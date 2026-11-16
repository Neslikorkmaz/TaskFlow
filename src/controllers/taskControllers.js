const taskService = require("../services/taskServices");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getTaskById = async (req, res) => {
    try {
        const task = await taskService.getTaskById(req.params.id);

        res.status(200).json(task);
    } catch (error) {
        const status = error.message === "Task not found" ? 404 : 500;

        res.status(status).json({
            message: error.message
        });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);

        res.status(201).json(task);
    } catch (error) {
        const status = error.message === "Task title is required" ? 400 : 500;

        res.status(status).json({
            message: error.message
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await taskService.updateTask(
            req.params.id,
            req.body
        );

        res.status(200).json(task);
    } catch (error) {
        const status = error.message === "Task not found" ? 404 : 500;

        res.status(status).json({
            message: error.message
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await taskService.deleteTask(req.params.id);

        res.status(200).json({
            message: "Task deleted successfully",
            task
        });
    } catch (error) {
        const status = error.message === "Task not found" ? 404 : 500;

        res.status(status).json({
            message: error.message
        });
    }
};

const searchTasks = async (req, res) => {
    try {
        const { keyword } = req.query;

        const tasks = await taskService.searchTasks(keyword);

        res.status(200).json(tasks);

    } catch (error) {
        const status = error.message === "Search keyword is required" ? 400 : 500;

        res.status(status).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    searchTasks
};
