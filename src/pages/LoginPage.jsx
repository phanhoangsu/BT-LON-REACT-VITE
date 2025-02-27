import React from "react";
import { UserProvider } from "../context/UserContext";
import SignIn from "../compunent/SignIn";

const LoginPage = () => {
  return (
    <UserProvider>
      <div>
        <SignIn />
      </div>
    </UserProvider>
  );
};

export default LoginPage;
