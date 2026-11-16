const validationMiddleware = (req, res, next) => {
    const { title, description, status, priority, assignee_id } = req.body;
console.log("VALIDATION MIDDLEWARE ÇALIŞTI:", req.body);
    if (!title || typeof title !== "string" || !title.trim()) {
        return res.status(400).json({
            success: false,
            message: "Task title is required and must be a valid text."
        });
    }

    if (description !== undefined && typeof description !== "string") {
        return res.status(400).json({
            success: false,
            message: "Description must be a text."
        });
    }

    
    const validStatuses = ["PENDING", "IN_PROGRESS", "COMPLETED"];

    if (status !== undefined && !validStatuses.includes(status)) {
        return res.status(400).json({
            success: false,
            message: "Status must be PENDING, IN_PROGRESS or COMPLETED."
        });
    }

    const validPriorities = ["LOW", "MEDIUM", "HIGH"];

    if (priority !== undefined && !validPriorities.includes(priority)) {
        return res.status(400).json({
            success: false,
            message: "Priority must be LOW, MEDIUM or HIGH."
        });
    }

    if (
        assignee_id !== undefined &&
        assignee_id !== null &&
        (!Number.isInteger(Number(assignee_id)) || Number(assignee_id) <= 0)
    ) {
        return res.status(400).json({
            success: false,
            message: "Assignee ID must be a valid positive number."
        });
    }

    next();
};

module.exports = validationMiddleware;