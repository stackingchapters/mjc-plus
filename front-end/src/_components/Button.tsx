import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, ...props }: ButtonProps) => {
  const base = "rounded-md font-semibold";

  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
