# CRUD API with Node.js, Express, and MongoDB

This is a robust RESTful CRUD (Create, Read, Update, Delete) API built using Node.js and the Express framework. It integrates with MongoDB via Mongoose for efficient data modeling and management.

## Features

- **Full CRUD Functionality**: Manage products with ease.
- **MVC Architecture**: Organized codebase with separate concerns for Models, Controllers, and Routes.
- **ES Modules**: Modern JavaScript syntax using `import`/`export`.
- **Database Integration**: Seamless connection to MongoDB Atlas.
- **Middleware**: Includes built-in Express middleware for JSON and URL-encoded data parsing.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

##  Project Structure

```text
CRUD_API/
├── controllers/
│   └── product.controller.js  # Request handling logic
├── models/
│   └── product.model.js       # Mongoose schema and model
├── routes/
│   └── product.route.js       # API route definitions
├── index.js                   # Application entry point
└── README.md                  # Project documentation
```

##  API Endpoints

### Products

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/products` | Retrieve all products |
| **GET** | `/api/products/:id` | Retrieve a single product by ID |
| **POST** | `/api/products` | Create a new product |
| **PUT** | `/api/products/:id` | Update an existing product |
| **DELETE** | `/api/products/:id` | Delete a product |

### Product Schema

```json
{
  "name": "String (Required)",
  "quantity": "Number (Default: 0)",
  "price": "Number (Default: 0)",
  "image": "String (Optional)"
}
```

## 🏁 How to Run

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up MongoDB**:
   Ensure your MongoDB connection string is correctly configured in `index.js`.
4. **Start the server**:
   ```bash
   npm run dev
   ```
   *The server will start on `http://localhost:3000`.*