# AI Operating System for Teams 🧠⚙️

An early prototype of an AI-native collaborative workspace for managing projects, tasks, meetings, and code activity. The long-term goal is an active AI project manager that understands team context, detects blockers, and helps automate project planning.

## 🚀 The Vision

Modern teams lose hours syncing context across chats, docs, and task boards. The project aims to bring that information together and use Large Language Models (LLMs) and vector search to identify blockers and keep teams aligned. These AI capabilities are planned and are not implemented in the current prototype.

## ✨ Planned Features

### 1. AI-Driven Project Planning
* **Brief-to-Plan Decomposition:** Upload a raw product brief (PDF/Markdown), and the AI will automatically break it down into epics, actionable tasks, and assign dependencies.
* **Meeting Intelligence:** Transcribes meeting notes and automatically extracts decisions and action items, linking them directly to project boards.

### 2. Active Risk Management
* **Blocker Detection:** The AI continuously reads chats, pull requests, and task comments to detect blockers, downstream delays, and duplicate work.
* **Health Summaries:** Automated weekly project health reports generated based on real-time team activity.

### 3. Smart Collaboration Hub
* **Real-time Sync:** WebSockets power live presence, typing indicators, and instant comment updates.
* **Workspace RAG (Semantic Search):** Instantly search across thousands of tasks, chats, and documents using natural language (e.g., *"What did we decide about the database schema last week?"*).

### 4. Enterprise-Grade Security & Auditing
* **Agent Approval Boundaries:** The AI can draft task updates and reassignments, but a human must explicitly click "Approve" before changes are executed.
* **Strict Audit Trail:** 100% of actions (both human and AI) are logged for accountability.
* **Multi-Tenant Architecture:** Total data isolation between different workspaces.

## 🛠️ Current Technology Stack

**Frontend:**
* React 19 with JavaScript
* Vite
* CSS
* Lucide React icons

**Backend:**
* Node.js and Express 5
* Mongoose for MongoDB access
* Helmet and CORS middleware
* dotenv for environment configuration

**Database:**
* MongoDB

## 📊 Future Performance Goals

These are aspirational targets; the current prototype has not been benchmarked against them:
* **Scale:** Capable of indexing and searching 100,000+ workspace objects (tasks, messages, docs).
* **Speed:** Semantic search queries return results in **< 1 second**.
* **Reliability:** Background LLM operations are decoupled via queues to ensure 0 UI freezing.

## 💻 Getting Started

### Prerequisites
* Node.js 20.19+ or 22.12+
* MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vishalgithub9142/Team-OS.git
   cd Team-OS
   ```

2. **Configure the server:**
   * Create `server/.env` and set your MongoDB connection string:
     ```env
     MONGODB_URI=mongodb://127.0.0.1:27017/team_os
     ```
   * For MongoDB Atlas, use your Atlas connection string instead.

3. **Install dependencies and run the server:**
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. **Run the client:** Open a second terminal in the repository root and run:
   ```bash
   cd client
   npm install
   npm run dev
   ```

## 🎥 Current Prototype Demo
1. Add a task from the dashboard.
2. Move tasks between Todo, In Progress, and Done.
3. View the task counts update in the dashboard.

AI planning, chat-based blocker detection, and automated risk updates are planned features and are not part of the current demo.

---
*Built by [Your Name/Handle] - Combining full-stack engineering with applied AI.*
