import { LoginForm, SignupForm } from "wasp/client/auth";
import { Link } from "react-router-dom";
import type { CustomizationOptions } from "wasp/client/auth";

export const authAppearance: CustomizationOptions["appearance"] = {
  colors: {
    brand: "#2EB5FA",
    brandAccent: "#5BC8FF",
    submitButtonText: "white",
  },
};

export function Login() {
  return (
    <Layout>
      <LoginForm appearance={authAppearance} />
      <br />
      <span className="text-sm font-medium text-gray-900">
        Don't have an account yet? <Link to="/signup">go to signup</Link>.
      </span>
    </Layout>
  );
}

export function Signup() {
  return (
    <Layout>
      <SignupForm appearance={authAppearance} />
      <br />
      <span className="text-sm font-medium text-gray-900">
        I already have an account (<Link to="/login">go to login</Link>).
      </span>
    </Layout>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-white">
      <div className="min-w-full min-h-[75vh] flex items-center justify-center">
        <div className="w-full h-full max-w-sm p-5 bg-white">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
