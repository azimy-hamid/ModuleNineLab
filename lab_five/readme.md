# Chat App Documentation

## Overview

This is a real-time chat application built using **Node.js**, **Express.js**, and **Socket.io** for real-time communication between users. The app allows users to set their nickname, send messages, and see messages from other users in real-time.

## Features

- **Set Nickname**: Users must set a unique nickname to start chatting.
- **Real-time Messaging**: Messages are broadcasted to all connected users in real-time.
- **User Notifications**: When a user joins or leaves the chat, others are notified.
- **Typing Status**: Displays when a user is typing.

## Prerequisites

Before running the app, you need to have the following installed on your system:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm** (Node Package Manager): It comes with Node.js, so you don't need to install it separately.

## Installation

1. Clone the repository or download the project files.

   ```bash
   git clone git@github.com:azimy-hamid/ModuleNineLab.git
   ```

2. Navigate to the project directory.

   ```bash
   cd lab_five
   ```

3. Install the dependencies.
   ```bash
   npm install
   ```

## Running the App

To start the chat app, use the following command:

```bash
npm start
```

This will start the server, and you can access the chat application by navigating to `http://localhost:3000` in your browser.

## Dependencies

- **express**: Web framework for Node.js.
- **socket.io**: Enables real-time, bidirectional communication between clients and server.

## How It Works

1. The app serves an HTML page to the user via Express.js.
2. The user sets a nickname, and upon doing so, a WebSocket connection is established using **Socket.io**.
3. Messages are sent via WebSocket, allowing real-time communication between users.
4. The app listens for typing events and broadcasts typing notifications to other users.
5. When a user sends a message, it is displayed in the chat window.
