import { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";

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
        { id: 1, text: "WD2 Assignment (new)" },
        { id: 2, text: "Java Assignment (new)" },
        { id: 3, text: "Iot Assignment" },
    ];

    return (
        <div ref={ref} className="relative">
            {/* Bell Button */}
            <button
                onClick={() => setOpen(!open)}
                className="relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
                <Bell className="w-5 h-5 text-indigo-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-4 w-80 rounded-xl bg-[#0a0f1c] border border-white/10 shadow-2xl overflow-hidden animate-fadeIn">
                    <div className="px-4 py-3 border-b border-white/10">
                        <p className="text-sm font-semibold text-white">
                            Notifications
                        </p>
                    </div>

                    <ul className="max-h-72 overflow-y-auto">
                        {notifications.map((item) => (
                            <li
                                key={item.id}
                                className="px-4 py-3 text-sm text-gray-300 hover:bg-white/5 transition cursor-pointer"
                            >
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="px-4 py-3 text-center border-t border-white/10">
                        <button className="text-xs text-indigo-400 hover:underline">
                            View all
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};


export default NotificationPanel;
