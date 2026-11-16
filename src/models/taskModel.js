const pool = require("../config/db");

const getAllTasks = async () => {
    const result = await pool.query(
        "SELECT * FROM tasks ORDER BY created_at DESC"
    );

    return result.rows;
};


const getTaskById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM tasks WHERE id = $1",
        [id]
    );

    return result.rows[0];
};


const createTask = async (task) => {
    const { title, description, status, priority, assignee_id } = task;

    const result = await pool.query(
        `INSERT INTO tasks
        (title, description, status, priority, assignee_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [
            title,
            description,
            status || "PENDING",
            priority || "MEDIUM",
            assignee_id || null
        ]
    );

    return result.rows[0];
};


const updateTask = async (id, task) => {
    const { title, description, status, priority, assignee_id } = task;

    const result = await pool.query(
        `UPDATE tasks
         SET title = $1,
             description = $2,
             status = $3,
             priority = $4,
             assignee_id = $5,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $6
         RETURNING *`,
        [title, description, status, priority, assignee_id, id]
    );

    return result.rows[0];
};


const deleteTask = async (id) => {
    const result = await pool.query(
        "DELETE FROM tasks WHERE id = $1 RETURNING *",
        [id]
    );

    return result.rows[0];
};

const searchTasks = async (keyword) => {
    const result = await pool.query(
        `SELECT * FROM tasks
         WHERE title ILIKE $1
         OR description ILIKE $1
         ORDER BY created_at DESC`,
        [`%${keyword}%`]
    );

    return result.rows;
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    searchTasks
};
