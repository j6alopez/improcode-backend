<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Improcode API

## 📃 Overview

ImproCode is an Angular application that provides a platform for managing races. It allows users to create, update, and delete participants, each with its  details. The application includes features for visualizing race data through various charts, a calendar view and a map with saved locations.


## Prerequisites

Ensure you have the following installed on your computer:

- Docker 🐳

## Getting Started

Follow the steps to set up and run the Improcode API:

### 1. Clone the Project

Clone the Improcode project repository to your local machine:

## Steps
1. Clone the repository on your local machine

2. Run ```npm install```

3. Run MongoDB
```
docker-compose up -d
```
4. Run the app: ```npm run start:dev```

5. Execute a SEED with a POST request to fill the DB with test data 
```
http://localhost:3000/api/v1/seed
```

## 🛠️ Technology

- NestJS
- API REST
