import type { AuthMode } from "@/src/_enums/authMode.enum";

export interface AuthFormProps {
  mode: AuthMode;
}

export interface AuthFormState {
  email: string;
  password: string;
  emailError: string | undefined;
  passwordError: string | undefined;
}

export interface AuthFormAction {
  type: string;
  key: string;
  value: string;
}