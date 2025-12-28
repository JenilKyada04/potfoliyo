import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `group relative block px-5 py-3 rounded-xl transition-all duration-300 ease-out
    ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        aria-label="Open menu"
        className="fixed top-4 left-4 z-50 md:hidden 
        bg-gradient-to-r from-indigo-500 to-blue-500 
        text-white p-3 rounded-xl shadow-lg
        active:scale-95 transition"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm
        transition-opacity duration-300 md:hidden
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72
        bg-gradient-to-b from-[#0b1220] to-[#030712]
        p-6 shadow-2xl backdrop-blur-xl
        transform transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]
        ${
          open
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }
        md:translate-x-0 md:opacity-100`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/">
          <h2 className="text-3xl font-extrabold tracking-wide text-white">
            Jenil
          </h2></Link>

          <button
            aria-label="Close menu"
            className="md:hidden text-gray-300 hover:text-white text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-3">
          {[
            { to: "/", label: "Home", end: true },
            { to: "/Assignments", label: "Assignments" },
            { to: "/about", label: "About" },
            { to: "/Sociallink", label: "Social Links" },
            { to: "/Game", label: "Game" },
            { to: "/LoginPage", label: "Login" },
          ].map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.end}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <span className="relative z-10">{link.label}</span>

              {/* Hover glow */}
              <span
                className="absolute inset-0 rounded-xl bg-gradient-to-r 
                from-indigo-500 to-blue-500 opacity-0 
                group-hover:opacity-20 transition"
              />
            </NavLink>
          ))}
        </nav>

        {/* Logout Button (Bottom) */}
        <div className="absolute bottom-20 left-6 right-6">
          <NavLink
            to="/logout"
            className="group relative block px-5 py-3 rounded-xl
            bg-red-600/20 text-red-400
            hover:bg-red-500 hover:text-white
            transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            <span className="relative z-10">Logout</span>

            <span
              className="absolute inset-0 rounded-xl bg-red-600
              opacity-0 group-hover:opacity-20 transition"
            />
          </NavLink>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Jenil Kyada
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
