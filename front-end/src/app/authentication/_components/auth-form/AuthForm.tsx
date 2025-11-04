"use client";
import { useState } from "react";
import Button from "@/src/_components/Button";
import Input from "@/src/_components/Input";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
  };
  return (
    <form className="w-full space-y-2">
      {/* ==== Email ==== */}
      <Input label="Email" type="text" onChange={handleEmailChange} />

      {/* ==== Password ==== */}
      <Input label="Password" type="text" onChange={handlePasswordChange} />

      {/* ==== Button ==== */}
      <Button className="mt-3 w-full bg-black py-3 text-white" type="submit">
        Login
      </Button>
    </form>
  );
};

export default AuthForm;
