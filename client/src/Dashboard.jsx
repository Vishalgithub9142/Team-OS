import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bell,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  FolderKanban,
  LayoutDashboard,
  Plus,
  Search,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import "./App.css";

const initialTasks = [
  { id: 1, title: "Design workspace dashboard", project: "TeamOS AI", status: "In Progress", priority: "High" },
  { id: 2, title: "Set up authentication API", project: "Backend", status: "Todo", priority: "High" },
  { id: 3, title: "Create task management schema", project: "Backend", status: "In Progress", priority: "Medium" },
  { id: 4, title: "Review UI component system", project: "Design System", status: "Done", priority: "Low" },
];

const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: FolderKanban },
  { label: "My Tasks", icon: CheckCircle2 },
  { label: "Team", icon: Users },
];

const columns = ["Todo", "In Progress", "Done"];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeNav, setActiveNav] = useState("Overview");
  const [showForm, setShowForm] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  function addTask(event) {
    event.preventDefault();

    const title = taskTitle.trim();
    if (!title) return;

    setTasks((current) => [
      {
        id: Date.now(),
        title,
        project: "TeamOS AI",
        status: "Todo",
        priority: "Medium",
      },
      ...current,
    ]);

    setTaskTitle("");
    setShowForm(false);
  }

  function moveTask(id, status) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  }

  const completed = tasks.filter((task) => task.status === "Done").length;

  return (
    <main className="app-shell">
      <aside className="sidebar soft-panel">
        <div className="brand">
          <div className="brand-icon"><BrainCircuit size={23} /></div>
          <div>
            <h2>TeamOS <span>AI</span></h2>
            <p>Workspace intelligence</p>
          </div>
        </div>

        <div className="workspace-switcher soft-inset">
          <div className="workspace-avatar">T</div>
          <div className="workspace-name">
            <strong>My Workspace</strong>
            <small>Free workspace</small>
          </div>
          <ChevronDown size={16} />
        </div>

        <p className="section-label">WORKSPACE</p>
        <nav className="nav-list">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`nav-item ${activeNav === label ? "active" : ""}`}
              onClick={() => setActiveNav(label)}
            >
              <Icon size={19} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <p className="section-label">INTELLIGENCE</p>
        <button
          className={`nav-item ${activeNav === "AI Assistant" ? "active" : ""}`}
          onClick={() => setActiveNav("AI Assistant")}
        >
          <BrainCircuit size={19} />
          <span>AI Assistant</span>
          <span className="new-tag">NEW</span>
        </button>

        <div className="sidebar-bottom">
          <button className="nav-item" onClick={() => setActiveNav("Settings")}>
            <Settings size={19} /><span>Settings</span>
          </button>
          <button className="nav-item" onClick={() => setActiveNav("Help")}>
            <CircleHelp size={19} /><span>Help & support</span>
          </button>
          <div className="profile soft-inset">
            <div className="profile-avatar">V</div>
            <div className="workspace-name">
              <strong>Workspace owner</strong>
              <small>Demo account</small>
            </div>
            <ChevronDown size={16} />
          </div>
        </div>
      </aside>

      <section className="main-content">
        <header className="topbar">
          <div className="breadcrumb">
            Workspace <span>/</span> <strong>{activeNav}</strong>
          </div>
          <div className="topbar-actions">
            <button className="icon-button soft-panel" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="icon-button soft-panel" aria-label="Notifications">
              <Bell size={18} />
            </button>
            <div className="profile-avatar">V</div>
          </div>
        </header>

        <div className="page-content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow">THURSDAY · YOUR WORKSPACE</p>
              <h1>Good to see you <span>👋</span></h1>
              <p className="subtitle">
                Here's what's happening across your workspace.
              </p>
            </div>
            <button className="primary-button" onClick={() => setShowForm(true)}>
              <Plus size={18} /> New task
            </button>
          </section>

          {activeNav !== "Overview" && (
            <div className="notice soft-panel">
              <strong>{activeNav}</strong> is part of the dashboard prototype.
              Task management is interactive; other sections will be implemented
              in upcoming milestones.
            </div>
          )}

          <section className="stats-grid">
            <StatCard
              icon={<FolderKanban />}
              label="Total tasks"
              value={tasks.length}
              note="Tasks in this demo"
              color="lavender"
            />
            <StatCard
              icon={<Activity />}
              label="In progress"
              value={tasks.filter((t) => t.status === "In Progress").length}
              note="Currently being worked on"
              color="mint"
            />
            <StatCard
              icon={<CheckCircle2 />}
              label="Completed"
              value={completed}
              note="Marked as done"
              color="peach"
            />
            <StatCard
              icon={<Zap />}
              label="AI insights"
              value="Soon"
              note="Intelligence layer planned"
              color="blue"
            />
          </section>

          <section className="section-heading">
            <div>
              <h2>Project workspace</h2>
              <p>Organize work and track progress.</p>
            </div>
            <button className="text-button">
              View all <ArrowUpRight size={16} />
            </button>
          </section>

          <section className="project-card soft-panel">
            <div className="project-info">
              <div className="project-icon"><BrainCircuit size={23} /></div>
              <div>
                <h3>TeamOS AI</h3>
                <p>Building an intelligent workspace for teams</p>
              </div>
            </div>
            <span className="status-pill">Active</span>
            <div className="progress-area">
              <div className="progress-label">
                <span>Task completion</span>
                <strong>{tasks.length ? Math.round(completed / tasks.length * 100) : 0}%</strong>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: `${tasks.length ? completed / tasks.length * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
          </section>

          <section className="section-heading board-heading">
            <div>
              <h2>Task board</h2>
              <p>Move tasks through your workflow.</p>
            </div>
            <button className="secondary-button" onClick={() => setShowForm(true)}>
              <Plus size={17} /> Add task
            </button>
          </section>

          {showForm && (
            <form className="task-form soft-panel" onSubmit={addTask}>
              <label htmlFor="task-title">Task title</label>
              <input
                id="task-title"
                autoFocus
                value={taskTitle}
                onChange={(event) => setTaskTitle(event.target.value)}
                placeholder="e.g. Implement workspace authentication"
                maxLength={160}
                required
              />
              <div className="form-actions">
                <button type="button" className="secondary-button" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
                <button type="submit" className="primary-button">
                  Create task
                </button>
              </div>
            </form>
          )}

          <section className="task-board">
            {columns.map((column) => {
              const columnTasks = tasks.filter((task) => task.status === column);

              return (
                <div className="task-column" key={column}>
                  <div className="column-heading">
                    <div className={`column-dot ${column.toLowerCase().replace(" ", "-")}`} />
                    <h3>{column}</h3>
                    <span className="count-badge">{columnTasks.length}</span>
                  </div>

                  {columnTasks.map((task) => (
                    <article className="task-card soft-panel" key={task.id}>
                      <div className="task-card-top">
                        <span className={`priority ${task.priority.toLowerCase()}`}>
                          {task.priority}
                        </span>
                        <button
                          className="task-menu"
                          aria-label={`Move ${task.title} to next status`}
                          onClick={() => {
                            const next = columns[(columns.indexOf(task.status) + 1) % columns.length];
                            moveTask(task.id, next);
                          }}
                        >
                          <ArrowUpRight size={17} />
                        </button>
                      </div>
                      <h4>{task.title}</h4>
                      <p className="task-project">{task.project}</p>
                      <div className="task-footer">
                        <div className="mini-avatar">V</div>
                        <button
                          className="move-button"
                          onClick={() => {
                            const next = columns[(columns.indexOf(task.status) + 1) % columns.length];
                            moveTask(task.id, next);
                          }}
                        >
                          Move <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </article>
                  ))}

                  {columnTasks.length === 0 && (
                    <div className="empty-column">No tasks here yet</div>
                  )}

                  <button className="add-column-task" onClick={() => setShowForm(true)}>
                    <Plus size={16} /> Add task
                  </button>
                </div>
              );
            })}
          </section>

          <footer className="page-footer">
            <span><CalendarDays size={15} /> TeamOS AI · Workspace preview</span>
            <span>AI-powered collaboration, built step by step.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon, label, value, note, color }) {
  return (
    <article className="stat-card soft-panel">
      <div className="stat-top">
        <div className={`stat-icon ${color}`}>{icon}</div>
        <span className="stat-note">{note}</span>
      </div>
      <p className="stat-label">{label}</p>
      <h2>{value}</h2>
    </article>
  );
}

export default App;