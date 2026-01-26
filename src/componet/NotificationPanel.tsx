import { useEffect, useRef, useState } from "react"
import { Bell, CheckCircle2 } from "lucide-react"

const NotificationPanel = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const notifications = [
    { id: 6, text: ".NET Practical Assignment (new)" },
    { id: 5, text: "Java Practical Assignment (new)" },
    { id: 1, text: ".NET Assignment (new)" },
    { id: 2, text: "WD2 Assignment (new)" },
    { id: 3, text: "Java Assignment (new)" },
    { id: 4, text: "IoT Assignment" },
  ]

  return (
    <div ref={ref} className="relative">
      {/* Bell Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          relative p-3 rounded-full
          bg-white/5 backdrop-blur-md
          hover:bg-white/10
          transition-all duration-300
        "
      >
        <Bell className="w-5 h-5 text-indigo-400" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      </button>

      {/* Panel */}
      {open && (
        <div
          className="
           absolute left-1/2 -translate-x-1/2 mt-4 w-65
            rounded-2xl
            border border-white/10
            shadow-[0_30px_80px_rgba(0,0,0,0.7)]
           bg-black
            bg-linear-to-b from-[#0b1224]/80 to-[#050814]/80
            overflow-hidden
            animate-fadeIn
          "
        >
          {/* Glow */}
          <div className="
            absolute inset-0
            bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10
            opacity-40
            pointer-events-none
          " />

          {/* Header */}
          <div className="relative z-10 px-4 py-3 flex items-center justify-between border-b border-white/10 bg-white/5">
            <p className="text-sm font-semibold text-white">
              Notifications
            </p>
            <button className="text-xs text-indigo-400 hover:underline">
              Mark all read
            </button>
          </div>

          {/* List */}
          <ul className="relative z-10 max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
            {notifications.map((item) => (
              <li
                key={item.id}
                className="
                  group px-4 py-3
                  flex items-start gap-3
                  cursor-pointer
                  transition
                  hover:bg-white/10
                "
              >
                <CheckCircle2 className="w-4 h-4 mt-1 text-indigo-400" />
                <p className="text-sm text-gray-300 group-hover:text-white">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="relative z-10 px-4 py-3 text-center border-t border-white/10 bg-white/5">
            <button className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
              View all notifications →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NotificationPanel
