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
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests (currently not implemented)

### Frontend Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build

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
