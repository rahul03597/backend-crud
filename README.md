This is a full-stack CRUD application built with:

Backend: Node.js, Express.js, MongoDB
Frontend: Angular 18+
This project enables users to Create, Read, Update, and Delete (CRUD) records using a RESTful API.







Technologies Used

Backend:

Node.js

Express.js

MongoDB & Mongoose

Frontend:


Angular 18+

Others:

Postman (for API testing)


Getting Started

Prerequisites

Make sure you have the following installed:

Node.js

MongoDB (or MongoDB Atlas for cloud-based DB)

Angular CLI

Backend Setup

Clone the Repository

bash

Copy code

git clone <your-repository-url>

cd express-four

Install Backend Dependencies

bash

Copy code

npm install

Setup MongoDB Connection

Create a .env file in the root directory with the following variables:

bash
Copy code
PORT=3000

MONGO_URI=mongodb://localhost:27017/your-database-name

Run the Backend Server

bash
Copy code
npm start

The server will run on http://localhost:3000.


Frontend Setup


Navigate to the Frontend Directory

bash
Copy code
cd frontend  # Adjust this if your frontend is in a different directory
Install Frontend Dependencies

bash
Copy code
npm install
Run the Angular Application

bash
Copy code
ng serve
The Angular app will run on http://localhost:4200.

API Endpoints

Base URL: http://localhost:3000/api

Method	Endpoint	Description

GET	/product	Get all products

GET	/product/:id	Get product by ID

POST	/product	Add a new product

PUT	/product/:id	Update product by ID

DELETE	/product/:id	Delete product by ID


Project Structure
bash
Copy code
express-four/
│

├── backend/

│   ├── controllers/


│   │   └── productController.js   # Product controller logic


│   ├── models/


│   │   └── productModel.js        # Mongoose model for products


│   ├── routes/

│   │   └── productRoutes.js       # API routes for products


│   ├── server.js                  # Entry point for the backend

│   └── .env                       # Environment variables
│




├── frontend/

│   ├── src/

│   │   └── app/


│   │       ├── components/        # Angular components


│   │       ├── services/          # Angular services for API calls


│   │       └── app.module.ts      # Main Angular module


└── README.md                      # Project documentation

