import { Dispatch, SetStateAction } from "react";

export interface AuthModeStateProps {
  isSignUp: boolean;
  setIsSignUp: Dispatch<SetStateAction<boolean>>;
}