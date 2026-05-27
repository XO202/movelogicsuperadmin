import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

function DashboardLayout({
  children,
  active,
}) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false); 

  return (
    <div className="dashboard-layout">
      <Sidebar
        active={active}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="dashboard-content">
        <Header
          setSidebarOpen={setSidebarOpen}
        />

        <main className="dashboard-main">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;