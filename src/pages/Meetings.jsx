import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import TranscriptUpload from "../components/TranscriptUpload";

const field =
  "w-full rounded-md border border-slate-300 px-4 py-2.5 outline-none focus:border-slate-900";

function Meetings() {
  // Only used to show / hide the popups
  const [showSchedule, setShowSchedule] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold">Meetings</h1>
          <p className="mt-1 text-slate-500">Your meeting history, summaries and transcripts.</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowUpload(true)}
            className="rounded-md border-2 border-slate-900 px-5 py-2.5 font-semibold hover:bg-slate-900 hover:text-white"
          >
            📄 Upload Transcript
          </button>
          <button
            onClick={() => setShowSchedule(true)}
            className="rounded-md bg-amber-500 px-5 py-2.5 font-semibold text-slate-900 hover:bg-amber-400"
          >
            + Schedule Meeting
          </button>
        </div>
      </div>

    
      <div className="mt-8 grid gap-4 rounded-xl bg-white p-4 shadow md:grid-cols-4">
        <input type="text" placeholder="Search meetings" className={`${field} md:col-span-2`} />
        <select className={field}>
          <option>All workspaces</option>
        </select>
        <select className={field}>
          <option>All platforms</option>
          <option>Zoom</option>
          <option>Microsoft Teams</option>
          <option>Google Meet</option>
        </select>
      </div>

      <div className="mt-6 rounded-xl bg-white p-10 text-center shadow">
        <h2 className="font-serif text-xl font-bold">No meetings yet</h2>
        <p className="mt-2 text-slate-500">
          Upload a transcript to add your first meeting, or preview the sharing screen.
        </p>
        <Link
          to="/meetings/details"
          className="mt-5 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Preview Transcript Sharing
        </Link>
      </div>

      
      <Modal open={showSchedule} title="Schedule Meeting" onClose={() => setShowSchedule(false)}>
        <form className="space-y-4">
          <input type="text" placeholder="Meeting title" className={field} />
          <div className="grid grid-cols-2 gap-4">
            <input type="date" className={field} />
            <input type="time" className={field} />
          </div>
          <select className={field}>
            <option>Select workspace</option>
          </select>
          <select className={field}>
            <option>Select meeting platform</option>
            <option>Zoom</option>
            <option>Microsoft Teams</option>
            <option>Google Meet</option>
          </select>
          <textarea rows="3" placeholder="Agenda (optional)" className={field} />
          <button type="button" className="w-full rounded-md bg-amber-500 py-3 font-semibold text-slate-900 hover:bg-amber-400">
            Schedule
          </button>
        </form>
      </Modal>

      
      <Modal open={showUpload} title="Upload Transcript" onClose={() => setShowUpload(false)}>
        <TranscriptUpload />
      </Modal>
    </div>
  );
}

export default Meetings;