import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import { Search } from "./pages/Search";
import { Favorites } from "./pages/Favorites";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { About } from "./pages/About";

import "./app.scss";

import { useEffect, useState } from "react";

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleBodyClick = (event: MouseEvent) => {
      if (
        !(event.target as Element)?.closest(".burger__menu") &&
        !(event.target as Element)?.closest(".nav__list-active")
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("click", handleBodyClick);

    return () => {
      window.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <>
      <header>
        <NavBar handleClick={handleClick} isMenuOpen={isMenuOpen} />
      </header>

      <main>
        <Routes>
          <Route path={"/films-search"} element={<Search />} />
          <Route path={"/favorites"} element={<Favorites />} />
          <Route path={"/:id"} element={<About />} />
        </Routes>
      </main>
    </>
  );
};
