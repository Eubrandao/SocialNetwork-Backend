# Social Network Backend Repository

## Microservices Architecture

This repository contains the backend implementation for a simple social network platform, designed using a microservices architecture. The project leverages NestJS, Kafka, and Docker to provide a scalable and modular solution for building a social networking application.

### Technologies Used

- [NestJS](https://nestjs.com/): A powerful Node.js framework for building server-side applications.
- [Kafka](https://kafka.apache.org/): A distributed streaming platform for building real-time data pipelines and streaming applications.
- [Docker](https://www.docker.com/): A platform for developing, shipping, and running applications in containers.

### Project Structure

The backend is organized into microservices, each serving a specific domain within the social network application. Here's an overview of the key components:

1. **Authentication and Authorization:**
   - Service responsible for user authentication and authorization.
   - Issues JWT tokens for secure communication with other services.

2. **User Management:**
   - Manages user registration, updates, and deletions.
   - Handles user profiles, including details such as name and profile picture.

3. **Posts and Feed:**
   - Service for managing user posts.
   - Logic for populating user feeds with relevant posts.


4. **Notifications:**
   - Generates and sends notifications to users (e.g., friendship accepted, new comment on a post).

5. **API Gateway:**
   - Gateway managing the routing of client requests to the different microservices.
   - Responsible for authentication and authorization of requests.

### Getting Started

To run the backend services locally, follow these steps:

1. Install dependencies: `npm install`
2. Start Docker containers: `docker-compose up`
3. Run each microservice: `cd "service name"`, `npm run start`, etc.

### Contributing

If you would like to contribute to the project, please follow our [contribution guidelines](CONTRIBUTING.md).

