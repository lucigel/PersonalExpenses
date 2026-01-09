import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";


function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
      <div className="flex-1">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
