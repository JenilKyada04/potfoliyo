import { useEffect, useRef, useState } from "react";
import { Bell, CheckCircle2 } from "lucide-react";

const NotificationPanel = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const notifications = [
    { id: 6, text: ".NET Practical Assignment (new)" },
    { id: 5, text: "Java Practical Assignment (new)" },
    { id: 1, text: ".NET Assignment (new)" },
    { id: 2, text: "WD2 Assignment (new)" },
    { id: 3, text: "Java Assignment (new)" },
    { id: 4, text: "IoT Assignment " },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-3 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
      >
        <Bell className="w-5 h-5 text-indigo-400" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      </button>

      {open && (
        <div className="absolute -right-20  mt-4 w-80 rounded-2xl bg-liner-to-b from-[#0b1224] to-[#050814] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden animate-fadeIn">
          <div className="px-4 py-3 flex items-center justify-between border-b border-white/10 bg-white/5">
            <p className="text-sm font-semibold text-white">
              Notifications
            </p>
            <button className="text-xs text-indigo-400 hover:underline">
              Mark all read
            </button>
          </div>

          <ul className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
            {notifications.map((item) => (
              <li
                key={item.id}
                className="group px-4 py-3 flex items-start gap-3 transition cursor-pointer hover:bg-white/10"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                </div>

                <div className="flex-1">
                  <p className="text-sm text-gray-200 group-hover:text-white">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="px-4 py-3 text-center border-t border-white/10 bg-white/5">
            <button className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
              View all notifications →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;
