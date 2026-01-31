import { Navigate, Outlet } from "react-router-dom";
import { useLockStore } from "../../store/useLockStore";

export const ProtectedRoute = () => {
    const isLocked = useLockStore((state) => state.isLocked);

    if (isLocked) {
        return <Navigate to="/lock" replace />;
    }

    return <Outlet />;
};
