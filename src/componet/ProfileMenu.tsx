import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

const ProfileMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-full
        bg-white/5 border border-white/10 hover:border-indigo-400
        hover:bg-white/10 transition"
      >
        <div className="w-8 h-8 rounded-full bg-linear-to-tr from-indigo-500 via-purple-500 to-yellow-400 p-0.5 ">
          <div className="w-full h-full rounded-full bg-[#020617]
          flex items-center justify-center font-bold text-sm">
            J
          </div>
        </div>

        <span className="hidden md:block text-sm text-gray-200">
          Jenil
        </span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-3 w-56 rounded-xl
          bg-[#0a0f1c] border border-white/10 shadow-2xl
          transition-all duration-200 origin-top-right"
        >
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-sm font-semibold">Jenil Kyada</p>
            <p className="text-xs text-gray-400">Developer</p>
          </div>

          <ul className="py-2 text-sm">
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-white/5 transition"
              >
                👤 My Profile
              </Link>
            </li>

            <li>
              <Link
                to="/Assignments"
                className="block px-4 py-2 hover:bg-white/5 transition"
              >
                📂 My Work
              </Link>
            </li>

            <li>
              <Link
                to="/Sociallink"
                className="block px-4 py-2 hover:bg-white/5 transition"
              >
                🌐 Social Links
              </Link>
            </li>

            <li>
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-white/5 transition"
              >
                ⚙️ Settings
              </Link>
            </li>
          </ul>

          <div className="border-t border-white/10">
            <Link
              to="/LoginPage"
              className="block px-4 py-2 text-red-400 hover:bg-red-500/10 transition"
            >
              🚪 Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileMenu
