import React from "react";
import { SvgGoogle, SvgMicrosoft } from "@/src/_components/logos";
import ThirdPartyAuthItem from "./ThirdPartyAuthItem";
import { AuthMode } from "@/src/_enums/auth.enum";

interface ThirdPartyAuthProps {
  mode: AuthMode;
}

const ThirdPartyAuth = ({ mode }: ThirdPartyAuthProps) => {
  return (
    <div className="w-full space-y-3">
      <ThirdPartyAuthItem Icon={SvgGoogle}>
        {mode} with Google
      </ThirdPartyAuthItem>
      <ThirdPartyAuthItem Icon={SvgMicrosoft}>
        {mode} with Microsoft
      </ThirdPartyAuthItem>
    </div>
  );
};

export default ThirdPartyAuth;
