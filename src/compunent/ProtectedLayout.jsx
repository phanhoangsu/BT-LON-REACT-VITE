// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
// import { Navigate, Outlet, useLocation } from "react-router-dom";

// const ProtectedLayout = () => {
//   const { currentUser } = useContext(UserContext);
//   const location = useLocation();

//   if (!currentUser) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedLayout;
