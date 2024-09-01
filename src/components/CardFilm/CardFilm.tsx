import { IFilm } from "../../models/models.ts";

import favoriteOff from "../../assets/icons/icons8-heart-32.png";
import favoriteOn from "../../assets/icons/icons8-сердечко-с-заливкой-32.png";

import { Link } from "react-router-dom";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useAppSelector } from "../../hooks";
import classes from "./cardFilm.module.scss";

export const CardFilm = (props: IFilm) => {
  const { Title, Year, Type, Poster, imdbID, onclick } = props;
  const { filmsFavorites } = useAppSelector((state) => state.favorites);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body className={"d-flex flex-column align-items-center justify-content-between"}>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          {Year} | {Type}
        </Card.Text>
        <CardGroup className={"gap-2"}>
          <Link to={"/" + imdbID}>
            <Button variant="info">About</Button>
          </Link>
          <div className={classes["btn__favorite"]} onClick={onclick}>
            {filmsFavorites.some((item) => item.imdbID === imdbID) ? (
              <img src={favoriteOn} alt="on" />
            ) : (
              <img src={favoriteOff} alt="off" />
            )}
          </div>
        </CardGroup>
      </Card.Body>
    </Card>
  );
};
