"use client";

import Home from "./home/page";
import { AuthSessionContext } from "../_contexts/AuthSessionContext";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase-client";
import { useEffect, useState } from "react";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession();
    setSession(currentSession.data.session);
  };

  useEffect(() => {
    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => setSession(session),
    );

    return () => authListener.subscription.unsubscribe();
  }, []);
  return (
    <div className="h-full">
      <AuthSessionContext.Provider value={session}>
        <Home />
      </AuthSessionContext.Provider>
    </div>
  );
}
