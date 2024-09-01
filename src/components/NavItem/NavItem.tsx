import { NavLink } from "react-router-dom";
import "./navItem.scss";
import { Badge } from "react-bootstrap";

interface INavItemProps {
  title: string;
  path: string;
  favorites: number;
}

export const NavItem = (props: INavItemProps) => {
  const { title, path, favorites } = props;

  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "menu__item menu__item-active" : "menu__item";

  return (
    <NavLink to={path} className={active}>
      {title == "Favorites" ? (
        <span className={"position-relative d-flex align-items-center gap-2"}>
          {title}

          <Badge style={{ fontSize: "10px" }} bg="danger">
            {favorites}
          </Badge>
        </span>
      ) : (
        title
      )}
    </NavLink>
  );
};
