import { IFilm } from "../../models/models.ts";

import classes from "./cardList.module.scss";

import { CardFilm } from "../CardFilm";

import { CardGroup } from "react-bootstrap";

interface ICardListProps {
  films: IFilm[];
  handleFavorite: (film: IFilm) => void;
}

export const CardList = (props: ICardListProps) => {
  const { films, handleFavorite } = props;

  return (
    <CardGroup bsPrefix={classes["films"]}>
      {films.map((film: IFilm) => (
        <CardFilm key={film.imdbID} {...film} onclick={() => handleFavorite(film)} />
      ))}
    </CardGroup>
  );
};
