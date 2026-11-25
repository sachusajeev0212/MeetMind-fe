import { Link, NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Workspaces", to: "/workspaces" },
  { label: "Meetings", to: "/meetings" },
  { label: "Tasks", to: "/tasks" },
  { label: "Profile", to: "/profile" },
];

function Headers() {
  return (
    <header className="sticky top-0 z-40 shadow-lg shadow-slate-900/10">
      <div className="border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}favicon.svg`}
              alt=""
              className="h-11 w-11 rounded-xl shadow-md shadow-slate-900/20"
            />
            <span className="font-serif text-2xl font-bold tracking-wide text-slate-900">
              MEETMIND
            </span>
          </Link>

          <p className="hidden font-serif text-sm italic tracking-wide text-slate-600 lg:block">
            Meeting notes, made simple
          </p>

          <Link
            to="/auth"
            className="rounded-full border-2 border-slate-800 px-5 py-2 font-semibold text-slate-800 transition hover:border-amber-500 hover:bg-amber-500 hover:text-slate-950"
          >
            👤 Login
          </Link>
        </div>
      </div>

      
      <nav className="border-t border-white/10 bg-slate-900">
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 py-3">
          {links.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${
                    isActive
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-black/20"
                      : "text-white/90 hover:bg-white/10 hover:text-amber-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Headers;