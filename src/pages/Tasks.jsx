import KanbanBoard from "../components/KanbanBoard";

function Tasks() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold">Task Board</h1>
          <p className="mt-1 text-slate-500">Track action items from your meetings.</p>
        </div>
        <button className="rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-400">
          + Add Task
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search tasks"
          className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 outline-none focus:border-slate-900 sm:w-72"
        />
        <select className="rounded-md border border-slate-300 bg-white px-4 py-2.5 outline-none">
          <option>All assignees</option>
        </select>
        <select className="rounded-md border border-slate-300 bg-white px-4 py-2.5 outline-none">
          <option>All priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      </div>

      <div className="mt-8">
        <KanbanBoard />
      </div>
    </div>
  );
}

export default Tasks;