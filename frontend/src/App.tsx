import { useState } from "react";
import { Home } from "#pages/Home";
import { ThemeContext } from "#contexts/themeContext";
import { Route, Routes } from "react-router";
import { Login } from "#pages/Login";
import { Reg } from "#pages/Reg";
import { Page404 } from "#pages/Page404";

export function App() {
  const [theme, setTheme] = useState("light");
  const [userLogged, setUserLogged] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeTheme = () => {
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Routes>
        {userLogged ? (
          <Route path='/' element={<Home />} />
        ) : (
          <>
            <Route path='/' element={<Login />} />
            <Route path='/reg' element={<Reg />} />
          </>
        )}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </ThemeContext.Provider>
  );
}
