import { createContext, useContext } from "react";
import type { Session } from "@supabase/supabase-js";

export const AuthContext = createContext<Session | null | undefined>(undefined);

export const useAuthContext = () => {
  const session = useContext(AuthContext);
  if (session === undefined) {
    throw new Error(
      "useAuthContext must be used within an AuthContext.Provider",
    );
  }
  return session;
};
