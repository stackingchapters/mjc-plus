import { Routes } from "@/src/_enums/routes.enum";
import Link from "next/link";

const LoginFooter = () => {
  return (
    <div className="flex items-center gap-2 text-xs md:text-sm">
      <button
        type="button"
        className="cursor-pointer text-red-600 underline hover:text-red-700"
      >
        Forgot password
      </button>
      <span aria-hidden="true" className="font-light text-gray-500">
        |
      </span>
      <Link
        href={Routes.SIGNUP}
        className="cursor-pointer text-red-600 underline hover:text-red-700"
      >
        Create account
      </Link>
    </div>
  );
};

export default LoginFooter;
