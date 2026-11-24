function SummaryPanel() {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-serif text-xl font-bold">✨ Meeting Summary</h2>
        <div className="flex gap-2">
          <button className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100">
            📄 Export PDF
          </button>
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            ✉️ Send to Attendees
          </button>
        </div>
      </div>

      <p className="mt-4 leading-7 text-slate-500">A summary will appear after a transcript is added.</p>

      <h3 className="mt-6 font-semibold">Key points</h3>
      <p className="mt-2 text-slate-500">No key points yet.</p>

      <h3 className="mt-6 font-semibold">Action items</h3>
      <div className="mt-2 rounded-lg border border-slate-200 p-4 text-slate-500">
        No action items yet.
      </div>
    </div>
  );
}

export default SummaryPanel;