# 🌟 KindNet - Community Sharing Platform Backend

> **Empowering communities through resource sharing**

A robust, scalable REST API built with Node.js and Express.js that powers a community-driven platform for sharing resources and connecting neighbors. This project demonstrates modern backend development practices, secure authentication, and cloud-native deployment strategies.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18+-blue.svg)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue.svg)](https://postgresql.org/)
[![Sequelize](https://img.shields.io/badge/Sequelize-6+-orange.svg)](https://sequelize.org/)
[![Render](https://img.shields.io/badge/Deployed%20on-Render-brightgreen.svg)](https://render.com/)

## 🚀 Live Demo

- **API Base URL**: [https://ii-practicum-team-1-back.onrender.com](https://ii-practicum-team-1-back.onrender.com)
- **Frontend Application**: Connected React.js interface for seamless user experience

## ✨ Key Features

### 🔐 **Advanced Authentication & Security**

- JWT-based authentication with refresh tokens
- Google OAuth 2.0 integration for social login
- Password reset with secure email verification
- Account lockout protection against brute force attacks
- Input validation and sanitization using Joi
- Rate limiting to prevent API abuse

### 👥 **User Management**

- Complete user registration and profile management
- Email verification system with secure tokens
- Avatar upload and management via Cloudinary
- Zip code-based location services

### 📦 **Item & Category Management**

- Full CRUD operations for shared items
- 14 predefined categories (Books, Electronics, Tools, etc.)
- Advanced search and filtering capabilities
- Image upload with automatic optimization
- Geolocation-based item discovery

### 🤝 **Transaction System**

- Secure item exchange tracking
- Transaction history and status management
- Delivery coordination features
- Built-in feedback and rating system

### 📧 **Communication & Notifications**

- Automated email notifications via Nodemailer
- SMTP integration for reliable delivery
- Transactional email templates

## 🛠️ Tech Stack

### **Backend Framework**

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **Sequelize ORM** - Database management with PostgreSQL

### **Authentication & Security**

- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT implementation
- **express-rate-limit** - API rate limiting

### **Cloud Services**

- **PostgreSQL on Render** - Production database
- **Cloudinary** - Image storage and optimization
- **Render** - Application hosting and deployment

### **Development Tools**

- **Nodemon** - Development server with hot reload
- **Jest** - Testing framework
- **cross-env** - Environment variable management
- **Morgan** - HTTP request logging

## 🏗️ Architecture & Design Patterns

### **MVC Architecture**

```
src/
├── controllers/     # Business logic and request handling
├── models/         # Database models and relationships
├── routes/         # API endpoint definitions
├── middleware/     # Custom middleware functions
├── services/       # External service integrations
├── validators/     # Input validation schemas
├── config/         # Database and service configurations
└── errors/         # Custom error handling classes
```

### **Database Design**

- **Normalized relational database** with proper foreign key constraints
- **User-centric design** with email as primary identifier
- **Transaction tracking** with status management
- **Image metadata storage** with Cloudinary integration
- **Automated timestamps** for audit trails

### **API Design**

- **RESTful endpoints** following HTTP standards
- **Consistent error handling** with proper status codes
- **Input validation** on all routes
- **Pagination support** for large datasets
- **CORS configuration** for cross-origin requests

## 🚀 Deployment & DevOps

### **Automated Database Management**

```bash
npm run db:setup    # Full database initialization
npm run db:reset    # Quick database restoration
npm run build       # Production deployment preparation
```

### **Environment Configuration**

- **Multi-environment support** (development, testing, production)
- **Secure environment variable management**
- **Database connection pooling** for optimal performance
- **SSL/TLS enforcement** in production

### **Monitoring & Reliability**

- **Health check endpoints** for monitoring
- **Graceful error handling** with custom error classes
- **Request logging** for debugging and analytics
- **Connection retry logic** for database resilience

## 🔧 Quick Start

### **Prerequisites**

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Cloudinary account for image storage

### **Installation**

```bash
# Clone the repository
git clone https://github.com/Code-the-Dream-School/ii-practicum-team-1-back.git

# Install dependencies
cd ii-practicum-team-1-back
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Initialize database
npm run db:setup

# Start development server
npm run dev
```

### **Available Scripts**

```bash
npm run dev         # Development server with hot reload
npm start           # Production server
npm test            # Run test suite
npm run db:migrate  # Run database migrations
npm run db:seed     # Populate initial data
npm run db:reset    # Complete database reset
```

## 📊 API Endpoints

### **Authentication**

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `POST /api/v1/auth/reset-password` - Password reset

### **Google Authentication**

- `GET /api/v1/google-auth/google` - Initiate Google OAuth
- `GET /api/v1/google-auth/google/callback` - OAuth callback

### **User Management**

- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile
- `POST /api/v1/users/avatar` - Upload user avatar

### **Items & Categories**

- `GET /api/v1/items` - List items with pagination/filtering
- `POST /api/v1/items` - Create new item
- `GET /api/v1/items/:id` - Get item details
- `PUT /api/v1/items/:id` - Update item
- `DELETE /api/v1/items/:id` - Delete item

### **Reviews & Feedback**

- `POST /api/v1/reviews` - Submit review
- `GET /api/v1/reviews/:userId` - Get user reviews

## 🔒 Security Features

- **Input Validation**: All inputs validated using Joi schemas
- **SQL Injection Protection**: Sequelize ORM with parameterized queries
- **XSS Prevention**: Input sanitization and output encoding
- **CSRF Protection**: Token-based request validation
- **Rate Limiting**: API abuse prevention
- **Secure Headers**: Helmet.js integration
- **Password Security**: bcrypt hashing with salt rounds

## 🚀 Performance Optimizations

- **Database Indexing**: Optimized queries with proper indexes
- **Connection Pooling**: Efficient database connection management
- **Image Optimization**: Cloudinary automatic image processing
- **Pagination**: Efficient data loading for large datasets
- **Caching Strategy**: Session and static content caching

## 🌟 What Makes This Project Stand Out

### **Production-Ready Features**

- Comprehensive error handling with custom error classes
- Automated database migration and seeding scripts
- Multi-environment configuration management
- Robust authentication with multiple providers
- Image upload and processing pipeline

### **Modern Development Practices**

- Clean, modular architecture following SOLID principles
- Comprehensive input validation and error handling
- Automated testing setup with Jest
- Git workflow with feature branches
- Documentation-driven development

### **Scalability Considerations**

- Stateless API design for horizontal scaling
- Database optimization for high-traffic scenarios
- Cloud-native deployment with auto-scaling capabilities
- Microservice-ready architecture

---

## 👥 Development Team

This project was developed as part of the **Code the Dream** practicum program, showcasing collaborative development skills and modern backend technologies.

**Tech Stack Highlights**: Node.js • Express.js • PostgreSQL • Sequelize • JWT • OAuth 2.0 • Cloudinary • Render

---

_Building connections, one shared resource at a time._ 🌍
