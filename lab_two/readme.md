# ModuleNineLabTwo

## Overview

ModuleNineLabTwo is a simple blogging application that allows users to create accounts, write posts, and interact with posts through likes and comments. This application uses MongoDB for data storage, Mongoose for object modeling, and Express.js for handling server-side logic.

More Importantly, it only creates the db collections and let's user create users posts comments and likes through a very simple api. This API is not intended to serve as a full-fledged solution, rather,it's just there to make checking this lab easy.

## Features

- User registration
- Create posts
- Like posts
- Comment on posts

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Database Schema

### Users Collection

The Users collection stores user-related information.

```json
{
  "_id": "ObjectId",
  "username": "String",
  "email": "String",
  "password": "String",
  "profile_picture": "String",
  "created_at": "Date",
  "updated_at": "Date"
}
```

### Posts Collection

The Posts collection contains the blog posts created by users.

```json
{
  "_id": "ObjectId",
  "title": "String",
  "description": "String",
  "image_url": "String",
  "author_id": "ObjectId",
  "created_at": "Date",
  "updated_at": "Date"
}
```

### Likes Collection

The Likes collection records which users have liked which posts.

```json
{
  "_id": "ObjectId",
  "post_id": "ObjectId",
  "user_id": "ObjectId",
  "created_at": "Date",
  "updated_at": "Date"
}
```

### Comments Collection

The Comments collection stores comments made by users on posts.

```json
{
  "_id": "ObjectId",
  "post_id": "ObjectId",
  "user_id": "ObjectId",
  "content": "String",
  "created_at": "Date",
  "updated_at": "Date"
}
```

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:

   ```bash
   cd ModuleNineLabTwo
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

5. **Access the application**:

   Open your web browser and go to `http://localhost:3000`.

## API Endpoints

### Users

- **Create User**: `POST /users`
- **Get All Users**: `GET /users/:id`

### Posts

- **Create Post**: `POST /posts`

### Likes

- **Like a Post**: `POST /likes`

### Comments

- **Comment on a Post**: `POST /comments`

## Conclusion

There is no frontend created for this as it wasn't a requirement for the lab.
This lab required the db models to be implemented using mongodb, and and api also wasn't a requirment it's implemented for easy checking.
