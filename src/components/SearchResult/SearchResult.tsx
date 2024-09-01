import { BackToTop } from "../BackToTop";
import { Container } from "react-bootstrap";
import { CardList } from "../CardList";

import { ISearchState } from "../../store/slices/searchSlice.ts";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IFilm } from "../../models/models.ts";
import { addFavorites, removeFavorites } from "../../store/slices/favoritesSlice.ts";

export const SearchResult = (props: ISearchState) => {
  const { films } = props;
  const { filmsFavorites } = useAppSelector((state) => state.favorites);

  const dispatch = useAppDispatch();
  const handleFavorite = (film: IFilm) => {
    if (filmsFavorites.some((item) => item.imdbID === film.imdbID)) {
      dispatch(removeFavorites(film));
    } else {
      dispatch(addFavorites(film));
    }
  };

  return (
    <>
      <Container>
        <CardList films={films} handleFavorite={handleFavorite} />
      </Container>

      <BackToTop />
    </>
  );
};
