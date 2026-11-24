const columns = [
  {
    title: "To Do",
    color: "border-slate-400",
    tasks: [],
  },
  {
    title: "In Progress",
    color: "border-blue-500",
    tasks: [],
  },
  {
    title: "Review",
    color: "border-amber-500",
    tasks: [],
  },
  {
    title: "Done",
    color: "border-green-500",
    tasks: [],
  },
];

function KanbanBoard() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {columns.map((col) => (
        <div key={col.title} className="rounded-xl bg-slate-100 p-4">
          <div className={`mb-4 flex items-center justify-between border-b-4 pb-2 ${col.color}`}>
            <h3 className="font-serif font-bold">{col.title}</h3>
            <span className="rounded-full bg-white px-2 py-0.5 text-sm font-semibold">
              {col.tasks.length}
            </span>
          </div>

          <div className="space-y-3">
            {col.tasks.length ? col.tasks.map((t) => (
              <div key={t.name} className="rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold">{t.name}</p>
                  {t.reminder && <span title="Reminder on">🔔</span>}
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold">
                    {t.priority}
                  </span>
                  <span className="text-slate-500">📅 {t.due}</span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                    {t.owner[0]}
                  </span>
                  {t.owner}
                </div>
              </div>
            )) : (
              <p className="rounded-lg bg-white/70 p-4 text-sm text-slate-500">No tasks</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
