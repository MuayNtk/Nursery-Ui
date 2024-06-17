import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({
  children,
}: {
  children: ReactNode;
}) {
  const auth = useAuth();

  // Asserting that auth won't be null
  if (auth && auth.authUser) {
    return <Navigate to="/" />;
  }
  return children;
}
