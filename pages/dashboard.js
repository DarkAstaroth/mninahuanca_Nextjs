import React, { useContext, useEffect } from "react";
import HeadPage from "./components/head";
import Loading from "../pages/components/loading";
import { FirebaseContext } from "../firebase";
import { Router, useRouter } from "next/router";
import LockPage from "./lock";
import DashboardContent from "./components/dashboard/dashboardContent";

const Dashboard = () => {
  const { user, firebase } = useContext(FirebaseContext);
  const router = useRouter();

  return (
    <>
      <HeadPage title="Dashboard" />
      {!user ? <LockPage /> : <DashboardContent />}
    </>
  );
};

export default Dashboard;
