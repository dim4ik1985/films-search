import { NavItem } from "../NavItem";
import "./navBar.scss";
import { useAppSelector } from "../../hooks";

interface INavBarProps {
  handleClick: () => void;
  isMenuOpen: boolean;
}

export const NavBar = (props: INavBarProps) => {
  const navItems = [
    { title: "Search", path: "/films-search" },
    { title: "Favorites", path: "/favorites" }
  ];

  const { filmsFavorites } = useAppSelector((state) => state.favorites);

  const { handleClick, isMenuOpen } = props;

  return (
    <div className={"nav"}>
      <div className={"nav__container"}>
        <div className={"nav__wrapper"}>
          <div className={"nav__logo"}>Filmoteka</div>
          <div
            className={isMenuOpen ? "burger__menu burger__menu-active" : "burger__menu"}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={isMenuOpen ? "nav__list nav__list-active" : "nav__list"}>
            {navItems.map((item) => (
              <NavItem
                key={item.title}
                title={item.title}
                path={item.path}
                favorites={filmsFavorites.length}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
