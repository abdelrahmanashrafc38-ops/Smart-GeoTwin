# Smart GeoTwin — Source Code

An interactive 3D Web GIS real estate platform that integrates real-time transactional data (MongoDB) with 3D spatial data (ArcGIS Feature Servers). Built for multiple user roles — Users, Owners, Brokers, Engineers, and Admins.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js (Vite), TypeScript, ArcGIS Maps SDK for JS |
| **Backend** | Node.js, Express.js, Socket.io, Mongoose |
| **Database** | MongoDB (transactional) + ArcGIS Online Feature Servers (spatial/3D) |
| **AI** | Google Gemini 2.5 Flash API |
| **GIS Services** | ArcGIS Network Analysis, OpenWeatherMap |

---

## Project Structure

```
source-code/
├── backend/           # Node.js + Express API server
│   ├── controllers/   # Route handlers
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express route definitions
│   ├── middleware/     # Auth middleware (JWT)
│   └── server.js      # Entry point
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── components/  # UI components (MapViewer, Admin, Broker, Owner, etc.)
│   │   ├── pages/       # Page-level components
│   │   ├── context/     # Auth context (JWT)
│   │   └── services/    # API service layer (Axios)
│   └── index.html
├── database-backup/   # MongoDB backup (mongodump output)
├── Start-Platform.bat # One-click launcher for all services
├── Stop-Platform.bat  # One-click shutdown for all services
└── .gitignore
```

---

## Setup & Installation

### Prerequisites

- **Node.js** v18+ and **npm**
- **MongoDB** (local instance running on default port `27017`)
- **ngrok** (optional, for Survey123 webhook integration)
- An **ArcGIS Online** organizational account (for Network Analysis credits)
- A **Google Gemini API Key**
- An **OpenWeatherMap API Key**

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/el-narges
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

Start the backend:

```bash
npm start
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend dev server:

```bash
npm run dev
```

### 3. One-Click Launch (Windows)

Double-click `Start-Platform.bat` to start:
- Backend server (port 5000)
- Vite frontend dev server (port 5173)
- ngrok tunnel (for Survey123 webhooks)

Double-click `Stop-Platform.bat` to stop all services.

---

## Key Features

- **3D Interactive Map** — ArcGIS SceneView with building/unit identification
- **2D/3D Toggle** — Switch between SceneView and MapView
- **AI Property Advisor** — Gemini-powered bilingual chatbot with salary analysis, ROI planning, and proximity queries
- **Engineer AI Assistant** — RAG-based chatbot for technical maintenance queries
- **Admin Portal** — Full role management, analytics dashboard, property assignment, rejection analysis
- **Broker Portal** — Assigned property catalog with real-time booking management
- **Owner Portal** — Unit management, complaint submission, price updates
- **4-Step Booking Workflow** — User Interest → Broker Review → Admin Approval → Owner Promotion
- **Dual-Database Sync** — Real-time MongoDB ↔ ArcGIS synchronization via Socket.io + REST
- **Closest Facility Routing** — ArcGIS Network Analysis for nearest services
- **Utility Network Tracing** — Isolation & Connected trace for water infrastructure
- **Live Weather Overlay** — OpenWeatherMap integration on 3D scene
- **Email Notifications** — Automated booking status emails
- **Survey123 Integration** — Technician registration via embedded ArcGIS forms + ngrok webhooks

---

## Database Backup

A MongoDB backup is included in the `database-backup/` directory as JSON files (one per collection).

To restore into a local MongoDB instance:

```bash
mongoimport --db el-narges --collection users --file database-backup/users.json --jsonArray
mongoimport --db el-narges --collection units --file database-backup/units.json --jsonArray
mongoimport --db el-narges --collection bookingrequests --file database-backup/bookingrequests.json --jsonArray
mongoimport --db el-narges --collection complaints --file database-backup/complaints.json --jsonArray
mongoimport --db el-narges --collection knowledgebases --file database-backup/knowledgebases.json --jsonArray
mongoimport --db el-narges --collection technicians --file database-backup/technicians.json --jsonArray
mongoimport --db el-narges --collection adminchats --file database-backup/adminchats.json --jsonArray
mongoimport --db el-narges --collection userchats --file database-backup/userchats.json --jsonArray
mongoimport --db el-narges --collection metermappings --file database-backup/metermappings.json --jsonArray
mongoimport --db el-narges --collection adminprofiles --file database-backup/adminprofiles.json --jsonArray
mongoimport --db el-narges --collection brokerprofiles --file database-backup/brokerprofiles.json --jsonArray
mongoimport --db el-narges --collection engineerprofiles --file database-backup/engineerprofiles.json --jsonArray
mongoimport --db el-narges --collection technicianprofiles --file database-backup/technicianprofiles.json --jsonArray
```

---

## License

This project was developed as a graduation project for the ITI GIS Department.

