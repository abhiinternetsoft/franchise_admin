import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardLayout from "layout/Dashboard";
import UserLayout from "layout/User";

const RoleBasedLayout = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    console.log("Role from localStorage:", storedRole);
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  if (!role) return <div>Loading...</div>;

  return role === "franchisor" ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};

export default RoleBasedLayout;
