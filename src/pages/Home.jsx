import { Link } from "react-router-dom";
import heroBackground from "../assets/home-background.png";

function Home() {
  return (
    <div>
      
      <section
        className="relative bg-cover bg-center px-6 py-28 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 6, 23, 0.78), rgba(15, 23, 42, 0.76)), url(${heroBackground})`,
        }}
      >
        <h1 className="font-serif text-5xl font-bold md:text-6xl">Meetings That Work For You</h1>
        <p className="mt-4 text-lg text-slate-200">
          Bring a transcript. Get organized notes with a free-first, local-AI approach.
        </p>
        <div className="mx-auto mt-10 flex max-w-xl overflow-hidden rounded-full bg-white shadow-lg">
          <input
            type="text"
            placeholder="Search meetings, tasks, workspaces"
            className="w-full px-6 py-4 text-slate-900 outline-none"
          />
          <button className="bg-amber-500 px-8 font-semibold text-slate-900 hover:bg-amber-400">
            Search
          </button>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center font-serif text-sm uppercase tracking-widest text-slate-500">Features</p>
        <h2 className="mt-1 text-center font-serif text-3xl font-bold">Everything your team needs</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition-colors group-hover:bg-amber-100">🆓</span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">Free-first</span>
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">No paid AI APIs</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">A workflow designed around open-source tools instead of per-summary subscriptions.</p>
          </article>

          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition-colors group-hover:bg-amber-100">👥</span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">Organization</span>
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Teams &amp; workspaces</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Keep meeting notes and follow-ups grouped by team or project.</p>
          </article>

          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition-colors group-hover:bg-amber-100">📄</span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">Bring your own transcript</span>
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Simple transcript upload</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Upload a transcript you exported from Zoom, Teams, or another meeting app.</p>
          </article>

          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition-colors group-hover:bg-amber-100">✨</span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">Planned for the backend</span>
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Local AI summaries</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">The planned backend can run an open-source model on your own machine.</p>
          </article>

          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition-colors group-hover:bg-amber-100">✅</span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">Follow-ups</span>
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Action items</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">See meeting decisions and next steps together in one place.</p>
          </article>

          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition-colors group-hover:bg-amber-100">📤</span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">No email integration</span>
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Share your way</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Keep, copy, or share your notes yourself without a paid email service.</p>
          </article>

          <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-3xl transition-colors group-hover:bg-amber-100">🗂️</span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">Stay organized</span>
            </div>
            <h3 className="mt-6 font-semibold text-slate-900">Kanban task board</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Arrange follow-ups across To Do, In Progress, Review, and Done.</p>
          </article>
        </div>
      </section>

      
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center font-serif text-sm uppercase tracking-widest text-slate-500">How it works</p>
          <h2 className="mt-1 text-center font-serif text-3xl font-bold">Three simple steps</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["1", "Export", "Download a transcript from your meeting app, if available."],
              ["2", "Upload", "Bring the transcript into MeetMind."],
              ["3", "Summarise", "The planned backend can run an open-source model locally."],
            ].map(([n, t, d]) => (
              <div key={n} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 font-serif text-2xl font-bold text-amber-400">
                  {n}
                </span>
                <h3 className="mt-4 font-serif text-xl font-bold">{t}</h3>
                <p className="mt-2 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-center font-serif text-sm uppercase tracking-widest text-slate-500">Your meetings</p>
        <h2 className="mt-1 text-center font-serif text-3xl font-bold">Meeting Summaries</h2>

        <div className="mt-12 rounded-xl bg-white p-10 text-center shadow-lg">
          <p className="font-semibold">No meeting summaries yet</p>
          <p className="mt-2 text-slate-500">Your summaries will appear here after you add a transcript.</p>
        </div>

        <div className="mt-10 text-center">
          <Link to="/meetings" className="inline-block bg-slate-800 px-6 py-3 font-serif text-white hover:bg-slate-700">
            Explore More
          </Link>
        </div>
      </section>

      
      <section className="bg-white px-6 py-20 text-center">
        <p className="font-serif text-sm uppercase tracking-widest text-slate-500">Free-first</p>
        <h2 className="mt-1 font-serif text-3xl font-bold">No Paid AI API Required</h2>
        <div className="mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 font-serif text-4xl text-amber-400">
          0
        </div>
        <p className="mt-3 font-serif">AI API subscriptions</p>
        <p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">
          MeetMind is planned to summarize transcripts with an open-source model running on your own machine.
          You bring the transcript; there is no automatic Zoom connection or per-summary API fee.
        </p>
      </section>
    </div>
  );
}

export default Home;