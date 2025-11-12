import { createContext, useContext } from "react";
import type { AuthModeStateProps } from "../_types/AuthModeStateProps";

export const AuthModeContext = createContext<AuthModeStateProps | undefined>(
  undefined,
);

export const useAuthModeContext = () => {
  const session = useContext(AuthModeContext);
  if (session === undefined) {
    throw new Error(
      "useAuthModeContext must be used within an AuthSessionContext.Provider",
    );
  }
  return session;
};
