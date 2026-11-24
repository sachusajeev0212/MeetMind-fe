const stats = [
  { label: "Total Meetings", value: "0", icon: "📅", note: "No meetings yet" },
  { label: "Action Items", value: "0", icon: "✅", note: "No action items yet" },
  { label: "Tasks Completed", value: "0", icon: "🏁", note: "No tasks yet" },
  { label: "Hours Saved", value: "0h", icon: "⏱️", note: "No activity yet" },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="font-serif text-3xl font-bold">Dashboard</h1>
      <p className="mt-1 text-slate-500">Overview of your meetings, tasks and team activity.</p>

      
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-white p-6 shadow">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-500">{s.label}</p>
              <span className="text-2xl">{s.icon}</span>
            </div>
            <p className="mt-2 font-serif text-4xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm text-slate-500">{s.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        
        <div className="rounded-xl bg-white p-6 shadow lg:col-span-2">
          <h2 className="font-serif text-xl font-bold">Meetings this week</h2>
          <div className="mt-6 flex h-48 items-center justify-center border-b border-slate-200 text-sm text-slate-500">
            No meeting activity yet
          </div>
        </div>

        
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="font-serif text-xl font-bold">Upcoming meetings</h2>
          <div className="mt-4 rounded-lg bg-slate-50 p-5 text-sm text-slate-500">
            No upcoming meetings
          </div>
        </div>
      </div>

     
      <div className="mt-6 rounded-xl bg-white p-6 shadow">
        <h2 className="font-serif text-xl font-bold">Task completion by team</h2>
        <div className="mt-5 rounded-lg bg-slate-50 p-5 text-sm text-slate-500">
          Team progress will appear after tasks are added.
        </div>
      </div>
    </div>
  );
}

export default Dashboard;