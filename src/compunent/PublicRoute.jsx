// import { Navigate, useLocation } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import { useContext } from "react";

// const PublicRoute = ({ children }) => {
//   const { currentUser } = useContext(UserContext);
//   const location = useLocation();

//   if (currentUser) {
//     // Nếu đã đăng nhập, chuyển hướng về trang trước đó hoặc trang chủ
//     return <Navigate to={location.state?.from?.pathname || "/"} replace />;
//   }

//   return children;
// };

// export default PublicRoute;
