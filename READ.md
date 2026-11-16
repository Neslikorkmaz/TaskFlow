
# TaskFlow API

TaskFlow is a RESTful task management API developed using Node.js, Express.js, and PostgreSQL.

## Technologies

- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv
- Postman

## Features

- Create a task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- Search tasks by keyword
- Input validation middleware
- Request logging middleware

## Project Structure

```text
TaskFlow/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskflow_db
DB_USER=your_database_user
DB_PASSWORD=your_database_password
```

4. Start the application:

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get task by ID |
| GET | /api/tasks/search?keyword=value | Search tasks |
| POST | /api/tasks | Create a task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Example Request

POST `/api/tasks`

```json
{
  "title": "Complete project",
  "description": "Finish TaskFlow API",
  "status": "PENDING",
  "priority": "HIGH",
  "assignee_id": 1
}
```

## Validation

The API validates task data before creating or updating tasks.

Valid statuses:
- PENDING
- IN_PROGRESS
- COMPLETED

Valid priorities:
- LOW
- MEDIUM
- HIGH
