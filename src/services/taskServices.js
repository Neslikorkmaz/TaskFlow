const taskModel = require("../models/taskModel");

const getAllTasks = async () => {
    return await taskModel.getAllTasks();
};


const getTaskById = async (id) => {
    const task = await taskModel.getTaskById(id);

    if (!task) {
        throw new Error("Task not found");
    }

    return task;
};


const createTask = async (taskData) => {
    if (!taskData.title) {
        throw new Error("Task title is required");
    }

    return await taskModel.createTask(taskData);
};

const updateTask = async (id, taskData) => {
    const existingTask = await taskModel.getTaskById(id);

    if (!existingTask) {
        throw new Error("Task not found");
    }

    return await taskModel.updateTask(id, taskData);
};

const deleteTask = async (id) => {
    const existingTask = await taskModel.getTaskById(id);

    if (!existingTask) {
        throw new Error("Task not found");
    }

    return await taskModel.deleteTask(id);
};

const searchTasks = async (keyword) => {
    if (!keyword || !keyword.trim()) {
        throw new Error("Search keyword is required");
    }

    return await taskModel.searchTasks(keyword.trim());
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    searchTasks
};
