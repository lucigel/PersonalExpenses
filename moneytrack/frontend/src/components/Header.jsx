import { Menu, LogOut, Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header({ onMenuClick }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-14 bg-white shadow flex items-center px-4 justify-between">
      <button className="md:hidden" onClick={onMenuClick}>
        <Menu />
      </button>

      <h1 className="font-medium">Dashboard</h1>

      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full overflow-hidden border border-slate-300 cursor-pointer"
        >
          <img
            src=""
            alt="User"
            className="w-full h-full object-cover"
          />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow">
            <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-100 text-sm">
              <Settings size={16} />
              Settings
            </button>
            <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-100 text-sm text-red-600">
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
