import { Routes, Route, BrowserRouter } from "react-router-dom";

import Sidebar from './componet/Sidebar'
import Home from "./componet/Home";
import About from "./componet/About";
import Assignments from "./componet/Assignments";
import ProtectedRoute from "./componet/ProtectedRoute";
import LoginPage from "./componet/LoginPage";
import Sociallink from "./componet/Sociallink";
import Game from "./componet/Game";
import LogoutButton from "./componet/Logout";

export default function App() {
  return (

    <BrowserRouter>
      <div className="flex min-h-screen bg-[#030712] text-white">
        <Sidebar />

        <main className="flex-1 md:ml-64">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
{/* hh */}
            <Route
              path="/assignments"
              element={
                <ProtectedRoute>
                  <Assignments />
                </ProtectedRoute>
              }
            />
            <Route path="/Game" element={<Game />} />
            <Route path="/Sociallink" element={<Sociallink />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/Logout" element={<LogoutButton />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
