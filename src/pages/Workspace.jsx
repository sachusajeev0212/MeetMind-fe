function Workspaces() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold">Teams & Workspaces</h1>
          <p className="mt-1 text-slate-500">Manage your teams, members and roles.</p>
        </div>
        <button className="rounded-md bg-amber-500 px-5 py-3 font-semibold text-slate-900 hover:bg-amber-400">
          + Create Workspace
        </button>
      </div>

      <div className="mt-8 rounded-xl bg-white p-10 text-center shadow">
        <h2 className="font-serif text-xl font-bold">No workspaces yet</h2>
        <p className="mt-2 text-slate-500">Create a workspace to organize your meetings and members.</p>
      </div>

      
      <div className="mt-10 rounded-xl bg-white p-6 shadow">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-serif text-xl font-bold">Workspace Members</h2>
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">
            + Invite Member
          </button>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className=" w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 text-sm text-slate-500">
                <th className="px-3 py-3">Name</th>
                <th className="px-3 py-3">Email</th>
                <th className="px-3 py-3">Role</th>
                <th className="px-3 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td colSpan="4" className="px-3 py-8 text-center text-slate-500">
                  No members to display.
                </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Workspaces;