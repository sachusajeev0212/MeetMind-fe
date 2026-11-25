import { useState } from "react";
import KanbanBoard from "../components/KanbanBoard";
import Modal from "../components/Modal";

const STORAGE_KEY = "meetmind-tasks";
const STATUSES = ["To Do", "In Progress", "Review", "Done"];
const PRIORITIES = ["High", "Medium", "Low"];

function loadTasks() {
  try {
    const savedTasks = window.localStorage.getItem(STORAGE_KEY);
    const tasks = savedTasks ? JSON.parse(savedTasks) : [];

    if (!Array.isArray(tasks)) {
      throw new Error("Saved tasks must be a list.");
    }

    return { tasks, error: "" };
  } catch (error) {
    console.error("Unable to load saved tasks:", error);
    return { tasks: [], error: "Saved tasks could not be loaded from this browser." };
  }
}

function Tasks() {
  const [storedTasks] = useState(loadTasks);
  const [tasks, setTasks] = useState(storedTasks.tasks);
  const [storageError, setStorageError] = useState(storedTasks.error);
  const [search, setSearch] = useState("");
  const [assigneeFilter, setAssigneeFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [showTaskModal, setShowTaskModal] = useState(false);

  function persistTasks(nextTasks) {
    setTasks(nextTasks);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTasks));
      setStorageError("");
    } catch (error) {
      console.error("Unable to save tasks:", error);
      setStorageError("Tasks could not be saved in this browser.");
    }
  }

  const assignees = [...new Set(tasks.map((task) => task.owner).filter(Boolean))];
  const visibleTasks = tasks.filter((task) => {
    const matchesSearch = `${task.name} ${task.owner}`.toLowerCase().includes(search.toLowerCase());
    const matchesAssignee = !assigneeFilter || task.owner === assigneeFilter;
    const matchesPriority = !priorityFilter || task.priority === priorityFilter;
    return matchesSearch && matchesAssignee && matchesPriority;
  });

  function openCreateModal() {
    setEditingTask(null);
    setShowTaskModal(true);
  }

  function openEditModal(task) {
    setEditingTask(task);
    setShowTaskModal(true);
  }

  function closeTaskModal() {
    setShowTaskModal(false);
    setEditingTask(null);
  }

  function saveTask(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const taskData = {
      name: formData.get("name").trim(),
      owner: formData.get("owner").trim(),
      due: formData.get("due"),
      priority: formData.get("priority"),
      status: formData.get("status"),
    };

    if (editingTask) {
      persistTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, ...taskData } : task,
        ),
      );
    } else {
      persistTasks([
        ...tasks,
        { id: `${Date.now()}-${Math.random()}`, ...taskData },
      ]);
    }

    closeTaskModal();
  }

  function deleteTask(taskId) {
    persistTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold">Task Board</h1>
          <p className="mt-1 text-slate-500">Track action items from your meetings.</p>
        </div>
        <button
          type="button"
          onClick={openCreateModal}
          className="rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-400"
        >
          + Add Task
        </button>
      </div>

      {storageError && (
        <p role="alert" className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {storageError}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <input
          type="search"
          aria-label="Search tasks"
          placeholder="Search tasks"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-900 sm:w-72"
        />
        <select
          aria-label="Filter by assignee"
          value={assigneeFilter}
          onChange={(event) => setAssigneeFilter(event.target.value)}
          className="rounded-md border border-slate-300 bg-white px-4 py-2.5 outline-none"
        >
          <option value="">All assignees</option>
          {assignees.map((assignee) => (
            <option key={assignee} value={assignee}>{assignee}</option>
          ))}
        </select>
        <select
          aria-label="Filter by priority"
          value={priorityFilter}
          onChange={(event) => setPriorityFilter(event.target.value)}
          className="rounded-md border border-slate-300 bg-white px-4 py-2.5 outline-none"
        >
          <option value="">All priorities</option>
          {PRIORITIES.map((priority) => (
            <option key={priority} value={priority}>{priority}</option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <KanbanBoard tasks={visibleTasks} onEdit={openEditModal} onDelete={deleteTask} />
      </div>

      <Modal
        open={showTaskModal}
        title={editingTask ? "Edit task" : "Add task"}
        onClose={closeTaskModal}
      >
        <form id="task-form" className="space-y-4" onSubmit={saveTask}>
          <div>
            <label htmlFor="task-name" className="mb-1 block text-sm font-semibold">Task</label>
            <input
              id="task-name"
              name="name"
              type="text"
              required
              maxLength={120}
              defaultValue={editingTask?.name ?? ""}
              placeholder="What needs to be done?"
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="task-owner" className="mb-1 block text-sm font-semibold">Assignee</label>
            <input
              id="task-owner"
              name="owner"
              type="text"
              maxLength={80}
              defaultValue={editingTask?.owner ?? ""}
              placeholder="Optional"
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="task-due" className="mb-1 block text-sm font-semibold">Due date</label>
              <input
                id="task-due"
                name="due"
                type="date"
                defaultValue={editingTask?.due ?? ""}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="task-priority" className="mb-1 block text-sm font-semibold">Priority</label>
              <select
                id="task-priority"
                name="priority"
                defaultValue={editingTask?.priority ?? "Medium"}
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              >
                {PRIORITIES.map((priority) => (
                  <option key={priority} value={priority}>{priority}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="task-status" className="mb-1 block text-sm font-semibold">Status</label>
            <select
              id="task-status"
              name="status"
              defaultValue={editingTask?.status ?? STATUSES[0]}
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            >
              {STATUSES.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={closeTaskModal}
              className="rounded-md border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
            >
              {editingTask ? "Save changes" : "Add task"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Tasks;
