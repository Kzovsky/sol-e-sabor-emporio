import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    // redireciona para login guardando pag anterior
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
