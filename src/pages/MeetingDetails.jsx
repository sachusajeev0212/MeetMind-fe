import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import SummaryPanel from "../components/SummaryPanel";
import TranscriptUpload from "../components/TranscriptUpload";

function MeetingDetails() {
  const [showShare, setShowShare] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <Link to="/meetings" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
        ← Back to meetings
      </Link>

      <div className="mt-4 rounded-xl bg-slate-900 p-6 text-white">
        <h1 className="font-serif text-3xl font-bold">Meeting Details</h1>
        <p className="mt-2 text-slate-300">No meeting selected</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SummaryPanel />
        </div>

        <div className="space-y-6">
          
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="font-serif text-xl font-bold">Attendees</h2>
            <div className="mt-4 text-sm text-slate-500">
              Attendees will appear here when a meeting is added.
            </div>
          </div>

         
          <div className="rounded-xl bg-white p-6 shadow">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-serif text-xl font-bold">Transcript</h2>
              <button
                type="button"
                onClick={() => setShowShare(true)}
                className="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Share Transcript
              </button>
            </div>
            <div className="mt-4 text-sm text-slate-500">
              No transcript has been added.
            </div>
          </div>

         
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="mb-4 font-serif text-xl font-bold">Replace transcript</h2>
            <TranscriptUpload />
          </div>
        </div>
      </div>

      <Modal
        open={showShare}
        title="Share Transcript"
        onClose={() => setShowShare(false)}
      >
        <div className="space-y-5">
          <p className="text-sm leading-6 text-slate-600">
            Share the transcript with workspace members or add external recipients by email.
          </p>

          <div>
            <h3 className="font-semibold text-slate-900">Workspace members</h3>
            <div className="mt-2 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">
              No workspace members are available yet.
            </div>
          </div>

          <div>
            <label htmlFor="transcript-recipients" className="font-semibold text-slate-900">
              Other recipients
            </label>
            <input
              id="transcript-recipients"
              type="text"
              placeholder="Enter email addresses, separated by commas"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
            />
          </div>

          <div>
            <label htmlFor="transcript-message" className="font-semibold text-slate-900">
              Message (optional)
            </label>
            <textarea
              id="transcript-message"
              rows="3"
              placeholder="Add a note for the recipients"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
            />
          </div>

          <p className="text-xs text-slate-500">
            Frontend preview only. Sharing and email delivery are not connected.
          </p>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowShare(false)}
              className="rounded-md border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="button"
              className="rounded-md bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
            >
              Share Transcript
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MeetingDetails;