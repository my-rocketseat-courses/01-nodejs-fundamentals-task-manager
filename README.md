# Task Manager API

A simple task manager API built with pure Node.js as part of the Node.js Fundamentals course challenge from Rocketseat. This project demonstrates the fundamentals of Node.js without using any external frameworks, showcasing the core capabilities of the platform.

## 🚀 Technologies Used

- **Node.js** - Runtime environment for JavaScript
- **Pure Node.js HTTP Module** - For creating the web server
- **File System (fs)** - For data persistence using JSON files
- **ES6 Modules** - Modern JavaScript module system
- **UUID** - For generating unique task identifiers

## 📋 Features

The API provides a complete CRUD (Create, Read, Update, Delete) system for task management:

- ✅ **Create Task** - Add new tasks with title and description
- ✅ **List Tasks** - Retrieve all existing tasks
- ✅ **Update Task** - Modify task title and description by ID
- ✅ **Delete Task** - Remove tasks by ID
- ✅ **Mark Task as Completed** - Toggle task completion status by ID
- ⏳ **Import Tasks from CSV** - Bulk import tasks (challenge feature)

## 🛠️ Project Structure

```
src/
├── server.js              # HTTP server setup and routing logic
├── routes.js              # API routes definition and handlers
├── database.js            # JSON-based database implementation
├── middlewares/
│   └── json.js           # JSON parsing middleware
└── utils/
    ├── build-route-path.js    # Route pattern builder
    └── extract-query-params.js # Query string parser
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/tasks` | List all tasks |
| `POST` | `/tasks` | Create a new task |
| `PUT` | `/tasks/:id` | Update an existing task |
| `PATCH` | `/tasks/:id/complete` | Mark task as completed |
| `DELETE` | `/tasks/:id` | Delete a task |

### Task Object Structure

```json
{
  "id": "uuid",
  "title": "Task title",
  "description": "Task description",
  "completed_at": null,
  "created_at": "2024-01-01T00:00:00.000Z",
  "updated_at": "2024-01-01T00:00:00.000Z"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)

### Installation & Running

1. Clone the repository
2. Navigate to the project directory
3. Run the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3333` with hot reload enabled.

## 💡 Learning Highlights

This project demonstrates fundamental Node.js concepts:

- **HTTP Server Creation** - Using the built-in `http` module
- **Request/Response Handling** - Manual parsing and routing
- **Middleware Pattern** - Custom JSON parsing middleware
- **File System Operations** - JSON-based data persistence
- **ES6 Modules** - Modern JavaScript import/export syntax
- **URL Pattern Matching** - Custom route matching with regex
- **Error Handling** - Basic HTTP status codes and error responses

## 📚 Course Information

This is the first challenge from the **Node.js Fundamentals** course, focusing on building applications with pure Node.js without external dependencies or frameworks like Express.js. The goal is to understand the core concepts and inner workings of Node.js before moving to higher-level abstractions.

## 🎯 Challenge Status

- [x] Create task
- [x] List tasks
- [x] Update task by `id`
- [x] Delete task by `id`
- [x] Mark task as completed by `id`
- [ ] Import tasks from CSV file upload
