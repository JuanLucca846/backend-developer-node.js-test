# Backend Challenge

This project is a simple API to manage Users, i got this challenge from: https://github.com/Wiredcraft/test-backend

Features

```bash
Get all users.
Get a specific user by ID.
Create a new user with a name, dob(date of birth), address, and description.
Edit an existing user by providing the ID and updated details.
Delete an existing user by providing the ID.
```

### Technologies!

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

#### Installation

```bash
$ npm install
```

### Running the app

```bash
# build
$npx tsc

# development
$ npm run serve

# tests
$ npm run test
```

### API end points

```bash
    GET /users: List all users.
    GET /user/:id: Get a specific user.
    POST /user: Create a new user.
    PUT /user/:id: Update an existing user.
    DELETE /user/:id: Delete an existing user.
```

### Examples

```bash
POST /user

Request Body:
{
  "name": "Test",
  "dob": "05/06/1998",
  "address": "SP",
  "description": "teste"
}

PUT /user/:id

Request Body:
{
  "name": "Updated Test",
  "dob": "05/06/1998",
  "address": "Updated SP",
  "description": "Updated teste"
}
```

### Enviroment

```bash
PORT=3000
DB_USER=
DB_PASS=
```
