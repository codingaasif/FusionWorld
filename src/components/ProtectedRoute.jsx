/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ Component, theme, ...rest }) => {
  const isAuthenticated = true;
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userData");
    if (!loggedInUser) {
      navigate("/");
    }
  });
  return (
    <div>{isAuthenticated ? <Component {...rest} theme={theme} /> : null}</div>
  );
};

export default ProtectedRoute;
