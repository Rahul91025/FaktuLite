# FaktuLite

A full-stack web application built with Node.js/Express backend and React frontend, designed for managing text content, pricelists, and user authentication. The application supports multi-language functionality and uses Supabase as the database.

## Features

- **User Authentication**: Secure login and registration with JWT tokens
- **Text Management**: CRUD operations for text content
- **Pricelist Management**: Manage and display pricing information
- **Multi-language Support**: Language switching functionality (English and other languages)
- **Responsive Design**: Mobile-friendly user interface
- **RESTful API**: Well-structured backend API endpoints

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Supabase** - Database and authentication
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn
- Supabase account and project

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd FaktuLite
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following variables:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. **Set up Supabase:**
   - Create tables for users, texts, and pricelists in your Supabase project
   - Configure authentication settings

## Usage

1. **Start the backend server:**
   ```bash
   cd backend
   npm run dev
   ```
   The server will run on `http://localhost:5000`

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

3. **Build for production:**
   ```bash
   cd frontend
   npm run build
   ```

## Deployment on Render

This application is configured for deployment on Render as a full-stack application. The backend serves both the API and the built frontend static files.

### Backend Deployment (Web Service)

1. **Create a new Web Service** on Render connected to your GitHub repository
2. **Build Command:** `npm install`
3. **Start Command:** `npm start`
4. **Environment Variables:**
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `JWT_SECRET`: A secure JWT secret key
   - `PORT`: (Optional, defaults to 10000 on Render)

The backend will automatically build the frontend during deployment and serve it.

### Frontend Configuration

The frontend is configured with:
- SPA routing support via `_redirects` file
- React Router for client-side navigation
- Production API calls pointing to the deployed backend

### Important Notes

- The frontend `.env` file is gitignored to prevent exposing sensitive data
- All API calls in the frontend are configured to use the production backend URL
- The application supports direct navigation to routes like `/login`, `/about`, etc.

## Deployment on Render

This application is configured for deployment on Render as separate services: a Web Service for the backend and a Static Site for the frontend.

### Prerequisites
- Render account
- Supabase project set up

### Deployment Steps

1. **Connect your repository to Render:**
   - Go to your Render dashboard and create a new Web Service
   - Connect your GitHub repository

2. **Configure the service:**
   - **Runtime:** Node.js
   - **Build Command:** `npm run build` (this will build the frontend)
   - **Start Command:** `npm start`
   - **Root Directory:** `backend`

3. **Set environment variables in Render:**
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `JWT_SECRET`: A secure JWT secret key
   - `PORT`: Will be set automatically by Render

4. **Deploy:**
   - Render will automatically build and deploy your application
   - The backend will serve the built frontend static files

### Notes
- The backend serves the frontend from the `../frontend/dist` directory
- All API routes are prefixed with `/api`
- SPA routing is handled by serving `index.html` for non-API routes

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Texts
- `GET /api/texts` - Get all texts
- `POST /api/texts` - Create new text (protected)
- `PUT /api/texts/:id` - Update text (protected)
- `DELETE /api/texts/:id` - Delete text (protected)

### Pricelist
- `GET /api/pricelist` - Get pricelist
- `POST /api/pricelist` - Create pricelist item (protected)
- `PUT /api/pricelist/:id` - Update pricelist item (protected)
- `DELETE /api/pricelist/:id` - Delete pricelist item (protected)

## Project Structure

```
FaktuLite/
├── backend/
│   ├── controllers/
│   │   ├── auth.js
│   │   ├── texts.js
│   │   └── pricelist.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── texts.js
│   │   └── pricelist.js
│   ├── db.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Terms.jsx
│   │   │   └── Pricelist.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Scripts

### Backend Scripts
- `npm start` - Start the production server
- `npm run build` - Build the frontend for production
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (currently not implemented)

### Frontend Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

## Deployment on Render

This application is configured for deployment on Render as a single Web Service that serves both the backend API and the built frontend.

### Prerequisites
- Render account
- Supabase project set up with required tables

### Backend Deployment (Web Service)

1. **Create Backend Web Service:**
   - Go to Render dashboard → "New +" → "Web Service"
   - Connect your GitHub repository
   - **Name:** faktulite-backend (or your preferred name)
   - **Runtime:** Node
   - **Build Command:** `cd frontend && yarn install && yarn build`
   - **Start Command:** `cd backend && npm start`
   - **Root Directory:** Leave empty (project root)

2. **Set Environment Variables for Backend:**
   - `SUPABASE_URL` - Your Supabase project URL
   - `SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - `JWT_SECRET` - A secure random string for JWT signing
   - `NODE_ENV` - Set to `production`

3. **Deploy Backend:**
   - Click "Create Web Service"
   - Note the backend URL (e.g., https://faktulite-backend.onrender.com)

### Frontend Deployment (Static Site)

1. **Create Frontend Static Site:**
   - Go to Render dashboard → "New +" → "Static Site"
   - Connect your GitHub repository
   - **Name:** faktulite-frontend (or your preferred name)
   - **Build Command:** `cd frontend && yarn install && yarn build`
   - **Publish Directory:** `frontend/dist`

2. **Deploy Frontend:**
   - Click "Create Static Site"
   - The frontend will be accessible at your static site URL

### Alternative: Single Web Service (Backend serves Frontend)

If you prefer a single service, use the Web Service configuration above. The backend will serve the built frontend files.

### Notes
- Update your frontend API calls to use the backend service URL
- Ensure your Supabase project allows requests from your Render domains
- The frontend build process creates the `dist` folder with static files

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email [your-email@example.com] or create an issue in the repository.
