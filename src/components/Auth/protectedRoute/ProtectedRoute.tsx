import { FC } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
    element: FC;
  }

function ProtectedRoute({element: Component}: IProtectedRoute) {
    if (!sessionStorage.getItem('token')) {
        return <Navigate to={'/login'} replace/>
    }

    return <Component />;
}

export default ProtectedRoute;