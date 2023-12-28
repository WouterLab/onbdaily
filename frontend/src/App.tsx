import { useEffect, useState } from "react";
import { Home } from "#pages/Home";
import { ThemeContext } from "#contexts/themeContext";
import { Route, Routes } from "react-router";
import { Login } from "#pages/Login";
import { Reg } from "#pages/Reg";
import { Page404 } from "#pages/Page404";
import axios from "#services/axios";
import { Loading } from "#pages/Loading";

export function App() {
  const [theme] = useState("light");
  const [userLogged, setUserLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) setUserLogged(true);
      })
      .catch((err) => {
        console.log(err);
        setUserLogged(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <Routes>
        {isLoading ? (
          <Route path='/' element={<Loading />} />
        ) : userLogged ? (
          <Route path='/' element={<Home />} />
        ) : (
          <>
            <Route path='/' element={<Login setLogin={setUserLogged} />} />
            <Route path='/reg' element={<Reg />} />
          </>
        )}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </ThemeContext.Provider>
  );
}
