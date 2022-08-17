import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  api,
  loginEadSession,
  getDisciplinas,
  getAllTheme,
  getEducator,
  updateStatus,
} from "../services/api";
import { sendMessage } from "../services/mail";

export const AuthEadContext = createContext();

export const AuthEadProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const response = await loginEadSession(email, password);

    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser);
    navigate("/ead/dashboard");
  };

  const logout = () => {
    setUser(null);
    navigate("/ead");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
  };

  const disciplinas = async () => {
    return getDisciplinas();
  };

  const themes = async (id_theme) => {
    return getAllTheme(id_theme);
  };

  const listEducator = async (id_educator) => {
    return getEducator(id_educator);
  };

  const updatetStatusTheme = async (status, id_theme) => {
    return updateStatus(status, id_theme);
  };

  const sendMessageContext = async (name, email, message) => {
    return await sendMessage(name, email, message)
  }

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (
      recoveredUser &&
      token &&
      JSON.parse(recoveredUser).permission === "aluno"
    ) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  return (
    <AuthEadContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        login,
        logout,
        disciplinas,
        themes,
        listEducator,
        updatetStatusTheme,
        sendMessageContext
      }}
    >
      {children}
    </AuthEadContext.Provider>
  );
};
