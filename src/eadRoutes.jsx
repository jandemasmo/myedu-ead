import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Login } from "./pages/Login/Login";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Disciplina } from "./pages/Disciplina/Disciplina";
import { Website } from "./pages/Website/Website";
import { AuthEadProvider, AuthEadContext } from "./contexts/authEad";

const eadRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthEadContext);

    if (loading) {
      return <div>Carregando...</div>;
    }

    if (!authenticated) {
      console.log(authenticated);
      return <Navigate to="/ead" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <AuthEadProvider>
        <Routes>
          <Route path="/" element={<Website />}></Route>
          <Route path="/ead" element={<Login />}></Route>
          <Route
            path="/ead/dashboard"
            element={
              <Private>
                {" "}
                <Dashboard />{" "}
              </Private>
            }
          ></Route>
          <Route
            path="/ead/disciplina/:id"
            element={
              <Private>
                {" "}
                <Disciplina />{" "}
              </Private>
            }
          ></Route>
        </Routes>
      </AuthEadProvider>
    </BrowserRouter>
  );
};

export default eadRoutes;
