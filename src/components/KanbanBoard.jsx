const columns = [
  {
    title: "To Do",
    color: "border-slate-400",
  },
  {
    title: "In Progress",
    color: "border-blue-500",
  },
  {
    title: "Review",
    color: "border-amber-500",
  },
  {
    title: "Done",
    color: "border-green-500",
  },
];

function KanbanBoard({ tasks, onEdit, onDelete }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {columns.map((col) => {
        const columnTasks = tasks.filter((task) => task.status === col.title);

        return (
          <div key={col.title} className="rounded-xl bg-slate-100 p-4">
            <div className={`mb-4 flex items-center justify-between border-b-4 pb-2 ${col.color}`}>
              <h3 className="font-serif font-bold">{col.title}</h3>
              <span className="rounded-full bg-white px-2 py-0.5 text-sm font-semibold">
                {columnTasks.length}
              </span>
            </div>

            <div className="space-y-3">
              {columnTasks.length ? columnTasks.map((task) => (
                <div key={task.id} className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold">{task.name}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold">
                      {task.priority}
                    </span>
                    {task.due && <span className="text-slate-500">📅 {task.due}</span>}
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-2 text-sm text-slate-600">
                    {task.owner ? (
                      <span className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                          {task.owner[0].toUpperCase()}
                        </span>
                        {task.owner}
                      </span>
                    ) : <span>Unassigned</span>}
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => onEdit(task)}
                        className="font-semibold text-blue-700 hover:underline"
                        aria-label={`Edit ${task.name}`}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete(task.id)}
                        className="font-semibold text-red-700 hover:underline"
                        aria-label={`Delete ${task.name}`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )) : (
                <p className="rounded-lg bg-white/70 p-4 text-sm text-slate-500">No tasks</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KanbanBoard;
