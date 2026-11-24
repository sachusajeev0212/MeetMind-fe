const field =
  "w-full rounded-md border border-slate-300 px-4 py-2.5 outline-none focus:border-slate-900";

const notifications = [
  "Email me meeting summaries",
  "Remind me before task deadlines",
  "Notify me when I am added to a workspace",
];

function Profile() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="font-serif text-3xl font-bold">My Profile</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
       
        <div className="rounded-xl bg-white p-6 text-center shadow">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 font-serif text-5xl text-amber-400">
            👤
          </div>
          <h2 className="mt-4 font-serif text-xl font-bold">Profile</h2>
          <p className="text-slate-500">No profile details yet</p>
          <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
            <div>
              <p className="font-serif text-xl font-bold">0</p>
              <p className="text-xs text-slate-500">Workspaces</p>
            </div>
            <div>
              <p className="font-serif text-xl font-bold">0</p>
              <p className="text-xs text-slate-500">Meetings</p>
            </div>
            <div>
              <p className="font-serif text-xl font-bold">0</p>
              <p className="text-xs text-slate-500">Tasks</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="font-serif text-xl font-bold">Edit Details</h2>
            <form className="mt-4 grid gap-4 md:grid-cols-2">
              <input type="text" placeholder="Full name" className={field} />
              <input type="email" placeholder="Email" className={field} />
              <input type="text" placeholder="Job title" className={field} />
              <input type="text" placeholder="Phone number" className={field} />
              <button
                type="button"
                className="rounded-md bg-amber-500 py-3 font-semibold text-slate-900 hover:bg-amber-400 md:col-span-2"
              >
                Save Changes
              </button>
            </form>
          </div>

          
          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="font-serif text-xl font-bold">Notifications</h2>
            <div className="mt-4 space-y-3">
              {notifications.map((label) => (
                <label key={label} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
                  <span>{label}</span>
                  <input type="checkbox" className="h-5 w-5 accent-amber-500" />
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;