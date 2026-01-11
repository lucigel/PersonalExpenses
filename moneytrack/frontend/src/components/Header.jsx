import { Menu, LogOut, Settings } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../config/routes";

export function Header({ onMenuClick }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { logout } = useAuth();
  const location = useLocation();

  const pageTitle = useMemo(() => {
    const match = ROUTES.find((route) => route.path === location.pathname);
    return match?.label || "Dashboard";
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
  };
  return (
    <header className="h-14 bg-white shadow flex items-center px-4 justify-between">
      <button className="md:hidden" onClick={onMenuClick}>
        <Menu />
      </button>

      <h1 className="font-medium">{pageTitle}</h1>

      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full overflow-hidden border border-slate-300 cursor-pointer"
        >
          <img src="" alt="User" className="w-full h-full object-cover" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow">
            <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-100 text-sm">
              <Settings size={16} />
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-100 text-sm text-red-600 cursor-pointer"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
