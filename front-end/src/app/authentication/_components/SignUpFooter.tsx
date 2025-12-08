import { Routes } from "@/src/_enums/routes.enum";
import Link from "next/link";

const SignUpFooter = () => {
  return (
    <div className="text-sm text-gray-500">
      Already have an account?{" "}
      <Link
        href={Routes.LOGIN}
        className="cursor-pointer text-red-600 underline hover:text-red-700"
      >
        Login
      </Link>
    </div>
  );
};
export default SignUpFooter;
