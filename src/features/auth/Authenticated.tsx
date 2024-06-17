import { Navigate } from "react-router-dom";
import { getAccessToken } from "../../utils/local-storage";

export default function Authenticated({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!getAccessToken()) {
    return <Navigate to="/welcome" />;
  }
  return children;
}
