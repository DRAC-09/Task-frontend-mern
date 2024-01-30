/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = (prop) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      // console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
      setLoading(false);
      Cookies.set("token", res.data.token);
      Cookies.set("username", res.data.username);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      // console.log(res.data.token);
      setUser(res.data);
      setIsAuthenticated(true);
      setLoading(false);
      Cookies.set("token", res.data.token);
      Cookies.set("username", res.data.username);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      // Si no hay Token
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(true);
        return setUser(null);
      }
      setIsAuthenticated(true);
      setLoading(false);
    }
    checkLogin();
  });

  // useEffect(() => {
  //   async function checkLogin() {
  //     const cookies = Cookies.get();
  //     // Si no hay Token
  //     if (!cookies.token) {
  //       setIsAuthenticated(false);
  //       setLoading(false);
  //       return setUser(null);
  //     }
  //     // Si hay Token
  //     try {
  //       // lo envia al Backend para verificarlo.
  //       const res = await verityTokenRequest(cookies.token);
  //       // Si no retorna datos.
  //       if (!res.data) {
  //         setIsAuthenticated(false);
  //         setLoading(false);
  //         return;
  //       }
  //       // Pero, si retorna datos.
  //       setIsAuthenticated(true);
  //       setUser(res.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setIsAuthenticated(false);
  //       setUser(null);
  //       setLoading(false);
  //     }
  //   }
  //   checkLogin();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        logout,
        loading,
        user,
        isAuthenticated,
        errors,
      }}
    >
      {prop.children}
    </AuthContext.Provider>
  );
};
