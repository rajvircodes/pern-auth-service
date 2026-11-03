# PERN Auth

A React and Express authentication app using PostgreSQL.

## Setup

1. Create a PostgreSQL database and a `users` table:

   ```sql
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT UNIQUE NOT NULL,
     password TEXT NOT NULL
   );
   ```

2. Copy `backend/.env.example` to `backend/.env` and set your database credentials, `JWT_SECRET`, and `CLIENT_URL` (usually `http://localhost:5173`).
3. Install dependencies and start the backend:

   ```bash
   cd backend
   npm install
   npm run dev
   ```

4. In another terminal, start the frontend:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

The frontend uses `http://localhost:5000/api/auth` by default. Set `VITE_API_URL` to override it.
