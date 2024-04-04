<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Improcode API

## Prerequisites

Having installed docker in your computer

## Steps
1. Clone Project

2. Run ```npm install```

3. Run MongoDB
```
docker-compose up -d
```

4. Execute a SEED with a POST request to fill the DB with test data 
```
http://localhost:3000/api/seed
```

5. Run the app: ```npm run start:dev```
