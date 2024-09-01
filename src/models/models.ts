export interface IFilm {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  onclick?: () => void;
}

export interface IAboutFilm {
  Poster: string;
  Title: string;
  Year: string;
  Genre: string;
  Runtime: string;
  Director: string;
  Actors: string;
  imdbRating: string;
  Rated: string;
  Plot: string;
}
