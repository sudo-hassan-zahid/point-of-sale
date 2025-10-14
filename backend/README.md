# 🧾 POS Backend (Express + Prisma + PostgreSQL)

## 📘 Overview

This is the backend for the Point of Sale (POS) system, built with:

- **Node.js + Express** — RESTful API framework
- **Prisma ORM** — for type-safe database access
- **PostgreSQL** — relational database
- **Swagger** — for interactive API documentation

The backend currently includes:

- Product CRUD module (Create, Read, Update, Delete)
- Connected PostgreSQL database via Prisma
- Auto-generated Swagger documentation for all endpoints

## 📁 Project Structure

```
backend/
│
├── prisma/
│   ├── schema.prisma         # Prisma schema definition
│   └── seed.ts               # Optional seeding script
│
├── src/
│   ├── app.ts                # Express app setup
│   ├── index.ts              # Entry point
│   ├── prisma/
│   │   └── client.ts         # Prisma client instance
│   ├── routes/
│   │   └── productRoutes.ts  # Product endpoints
│   ├── controllers/
│   │   └── productController.ts
│   ├── services/
│   │   └── productService.ts
│   └── swagger.ts            # Swagger docs setup
│
├── .env                      # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

## ⚙️ Environment Variables

Create a `.env` file in the backend root:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/pos_db"
PORT=5000
```

For local testing, you can use `.env.example` as a template.

## 🚀 Setup & Run

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Generate Prisma client

```bash
npx prisma generate
```

### 3️⃣ Run database migrations

```bash
npx prisma migrate dev
```

### 4️⃣ Start the development server

```bash
npm run dev
```

Your server should start at: **http://localhost:5000**

## 🧭 Swagger API Docs

After running the server, visit:

👉 **http://localhost:5000/api-docs**

You'll see an interactive Swagger UI with all available endpoints (currently Product CRUD). This documentation is automatically generated using `swagger-jsdoc` and `swagger-ui-express`.

## 🧱 Example Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| GET    | `/api/products/:id` | Get product by ID    |
| POST   | `/api/products`     | Create a new product |
| PUT    | `/api/products/:id` | Update a product     |
| DELETE | `/api/products/:id` | Delete a product     |

## 🧰 Tech Stack

| Layer         | Tool              |
| ------------- | ----------------- |
| Runtime       | Node.js (Express) |
| ORM           | Prisma            |
| Database      | PostgreSQL        |
| Documentation | Swagger           |
| Language      | TypeScript        |
| Dev tools     | Nodemon, ts-node  |

## 🧑‍💻 Development Commands

| Command                  | Description                 |
| ------------------------ | --------------------------- |
| `npm run dev`            | Run server with nodemon     |
| `npm run build`          | Compile TypeScript to JS    |
| `npm run start`          | Run compiled server         |
| `npx prisma studio`      | Open Prisma Studio (DB GUI) |
| `npx prisma migrate dev` | Apply DB migrations         |

---

**Happy coding! 🚀**
