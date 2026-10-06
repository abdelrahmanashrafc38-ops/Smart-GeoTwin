# Smart GeoTwin

## 1. Project Overview
Smart GeoTwin is an interactive 3D Web GIS real estate platform. It addresses the need for a centralized, visually rich, and data-driven platform for managing real estate properties. The main purpose of the platform is to merge real-time operations (such as bookings, complaints, and user management) with 3D spatial data and building models.

The system targets multiple types of users:
- Visitors
- Property Owners
- Real Estate Brokers
- Engineers (Maintenance)
- System Administrators

GIS plays a central role by providing an interactive 3D map interface, enabling network analysis for closest facilities, and seamlessly integrating spatial building data with the platform's operational data.

## 2. Project Goals
- **Interactive 3D Visualization:** Provide a highly interactive 3D map for users to explore properties.
- **Unified Data Management:** Integrate spatial data (via ArcGIS) with non-spatial user and transactional data (via MongoDB) seamlessly.
- **Streamlined Operations:** Facilitate property booking, maintenance task assignments, and complaint resolution through an intuitive interface.
- **Smart Assistance:** Provide an AI Advisor for real estate recommendations, investment ROI calculations, and advanced natural language querying for admins and engineers.
- **Real-Time Synchronization:** Ensure bidirectional synchronization of property statuses between the operational database and the spatial layers.

## 3. My Contribution
Throughout the development of Smart GeoTwin, my personal contributions included:
- **Requirements Analysis:** Understanding and documenting system requirements, User Stories, and Personas.
- **Database Design:** Designing both the spatial database structure (ArcGIS Feature Layers and Tables) and the non-spatial database structure (MongoDB schemas using Mongoose).
- **Feature and Workflow Analysis:** Defining key workflows such as property status synchronization, AI chatbot logic, and the maintenance/complaints pipeline.
- **AI-Assisted Development:** Providing requirements, system context, and implementation guidance to an AI Agent. Reviewing, testing, and validating the generated code, iteratively correcting and directing the implementation to achieve the desired architecture and functionality.

*Note: Parts of the codebase were implemented with AI assistance based on my detailed requirements and architecture design.*

## 4. System Architecture
The system follows a modern full-stack architecture combining traditional web technologies with robust GIS services:
- **Frontend:** Built with React.js (Vite) and TypeScript, integrating the ArcGIS Maps SDK for JavaScript to render the 3D Web GIS interface.
- **Backend:** A Node.js and Express.js server that handles business logic, real-time communication via Socket.io, and API endpoints.
- **Database:** MongoDB acts as the primary database for user profiles, booking requests, and complaints.
- **GIS Components:** ArcGIS Feature Servers host spatial data layers (Buildings, Villas, Services) and Tables (Units).
- **Integration:** The backend communicates with ArcGIS REST APIs (e.g., `updateFeatures`, `applyEdits`) to maintain bidirectional synchronization. A Webhook and ngrok tunnel are used to synchronize Survey123 data for technician management in real-time.

## 5. Technologies
**Frontend:**
- React.js (Vite)
- TypeScript
- ArcGIS Maps SDK for JavaScript

**Backend:**
- Node.js
- Express.js
- Mongoose

**Database:**
- MongoDB
- ArcGIS Online (Feature Layers, Tables)

**Real-Time Communication & APIs:**
- Socket.io
- ArcGIS REST API
- Webhooks / ngrok

**AI:**
- Google Gemini API (Gemini 2.5 Flash) for AI Advisor and Admin Chatbot

**GIS:**
- ArcGIS Network Analysis
- ArcGIS Survey123
- ArcGIS Dashboards

## 6. GIS Components
- **3D Visualization:** Rendering of residential buildings and villas as 3D Object Feature Layers on the interactive map.
- **Spatial Queries:** Executing spatial intersection queries (e.g., fetching the governorate name based on a user's location).
- **Closest Facilities:** Utilizing ArcGIS Network Analysis to find the nearest services (schools, hospitals, gyms) and visualizing the route on the 3D map.
- **Utility Network:** Providing isolation and connected tracing on a water utility network to identify affected units during outages.
- **Dashboards:** Integration of an ArcGIS Dashboard for utility network statistics directly within the platform.

## 7. Database Design
**Spatial Data Structure (ArcGIS Online):**
- `Units Table`: Non-spatial table linked to buildings via an ID. Contains fields like Status, Owner_Name, Owner_Phone.
- `Villas_Global`: 3D Object Feature Layer for villas and twin houses.
- `Buildings_Global`: 3D Object Feature Layer for residential buildings (used for HitTest and camera zooming).
- `Services_Global`: Point Feature Layer for nearby facilities.

**Non-Spatial Data Structure (MongoDB):**
- `User`: Manages roles (user, owner, broker, engineer, admin) and authentication.
- `Unit`: The core entity linking MongoDB with ArcGIS (using `arcgisId` and `globalId`).
- `BookingRequest`: Handles property reservation requests.
- `Complaint`: Stores maintenance and user complaints with spatial coordinates and images.
- `Profiles`: Role-specific profiles (AdminProfile, BrokerProfile, EngineerProfile).

## 8. Key Features
- **Property Management:** Dynamic filtering, status tracking, and assignment of properties by admins and brokers.
- **Complaints Management:** A system for owners to file complaints, which are converted into active tasks for technicians by engineers.
- **Map Visualization:** Highly interactive 3D map for viewing property details, occupancy statuses, and architectural plans.
- **AI Chatbots:** Context-aware AI assistants for customers (calculating ROI, financial capabilities) and admins (performing bulk actions and permission changes via natural language).
- **Real-Time Updates:** Bidirectional synchronization of property status between the web app and the 3D map.
- **Theme & Branding:** Full Light/Dark mode support with a custom dynamic SVG logo.

## 9. AI-Assisted Development
AI assistance was utilized heavily during the development lifecycle:
- **Context Provision:** I provided detailed system context, database structures, and explicit requirements.
- **Prompting & Direction:** I prompted the AI Agent step-by-step to implement specific components, ensuring alignment with the project goals.
- **Review & Validation:** All AI-generated code was thoroughly reviewed, tested, and validated against the requirements.
- **Iterative Improvement:** I actively directed the AI to correct errors, refine the UI/UX, and optimize logic (e.g., handling double scrollbars, updating API interactions).

## 12. Project Structure
- `/frontend/` - Contains the React (Vite) application, UI components, ArcGIS map initialization, and context providers.
- `/backend/` - Contains the Node.js/Express server, MongoDB schemas (models), controllers, and route definitions.

## 13. How to Run
**Prerequisites:**
- Node.js (v18+)
- MongoDB connection string
- ArcGIS Online Account / API Keys
- Google Gemini API Key

**Backend Setup:**
1. Navigate to the backend directory.
2. Install dependencies: `npm install`
3. Create a `.env` file and configure:
   - `MONGO_URI`
   - `PORT`
   - `GEMINI_API_KEY`
   - `ARCGIS_REST_URL`
   - etc.
4. Run the server: `npm start` or `npm run dev`

**Frontend Setup:**
1. Navigate to the frontend directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with any required frontend environment variables (e.g., API URLs).
4. Run the development server: `npm run dev`

*(Note: There are `Start-Platform.bat` and `Stop-Platform.bat` scripts included for Windows environments to run the full stack seamlessly.)*
