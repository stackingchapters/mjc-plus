import React from "react";

interface FooterProps {
  isSignUp: boolean;
}

const Footer = ({ isSignUp }: FooterProps) => {
  if (isSignUp)
    return (
      <ul className="flex items-center gap-2">
        <li className="flex items-center gap-2">
          <a className="text-xs text-red-600 underline md:text-sm">
            Forgot password
          </a>
        </li>
        <span className="font-light text-gray-400">|</span>
        <li className="flex items-center gap-2">
          <a className="text-xs text-red-600 underline md:text-sm">
            Create account
          </a>
        </li>
      </ul>
    );
  return (
    <div className="text-sm text-gray-500">
      Already have an account? <a className="text-red-600 underline">Login</a>
    </div>
  );
};

export default Footer;
