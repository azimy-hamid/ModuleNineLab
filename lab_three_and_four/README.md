# Social Media Express Application

A social media REST API application built with Node.js, Express, and Sequelize, featuring models for users, posts, comments, likes, and integration with a third-party user API. The application supports CRUD operations and includes pagination for retrieving user data.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)

---

## Installation

1. **Clone the repository and navigate to the root directory of this lab**

2. **Install dependencies:**

   npm install

3. **Set up your database and environment variables** in a `.env` file (see `Configuration`).

4. **Create a mysql database locally with the name you added in your .env file**

5. **Start the server:**
   npm start

## Configuration

Create a `.env` file in the root folder and add the following variables:

DB_HOST=localhost
DB_USER=your_db_username
DB_PASS=your_db_password
DB_NAME=any_db_name_you_like
DB_DIALECT=mysql

## Usage

- Run the app with `npm start`.
- Access the API via `http://localhost:3000`.

## API Documentation

## Routes

### User Routes

| Method | Endpoint                      | Description                  |
| ------ | ----------------------------- | ---------------------------- |
| POST   | `/api/users`                  | Register a new user          |
| GET    | `/api/users`                  | Get a list of all users      |
| GET    | `/api/users/:id`              | Get a specific user by ID    |
| PUT    | `/api/users/:id`              | Update a user by ID          |
| DELETE | `/api/users/:id`              | Delete a user by ID          |
| PUT    | `/api/users/recover-user/:id` | Recover a deleted user by ID |

### Post Routes

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/api/posts`     | Create a new post     |
| GET    | `/api/posts`     | Retrieve all posts    |
| GET    | `/api/posts/:id` | Retrieve a post by ID |
| PUT    | `/api/posts/:id` | Update a post by ID   |
| DELETE | `/api/posts/:id` | Delete a post by ID   |

### Comment Routes

| Method | Endpoint            | Description              |
| ------ | ------------------- | ------------------------ |
| POST   | `/api/comments`     | Create a new comment     |
| GET    | `/api/comments`     | Retrieve all comments    |
| GET    | `/api/comments/:id` | Retrieve a comment by ID |
| PUT    | `/api/comments/:id` | Update a comment by ID   |
| DELETE | `/api/comments/:id` | Delete a comment by ID   |

### Like Routes

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/api/likes`     | Like a post           |
| GET    | `/api/likes`     | Retrieve all likes    |
| GET    | `/api/likes/:id` | Retrieve a like by ID |
| DELETE | `/api/likes/:id` | Remove a like by ID   |

### External API Integration (User Data)

| Method | Endpoint                      | Description                                             |
| ------ | ----------------------------- | ------------------------------------------------------- |
| GET    | `/api/microservice/users`     | Retrieve paginated user data from the third-party API.  |
| GET    | `/api/microservice/users/:id` | Retrieve a specific user by ID from the third-party API |
