import React from "react";
import { Header, Divider, ThirdPartyAuth, AuthForm } from "../_components";
import SvgMjcLogo from "@/src/_components/svgs/MjcLogo";

const Login = () => {
  const MODE = "Login";
  return (
    <div className="flex-col h-full w-full items-center bg-[#f5f4f7]">
      {/* ==== MJC Logo ==== */}
      <SvgMjcLogo className="size-1/10 transform translate-y-1/2" />
      {/* ==== Card ==== */}
      <div className="card w-xs flex-col items-center bg-white sm:w-lg">
        {/* ==== Content ==== */}
        <div className="w-4/5 flex-col items-center gap-3 sm:w-3/5">
          <Header mode={MODE} />
          <ThirdPartyAuth mode={MODE} />
          <Divider />
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
