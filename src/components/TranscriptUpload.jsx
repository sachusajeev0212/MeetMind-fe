const platforms = ["Zoom", "Microsoft Teams", "Google Meet"];

function TranscriptUpload() {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">Transcript source</label>
      <div className="mb-4 flex flex-wrap gap-2">
        {platforms.map((p, i) => (
          <span
            key={p}
            className={`rounded-full border px-4 py-1 text-sm ${
              i === 0
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 text-slate-600"
            }`}
          >
            {p}
          </span>
        ))}
      </div>

      <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">
        <span className="text-4xl">📄</span>
        <p className="mt-3 font-semibold">Upload a transcript you exported yourself</p>
        <p className="mt-1 text-sm text-slate-500">Supports .txt, .vtt, .docx (max 10 MB)</p>
        <p className="mt-2 max-w-sm text-xs text-slate-500">
          No Zoom connection is needed. Local AI summarization is planned for the backend; no paid AI API is intended.
        </p>
        <button className="mt-4 rounded-md bg-amber-500 px-5 py-2 font-semibold text-slate-900 hover:bg-amber-400">
          Browse File
        </button>
      </div>
    </div>
  );
}

export default TranscriptUpload;