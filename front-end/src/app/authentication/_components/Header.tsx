import React from "react";
import type { AuthMode } from "../types";

const Header = ({ mode }: AuthMode) => {
  return <h2 className="text-2xl font-bold mt-8 mb-3">{mode}</h2>;
};

export default Header;
