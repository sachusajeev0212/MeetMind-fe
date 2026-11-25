
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Workspaces from "./pages/Workspace";
import Meetings from "./pages/Meetings";
import MeetingDetails from "./pages/MeetingDetails";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import PNF from "./pages/PNF";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Headers />

      <main className="app-main flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/meetings/details" element={<MeetingDetails />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
