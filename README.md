# Resume Builder Platform

## Overview
This project is a comprehensive Resume Builder Platform designed to help users create optimized resumes with AI assistance, prepare for interviews, and provide portals for training institutes and job consultancies. It includes subscription management, analytics, and admin control features.

## Technology Stack
- Frontend: React.js with Material UI
- Backend: Node.js with Express
- Database: MongoDB
- AI/ML: TensorFlow, BERT (for resume analysis and generation)
- Cloud: AWS
- Analytics: Elasticsearch

## Project Structure
- backend/: Express backend with API routes, controllers, models, and services
- frontend/: React frontend with components, services, and styles
- shared/: Shared constants and assets

## Setup Instructions

### Backend
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Configure environment variables (MongoDB URI, JWT secret, AWS keys) in a `.env` file.
4. Start the backend server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend development server:
   ```
   npm start
   ```

## Features
- AI-assisted resume creation with multiple templates
- User dashboard with resume management, interview prep, job recommendations
- Training institute portal with analytics and candidate matching
- Job consultancy portal with credit system and candidate search
- Admin control center with multi-tiered access and revenue analytics

## Next Steps
- Implement core resume builder and AI integration
- Develop user subscription and authentication
- Build portals for training institutes and job consultancies
- Create admin control center and analytics dashboards

## License
MIT License
