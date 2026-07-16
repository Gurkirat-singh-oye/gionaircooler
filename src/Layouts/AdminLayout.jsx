import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { ADMIN_UID } from "../constants";


//made with ai, needs proper approval
function AdminLayout() {
  const [session, setSession] = useState(undefined); // undefined = still checking
  const location = useLocation();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // still checking session on first load — render nothing (or a spinner)
  if (session === undefined) {
    return null;
  }

  const isLoginPage = location.pathname === "/admin/login";
  const isAdmin = session?.user?.id === ADMIN_UID;

  // not logged in, or logged in as someone who isn't you -> force to login
  if (!isAdmin && !isLoginPage) {
    return <Navigate to="/admin/login" replace />;
  }

  // already logged in as you, but sitting on the login page -> skip ahead
  if (isAdmin && isLoginPage) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
}

export default AdminLayout;
