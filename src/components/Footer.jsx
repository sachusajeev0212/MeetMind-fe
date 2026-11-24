function Footer() {
  return (
    <footer>
      <div className="bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold uppercase tracking-wide text-amber-300">
              About Us
            </h3>
            <p className="mt-4 text-lg text-justify text-slate-300">
              MeetMind is designed around exported transcripts and a free-first
              workflow. The planned backend can run an open-source AI model locally,
              without relying on paid Zoom or AI API integrations.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold uppercase tracking-wide text-amber-300">
              Free-first by design
            </h3>
            <p className="mt-4 text-lg text-slate-300">
              Export transcripts from your meeting app and upload them yourself.
              No paid Zoom connection or per-summary AI API is planned.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold uppercase tracking-wide text-amber-300">
              Follow Us
            </h3>
            <p className="mt-4 text-slate-300">Let us be social</p>
            <div className="mt-4 flex gap-3">
              {["in", "X", "f"].map((s) => (
                <span
                  key={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 font-semibold transition hover:border-amber-400 hover:text-amber-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 py-3 text-center text-sm text-slate-300">
        Copyright © 2026 All rights reserved
      </div>
    </footer>
  );
}

export default Footer;