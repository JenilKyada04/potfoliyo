import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [open]);

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/Assignments", label: "Assignments" },
    { to: "/about", label: "About" },
    { to: "/Sociallink", label: "Social Links" },
    { to: "/Game", label: "Game" },
    { to: "/LoginPage", label: "Login" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `group relative block px-5 py-3 rounded-xl transition-all duration-300 ease-out
    ${isActive 
      ? "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-500/40 scale-[1.02]" 
      : "text-gray-400 hover:bg-white/5 hover:text-white hover:translate-x-1"}`;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden bg-indigo-600 text-white p-3 rounded-xl shadow-lg active:scale-95 transition-transform"
      >
        ☰
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 z-50 h-full w-72 bg-[#0b1220] p-6 shadow-2xl md:hidden flex flex-col overflow-x-hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold text-white">Jenil</h2>
                <button onClick={() => setOpen(false)} className="text-gray-400 text-2xl">✕</button>
              </div>
              
              <nav className="flex flex-col space-y-2 flex-grow overflow-y-auto overflow-x-hidden no-scrollbar">
                {navLinks.map((link, i) => (
                  <motion.div key={link.label} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                    <NavLink to={link.to} end={link.end} className={linkClass} onClick={() => setOpen(false)}>
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="pt-6 border-t border-white/5">
                <NavLink to="/logout" className="block px-5 py-3 rounded-xl bg-red-500/10 text-red-400 text-center hover:bg-red-500 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                  Logout
                </NavLink>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-72 bg-[#0b1220] p-6 flex-col border-r border-white/5 z-30 overflow-x-hidden">
        <div className="mb-10 px-2">
          <Link to="/">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Jenil</h2>
          </Link>
        </div>

        <nav className="flex flex-col space-y-2 flex-grow overflow-y-auto overflow-x-hidden no-scrollbar">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <NavLink
            to="/logout"
            className="group flex items-center justify-center px-5 py-3 rounded-xl
            bg-red-500/10 text-red-400 border border-red-500/10
            hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            <span className="font-semibold">Logout</span>
          </NavLink>
          
          <div className="mt-4 text-center text-[10px] uppercase tracking-widest text-gray-600 font-medium">
            © {new Date().getFullYear()} Jenil Kyada
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;