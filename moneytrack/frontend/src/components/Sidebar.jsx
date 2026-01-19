import {
  ArrowLeftRight,
  BookText,
  ChevronLeft,
  Crosshair,
  LayoutDashboard,
  ShoppingBag,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../config/routes";

export function Sidebar({ collapsed, setCollapsed }) {
  const itemList = {
    Dashboard: <LayoutDashboard className="w-4 h-4" />,
    Transactions: <ArrowLeftRight className="w-4 h-4" />,
    Budgets: <ShoppingBag className="w-4 h-4" />,
    Targets: <Crosshair className="w-4 h-4" />,
    Reports: <BookText className="w-4 h-4" />,
  };

  return (
    <aside
      className={`bg-slate-800 text-white transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div
        className={`flex items-center p-4 border-b border-slate-700 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed && <span className="font-semibold">Finance Flow</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          <ChevronLeft
            className={`transition-transform ${
              collapsed ? "rotate-180" : ""
            } cursor-pointer`}
          />
        </button>
      </div>

      <nav className="p-2 space-y-2">
        {ROUTES.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded transition
               hover:bg-slate-700
               ${collapsed ? "justify-center p-3" : "gap-3 px-3 py-2"}
               ${isActive ? "bg-slate-700 font-medium" : ""}`
            }
          >
            {itemList[item.label]}
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
