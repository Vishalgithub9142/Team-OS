# AI Operating System for Teams 🧠⚙️

An AI-native collaborative workspace designed to intelligently manage projects, tasks, meetings, and code activity. Unlike traditional task trackers (like Jira or Trello), this platform acts as an active AI project manager—understanding team context, detecting blockers in real-time, and automating project planning.

## 🚀 The Vision

Modern teams lose hours syncing context across chats, docs, and task boards. This platform centralizes that data and uses Large Language Models (LLMs) and Vector Search to constantly monitor the workspace. If a developer mentions a delay in chat, the AI instantly flags downstream dependent tasks as "At Risk" and notifies the relevant stakeholders.

## ✨ Core Features

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

## 🛠️ Technology Stack

**Frontend:**
* React.js & TypeScript
* Tailwind CSS (for styling)
* Socket.io-client (for real-time updates)

**Backend:**
* Node.js & Express.js
* Socket.io (WebSocket server)
* BullMQ (Redis-based queue for heavy background tasks)

**Database & AI:**
* MongoDB (Primary transactional database)
* Redis (Caching and task queues)
* Pinecone / MongoDB Atlas Vector Search (Vector database for RAG)
* OpenAI / Gemini APIs (LLM orchestration)

## 📊 Performance Targets

This system is engineered to meet professional-grade SaaS benchmarks:
* **Scale:** Capable of indexing and searching 100,000+ workspace objects (tasks, messages, docs).
* **Speed:** Semantic search queries return results in **< 1 second**.
* **Reliability:** Background LLM operations are decoupled via queues to ensure 0 UI freezing.

## 💻 Getting Started

### Prerequisites
* Node.js (v18+)
* MongoDB instance (local or Atlas)
* Redis instance
* API Keys for OpenAI/Gemini and your Vector DB

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vishalgithub9142/Team-OS.git
   cd Team-OS
   ```

2. **Install dependencies:**
   ```bash
   # Install backend dependencies
   cd backend && npm install
   
   # Install frontend dependencies
   cd ../frontend && npm install
   ```

3. **Environment Setup:**
   * Duplicate `.env.example` to `.env` in both the `frontend` and `backend` directories.
   * Add your Database URIs, JWT secrets, and AI API keys.

4. **Run the Application:**
   ```bash
   # Start the Redis server (if running locally)
   redis-server

   # Run backend (from /backend)
   npm run dev

   # Run frontend (from /frontend)
   npm start
   ```

## 🎥 Killer Demo Flow
When presenting this project, follow this flow to showcase the AI's capabilities:
1. Create a new project and upload a messy text brief. Watch the AI auto-generate the task board.
2. Jump into the workspace chat and type, *"I'm stuck on the database migration, it's going to take 2 extra days."*
3. Navigate back to the project board and show how the AI automatically flagged the downstream "API Integration" task with a warning regarding the database delay.

---
*Built by [Your Name/Handle] - Combining full-stack engineering with applied AI.*
