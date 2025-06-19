"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import Loading from "@/components/ui/Loading";
import Login from "@/components/sections/Login";

export default function Dashboard() {
  const { currentUser, userDataObj, loading } = useAuth();

  useEffect(() => {
    if (!currentUser || !userDataObj) {
      return;
    }
  }, [currentUser, userDataObj]);

  if (loading) {
    return <Loading />;
  }

  if (!currentUser) {
    return <Login />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Dashboard</h1>
    </div>
  );
}
