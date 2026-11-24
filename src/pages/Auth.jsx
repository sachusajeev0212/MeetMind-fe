import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const input =
    "w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-slate-900";

  return (
    <div className="flex items-center justify-center bg-slate-100 px-4 py-16">
      <div className="grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">
        <div className="hidden flex-col justify-center bg-slate-900 p-10 text-white md:flex">
          <span className="text-5xl">🎙️</span>
          <h2 className="mt-4 font-serif text-3xl font-bold">Welcome to MeetMind</h2>
          <p className="mt-3 leading-7 text-slate-300">
            Summaries, action items and task tracking for every meeting, all in one place.
          </p>
          <ul className="mt-6 space-y-2 text-amber-400">
            <li>✔ Role-based access</li>
            <li>✔ Local AI summaries (planned)</li>
            <li>✔ Kanban task tracking</li>
          </ul>
        </div>

        
        <div className="p-8 md:p-10">
          <div className="mb-6 flex rounded-md bg-slate-100 p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 rounded py-2 font-semibold ${isLogin ? "bg-white shadow" : "text-slate-500"}`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 rounded py-2 font-semibold ${!isLogin ? "bg-white shadow" : "text-slate-500"}`}
            >
              Register
            </button>
          </div>

          <h2 className="font-serif text-2xl font-bold">{isLogin ? "Welcome back" : "Create your account"}</h2>

          <form className="mt-6 space-y-4">
            {!isLogin && <input type="text" placeholder="Full name" className={input} />}
            <input type="email" placeholder="Email address" className={input} />
            <input type="password" placeholder="Password" className={input} />
            {!isLogin && (
              <select className={input}>
                <option value="">Select a role</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Member</option>
              </select>
            )}
            <button
              type="button"
              className="w-full rounded-md bg-amber-500 py-3 font-semibold text-slate-900 hover:bg-amber-400"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          {isLogin && (
            <p className="mt-4 text-center text-sm text-slate-500">Forgot your password?</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;